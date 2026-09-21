# Five Keys

Lead-capture landing page for NewTree Capital Resources: the free guide
"5 Keys to Getting Your Investment Property Funded."

## Project structure

```
index.html              Landing page (hero form, benefits, FAQ, bottom form)
thank-you.html          Shown after a successful form submission
css/style.css           Custom styles (layered on top of Tailwind)
js/tailwind-config.js   Tailwind theme (colors, fonts)
js/main.js              Icons, mobile menu, FAQ accordion, form redirect
```

## How the forms work

Both forms (`#hero-form`, `#bottom-form`) post directly to the Zoho Forms
"GET MY FREE GUIDE" form. On success Zoho redirects back to `thank-you.html`
(the URL is filled in by `js/main.js`, so it works on any domain).

- Keep the input `name` attributes (`SingleLine`, `Email`, `zf_*`). Renaming
  them makes Zoho record empty values.
- If the Zoho form is regenerated or its link changes, update the `action` URL
  in both forms in `index.html`.
- Delivery of the guide PDF is handled on the Zoho side, so the PDF is
  intentionally not stored in this (public) repo.

## Development

No build step. Tailwind and Lucide load from CDNs. Serve the folder with any
static file server, for example:

```
python -m http.server 8765
```

## Deployment

Intended for Cloudflare Pages: plain static files, no build command, output
directory `/`.
