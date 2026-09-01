/* ============================================================
   Asha Fasteners — product detail page (?id=<product-id>)
   ============================================================ */

function related(p) {
  const same = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id);
  const rest = PRODUCTS.filter(x => x.category !== p.category && x.id !== p.id && x.featured);
  return same.concat(rest).slice(0, 4);
}

function renderProduct() {
  const id = new URLSearchParams(location.search).get('id');
  const p = id && byId(id);
  const root = $('#pdp');

  if (!p) {
    root.innerHTML = `
      <div class="empty" style="padding-block:110px">
        <div class="empty__ico">${ICON.search}</div>
        <h3>We could not find that product</h3>
        <p>It may have been renamed. The full catalogue is a click away.</p>
        <a class="btn btn--primary" href="products.html">Browse all products ${ICON.arrow}</a>
      </div>`;
    return;
  }

  document.title = `${p.name} — ${COMPANY.name}`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', p.tagline + ' ' + p.desc.slice(0, 110));

  root.innerHTML = `
    <nav class="crumbs" aria-label="Breadcrumb">
      <a href="index.html">Home</a>${ICON.chevR}
      <a href="products.html">Products</a>${ICON.chevR}
      <a href="products.html?cat=${esc(p.category)}">${esc(catName(p.category))}</a>${ICON.chevR}
      <span class="muted">${esc(p.name)}</span>
    </nav>

    <div class="pdp">
      <div class="pdp__stage rv">${productVisual(p)}</div>

      <div class="rv rv-d1">
        <span class="eyebrow">${esc(catName(p.category))}</span>
        <h1 class="pdp__title">${esc(p.name)}</h1>
        <p class="lede">${esc(p.tagline)}</p>

        <div class="tags" style="margin-top:16px">
          ${p.featured ? '<span class="tag tag--accent">Best seller</span>' : ''}
          ${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
        </div>

        <p class="flow" style="margin-top:22px;color:var(--ink-2)">${esc(p.desc)}</p>

        <h3 style="margin-top:30px;font-size:1.05rem">Specification</h3>
        <dl class="specs">
          <div><dt>Size range</dt><dd>${esc(p.sizes)}</dd></div>
          <div><dt>Standard</dt><dd>${esc(p.standard)}</dd></div>
          <div><dt>Material</dt><dd>${esc(p.material)}</dd></div>
          <div><dt>Grade / class</dt><dd>${esc(p.grade)}</dd></div>
          <div><dt>Finish</dt><dd>${esc(p.finish)}</dd></div>
          <div><dt>Category</dt><dd>${esc(catName(p.category))}</dd></div>
        </dl>

        <div class="pdp__note">${ICON.info}
          <span>Sizes, grades and finishes outside this list are made to order.
          Send us a drawing or a sample and we will quote against it.</span></div>

        <div class="pdp__cta">
          <a class="btn btn--primary" href="contact.html?product=${encodeURIComponent(p.id)}#enquiry">Request a quote ${ICON.arrow}</a>
          <a class="btn btn--ghost" href="tel:${esc(COMPANY.phoneHref)}">${ICON.phone} Call ${esc(COMPANY.contactPerson)}</a>
        </div>
      </div>
    </div>`;

  const rel = related(p);
  const relRoot = $('#related');
  if (rel.length) {
    relRoot.innerHTML = `
      <div class="wrap">
        <div class="head-row">
          <div class="section-head rv">
            <span class="eyebrow">Goes with this</span>
            <h2>Related products</h2>
          </div>
          <a class="link-arrow" href="products.html?cat=${esc(p.category)}">All ${esc(catName(p.category))} ${ICON.arrow}</a>
        </div>
        <div class="grid grid--4">${rel.map(productCard).join('')}</div>
      </div>`;
  }
  initReveal();
}

document.addEventListener('DOMContentLoaded', renderProduct);
