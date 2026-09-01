/* ============================================================
   Asha Fasteners — catalogue page
   Search, category filter, sort and grid/list view. State is
   mirrored into the URL so any view can be linked or shared.
   ============================================================ */

const state = { q: '', cat: 'all', sort: 'featured', view: 'grid' };

function readURL() {
  const u = new URLSearchParams(location.search);
  state.cat  = u.get('cat')  || 'all';
  state.q    = u.get('q')    || '';
  state.sort = u.get('sort') || 'featured';
  if (state.cat !== 'all' && !CATEGORIES.some(c => c.id === state.cat)) state.cat = 'all';
  try { state.view = localStorage.getItem('af-view') || 'grid'; } catch (e) {}
}

function writeURL() {
  const u = new URLSearchParams();
  if (state.cat !== 'all')      u.set('cat', state.cat);
  if (state.q)                  u.set('q', state.q);
  if (state.sort !== 'featured') u.set('sort', state.sort);
  const qs = u.toString();
  history.replaceState(null, '', qs ? '?' + qs : location.pathname);
}

/* Match across every field a buyer might type into the box —
   product name, category, standard, material, finish and tags. */
function matches(p, q) {
  if (!q) return true;
  const hay = [p.name, catName(p.category), p.tagline, p.standard, p.material,
               p.finish, p.grade, p.sizes, p.desc, p.tags.join(' ')].join(' ').toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every(t => hay.includes(t));
}

function selection() {
  let out = PRODUCTS.filter(p =>
    (state.cat === 'all' || p.category === state.cat) && matches(p, state.q));

  const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
  if (state.sort === 'az')       out.sort((a, b) => collator.compare(a.name, b.name));
  else if (state.sort === 'za')  out.sort((a, b) => collator.compare(b.name, a.name));
  else if (state.sort === 'cat') out.sort((a, b) => collator.compare(catName(a.category) + a.name,
                                                                    catName(b.category) + b.name));
  else out.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  return out;
}

function renderChips() {
  const all = PRODUCTS.length;
  const html = [`<button class="chip${state.cat === 'all' ? ' is-on' : ''}" data-cat="all">All products <span class="chip__n">${all}</span></button>`]
    .concat(CATEGORIES.map(c =>
      `<button class="chip${state.cat === c.id ? ' is-on' : ''}" data-cat="${c.id}">${esc(c.name)} <span class="chip__n">${countIn(c.id)}</span></button>`))
    .join('');
  $('#chips').innerHTML = html;
}

function render() {
  const list = selection();
  const grid = $('#grid');

  $('#count').innerHTML = list.length
    ? `Showing <b>${list.length}</b> of <b>${PRODUCTS.length}</b> products` +
      (state.cat !== 'all' ? ` in <b>${esc(catName(state.cat))}</b>` : '') +
      (state.q ? ` for “<b>${esc(state.q)}</b>”` : '')
    : 'No matches';

  if (!list.length) {
    grid.className = '';
    grid.innerHTML = `
      <div class="empty">
        <div class="empty__ico">${ICON.search}</div>
        <h3>Nothing matched that search</h3>
        <p>Try a different size, standard or fastener type — or tell us what you need and we will source it.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn btn--ghost" id="reset">Clear filters</button>
          <a class="btn btn--primary" href="contact.html#enquiry">Ask for a part ${ICON.arrow}</a>
        </div>
      </div>`;
    $('#reset').addEventListener('click', () => {
      state.q = ''; state.cat = 'all';
      $('#q').value = ''; $('.search__clear').classList.remove('is-on');
      renderChips(); render(); writeURL();
    });
    return;
  }

  grid.className = 'grid grid--4';
  grid.innerHTML = list.map(productCard).join('');
  initReveal(grid);
}

function initCatalogue() {
  readURL();

  const q = $('#q');
  q.value = state.q;
  $('.search__clear').classList.toggle('is-on', !!state.q);
  $('#sort').value = state.sort;
  $('.catalogue').classList.toggle('is-list', state.view === 'list');
  $$('.viewtog button').forEach(b => b.classList.toggle('is-on', b.dataset.view === state.view));

  renderChips();
  render();

  let t;
  q.addEventListener('input', () => {
    $('.search__clear').classList.toggle('is-on', !!q.value);
    clearTimeout(t);
    t = setTimeout(() => { state.q = q.value.trim(); render(); writeURL(); }, 160);
  });

  $('.search__clear').addEventListener('click', () => {
    q.value = ''; state.q = '';
    $('.search__clear').classList.remove('is-on');
    render(); writeURL(); q.focus();
  });

  $('#chips').addEventListener('click', e => {
    const b = e.target.closest('[data-cat]');
    if (!b) return;
    state.cat = b.dataset.cat;
    renderChips(); render(); writeURL();
  });

  $('#sort').addEventListener('change', e => { state.sort = e.target.value; render(); writeURL(); });

  $$('.viewtog button').forEach(b => b.addEventListener('click', () => {
    state.view = b.dataset.view;
    try { localStorage.setItem('af-view', state.view); } catch (e) {}
    $('.catalogue').classList.toggle('is-list', state.view === 'list');
    $$('.viewtog button').forEach(x => x.classList.toggle('is-on', x === b));
  }));

  /* "/" focuses search, the way a catalogue should behave */
  addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== q && !e.metaKey && !e.ctrlKey) {
      e.preventDefault(); q.focus(); q.select();
    }
  });
}

document.addEventListener('DOMContentLoaded', initCatalogue);
