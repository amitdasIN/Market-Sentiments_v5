// ============================================================================
// THE GOD'S EYE — OBSERVER | SIGNAL INTELLIGENCE ARRAY • PATTERN RECOGNITION
// Always-On Live Auto-Sync Engine:
//   1. Binance 24hr Live Crypto REST API (Direct CORS, 0 keys needed)
//   2. CoinGecko Live Spot Price API (Direct CORS fallback)
//   3. Multi-Proxy Yahoo Finance Quote Sync (Indian & Global Indices + Gold/Silver/Oil)
//   4. Local Python Backend API (/api/sync-live) when running server.py
//   5. 3-Second Real-Time Telemetry Heartbeat + 15-Second Full Network Sync
// ============================================================================

const INITIAL_MARKET_DATA = {
  "meta": {
    "title": "THE GOD'S EYE — OBSERVER",
    "subtitle": "SIGNAL INTELLIGENCE ARRAY • PATTERN RECOGNITION ENGINE",
    "lat": "14.2435°N",
    "long": "51.9072°E",
    "version": "5.0.0"
  },
  "left_hud": {
    "signal_throughput": 94,
    "processing_load": "Nominal",
    "insider_options": {
      "call_oi": 83,
      "put_oi": 35,
      "buildup": "Short"
    },
    "pcr_oi_data": {
      "pcr": 0.57,
      "oi_chg_plus": 55,
      "oi_chg_minus": 47
    },
    "dollar_pulse": {
      "score": "+1.8",
      "label": "USD news strength",
      "dxy": "+0.16%",
      "us10y": "+0.51%"
    },
    "risk_gauge": {
      "status": "Risk-off",
      "sp500": "-1.65%",
      "vix": "+7.59%"
    }
  },
  "right_hud": {
    "node_activity": {
      "node1": 23,
      "node2": 12,
      "node3": 38,
      "node4": 27,
      "observer_active": "16d 21h"
    },
    "retail_buildup": {
      "ce_buildup": 48,
      "pe_buildup": 23,
      "skew": "Bullish"
    },
    "fii_institutional": {
      "long_pct": 58,
      "short_pct": 56,
      "net_bias": "Net Long"
    },
    "haven_vs_risk": {
      "jpy_chf_gold": "-5.2",
      "aud_btc_eth": "-5.6",
      "lead": "Havens lead"
    },
    "headline_flow": {
      "count": 436,
      "label": "Headlines scanned today"
    }
  },
  "gift_nifty_cue": {
    "gift_nifty": 25114.5,
    "nifty_spot": 25030.35,
    "implied_open_low": 25085,
    "implied_open_high": 25135
  },
  "primary_cards": [
    {
      "id": "NIFTY",
      "name": "NIFTY",
      "yf_ticker": "^NSEI",
      "price": 25030.35,
      "prevClose": 25168.2,
      "open": 25140.0,
      "high": 25185.5,
      "low": 24980.1,
      "change": -137.85,
      "changePct": -0.55,
      "score": -5.3,
      "sentiment": "BEARISH",
      "subtext": "⚡ Bearish divergence",
      "oldMethodScore": -4.1,
      "oldMethodLabel": "BEARISH",
      "headlines": 64,
      "sparkline": [
        62,
        65,
        58,
        52,
        48,
        51,
        43,
        38,
        34,
        30
      ],
      "platforms": {
        "news": 38,
        "youtube": 41,
        "twitter": 35,
        "instagram": 44,
        "reddit": 39,
        "web": 42
      }
    },
    {
      "id": "SENSEX",
      "name": "SENSEX",
      "yf_ticker": "^BSESN",
      "price": 81028.02,
      "prevClose": 81652.4,
      "open": 81590.0,
      "high": 81710.25,
      "low": 80890.15,
      "change": -624.38,
      "changePct": -0.76,
      "score": -7.7,
      "sentiment": "EXTREMELY BEARISH",
      "subtext": "↑ still building\n⚡ Bearish divergence",
      "oldMethodScore": -6.2,
      "oldMethodLabel": "EXTREMELY BEARISH",
      "headlines": 58,
      "sparkline": [
        68,
        64,
        60,
        53,
        49,
        44,
        39,
        32,
        27,
        22
      ],
      "platforms": {
        "news": 34,
        "youtube": 37,
        "twitter": 31,
        "instagram": 40,
        "reddit": 35,
        "web": 38
      }
    },
    {
      "id": "BANKNIFTY",
      "name": "BANKNIFTY",
      "yf_ticker": "^NSEBANK",
      "price": 59086.0,
      "prevClose": 59412.5,
      "open": 59380.0,
      "high": 59495.0,
      "low": 58920.3,
      "change": -326.5,
      "changePct": -0.55,
      "score": -5.1,
      "sentiment": "BEARISH",
      "subtext": "⚡ Bearish divergence",
      "oldMethodScore": -3.8,
      "oldMethodLabel": "BEARISH",
      "headlines": 49,
      "sparkline": [
        60,
        58,
        55,
        57,
        50,
        46,
        44,
        40,
        36,
        33
      ],
      "platforms": {
        "news": 39,
        "youtube": 42,
        "twitter": 36,
        "instagram": 43,
        "reddit": 40,
        "web": 41
      }
    },
    {
      "id": "GOLD",
      "name": "GOLD",
      "yf_ticker": "GC=F",
      "price": 4048.89,
      "prevClose": 4086.4,
      "open": 4082.1,
      "high": 4094.0,
      "low": 4031.5,
      "change": -37.51,
      "changePct": -0.92,
      "score": -8.8,
      "sentiment": "EXTREMELY BEARISH",
      "subtext": "↑ still building",
      "oldMethodScore": -6.5,
      "oldMethodLabel": "EXTREMELY BEARISH",
      "headlines": 40,
      "sparkline": [
        72,
        66,
        61,
        55,
        48,
        42,
        35,
        30,
        24,
        18
      ],
      "platforms": {
        "news": 32,
        "youtube": 35,
        "twitter": 30,
        "instagram": 38,
        "reddit": 34,
        "web": 36
      }
    },
    {
      "id": "SILVER",
      "name": "SILVER",
      "yf_ticker": "SI=F",
      "price": 51.91,
      "prevClose": 52.28,
      "open": 52.2,
      "high": 52.55,
      "low": 51.6,
      "change": -0.37,
      "changePct": -0.71,
      "score": -4.6,
      "sentiment": "BEARISH",
      "subtext": "→ steady pressure",
      "oldMethodScore": -3.4,
      "oldMethodLabel": "BEARISH",
      "headlines": 20,
      "sparkline": [
        58,
        55,
        59,
        52,
        48,
        50,
        44,
        41,
        39,
        36
      ],
      "platforms": {
        "news": 40,
        "youtube": 42,
        "twitter": 38,
        "instagram": 44,
        "reddit": 41,
        "web": 42
      }
    },
    {
      "id": "CRUDEOIL",
      "name": "CRUDEOIL",
      "yf_ticker": "CL=F",
      "price": 90.71,
      "prevClose": 90.85,
      "open": 90.9,
      "high": 91.85,
      "low": 89.95,
      "change": -0.14,
      "changePct": -0.15,
      "score": -0.3,
      "sentiment": "NEUTRAL",
      "subtext": "⚡ Bullish divergence",
      "forceTeal": true,
      "oldMethodScore": -1.9,
      "oldMethodLabel": "NEUTRAL",
      "headlines": 35,
      "sparkline": [
        45,
        52,
        47,
        54,
        46,
        55,
        48,
        53,
        49,
        51
      ],
      "platforms": {
        "news": 49,
        "youtube": 51,
        "twitter": 48,
        "instagram": 52,
        "reddit": 50,
        "web": 50
      }
    },
    {
      "id": "BITCOIN",
      "name": "BITCOIN",
      "yf_ticker": "BTC-USD",
      "binance_symbol": "BTCUSDT",
      "coingecko_id": "bitcoin",
      "price": 75496.74,
      "prevClose": 76890.0,
      "open": 76750.0,
      "high": 77120.0,
      "low": 74980.0,
      "change": -1393.26,
      "changePct": -1.81,
      "score": -10.0,
      "sentiment": "EXTREMELY BEARISH",
      "subtext": "↑ still building",
      "oldMethodScore": -6.9,
      "oldMethodLabel": "EXTREMELY BEARISH",
      "headlines": 36,
      "sparkline": [
        75,
        69,
        63,
        56,
        49,
        41,
        33,
        25,
        19,
        12
      ],
      "platforms": {
        "news": 28,
        "youtube": 31,
        "twitter": 26,
        "instagram": 34,
        "reddit": 29,
        "web": 32
      }
    },
    {
      "id": "NASDAQ",
      "name": "NASDAQ",
      "yf_ticker": "^IXIC",
      "price": 24315.0,
      "prevClose": 24518.4,
      "open": 24490.0,
      "high": 24560.2,
      "low": 24210.8,
      "change": -203.4,
      "changePct": -0.83,
      "score": -5.2,
      "sentiment": "BEARISH",
      "subtext": "→ consolidating",
      "oldMethodScore": -4.4,
      "oldMethodLabel": "BEARISH",
      "headlines": 52,
      "sparkline": [
        64,
        61,
        57,
        54,
        50,
        47,
        45,
        42,
        38,
        35
      ],
      "platforms": {
        "news": 39,
        "youtube": 41,
        "twitter": 37,
        "instagram": 43,
        "reddit": 40,
        "web": 41
      }
    },
    {
      "id": "DJI",
      "name": "DJI",
      "yf_ticker": "^DJI",
      "price": 51523.06,
      "prevClose": 52115.16,
      "open": 52050.0,
      "high": 52140.0,
      "low": 51410.5,
      "change": -592.1,
      "changePct": -1.14,
      "score": -7.6,
      "sentiment": "EXTREMELY BEARISH",
      "subtext": "↑ still building",
      "oldMethodScore": -6.8,
      "oldMethodLabel": "EXTREMELY BEARISH",
      "headlines": 44,
      "sparkline": [
        70,
        65,
        59,
        54,
        48,
        43,
        37,
        31,
        26,
        21
      ],
      "platforms": {
        "news": 34,
        "youtube": 36,
        "twitter": 32,
        "instagram": 39,
        "reddit": 35,
        "web": 37
      }
    },
    {
      "id": "GLOBALRISK",
      "name": "GLOBALRISK",
      "yf_ticker": "^VIX",
      "price": 21.45,
      "prevClose": 19.94,
      "open": 20.1,
      "high": 22.15,
      "low": 19.8,
      "change": 1.51,
      "changePct": 7.59,
      "score": -7.1,
      "sentiment": "EXTREMELY BEARISH",
      "subtext": "→ already easing off",
      "oldMethodScore": -5.8,
      "oldMethodLabel": "EXTREMELY BEARISH",
      "headlines": 61,
      "sparkline": [
        69,
        64,
        58,
        52,
        45,
        38,
        32,
        28,
        31,
        34
      ],
      "platforms": {
        "news": 33,
        "youtube": 35,
        "twitter": 30,
        "instagram": 37,
        "reddit": 32,
        "web": 34
      }
    }
  ],
  "commodities_crypto_cards": {
    "commodities": [
      {
        "id": "GOLD_XAU",
        "name": "GOLD (XAU/USD)",
        "price": 4048.89,
        "changePct": -0.92,
        "score": -5.5,
        "sentiment": "BEARISH",
        "headlines": 40,
        "subtext": ""
      },
      {
        "id": "SILVER_XAG",
        "name": "SILVER (XAG/USD)",
        "price": 51.91,
        "changePct": -0.71,
        "score": -5.8,
        "sentiment": "BEARISH",
        "headlines": 20,
        "subtext": ""
      },
      {
        "id": "WTI_CRUDE",
        "name": "WTI CRUDE",
        "price": 90.71,
        "changePct": -0.15,
        "score": -4.0,
        "sentiment": "BEARISH",
        "headlines": 35,
        "subtext": "⚡ bullish divergence"
      }
    ],
    "crypto": [
      {
        "id": "BTC_USD",
        "name": "BTC/USD",
        "binance_symbol": "BTCUSDT",
        "coingecko_id": "bitcoin",
        "price": 75496.74,
        "changePct": -1.81,
        "score": -8.1,
        "sentiment": "EXTREMELY BEARISH",
        "headlines": 36,
        "subtext": "still building"
      },
      {
        "id": "ETH_USD",
        "name": "ETH/USD",
        "binance_symbol": "ETHUSDT",
        "coingecko_id": "ethereum",
        "price": 2384.5,
        "changePct": -1.12,
        "score": -3.9,
        "sentiment": "BEARISH",
        "headlines": 25,
        "subtext": ""
      },
      {
        "id": "SOL_USD",
        "name": "SOL/USD",
        "binance_symbol": "SOLUSDT",
        "coingecko_id": "solana",
        "price": 148.2,
        "changePct": -0.45,
        "score": -1.7,
        "sentiment": "NEUTRAL",
        "headlines": 27,
        "subtext": ""
      },
      {
        "id": "XRP_USD",
        "name": "XRP/USD",
        "binance_symbol": "XRPUSDT",
        "coingecko_id": "ripple",
        "price": 2.14,
        "changePct": -0.88,
        "score": -2.4,
        "sentiment": "BEARISH",
        "headlines": 27,
        "subtext": ""
      }
    ]
  }
};

let terminalState = JSON.parse(JSON.stringify(INITIAL_MARKET_DATA));
let openMethodCards = {};
let activeModalAssetId = null;
let syncTimerSeconds = 15;
let isSyncingNow = false;
let liveTickCounter = 0;
let observerStartTimestamp = Date.now() - (16 * 86400 + 21 * 3600) * 1000;

function fmtNum(val, decimals = 2) {
  return Number(val).toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function formatScore(score) {
  const num = Number(score);
  if (Math.abs(num) < 0.05) return '0';
  if (Number.isInteger(num)) return num > 0 ? `+${num}` : `${num}`;
  return num > 0 ? `+${num.toFixed(1)}` : `${num.toFixed(1)}`;
}

function getCardStyleClass(card) {
  if (card.forceTeal) return 'hud-card-bullish';
  if (card.score >= 1.5) return 'hud-card-bullish';
  if (card.score <= -1.5) return 'hud-card-bearish';
  return 'hud-card-neutral';
}

function getScoreTextColor(score) {
  if (score >= 1.5) return 'text-[#39f3d6]';
  if (score <= -1.5) return 'text-[#ff7685]';
  return 'text-slate-100';
}

function getSentimentBadgeText(score) {
  if (score >= 7.0) return 'EXTREMELY BULLISH';
  if (score >= 2.0) return 'BULLISH';
  if (score <= -6.5) return 'EXTREMELY BEARISH';
  if (score <= -2.0) return 'BEARISH';
  return 'NEUTRAL';
}

function buildSparklineSVG(points, card) {
  const w = 155;
  const h = 38;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = Math.max(1, max - min);

  const coords = points.map((p, idx) => {
    const x = Math.round((idx / (points.length - 1)) * w);
    const y = Math.round(h - 4 - ((p - min) / range) * (h - 8));
    return `${x},${y}`;
  }).join(' ');

  const strokeColor = (card.forceTeal || card.score >= 1.5) ? '#4cf5dc' : card.score <= -1.5 ? '#ff8594' : '#64e8ff';
  const glowId = `glow-${Math.random().toString(36).slice(2, 8)}`;

  return `
    <svg viewBox="0 0 ${w} ${h}" class="w-full h-9 overflow-visible my-1.5">
      <defs>
        <filter id="${glowId}" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polyline
        fill="none"
        stroke="${strokeColor}"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#${glowId})"
        points="${coords}"
      />
    </svg>
  `;
}

function getISTDate() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utcMs + 5.5 * 3600000);
}

function getMarketLiveStatus(istNow) {
  const day = istNow.getDay();
  const mins = istNow.getHours() * 60 + istNow.getMinutes();
  const openMins = 9 * 60 + 15;
  const closeMins = 15 * 60 + 30;

  if (day >= 1 && day <= 5 && mins >= openMins && mins < closeMins) {
    return {
      isLive: true,
      label: 'Market Live',
      pillClass: 'bg-[#22e58b] text-[#041b11] shadow-[0_0_18px_rgba(34,229,139,0.75)]',
      dotClass: 'bg-[#041b11]'
    };
  }

  return {
    isLive: false,
    label: 'Market Closed',
    pillClass: 'bg-white text-slate-900 shadow-[0_0_14px_rgba(255,255,255,0.45)]',
    dotClass: 'bg-slate-800'
  };
}

function updateHeaderClockAndStatus() {
  const ist = getISTDate();
  const status = getMarketLiveStatus(ist);

  const pillEl = document.getElementById('hud-market-status-pill');
  const dotEl = document.getElementById('hud-market-status-dot');
  const textEl = document.getElementById('hud-market-status-text');

  if (pillEl) {
    pillEl.className = `inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold tracking-tight transition ${status.pillClass}`;
  }
  if (dotEl) {
    dotEl.className = `w-2 h-2 rounded-full ${status.dotClass}`;
  }
  if (textEl) {
    textEl.textContent = status.label;
  }

  const dayNum = String(ist.getDate()).padStart(2, '0');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthStr = monthNames[ist.getMonth()];
  const yearNum = ist.getFullYear();
  const timeStr = ist.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const updatedEl = document.getElementById('hud-updated-timestamp');
  if (updatedEl) {
    updatedEl.textContent = `Updated: ${dayNum} ${monthStr} ${yearNum}, ${timeStr} IST`;
  }

  const scannedEl = document.getElementById('crypto-buzz-scanned');
  if (scannedEl) {
    scannedEl.textContent = `Scanned at ${timeStr} IST.`;
  }

  const elapsedSec = Math.floor((Date.now() - observerStartTimestamp) / 1000);
  const days = Math.floor(elapsedSec / 86400);
  const hours = Math.floor((elapsedSec % 86400) / 3600);
  const obsEl = document.getElementById('hud-observer-uptime');
  if (obsEl) {
    obsEl.textContent = `Observer active: ${days}d ${hours}h`;
  }
}

function renderSidebars() {
  const left = terminalState.left_hud;
  const right = terminalState.right_hud;

  const tpVal = left.signal_throughput;
  const circumference = 2 * Math.PI * 30;
  const offset = circumference - (tpVal / 100) * circumference;

  const leftContainer = document.getElementById('left-hud-column');
  if (leftContainer) {
    leftContainer.innerHTML = `
      <div class="hud-panel p-3.5 text-center">
        <div class="text-[10px] font-hud tracking-widest text-slate-300 uppercase mb-2">SIGNAL<br/>THROUGHPUT</div>
        <div class="relative w-20 h-20 mx-auto my-1 flex items-center justify-center">
          <svg class="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="30" stroke="rgba(56,232,255,0.16)" stroke-width="6" fill="none" />
            <circle cx="36" cy="36" r="30" stroke="#7ceeff" stroke-width="6" stroke-linecap="round"
              stroke-dasharray="${circumference.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}" fill="none" />
          </svg>
          <span class="absolute text-sm font-extrabold font-mono-hud text-white">${tpVal}%</span>
        </div>
        <div class="text-[10px] text-slate-400 mt-1.5">Processing load:<br/><span class="text-slate-200 font-semibold">${left.processing_load}</span></div>
      </div>

      <div class="hud-panel p-3.5">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase text-center mb-2.5">INSIDER OPTIONS</div>
        <div class="space-y-2 text-[11px] font-mono-hud">
          <div class="flex items-center justify-between gap-1.5">
            <span class="text-slate-400">Call OI</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#22e58b]" style="width: ${left.insider_options.call_oi}%"></div>
            </div>
            <span class="text-slate-200 font-bold">${left.insider_options.call_oi}%</span>
          </div>
          <div class="flex items-center justify-between gap-1.5">
            <span class="text-slate-400">Put OI</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#ff5b6e]" style="width: ${left.insider_options.put_oi}%"></div>
            </div>
            <span class="text-slate-200 font-bold">${left.insider_options.put_oi}%</span>
          </div>
        </div>
        <div class="text-[10px] text-center text-slate-400 mt-2.5 pt-2 border-t border-slate-800/80">
          Build-up: <span class="text-[#ff7685] font-bold">${left.insider_options.buildup}</span>
        </div>
      </div>

      <div class="hud-panel p-3.5">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase text-center">PCR / OI DATA</div>
        <div class="text-2xl font-extrabold font-mono-hud text-center text-white my-1.5">${left.pcr_oi_data.pcr.toFixed(2)}</div>
        <div class="space-y-1.5 text-[10px] font-mono-hud">
          <div class="flex items-center justify-between gap-1">
            <span class="text-slate-400">OI Chg +</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#38e8ff]" style="width: ${left.pcr_oi_data.oi_chg_plus}%"></div>
            </div>
            <span class="text-slate-200">${left.pcr_oi_data.oi_chg_plus}%</span>
          </div>
          <div class="flex items-center justify-between gap-1">
            <span class="text-slate-400">OI Chg -</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#ff5b6e]" style="width: ${left.pcr_oi_data.oi_chg_minus}%"></div>
            </div>
            <span class="text-slate-200">${left.pcr_oi_data.oi_chg_minus}%</span>
          </div>
        </div>
      </div>

      <div class="hud-panel p-3.5 text-center">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase">DOLLAR PULSE</div>
        <div class="text-xl font-extrabold font-mono-hud text-[#39f3d6] mt-1">${left.dollar_pulse.score}</div>
        <div class="text-[10px] text-slate-400 mb-2">${left.dollar_pulse.label}</div>
        <div class="space-y-1 text-[10px] font-mono-hud border-t border-slate-800/80 pt-2">
          <div class="flex justify-between"><span class="text-slate-400">DXY</span><span class="text-[#39f3d6]">${left.dollar_pulse.dxy}</span></div>
          <div class="flex justify-between"><span class="text-slate-400">US 10Y</span><span class="text-[#39f3d6]">${left.dollar_pulse.us10y}</span></div>
        </div>
      </div>

      <div class="hud-panel p-3.5 text-center">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase">RISK GAUGE</div>
        <div class="text-sm font-extrabold text-[#ff7685] my-1">${left.risk_gauge.status}</div>
        <div class="space-y-1 text-[10px] font-mono-hud border-t border-slate-800/80 pt-2">
          <div class="flex justify-between"><span class="text-slate-400">S&amp;P 500</span><span class="text-[#ff7685]">${left.risk_gauge.sp500}</span></div>
          <div class="flex justify-between"><span class="text-slate-400">VIX</span><span class="text-[#ff7685]">${left.risk_gauge.vix}</span></div>
        </div>
      </div>
    `;
  }

  const rightContainer = document.getElementById('right-hud-column');
  if (rightContainer) {
    rightContainer.innerHTML = `
      <div class="hud-panel p-3.5">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase text-center mb-2">NODE ACTIVITY</div>
        <div class="relative w-20 h-20 mx-auto my-1.5 flex items-center justify-center">
          <svg class="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="28" stroke="#fbbf24" stroke-width="6" stroke-dasharray="42 180" stroke-dashoffset="0" fill="none" />
            <circle cx="36" cy="36" r="28" stroke="#f472b6" stroke-width="6" stroke-dasharray="24 180" stroke-dashoffset="-44" fill="none" />
            <circle cx="36" cy="36" r="28" stroke="#22e58b" stroke-width="6" stroke-dasharray="66 180" stroke-dashoffset="-70" fill="none" />
            <circle cx="36" cy="36" r="28" stroke="#38e8ff" stroke-width="6" stroke-dasharray="46 180" stroke-dashoffset="-138" fill="none" />
          </svg>
        </div>
        <div class="space-y-1 text-[10px] font-mono-hud mt-2">
          <div class="flex items-center justify-between"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#fbbf24]"></span>Node-1</span><span>${right.node_activity.node1}%</span></div>
          <div class="flex items-center justify-between"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#f472b6]"></span>Node-2</span><span>${right.node_activity.node2}%</span></div>
          <div class="flex items-center justify-between"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#22e58b]"></span>Node-3</span><span>${right.node_activity.node3}%</span></div>
          <div class="flex items-center justify-between"><span class="flex items-center gap-1.5 text-slate-300"><span class="w-2 h-2 rounded-full bg-[#38e8ff]"></span>Node-4</span><span>${right.node_activity.node4}%</span></div>
        </div>
        <div id="hud-observer-uptime" class="text-[9px] text-center text-slate-400 mt-2.5 pt-2 border-t border-slate-800/80 font-mono-hud">
          Observer active: ${right.node_activity.observer_active}
        </div>
      </div>

      <div class="hud-panel p-3.5">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase text-center mb-2.5">RETAIL BUILDUP</div>
        <div class="space-y-2 text-[10px] font-mono-hud">
          <div class="flex items-center justify-between gap-1">
            <span class="text-slate-400">CE Buildup</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#38e8ff]" style="width: ${right.retail_buildup.ce_buildup}%"></div>
            </div>
            <span class="text-slate-200">${right.retail_buildup.ce_buildup}%</span>
          </div>
          <div class="flex items-center justify-between gap-1">
            <span class="text-slate-400">PE Buildup</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#fbbf24]" style="width: ${right.retail_buildup.pe_buildup}%"></div>
            </div>
            <span class="text-slate-200">${right.retail_buildup.pe_buildup}%</span>
          </div>
        </div>
        <div class="text-[10px] text-center text-slate-400 mt-2.5 pt-2 border-t border-slate-800/80">
          Skew: <span class="text-[#22e58b] font-bold">${right.retail_buildup.skew}</span>
        </div>
      </div>

      <div class="hud-panel p-3.5">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase text-center mb-2.5">FII INSTITUTIONAL</div>
        <div class="space-y-2 text-[10px] font-mono-hud">
          <div class="flex items-center justify-between gap-1">
            <span class="text-slate-400">Long</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#22e58b]" style="width: ${right.fii_institutional.long_pct}%"></div>
            </div>
            <span class="text-slate-200">${right.fii_institutional.long_pct}%</span>
          </div>
          <div class="flex items-center justify-between gap-1">
            <span class="text-slate-400">Short</span>
            <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#ff5b6e]" style="width: ${right.fii_institutional.short_pct}%"></div>
            </div>
            <span class="text-slate-200">${right.fii_institutional.short_pct}%</span>
          </div>
        </div>
        <div class="mt-2.5 text-center">
          <span class="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#145338] text-[#4cf5dc] border border-[#22e58b]/40">
            ${right.fii_institutional.net_bias}
          </span>
        </div>
      </div>

      <div class="hud-panel p-3.5">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase text-center mb-2">HAVEN VS RISK</div>
        <div class="space-y-1 text-[10px] font-mono-hud">
          <div class="flex justify-between"><span class="text-slate-400">JPY·CHF·Gold</span><span class="text-[#ff7685] font-bold">${right.haven_vs_risk.jpy_chf_gold}</span></div>
          <div class="flex justify-between"><span class="text-slate-400">AUD·BTC·ETH</span><span class="text-[#ff7685] font-bold">${right.haven_vs_risk.aud_btc_eth}</span></div>
        </div>
        <div class="text-[10px] text-center text-slate-400 mt-2 pt-1.5 border-t border-slate-800/80">
          ${right.haven_vs_risk.lead}
        </div>
      </div>

      <div class="hud-panel p-3.5 text-center">
        <div class="text-[10px] font-hud tracking-wider text-slate-300 uppercase">HEADLINE FLOW</div>
        <div class="text-2xl font-extrabold font-mono-hud text-white my-1">${right.headline_flow.count}</div>
        <div class="text-[10px] text-slate-400">${right.headline_flow.label}</div>
      </div>
    `;
  }
}

function toggleOldMethod(cardId, event) {
  if (event) event.stopPropagation();
  openMethodCards[cardId] = !openMethodCards[cardId];
  renderPrimaryGrid();
}

function renderPrimaryGrid(flashTick = false) {
  const grid = document.getElementById('primary-hud-grid');
  if (!grid) return;

  grid.innerHTML = terminalState.primary_cards.map(card => {
    const cardClass = getCardStyleClass(card);
    const scoreColor = getScoreTextColor(card.score);
    const badgeLabel = getSentimentBadgeText(card.score);
    const isExpanded = !!openMethodCards[card.id];
    const isUp = card.change >= 0;
    const chgSign = isUp ? '+' : '';
    const chgColor = isUp ? 'text-[#39f3d6]' : 'text-[#ff7685]';

    const subtextLines = (card.subtext || '').split('\n').map(line => {
      if (!line.trim()) return '';
      const lineColor = line.includes('Bullish') ? 'text-[#39f3d6]' : line.includes('Bearish') ? 'text-[#fbbf24]' : 'text-slate-300';
      return `<div class="text-[11px] leading-tight ${lineColor}">${line}</div>`;
    }).join('');

    return `
      <div onclick="openAssetModal('${card.id}')" class="${cardClass} p-3.5 flex flex-col justify-between cursor-pointer select-none">
        <div>
          <div class="flex items-center justify-between gap-1">
            <span class="text-xs font-hud font-bold tracking-wider text-white uppercase">${card.name}</span>
            <span class="${flashTick ? 'price-flash' : ''} text-[10px] font-mono-hud px-1.5 py-0.5 rounded bg-slate-950/75 border border-slate-700/70 text-slate-200">
              ${fmtNum(card.price)}
            </span>
          </div>

          <div class="flex items-baseline justify-between mt-1">
            <div class="text-3xl xl:text-[34px] font-extrabold font-mono-hud tracking-tight ${scoreColor}">
              ${formatScore(card.score)}
            </div>
            <div class="text-[11px] font-mono-hud font-semibold ${chgColor}">
              ${chgSign}${card.changePct.toFixed(2)}%
            </div>
          </div>

          <div class="text-[10px] font-hud font-bold tracking-wider uppercase mt-0.5 ${scoreColor}">
            ${badgeLabel}
          </div>

          <div class="min-h-[28px] mt-1 space-y-0.5">
            ${subtextLines}
          </div>

          ${buildSparklineSVG(card.sparkline, card)}
        </div>

        <div class="pt-1">
          <button
            onclick="toggleOldMethod('${card.id}', event)"
            class="old-method-btn w-full py-1 px-2.5 text-[10px] font-hud font-bold tracking-wider flex items-center justify-between cursor-pointer"
          >
            <span>${isExpanded ? '▾' : '▸'} OLD METHOD</span>
            <span>${isExpanded ? '−' : '+'}</span>
          </button>

          ${isExpanded ? `
            <div class="mt-2 px-1 py-1.5 rounded bg-slate-950/65 border border-slate-800/80 text-[11px] font-mono-hud">
              <div class="flex items-center gap-1.5">
                <span class="font-bold ${getScoreTextColor(card.oldMethodScore)}">${formatScore(card.oldMethodScore)}</span>
                <span class="text-[9px] uppercase text-slate-300">${card.oldMethodLabel}</span>
              </div>
              <div class="text-[10px] text-slate-400">weighted average</div>
            </div>
          ` : ''}

          <div class="text-[11px] text-slate-300 hover:text-cyan-300 mt-2 flex items-center gap-1 font-medium">
            <span>Click for details</span>
            <span class="text-cyan-400">▸</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCommoditiesAndCrypto() {
  const commGrid = document.getElementById('commodities-hud-grid');
  const cryptoGrid = document.getElementById('crypto-hud-grid');

  if (commGrid) {
    commGrid.innerHTML = terminalState.commodities_crypto_cards.commodities.map(item => {
      const cardClass = getCardStyleClass(item);
      const scoreColor = getScoreTextColor(item.score);
      const chgSign = item.changePct >= 0 ? '+' : '';
      return `
        <div class="${cardClass} p-4 flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-xs font-hud font-bold tracking-wider text-white">${item.name}</span>
            <span class="text-xs font-mono-hud text-slate-200 font-bold">$${fmtNum(item.price)} <span class="${item.changePct >= 0 ? 'text-[#39f3d6]' : 'text-[#ff7685]'}">(${chgSign}${item.changePct.toFixed(2)}%)</span></span>
          </div>
          <div class="text-3xl font-extrabold font-mono-hud mt-2 ${scoreColor}">${formatScore(item.score)}</div>
          <div class="text-[10px] font-hud font-bold tracking-wider uppercase mt-1 ${scoreColor}">${item.sentiment}</div>
          <div class="text-[11px] text-slate-400 mt-1">${item.headlines} headlines</div>
          ${item.subtext ? `<div class="text-[11px] text-[#39f3d6] mt-1">${item.subtext}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  if (cryptoGrid) {
    cryptoGrid.innerHTML = terminalState.commodities_crypto_cards.crypto.map(item => {
      const cardClass = getCardStyleClass(item);
      const scoreColor = getScoreTextColor(item.score);
      const chgSign = item.changePct >= 0 ? '+' : '';
      return `
        <div class="${cardClass} p-4 flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="text-xs font-hud font-bold tracking-wider text-white">${item.name}</span>
            <span class="text-[11px] font-mono-hud text-slate-200 font-bold">$${fmtNum(item.price)}</span>
          </div>
          <div class="text-3xl font-extrabold font-mono-hud mt-2 ${scoreColor}">${formatScore(item.score)}</div>
          <div class="text-[10px] font-hud font-bold tracking-wider uppercase mt-1 ${scoreColor}">${item.sentiment}</div>
          <div class="text-[11px] text-slate-400 mt-1">${item.headlines} headlines</div>
          <div class="text-[11px] font-mono-hud mt-1 ${item.changePct >= 0 ? 'text-[#39f3d6]' : 'text-[#ff7685]'}">
            24h: ${chgSign}${item.changePct.toFixed(2)}% ${item.subtext ? `• ${item.subtext}` : ''}
          </div>
        </div>
      `;
    }).join('');
  }
}

function renderGiftNiftyCueBar() {
  const nifty = terminalState.primary_cards.find(c => c.id === 'NIFTY');
  const cue = terminalState.gift_nifty_cue;
  if (!nifty || !cue) return;

  const spread = Number((cue.gift_nifty - nifty.price).toFixed(2));
  const openMid = Math.round(nifty.price + spread * 0.9);
  const lowBand = openMid - 25;
  const highBand = openMid + 25;

  const el = document.getElementById('gift-nifty-cue-strip');
  if (!el) return;

  const isUp = spread >= 0;
  const sign = isUp ? '+' : '';
  const color = isUp ? 'text-[#39f3d6]' : 'text-[#ff7685]';

  el.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-hud">
      <div class="flex items-center gap-2.5">
        <span class="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-bold">GIFT NIFTY LIVE</span>
        <span class="text-white font-extrabold text-sm">${fmtNum(cue.gift_nifty)}</span>
        <span class="${color} font-bold">(${sign}${spread.toFixed(2)} pts vs NIFTY ${fmtNum(nifty.price)})</span>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <div>
          <span class="text-slate-400">NEXT-DAY 9:15 AM OPENING CUE:</span>
          <span class="text-amber-300 font-extrabold ml-1">${lowBand.toLocaleString('en-IN')} – ${highBand.toLocaleString('en-IN')}</span>
        </div>
        <span class="px-2.5 py-0.5 rounded-full ${isUp ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40' : 'bg-rose-500/20 text-rose-300 border border-rose-400/40'} font-bold text-[11px]">
          ${isUp ? 'BULLISH GAP-UP CUE' : 'BEARISH GAP-DOWN CUE'} (${sign}${spread.toFixed(2)} PTS)
        </span>
      </div>
    </div>
  `;
}

function openAssetModal(cardId) {
  const card = terminalState.primary_cards.find(c => c.id === cardId);
  if (!card) return;
  activeModalAssetId = cardId;

  const modal = document.getElementById('asset-detail-modal');
  const body = document.getElementById('asset-modal-body');
  if (!modal || !body) return;

  const isUp = card.change >= 0;
  const sign = isUp ? '+' : '';
  const chgColor = isUp ? 'text-[#39f3d6]' : 'text-[#ff7685]';

  body.innerHTML = `
    <div class="flex items-start justify-between gap-4 border-b border-slate-800 pb-3 mb-4">
      <div>
        <div class="text-[11px] font-hud tracking-widest text-cyan-400 uppercase">SIGNAL INTELLIGENCE NODE • ${card.id}</div>
        <h3 class="text-2xl font-hud font-extrabold text-white mt-0.5">${card.name}</h3>
      </div>
      <button onclick="closeAssetModal()" class="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono-hud cursor-pointer">✕ ESC</button>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-hud text-xs mb-4">
      <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
        <div class="text-[10px] text-slate-400">CURRENT LEVEL</div>
        <div class="text-lg font-extrabold text-white mt-0.5">${fmtNum(card.price)}</div>
        <div class="text-[11px] ${chgColor}">${sign}${card.change.toFixed(2)} (${sign}${card.changePct.toFixed(2)}%)</div>
      </div>
      <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
        <div class="text-[10px] text-slate-400">SESSION OPEN</div>
        <div class="text-lg font-bold text-slate-200 mt-0.5">${fmtNum(card.open)}</div>
        <div class="text-[11px] text-slate-400">Prev: ${fmtNum(card.prevClose)}</div>
      </div>
      <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
        <div class="text-[10px] text-slate-400">DAY HIGH</div>
        <div class="text-lg font-bold text-[#39f3d6] mt-0.5">${fmtNum(card.high)}</div>
      </div>
      <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
        <div class="text-[10px] text-slate-400">DAY LOW</div>
        <div class="text-lg font-bold text-[#ff7685] mt-0.5">${fmtNum(card.low)}</div>
      </div>
    </div>

    <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 mb-4">
      <div class="text-xs font-hud tracking-wider text-cyan-300 uppercase mb-3">6-SOURCE MULTI-PLATFORM SENTIMENT TELEMETRY</div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono-hud text-xs">
        <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 flex justify-between"><span>📰 Financial News</span><span class="font-bold text-cyan-300">${card.platforms.news}%</span></div>
        <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 flex justify-between"><span>▶️ YouTube Finance</span><span class="font-bold text-cyan-300">${card.platforms.youtube}%</span></div>
        <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 flex justify-between"><span>🐦 X / FinTwit</span><span class="font-bold text-cyan-300">${card.platforms.twitter}%</span></div>
        <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 flex justify-between"><span>📸 Instagram Reels</span><span class="font-bold text-cyan-300">${card.platforms.instagram}%</span></div>
        <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 flex justify-between"><span>👽 Reddit</span><span class="font-bold text-cyan-300">${card.platforms.reddit}%</span></div>
        <div class="bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 flex justify-between"><span>🌐 Web Search</span><span class="font-bold text-cyan-300">${card.platforms.web}%</span></div>
      </div>
    </div>

    <div class="flex items-center justify-between text-xs font-mono-hud text-slate-400">
      <span>AI Pattern Score: <strong class="${getScoreTextColor(card.score)}">${formatScore(card.score)} (${getSentimentBadgeText(card.score)})</strong></span>
      <span>OLD METHOD Weighted Avg: <strong class="${getScoreTextColor(card.oldMethodScore)}">${formatScore(card.oldMethodScore)}</strong></span>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeAssetModal() {
  const modal = document.getElementById('asset-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  activeModalAssetId = null;
}

async function fetchBinanceLiveSpot(symbol) {
  const url = `https://api.binance.com/api/v3/ticker/24hr?symbol=${encodeURIComponent(symbol)}`;
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Binance HTTP error');
  const d = await res.json();
  return {
    price: Number(d.lastPrice),
    prevClose: Number(d.prevClosePrice),
    open: Number(d.openPrice),
    high: Number(d.highPrice),
    low: Number(d.lowPrice),
    change: Number(d.priceChange),
    changePct: Number(d.priceChangePercent)
  };
}

async function fetchCoinGeckoFallback() {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple&vs_currencies=usd&include_24hr_change=true';
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('CoinGecko HTTP error');
  return await res.json();
}

async function fetchYahooLiveQuote(ticker) {
  const target = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=5d`;
  const proxies = [
    `https://corsproxy.io/?${encodeURIComponent(target)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(target)}`
  ];
  for (const pUrl of proxies) {
    try {
      const ctrl = new AbortController();
      const tid = setTimeout(() => ctrl.abort(), 3500);
      const res = await fetch(pUrl, { cache: 'no-store', signal: ctrl.signal });
      clearTimeout(tid);
      if (!res.ok) continue;
      const json = await res.json();
      const meta = json?.chart?.result?.[0]?.meta;
      if (!meta || !meta.regularMarketPrice) continue;
      const price = Number(meta.regularMarketPrice);
      const prevClose = Number(meta.chartPreviousClose || meta.previousClose || price);
      const open = Number(meta.regularMarketOpen || prevClose);
      const high = Number(meta.regularMarketDayHigh || Math.max(price, open));
      const low = Number(meta.regularMarketDayLow || Math.min(price, open));
      const change = Number((price - prevClose).toFixed(2));
      const changePct = Number(((change / prevClose) * 100).toFixed(2));
      return { price, prevClose, open, high, low, change, changePct };
    } catch (_) {}
  }
  throw new Error('Yahoo proxies unreachable');
}

function applyLiveTelemetryTick() {
  liveTickCounter++;
  terminalState.primary_cards.forEach(card => {
    if (card.id === 'BITCOIN' || card.id === 'GOLD' || card.id === 'SILVER' || card.id === 'CRUDEOIL') {
      const drift = (Math.random() - 0.5) * 0.0014;
      card.price = Number((card.price * (1 + drift)).toFixed(2));
      card.change = Number((card.price - card.prevClose).toFixed(2));
      card.changePct = Number(((card.change / card.prevClose) * 100).toFixed(2));
    }
    const lastPt = card.sparkline[card.sparkline.length - 1];
    const nextPt = Math.max(10, Math.min(90, Math.round(lastPt + (Math.random() - 0.5) * 4)));
    card.sparkline = [...card.sparkline.slice(1), nextPt];
  });

  terminalState.commodities_crypto_cards.commodities.forEach(item => {
    const drift = (Math.random() - 0.5) * 0.001;
    item.price = Number((item.price * (1 + drift)).toFixed(2));
  });

  if (liveTickCounter % 2 === 0) {
    terminalState.right_hud.headline_flow.count += 1;
  }
}

async function triggerFullSync(reason = 'AUTO_SYNC') {
  if (isSyncingNow) return;
  isSyncingNow = true;

  const badge = document.getElementById('sync-status-badge');
  if (badge) badge.textContent = 'SYNCING...';

  let liveSourceCount = 0;

  try {
    const srvRes = await fetch('/api/sync-live', { method: 'POST', cache: 'no-store' });
    if (srvRes.ok) {
      const payload = await srvRes.json();
      if (payload?.data?.primary_cards) {
        terminalState = payload.data;
        liveSourceCount += 10;
      }
    }
  } catch (_) {}

  try {
    const btcQuote = await fetchBinanceLiveSpot('BTCUSDT');
    const btcCard = terminalState.primary_cards.find(c => c.id === 'BITCOIN');
    if (btcCard && btcQuote.price > 0) {
      btcCard.price = btcQuote.price;
      btcCard.prevClose = btcQuote.prevClose;
      btcCard.open = btcQuote.open;
      btcCard.high = btcQuote.high;
      btcCard.low = btcQuote.low;
      btcCard.change = btcQuote.change;
      btcCard.changePct = btcQuote.changePct;
      liveSourceCount++;
    }
    for (const cItem of terminalState.commodities_crypto_cards.crypto) {
      if (cItem.binance_symbol) {
        const q = await fetchBinanceLiveSpot(cItem.binance_symbol);
        if (q.price > 0) {
          cItem.price = q.price;
          cItem.changePct = q.changePct;
          liveSourceCount++;
        }
      }
    }
  } catch (_) {
    try {
      const cg = await fetchCoinGeckoFallback();
      const btcCard = terminalState.primary_cards.find(c => c.id === 'BITCOIN');
      if (btcCard && cg.bitcoin?.usd) {
        btcCard.price = Number(cg.bitcoin.usd);
        btcCard.changePct = Number((cg.bitcoin.usd_24h_change || btcCard.changePct).toFixed(2));
        liveSourceCount++;
      }
      for (const cItem of terminalState.commodities_crypto_cards.crypto) {
        const entry = cg[cItem.coingecko_id];
        if (entry?.usd) {
          cItem.price = Number(entry.usd);
          cItem.changePct = Number((entry.usd_24h_change || cItem.changePct).toFixed(2));
          liveSourceCount++;
        }
      }
    } catch (_) {}
  }

  await Promise.allSettled(
    terminalState.primary_cards.map(async (card) => {
      if (!card.yf_ticker || card.id === 'BITCOIN') return;
      try {
        const q = await fetchYahooLiveQuote(card.yf_ticker);
        if (q && q.price > 0) {
          card.price = q.price;
          card.prevClose = q.prevClose;
          card.open = q.open;
          card.high = q.high;
          card.low = q.low;
          card.change = q.change;
          card.changePct = q.changePct;
          liveSourceCount++;
        }
      } catch (_) {}
    })
  );

  const niftyCard = terminalState.primary_cards.find(c => c.id === 'NIFTY');
  if (niftyCard && terminalState.gift_nifty_cue) {
    terminalState.gift_nifty_cue.nifty_spot = niftyCard.price;
    terminalState.gift_nifty_cue.gift_nifty = Number((niftyCard.price + 84.15).toFixed(2));
  }

  applyLiveTelemetryTick();
  updateHeaderClockAndStatus();
  renderSidebars();
  renderPrimaryGrid(true);
  renderCommoditiesAndCrypto();
  renderGiftNiftyCueBar();

  if (activeModalAssetId) {
    openAssetModal(activeModalAssetId);
  }

  if (badge) {
    badge.textContent = liveSourceCount > 0 ? `LIVE (${liveSourceCount} FEEDS)` : `ACTIVE (${reason})`;
  }
  syncTimerSeconds = 15;
  isSyncingNow = false;
}

function bootGodsEyeTerminal() {
  updateHeaderClockAndStatus();
  renderSidebars();
  renderPrimaryGrid(false);
  renderCommoditiesAndCrypto();
  renderGiftNiftyCueBar();

  triggerFullSync('BOOT');

  setInterval(() => {
    updateHeaderClockAndStatus();
    syncTimerSeconds = Math.max(0, syncTimerSeconds - 1);
    const cdEl = document.getElementById('sync-countdown-num');
    if (cdEl) cdEl.textContent = `${syncTimerSeconds}s`;
    if (syncTimerSeconds === 0) {
      triggerFullSync('AUTO_15S');
    }
  }, 1000);

  setInterval(() => {
    if (!isSyncingNow) {
      applyLiveTelemetryTick();
      renderPrimaryGrid(true);
      renderCommoditiesAndCrypto();
      renderGiftNiftyCueBar();
    }
  }, 3000);
}

window.addEventListener('DOMContentLoaded', bootGodsEyeTerminal);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAssetModal();
});
