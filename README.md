# Marimo Bot — coming soon

The Marimo Bot coming-soon landing page: a quiet, botanical introduction to a desktop AI assistant
that works in a folder you choose.

**Live site:** <https://marimobot.com/>

The page stays deliberately short: a small introduction, a clear note that the project is under
active development, and a link to the public build on GitHub.

## Preview locally

There is no build step. Any static file server will do:

```sh
python3 -m http.server 4173
```

Then open <http://127.0.0.1:4173/>.

## Project files

```text
index.html             the landing page
styles/site.css        page styles
assets/fonts.css       self-hosted font declarations
assets/fonts/          webfont files, licence and notices
assets/brand/          marimo mascot and favicon
assets/site.js         pointer parallax and current-year behaviour
screenshots/           final desktop and mobile captures
CNAME                  custom-domain setting for GitHub Pages
.nojekyll              serve the files directly without Jekyll
```

## Deployment

The site is published with GitHub Pages from the `main` branch at the repository root.

- **Custom domain:** `marimobot.com`
- **Pages build:** <https://devtarlow.github.io/marimo-bot-website/>
- **DNS:** Spaceship — four GitHub Pages `A` records on the apex and a `www` CNAME to
  `devtarlow.github.io`

Every push to `main` deploys automatically. There is no build step and no external runtime dependency;
only the files above are needed to serve the site. The `screenshots/` directory is reference material
and is not required by the page.

## Screenshots

- [Desktop capture](screenshots/landing-desktop.png)
- [Mobile capture](screenshots/landing-mobile.png)

## Notes

- **Responsive.** The layout adapts down to a 320 px viewport, with compact layouts below 900 px and
  620 px.
- **Local-first assets.** Fonts, the mascot and all textures are served locally. There are no
  third-party scripts, analytics or remote font requests.
- **Accessible.** Keyboard focus states, reduced-motion handling and accessible contrast are in place.
- **Short content.** The copy introduces the desktop assistant without revealing implementation details,
  flags that the project is still under active development, and links to the
  [current GitHub project](https://github.com/DevTarlow/marimo-bot).

## Credits

The mascot artwork comes from the Marimo Bot project. The typefaces are self-hosted and licensed under
the SIL Open Font License 1.1; see [`assets/fonts/NOTICE.md`](assets/fonts/NOTICE.md).

Marimo Bot is licensed under Apache-2.0. The project itself lives at
<https://github.com/DevTarlow/marimo-bot>.
