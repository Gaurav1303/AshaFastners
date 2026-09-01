# Asha Fasteners — portfolio & product catalogue

A static marketing site with a searchable product catalogue for
Asha Fasteners, Ludhiana. No build step, no framework, no dependencies —
open `index.html` or drop the folder on any static host.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home — hero with rotating product showcase, category grid, best sellers, capabilities, industries |
| `products.html` | Full catalogue — search, category filter, sort, grid/list view, quick-view modal |
| `product.html` | Product detail, driven by `?id=<product-id>` |
| `about.html` | Company story, quality approach, industries, order process |
| `contact.html` | Enquiry form (email + WhatsApp), contact details, FAQ |

## Structure

```
assets/
  css/style.css          design tokens + all styling
  js/data.js             ← the catalogue. Edit this file to change products
  js/illustrations.js    generated SVG drawings of each fastener type
  js/app.js              header, footer, theme, product cards, quick-view modal
  js/catalogue.js        search / filter / sort for products.html
  js/product.js          detail page for product.html
  img/                   product photographs go here (see below)
```

## Editing the catalogue

`assets/js/data.js` is the single source of truth. Add an object to
`PRODUCTS` and it appears in the catalogue, search, filters, the category
counts and its own detail page — no other file needs touching.

```js
{
  id:'ms-hex-nut',                    // URL slug, must be unique
  name:'Mild Steel Hex Nut',
  category:'nuts',                    // must match an id in CATEGORIES
  shape:'hexnut',                     // key in illustrations.js
  featured:true,                      // shows on the home page + "Best seller" badge
  tagline:'One-line summary for the card.',
  sizes:'M3 – M64',
  standard:'DIN 934 / IS 1364',
  material:'Mild Steel',
  finish:'Self, Zinc, HDG, Black',
  grade:'Class 4 / 5 / 8',
  tags:['Hex','DIN 934','MS'],
  desc:'Full paragraph shown on the detail page and in quick view.'
}
```

Company details (address, phone, email, GST) live in the `COMPANY` object
at the bottom of the same file and feed the header, footer and contact page.

### Placeholder contact details

`COMPANY.phone` / `COMPANY.phoneHref` are placeholders (`+91 98765 43210`)
and `COMPANY.email` is a best guess. **Replace both with the client's real
details before going live** — they drive the header, footer, contact page,
the `tel:` links and the WhatsApp button.

## Product images

Every product currently renders a generated vector illustration of its
fastener type, so the catalogue is complete with no photography.

To use real photographs instead, drop the file in `assets/img/` and add an
`image` key to the product:

```js
{ id:'ms-hex-nut', image:'ms-hex-nut.jpg', /* …rest unchanged… */ }
```

The card uses the photo and falls back to the drawing automatically if the
file is missing or fails to load, so photos can be added a few at a time.
Square or 4:3 images at roughly 1000px work best.

## The enquiry form

`contact.html` has no backend. On submit it composes the enquiry and opens
the visitor's mail client (`mailto:`), and the second button sends the same
text over WhatsApp. To post it to a server instead, replace the `submit`
handler at the bottom of `contact.html` with a `fetch()` to your endpoint
(Formspree, Basin, Netlify Forms or a small PHP script all drop in here).

## Notes

- **Themes** — light and dark, following the OS by default, with a toggle in
  the header that remembers the choice in `localStorage`.
- **Catalogue state is in the URL** — `products.html?cat=anchors&q=M12` is
  shareable and links straight into a filtered view.
- **Keyboard** — `/` focuses the catalogue search, `Esc` closes quick view.
- **Fonts** load from Google Fonts; everything else is local. The site works
  offline apart from the webfont fallback.
