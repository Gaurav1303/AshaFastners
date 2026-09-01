/* ============================================================
   Asha Fasteners — generated product illustrations
   ------------------------------------------------------------
   Every product renders a vector technical drawing of its own
   fastener type. They are resolution independent, weigh nothing
   and stay legible in light and dark themes.

   When real photography arrives, set `image` on the product in
   data.js — the card uses the photo and falls back to the
   drawing if it is missing or fails to load.
   ============================================================ */

/* Shared gradients live once in the document; every drawing
   references them by id, so N cards cost one defs block. */
const AF_DEFS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
  <linearGradient id="afTop" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#fdfefe"/><stop offset=".38" stop-color="#d6dce4"/><stop offset="1" stop-color="#a5b0bd"/>
  </linearGradient>
  <linearGradient id="afSide" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#98a3b1"/><stop offset="1" stop-color="#5a6674"/>
  </linearGradient>
  <linearGradient id="afSideL" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b6c0cc"/><stop offset="1" stop-color="#78838f"/>
  </linearGradient>
  <linearGradient id="afShank" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6d7885"/><stop offset=".28" stop-color="#e3e9ef"/>
    <stop offset=".62" stop-color="#aab4c0"/><stop offset="1" stop-color="#5d6875"/>
  </linearGradient>
  <linearGradient id="afZinc" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#fff8e6"/><stop offset=".4" stop-color="#e8d9ae"/><stop offset="1" stop-color="#b39a63"/>
  </linearGradient>
  <linearGradient id="afZincSide" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c9b57f"/><stop offset="1" stop-color="#8a7644"/>
  </linearGradient>
  <linearGradient id="afAccent" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ff8a4c"/><stop offset="1" stop-color="#e14a10"/>
  </linearGradient>
  <radialGradient id="afBore" cx=".42" cy=".3" r=".85">
    <stop offset="0" stop-color="#2b333d"/><stop offset="1" stop-color="#4d5865"/>
  </radialGradient>
</defs></svg>`;

/* -------- small builders ------------------------------------ */

/* Hexagon flattened into a 3/4 view, extruded downward. */
function afHexBody(cx, cy, r, depth, opts) {
  opts = opts || {};
  const k = opts.squash === undefined ? 0.55 : opts.squash;
  const top = opts.top || 'url(#afTop)';
  const side = opts.side || 'url(#afSide)';
  const p = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (i * 60);
    p.push([cx + r * Math.cos(a), cy + r * k * Math.sin(a)]);
  }
  const pts = p.map(q => q[0].toFixed(1) + ',' + q[1].toFixed(1)).join(' ');
  /* The skirt is the three faces below the widest line: left (p3) round
     the bottom (p2, p1) to right (p0). Extruding the far edges instead
     turns the nut inside out. */
  const skirt = `M${p[3][0]},${p[3][1]} L${p[3][0]},${p[3][1] + depth}
                 L${p[2][0]},${p[2][1] + depth} L${p[1][0]},${p[1][1] + depth}
                 L${p[0][0]},${p[0][1] + depth} L${p[0][0]},${p[0][1]}
                 L${p[1][0]},${p[1][1]} L${p[2][0]},${p[2][1]} Z`;
  return `<path d="${skirt}" fill="${side}"/>
          <polygon points="${pts}" fill="${top}"/>
          <line x1="${p[1][0]}" y1="${p[1][1]}" x2="${p[1][0]}" y2="${p[1][1] + depth}" stroke="#000" stroke-opacity=".16"/>
          <line x1="${p[2][0]}" y1="${p[2][1]}" x2="${p[2][0]}" y2="${p[2][1] + depth}" stroke="#000" stroke-opacity=".16"/>`;
}

/* Threaded bore seen from the 3/4 angle. */
function afBore(cx, cy, rx, ry) {
  let t = '';
  for (let i = 1; i <= 3; i++) {
    t += `<ellipse cx="${cx}" cy="${cy + i * 3.2}" rx="${rx - i * 0.6}" ry="${ry - i * 0.4}"
           fill="none" stroke="#fff" stroke-opacity=".10"/>`;
  }
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#afBore)"/>${t}
          <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="#000" stroke-opacity=".25"/>`;
}

/* Vertical threaded shank with a rolled-thread hatch. */
function afShank(x, y, w, len, pitch) {
  pitch = pitch || 9;
  let th = '';
  for (let i = 0; i <= len / pitch; i++) {
    const yy = y + i * pitch;
    if (yy > y + len - 2) break;
    th += `<path d="M${x},${yy} L${x + w},${yy + pitch * 0.42}" stroke="#48525e" stroke-opacity=".55" stroke-width="1.6" fill="none"/>`;
  }
  return `<g><rect x="${x}" y="${y}" width="${w}" height="${len}" fill="url(#afShank)"/>
    <g clip-path="inset(0)">${th}</g>
    <path d="M${x},${y + len - 7} L${x + w / 2},${y + len} L${x + w},${y + len - 7} L${x + w},${y + len - 12} L${x},${y + len - 12} Z" fill="url(#afShank)"/>
    <rect x="${x}" y="${y}" width="${w}" height="${len - 6}" fill="none" stroke="#000" stroke-opacity=".18"/></g>`;
}

/* Round disc in 3/4 view with a given thickness. */
function afDisc(cx, cy, rx, ry, depth, fillTop, fillSide) {
  return `<path d="M${cx - rx},${cy} L${cx - rx},${cy + depth}
            A${rx},${ry} 0 0 0 ${cx + rx},${cy + depth} L${cx + rx},${cy} Z" fill="${fillSide || 'url(#afSide)'}"/>
          <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fillTop || 'url(#afTop)'}"/>`;
}

/* -------- the drawings -------------------------------------- */

const AF_SHAPES = {

  hexnut: () => `${afHexBody(100, 84, 62, 32)}${afBore(100, 84, 29, 16)}`,

  flangenut: () => `
    ${afDisc(100, 104, 76, 20, 12, 'url(#afTop)')}
    <g opacity=".5">${Array.from({length:26},(_,i)=>{const a=Math.PI*i/13;const x1=100+72*Math.cos(a),y1=104+18*Math.sin(a);const x2=100+58*Math.cos(a),y2=104+15*Math.sin(a);return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#5a6674"/>`}).join('')}</g>
    ${afHexBody(100, 74, 50, 30)}${afBore(100, 74, 24, 13)}`,

  longnut: () => `${afHexBody(100, 46, 46, 96)}${afBore(100, 46, 21, 12)}`,

  barrelnut: () => `
    ${afDisc(100, 52, 40, 15, 96, 'url(#afTop)')}
    <ellipse cx="100" cy="148" rx="40" ry="15" fill="url(#afSide)"/>
    <rect x="82" y="45" width="36" height="6" rx="3" fill="#3f4954" opacity=".85"/>
    ${afBore(100, 108, 17, 17)}
    <rect x="62" y="96" width="76" height="1.5" fill="#000" opacity=".12"/>`,

  cagenut: () => `
    <path d="M42,58 h116 v84 h-116 z" fill="none" stroke="#8a96a4" stroke-width="7" stroke-linejoin="round"/>
    <path d="M42,58 h116 v18 h-116 z M42,124 h116 v18 h-116 z" fill="url(#afSideL)"/>
    ${afHexBody(100, 92, 34, 22, {squash:0.62})}
    <rect x="70" y="70" width="60" height="60" rx="4" fill="none" stroke="#000" stroke-opacity=".12"/>
    ${afBore(100, 92, 17, 11)}`,

  insertnut: () => `
    ${afDisc(100, 48, 40, 14, 92, 'url(#afTop)')}
    <g fill="url(#afSideL)">${Array.from({length:5},(_,i)=>`<path d="M60,${62+i*20} l80,-9 v11 l-80,9 z"/>`).join('')}</g>
    ${afBore(100, 48, 24, 9)}
    <ellipse cx="100" cy="140" rx="40" ry="14" fill="url(#afSide)"/>`,

  teenut: () => `
    ${afDisc(100, 122, 66, 19, 10, 'url(#afTop)')}
    <path d="M46,120 l-6,-56 12,4 6,50 z M154,120 l6,-56 -12,4 -6,50 z" fill="url(#afSideL)"/>
    ${afDisc(100, 62, 26, 10, 60, 'url(#afTop)')}
    ${afBore(100, 62, 16, 7)}`,

  rivetnut: () => `
    ${afDisc(100, 44, 44, 15, 12, 'url(#afTop)')}
    ${afDisc(100, 60, 30, 11, 46, 'url(#afTop)')}
    <path d="M70,106 q30,26 60,0 v26 q-30,20 -60,0 z" fill="url(#afSideL)"/>
    ${afBore(100, 44, 24, 9)}`,

  springnut: () => `
    ${afHexBody(100, 62, 52, 26, {squash:0.5})}
    ${afBore(100, 62, 22, 11)}
    <path d="M74,94 q26,26 52,0 v14 q-26,26 -52,0 z" fill="url(#afSideL)"/>
    <path d="M78,112 q22,22 44,0 v12 q-22,22 -44,0 z" fill="url(#afSideL)" opacity=".78"/>
    <path d="M82,130 q18,18 36,0 v10 q-18,18 -36,0 z" fill="url(#afSideL)" opacity=".55"/>`,

  channelnut: () => `
    <path d="M28,112 h144 v20 h-144 z" fill="url(#afSide)"/>
    <path d="M28,96 h144 v16 h-144 z" fill="url(#afSideL)"/>
    <g fill="url(#afTop)">${Array.from({length:9},(_,i)=>`<rect x="${34+i*15}" y="88" width="9" height="10" rx="2"/>`).join('')}</g>
    ${afHexBody(100, 58, 42, 28, {squash:0.5})}
    ${afBore(100, 58, 18, 9)}`,

  tapernut: () => `
    <ellipse cx="100" cy="150" rx="50" ry="17" fill="url(#afSide)"/>
    <path d="M50,150 L74,72 L126,72 L150,150 A50,17 0 0 1 50,150 Z" fill="url(#afSide)"/>
    <path d="M50,150 L74,72 L100,72 L100,167 A50,17 0 0 1 50,150 Z" fill="url(#afSideL)"/>
    ${afHexBody(100, 72, 34, 15, {squash:0.5})}
    ${afBore(100, 72, 15, 8)}`,

  anchornut: () => `
    <path d="M24,84 h152 v34 h-152 z" rx="8" fill="url(#afTop)"/>
    <path d="M24,118 h152 v10 h-152 z" fill="url(#afSide)"/>
    <circle cx="44" cy="101" r="9" fill="url(#afBore)"/>
    <circle cx="156" cy="101" r="9" fill="url(#afBore)"/>
    ${afHexBody(100, 74, 30, 22, {squash:0.55})}
    ${afBore(100, 74, 14, 8)}`,

  wingnut: () => `
    <path d="M96,96 C64,96 30,84 26,60 C24,42 44,36 60,48 C74,58 86,74 96,88 Z" fill="url(#afSideL)"/>
    <path d="M104,96 C136,96 170,84 174,60 C176,42 156,36 140,48 C126,58 114,74 104,88 Z" fill="url(#afSideL)"/>
    ${afDisc(100, 96, 34, 13, 40, 'url(#afTop)')}
    ${afBore(100, 96, 18, 7)}`,

  domenut: () => `
    <path d="M62,110 v-16 a38,42 0 0 1 76,0 v16 z" fill="url(#afTop)"/>
    ${afHexBody(100, 110, 44, 34, {squash:0.5})}
    <ellipse cx="100" cy="110" rx="44" ry="22" fill="none" stroke="#000" stroke-opacity=".1"/>
    <ellipse cx="84" cy="80" rx="12" ry="18" fill="#fff" opacity=".38"/>`,

  nylocnut: () => `
    ${afHexBody(100, 92, 58, 30)}
    ${afDisc(100, 70, 42, 14, 12, 'url(#afAccent)', 'url(#afAccent)')}
    ${afBore(100, 70, 22, 8)}`,

  hexbolt: () => `
    ${afShank(88, 78, 24, 104)}
    ${afHexBody(100, 62, 52, 22, {squash:0.5})}
    <ellipse cx="100" cy="62" rx="24" ry="7" fill="#fff" opacity=".22"/>`,

  allenbolt: () => `
    ${afShank(88, 76, 24, 106)}
    ${afDisc(100, 58, 42, 15, 22, 'url(#afTop)')}
    ${(() => { const p=[];for(let i=0;i<6;i++){const a=Math.PI/180*(i*60+30);p.push((100+20*Math.cos(a)).toFixed(1)+','+(58+11*Math.sin(a)).toFixed(1));}
      return `<polygon points="${p.join(' ')}" fill="url(#afBore)"/>`; })()}`,

  cskbolt: () => `
    ${afShank(88, 84, 24, 98)}
    <path d="M40,52 L160,52 L118,88 L82,88 Z" fill="url(#afTop)"/>
    <path d="M40,52 L160,52 L160,60 L118,94 L82,94 L40,60 Z" fill="url(#afSide)" opacity=".55"/>
    <ellipse cx="100" cy="52" rx="60" ry="12" fill="url(#afTop)"/>
    ${(() => { const p=[];for(let i=0;i<6;i++){const a=Math.PI/180*(i*60+30);p.push((100+20*Math.cos(a)).toFixed(1)+','+(52+10*Math.sin(a)).toFixed(1));}
      return `<polygon points="${p.join(' ')}" fill="url(#afBore)"/>`; })()}`,

  squarebolt: () => `
    ${afShank(88, 80, 24, 102)}
    <path d="M44,62 L100,44 L156,62 L100,80 Z" fill="url(#afTop)"/>
    <path d="M44,62 L100,80 L100,104 L44,86 Z" fill="url(#afSideL)"/>
    <path d="M156,62 L100,80 L100,104 L156,86 Z" fill="url(#afSide)"/>`,

  flangebolt: () => `
    ${afShank(88, 88, 24, 94)}
    ${afDisc(100, 76, 68, 18, 10, 'url(#afTop)')}
    <g opacity=".45">${Array.from({length:24},(_,i)=>{const a=Math.PI*i/12;return `<line x1="${100+64*Math.cos(a)}" y1="${76+17*Math.sin(a)}" x2="${100+50*Math.cos(a)}" y2="${76+13*Math.sin(a)}" stroke="#5a6674"/>`}).join('')}</g>
    ${afHexBody(100, 58, 40, 22, {squash:0.5})}`,

  studbolt: () => `${afShank(86, 22, 28, 156, 10)}
    <rect x="86" y="86" width="28" height="28" fill="url(#afShank)" opacity=".0"/>`,

  nutboltset: () => `
    ${afShank(62, 66, 22, 108)}
    ${afHexBody(73, 52, 42, 20, {squash:0.5})}
    <g transform="translate(52,26) scale(.62)">${afHexBody(150, 150, 56, 28)}${afBore(150, 150, 26, 15)}</g>
    <g transform="translate(96,104) scale(.5)">${afDisc(100, 100, 76, 26, 10, 'url(#afTop)')}<ellipse cx="100" cy="100" rx="34" ry="12" fill="url(#afBore)"/></g>`,

  eyebolt: () => `
    ${afShank(88, 112, 24, 70)}
    <circle cx="100" cy="66" r="42" fill="none" stroke="url(#afSide)" stroke-width="22"/>
    <circle cx="100" cy="66" r="42" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="5"/>
    ${afDisc(100, 108, 30, 10, 8, 'url(#afTop)')}`,

  ubolt: () => `
    <path d="M56,178 L56,86 A44,44 0 0 1 144,86 L144,178" fill="none" stroke="url(#afSide)" stroke-width="20" stroke-linecap="round"/>
    <path d="M56,178 L56,86 A44,44 0 0 1 144,86 L144,178" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="6"/>
    <g transform="translate(-44,86) scale(.42)">${afHexBody(240, 150, 56, 30)}${afBore(240, 150, 26, 15)}</g>
    <g transform="translate(100,86) scale(.42)">${afHexBody(104, 150, 56, 30)}${afBore(104, 150, 26, 15)}</g>`,

  jbolt: () => `
    <path d="M112,20 L112,132 A34,34 0 0 1 44,132 L44,112" fill="none" stroke="url(#afSide)" stroke-width="20" stroke-linecap="round"/>
    ${afShank(102, 20, 20, 62, 9)}
    <g transform="translate(62,66) scale(.4)">${afHexBody(126, 150, 56, 30)}${afBore(126, 150, 26, 15)}</g>`,

  washer: () => `
    ${afDisc(100, 96, 78, 27, 9, 'url(#afTop)')}
    <ellipse cx="100" cy="96" rx="34" ry="12" fill="url(#afBore)"/>
    <path d="M66,96 A34,12 0 0 0 134,96 L134,105 A34,12 0 0 1 66,105 Z" fill="#39424d"/>
    <ellipse cx="100" cy="96" rx="78" ry="27" fill="none" stroke="#000" stroke-opacity=".16"/>`,

  heavywasher: () => `
    ${afDisc(100, 88, 78, 27, 20, 'url(#afTop)')}
    <ellipse cx="100" cy="88" rx="32" ry="11" fill="url(#afBore)"/>
    <path d="M68,88 A32,11 0 0 0 132,88 L132,108 A32,11 0 0 1 68,108 Z" fill="#39424d"/>
    <ellipse cx="100" cy="88" rx="78" ry="27" fill="none" stroke="#000" stroke-opacity=".18"/>`,

  springwasher: () => `
    <path d="M88,133 A64,24 0 1 1 112,115" fill="none" stroke="url(#afSide)"
          stroke-width="18" stroke-linecap="round"/>
    <path d="M88,133 A64,24 0 1 1 112,115" fill="none" stroke="#fff" stroke-opacity=".26"
          stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="88" cy="133" rx="9" ry="8" fill="url(#afSideL)"/>
    <ellipse cx="112" cy="115" rx="9" ry="8" fill="url(#afTop)"/>`,

  anchorbolt: () => `
    ${afShank(90, 18, 20, 74, 9)}
    <rect x="88" y="92" width="24" height="52" fill="url(#afShank)"/>
    <path d="M88,144 L112,144 L118,176 L82,176 Z" fill="url(#afSideL)"/>
    <path d="M76,120 L88,112 L88,150 L76,158 Z" fill="url(#afAccent)"/>
    <path d="M124,120 L112,112 L112,150 L124,158 Z" fill="url(#afAccent)" opacity=".8"/>
    <g transform="translate(58,22) scale(.36)">${afHexBody(116, 150, 56, 30)}${afBore(116, 150, 26, 15)}</g>
    <g transform="translate(64,52) scale(.34)">${afDisc(106, 100, 76, 26, 10, 'url(#afTop)')}</g>`,

  dropinanchor: () => `
    ${afDisc(100, 46, 40, 14, 96, 'url(#afTop)')}
    ${afBore(100, 46, 26, 10)}
    <g fill="#000" opacity=".14">${Array.from({length:4},(_,i)=>`<rect x="60" y="${74+i*16}" width="80" height="3"/>`).join('')}</g>
    <path d="M60,120 L140,120 L146,156 A46,16 0 0 1 54,156 Z" fill="url(#afSideL)"/>
    <rect x="96" y="120" width="8" height="44" fill="#3d4650" opacity=".6"/>`,

  sleeveanchor: () => `
    ${afShank(90, 16, 20, 56, 9)}
    <g transform="translate(60,14) scale(.34)">${afHexBody(118, 150, 56, 30)}${afBore(118, 150, 26, 15)}</g>
    <path d="M78,72 L122,72 L122,150 L78,150 Z" fill="url(#afSideL)"/>
    <g fill="#000" opacity=".18">${Array.from({length:6},(_,i)=>`<rect x="78" y="${82+i*11}" width="44" height="2.5"/>`).join('')}</g>
    <path d="M78,150 L122,150 L114,182 L86,182 Z" fill="url(#afSide)"/>
    <rect x="96" y="150" width="8" height="32" fill="#39424d"/>`,

  pinanchor: () => `
    ${afDisc(100, 34, 30, 11, 8, 'url(#afTop)')}
    <rect x="92" y="42" width="16" height="126" fill="url(#afShank)"/>
    <path d="M74,60 L92,60 L92,168 L80,150 Z" fill="url(#afSideL)"/>
    <path d="M126,60 L108,60 L108,168 L120,150 Z" fill="url(#afSide)"/>
    <path d="M92,132 L74,150 L74,120 Z M108,132 L126,150 L126,120 Z" fill="url(#afAccent)"/>`,

  threadedrod: () => `
    ${afShank(60, 12, 22, 176, 11)}
    ${afShank(118, 12, 22, 176, 11)}`,

  screw: () => `
    <path d="M92,60 L108,60 L104,180 L96,180 Z" fill="url(#afShank)"/>
    <g>${Array.from({length:12},(_,i)=>`<path d="M${91-i*0.3},${72+i*9} L${109-i*0.5},${76+i*9}" stroke="#5a6674" stroke-width="3" fill="none"/>`).join('')}</g>
    ${afDisc(100, 52, 46, 16, 12, 'url(#afTop)')}
    <path d="M76,48 h48 v8 h-48 z M96,32 v40 h8 v-40 z" fill="url(#afBore)" transform="rotate(45 100 52)"/>`,

  selfdrill: () => `
    <path d="M92,66 L108,66 L104,150 L96,150 Z" fill="url(#afShank)"/>
    <g>${Array.from({length:9},(_,i)=>`<path d="M${91},${76+i*9} L${109},${80+i*9}" stroke="#5a6674" stroke-width="3" fill="none"/>`).join('')}</g>
    <path d="M96,150 L104,150 L108,168 L100,184 L92,168 Z" fill="url(#afAccent)"/>
    ${afHexBody(100, 52, 40, 18, {squash:0.5})}
    ${afDisc(100, 66, 52, 17, 6, 'url(#afZinc)', 'url(#afZincSide)')}`,

  grubscrew: () => `
    ${afDisc(100, 50, 34, 12, 100, 'url(#afTop)')}
    <g>${Array.from({length:9},(_,i)=>`<path d="M66,${64+i*11} L134,${69+i*11}" stroke="#5a6674" stroke-width="3.4" fill="none" opacity=".65"/>`).join('')}</g>
    ${(() => { const p=[];for(let i=0;i<6;i++){const a=Math.PI/180*(i*60+30);p.push((100+18*Math.cos(a)).toFixed(1)+','+(50+9*Math.sin(a)).toFixed(1));}
      return `<polygon points="${p.join(' ')}" fill="url(#afBore)"/>`; })()}
    <ellipse cx="100" cy="150" rx="34" ry="12" fill="url(#afSide)"/>`,

  gibolt: () => `
    ${(() => { const s = afShank(88, 78, 24, 104); return s.replace(/url\(#afShank\)/g, 'url(#afZinc)'); })()}
    ${afHexBody(100, 62, 52, 22, {squash:0.5, top:'url(#afZinc)', side:'url(#afZincSide)'})}
    <ellipse cx="100" cy="62" rx="24" ry="7" fill="#fff" opacity=".28"/>`,

  allenkey: () => `
    <path d="M62,28 L62,130 Q62,148 80,148 L150,148" fill="none" stroke="url(#afSide)"
          stroke-width="21" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M62,28 L62,130 Q62,148 80,148 L150,148" fill="none" stroke="#fff" stroke-opacity=".2"
          stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>
    ${(() => { const h=(cx,cy,r,k)=>{const q=[];for(let i=0;i<6;i++){const a=Math.PI/180*(i*60+30);
        q.push((cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*k*Math.sin(a)).toFixed(1));}
        return '<polygon points="'+q.join(' ')+'" fill="url(#afTop)"/>';};
      return h(62,28,11,0.62)+h(150,148,11,1); })()}`,

  spanner: () => `
    <g transform="rotate(-28 100 100)">
      <path d="M72,62 L72,36 a12,12 0 0 1 12,-12 l8,0 l0,20 l16,0 l0,-20 l8,0
               a12,12 0 0 1 12,12 l0,26 z" fill="url(#afSideL)"/>
      <rect x="88" y="56" width="24" height="104" rx="11" fill="url(#afSide)"/>
      <rect x="94" y="62" width="6" height="92" rx="3" fill="#fff" opacity=".22"/>
      <circle cx="100" cy="164" r="27" fill="url(#afSideL)"/>
      ${(() => { const q=[];for(let i=0;i<6;i++){const a=Math.PI/180*(i*60);
        q.push((100+15*Math.cos(a)).toFixed(1)+','+(164+15*Math.sin(a)).toFixed(1));}
        return '<polygon points="'+q.join(' ')+'" fill="url(#afBore)"/>'; })()}
    </g>`
};

/* Public API: markup for one product illustration. */
function afIllustration(shape, opts) {
  opts = opts || {};
  const draw = AF_SHAPES[shape] || AF_SHAPES.hexnut;
  return `<svg class="fx" viewBox="0 0 200 200" role="img" aria-label="${opts.label || 'Fastener illustration'}"
            preserveAspectRatio="xMidYMid meet" focusable="false">
            <g class="fx-art">${draw()}</g>
          </svg>`;
}

/* Inject the shared gradient defs once per document. */
function afInstallDefs() {
  if (document.getElementById('af-defs')) return;
  const holder = document.createElement('div');
  holder.id = 'af-defs';
  holder.setAttribute('aria-hidden', 'true');
  holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  holder.innerHTML = AF_DEFS;
  document.body.appendChild(holder);
}
