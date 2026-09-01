/* ============================================================
   Asha Fasteners — shared behaviour
   Header, theme, mobile nav, reveal-on-scroll, product card
   rendering and the quick-view modal.
   ============================================================ */

/* ---------- icons ------------------------------------------ */
const ICON = {
  arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  bolt:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 7v10l8 5 8-5V7z"/><circle cx="12" cy="12" r="3.4"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  close:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  chev:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevR:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
  grid:   '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/></svg>',
  list:   '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="4" rx="1.6"/><rect x="3" y="10" width="18" height="4" rx="1.6"/><rect x="3" y="16" width="18" height="4" rx="1.6"/></svg>',
  eye:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  menu:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  moon:   '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>',
  sun:    '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/></svg>',
  phone:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
  mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 7 9 6 9-6"/></svg>',
  pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.8"/></svg>',
  check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5.5 5.5L20 6.5"/></svg>',
  info:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9.2"/><path d="M12 11v5.5M12 7.6h.01"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 9 7.5 10.2 4.3-1.2 7.5-5.5 7.5-10.2v-6Z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>',
  truck:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6.5h11v10H2z"/><path d="M13 10h4l3 3.2v3.3h-7z"/><circle cx="6.5" cy="18.5" r="1.9"/><circle cx="17" cy="18.5" r="1.9"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2.8 9 5-9 5-9-5z"/><path d="m3 12.6 9 5 9-5M3 16.9l9 5 9-5"/></svg>',
  ruler:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7.5" width="20" height="9" rx="2"/><path d="M6.5 7.5v3M10 7.5v4.5M13.5 7.5v3M17 7.5v4.5"/></svg>',
  chat:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.4 9.4 0 0 1-3.3-.6L3 21l1.8-5a8.2 8.2 0 0 1-.8-3.6 8.4 8.4 0 0 1 9-8.4 8.4 8.4 0 0 1 8 7.5Z"/></svg>'
};

/* ---------- helpers ---------------------------------------- */
const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
  ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

const catName  = id => (CATEGORIES.find(c => c.id === id) || {}).name || id;
const byId     = id => PRODUCTS.find(p => p.id === id);
const countIn  = id => PRODUCTS.filter(p => p.category === id).length;

/* ---------- theme ------------------------------------------ */
(function theme() {
  let saved = null;
  try { saved = localStorage.getItem('af-theme'); } catch (e) {}
  const sys = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', saved || (sys ? 'dark' : 'light'));
})();

function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('af-theme', next); } catch (e) {}
}

/* ---------- header + footer -------------------------------- */
const NAV = [
  { href: 'index.html',    label: 'Home' },
  { href: 'products.html', label: 'Products' },
  { href: 'about.html',    label: 'About' },
  { href: 'contact.html',  label: 'Contact' }
];

function currentPage() {
  const f = location.pathname.split('/').pop();
  return !f || f === '' ? 'index.html' : f;
}

function renderHeader() {
  const here = currentPage();
  const links = NAV.map(n =>
    `<a href="${n.href}"${n.href === here ? ' class="is-active" aria-current="page"' : ''}>${n.label}</a>`).join('');

  const el = $('#hdr');
  if (!el) return;
  el.className = 'hdr';
  el.innerHTML = `
    <div class="wrap hdr__bar">
      <a class="brand" href="index.html" aria-label="${esc(COMPANY.name)} home">
        <span class="brand__mark">${ICON.bolt}</span>
        <span class="brand__name">Asha Fasteners<span>Ludhiana · Since ${COMPANY.since}</span></span>
      </a>
      <nav class="nav" aria-label="Primary">${links}</nav>
      <div class="hdr__actions">
        <a class="btn btn--primary btn--sm" href="contact.html">Get a quote</a>
        <button class="icon-btn theme-btn" id="themeBtn" aria-label="Switch colour theme">${ICON.moon}${ICON.sun}</button>
        <button class="icon-btn burger" id="burger" aria-label="Open menu" aria-expanded="false">${ICON.menu}</button>
      </div>
    </div>`;

  const mnav = document.createElement('div');
  mnav.className = 'mnav';
  mnav.id = 'mnav';
  mnav.innerHTML = NAV.map(n =>
    `<a href="${n.href}"${n.href === here ? ' class="is-active"' : ''}>${n.label}${ICON.chevR}</a>`).join('') +
    `<div class="mnav__foot">
       <p><b>${esc(COMPANY.contactPerson)}</b> · ${esc(COMPANY.contactRole)}</p>
       <p><a href="tel:${esc(COMPANY.phoneHref)}">${esc(COMPANY.phone)}</a></p>
       <p><a href="mailto:${esc(COMPANY.email)}">${esc(COMPANY.email)}</a></p>
     </div>`;
  el.after(mnav);

  $('#themeBtn').addEventListener('click', toggleTheme);
  const burger = $('#burger');
  burger.addEventListener('click', () => {
    const open = mnav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.innerHTML = open ? ICON.close : ICON.menu;
    document.body.style.overflow = open ? 'hidden' : '';
  });

  addEventListener('scroll', () => {
    el.classList.toggle('is-stuck', scrollY > 8);
    const bar = $('#progress');
    if (bar) {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
    }
  }, { passive: true });
}

function renderFooter() {
  const el = $('#ftr');
  if (!el) return;
  const cats = CATEGORIES.slice(0, 6).map(c =>
    `<li><a href="products.html?cat=${c.id}">${esc(c.name)}</a></li>`).join('');
  el.className = 'ftr';
  el.innerHTML = `
    <div class="wrap">
      <div class="ftr__grid">
        <div>
          <a class="brand" href="index.html">
            <span class="brand__mark">${ICON.bolt}</span>
            <span class="brand__name">Asha Fasteners<span>Ludhiana · Since ${COMPANY.since}</span></span>
          </a>
          <p class="ftr__about">${esc(COMPANY.tagline)}. Manufacturer, wholesaler and distributor of MS nuts, bolts, washers, screws and anchor fasteners.</p>
          <a class="link-arrow" href="products.html">Browse the catalogue ${ICON.arrow}</a>
        </div>
        <div>
          <h4>Catalogue</h4>
          <ul>${cats}<li><a href="products.html">All products</a></li></ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="about.html#quality">Quality</a></li>
            <li><a href="about.html#industries">Industries</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="contact.html#enquiry">Request a quote</a></li>
          </ul>
        </div>
        <div>
          <h4>Reach us</h4>
          <p class="ftr__meta">
            <b>${esc(COMPANY.contactPerson)}</b> · ${esc(COMPANY.contactRole)}<br>
            ${esc(COMPANY.address).replace(/\n/g, '<br>')}<br><br>
            <a href="tel:${esc(COMPANY.phoneHref)}">${esc(COMPANY.phone)}</a><br>
            <a href="mailto:${esc(COMPANY.email)}">${esc(COMPANY.email)}</a><br><br>
            <b>GST</b> ${esc(COMPANY.gst)}
          </p>
        </div>
      </div>
      <div class="ftr__bar">
        <span>© ${new Date().getFullYear()} ${esc(COMPANY.name)}. All rights reserved.</span>
        <span>${esc(COMPANY.nature)}</span>
      </div>
    </div>`;
}

/* ---------- floating enquiry button ------------------------ */
function renderFab() {
  if (currentPage() === 'contact.html') return;
  const a = document.createElement('a');
  a.className = 'fab';
  a.href = 'contact.html#enquiry';
  a.innerHTML = `${ICON.chat}<span>Enquire</span>`;
  document.body.appendChild(a);
  addEventListener('scroll', () => a.classList.toggle('is-on', scrollY > 520), { passive: true });
}

/* ---------- reveal on scroll -------------------------------- */
function initReveal(root) {
  const items = $$('.rv', root || document).filter(n => !n.classList.contains('is-in'));
  if (!('IntersectionObserver' in window)) { items.forEach(n => n.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .06 });
  items.forEach(n => io.observe(n));
}

/* ---------- product visual --------------------------------- */
function productVisual(p, cls) {
  if (p.image) {
    return `<img src="assets/img/${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" decoding="async"
              onerror="this.outerHTML=afIllustration('${esc(p.shape)}',{label:${JSON.stringify(p.name)}})">`;
  }
  return afIllustration(p.shape, { label: p.name });
}

/* ---------- product card ----------------------------------- */
function productCard(p, i) {
  const d = 'rv-d' + ((i % 4) + 1);
  return `
  <article class="pcard rv ${d}" data-id="${esc(p.id)}">
    <div class="pcard__media">
      ${p.featured ? '<span class="pcard__badge pcard__badge--hot">Best seller</span>' : ''}
      ${productVisual(p)}
      <button class="pcard__quick" data-quick="${esc(p.id)}" aria-label="Quick view: ${esc(p.name)}">${ICON.eye}</button>
    </div>
    <div class="pcard__body">
      <span class="pcard__cat">${esc(catName(p.category))}</span>
      <h3 class="pcard__name">${esc(p.name)}</h3>
      <p class="pcard__spec">${esc(p.tagline)}</p>
      <div class="pcard__foot">
        <span class="pcard__size"><b>${esc(p.sizes.split('·')[0].trim())}</b></span>
        <span class="tag">${esc(p.standard.split('/')[0].trim())}</span>
      </div>
    </div>
    <a class="pcard__link" href="product.html?id=${encodeURIComponent(p.id)}"><span class="sr">View ${esc(p.name)}</span></a>
  </article>`;
}

/* ---------- quick view modal -------------------------------- */
function initModal() {
  const m = document.createElement('div');
  m.className = 'modal';
  m.id = 'quick';
  m.setAttribute('role', 'dialog');
  m.setAttribute('aria-modal', 'true');
  m.innerHTML = '<div class="modal__box" style="position:relative"></div>';
  document.body.appendChild(m);

  const box = $('.modal__box', m);
  let lastFocus = null;

  function close() {
    m.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  window.openQuickView = function (id) {
    const p = byId(id);
    if (!p) return;
    lastFocus = document.activeElement;
    box.innerHTML = `
      <button class="modal__close" aria-label="Close">${ICON.close}</button>
      <div class="modal__grid">
        <div class="modal__media">${productVisual(p)}</div>
        <div class="modal__body">
          <span class="eyebrow">${esc(catName(p.category))}</span>
          <h3>${esc(p.name)}</h3>
          <p class="lede" style="font-size:.98rem">${esc(p.desc)}</p>
          <dl class="specs">
            <div><dt>Size range</dt><dd>${esc(p.sizes)}</dd></div>
            <div><dt>Standard</dt><dd>${esc(p.standard)}</dd></div>
            <div><dt>Material</dt><dd>${esc(p.material)}</dd></div>
            <div><dt>Grade</dt><dd>${esc(p.grade)}</dd></div>
            <div><dt>Finish</dt><dd>${esc(p.finish)}</dd></div>
          </dl>
          <div class="tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <div class="pdp__cta">
            <a class="btn btn--primary" href="product.html?id=${encodeURIComponent(p.id)}">Full details ${ICON.arrow}</a>
            <a class="btn btn--ghost" href="contact.html?product=${encodeURIComponent(p.id)}#enquiry">Request a quote</a>
          </div>
        </div>
      </div>`;
    m.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    $('.modal__close', box).addEventListener('click', close);
    $('.modal__close', box).focus();
  };

  m.addEventListener('click', e => { if (e.target === m) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && m.classList.contains('is-open')) close(); });

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-quick]');
    if (b) { e.preventDefault(); openQuickView(b.getAttribute('data-quick')); }
  });
}

/* ---------- boot ------------------------------------------- */
function boot() {
  afInstallDefs();
  const bar = document.createElement('div');
  bar.className = 'progress'; bar.id = 'progress';
  document.body.appendChild(bar);
  renderHeader();
  renderFooter();
  renderFab();
  initModal();
  initReveal();
}
document.addEventListener('DOMContentLoaded', boot);
