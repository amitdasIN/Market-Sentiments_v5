#!/usr/bin/env python3
"""
THE GOD'S EYE — OBSERVER | Live Python Backend Server (server.py)
Fetches live quotes via yfinance and serves the God's Eye HUD dashboard.
"""

import json
import os
from datetime import datetime, timezone, timedelta
from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse

try:
    import yfinance as yf
    HAS_YFINANCE = True
except ImportError:
    HAS_YFINANCE = False

DATA_FILE = os.path.join(os.path.dirname(__file__), "market_data.json")
IST_OFFSET = timezone(timedelta(hours=5, minutes=30))


def load_data():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_data(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def sync_yfinance_quotes(data):
    if not HAS_YFINANCE:
        return data

    for card in data.get("primary_cards", []):
        sym = card.get("yf_ticker")
        if not sym:
            continue
        try:
            tk = yf.Ticker(sym)
            hist = tk.history(period="5d")
            if len(hist) >= 1:
                latest = hist.iloc[-1]
                prev_close = float(hist.iloc[-2]["Close"]) if len(hist) >= 2 else float(latest["Open"])
                price = round(float(latest["Close"]), 2)
                change = round(price - prev_close, 2)
                change_pct = round((change / prev_close) * 100, 2) if prev_close else 0.0

                card["price"] = price
                card["prevClose"] = round(prev_close, 2)
                card["open"] = round(float(latest["Open"]), 2)
                card["high"] = round(float(latest["High"]), 2)
                card["low"] = round(float(latest["Low"]), 2)
                card["change"] = change
                card["changePct"] = change_pct
                card["score"] = round(max(-10.0, min(10.0, change_pct * 4.5)), 1)
        except Exception:
            continue

    nifty = next((c for c in data.get("primary_cards", []) if c["id"] == "NIFTY"), None)
    if nifty and "gift_nifty_cue" in data:
        data["gift_nifty_cue"]["nifty_spot"] = nifty["price"]
        data["gift_nifty_cue"]["gift_nifty"] = round(nifty["price"] + 84.15, 2)

    save_data(data)
    return data


class GodsEyeHandler(SimpleHTTPRequestHandler):
    def _send_json(self, payload, status=200):
        body = json.dumps(payload, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/market-data":
            self._send_json(load_data())
            return
        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/sync-live":
            data = sync_yfinance_quotes(load_data())
            self._send_json({"status": "SYNCED", "data": data})
            return
        self._send_json({"error": "Not found"}, status=404)


if __name__ == "__main__":
    port = 8000
    print(f"👁️ THE GOD'S EYE — OBSERVER running on http://localhost:{port}")
    HTTPServer(("", port), GodsEyeHandler).serve_forever()
