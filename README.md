# Critter Catchers — GitHub Pages website

This is a **ready-to-publish static site**, designed for the Critter Catchers fan modification. It is a **website only**: no game ROMs or patches are included. It uses a previously created promotional pixel-art banner; the banner is **not an authenticated montage of the exact in-game sprite files**. Replace it with exported real sprites if exact asset fidelity is required.

## Publish the website using GitHub's website interface

1. Log into GitHub and create a **public** repository named `critter-catchers-site` (or another name of your choice).
2. On the new repository's **Code** tab, select **Add file → Upload files**. Unzip this package on your computer first, then upload **the contents**, including `index.html`, `styles.css`, `site.js`, `site-config.js`, `.nojekyll` and the `assets/` folder. Do **not** upload just the ZIP. Commit the files to `main`.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, and save.
4. Find the live address under **Settings → Pages → Visit site**. A project site typically lives at `https://YOUR-USERNAME.github.io/critter-catchers-site/`.

Official help: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Add the actual patch downloads and creator links

1. Publish **only legally appropriate mod patch files**, not a complete copyrighted ROM, using the repo's **Releases** area or another suitable host. Include patching steps and checksums in the release.
2. Open `site-config.js` in GitHub and choose the pencil icon to edit it. Set each value in double quotes to the full `https://` URL. E.g.:

```js
window.CRITTER_SITE = {
  realPatchUrl: "https://github.com/YOURNAME/YOURREPO/releases/download/VERSION/real.patch",
  hybridPatchUrl: "https://github.com/YOURNAME/YOURREPO/releases/download/VERSION/hybrid.patch",
  projectUpdatesUrl: "https://ko-fi.com/YOURPAGE",
  issueTrackerUrl: "https://github.com/YOURNAME/YOURREPO/issues"
};
```

**Those links are examples, not working download destinations.** Don't paste them unchanged. Until an actual URL is set, the corresponding button is visibly disabled. Creator links remain hidden until set.

3. Commit your edited config. The site will update automatically after GitHub Pages finishes deploying it.

## What the site accurately describes

- Original Pokémon Red adventure retained.
- Two alternate visual sprite sets: Real and Hybrid.
- Updated AnimaDex entries.
- Renamed towns/places and PEETAH organization.
- Blind Battles: move names aren't announced when either side uses one.
- AI-assisted move-name wording; no claim of a changed battle balance.
- AI use disclosed for artwork and development.

No claim of new maps, new storylines, rewritten battles, or full QA certification is made.

## Privacy and IP notes

- No analytics scripts, tracking pixels, web fonts, third-party embeds, or personal data are included in this website source.
- The original Pokémon game and related rights are owned by their respective rightsholders. A free patch and a disclaimer do not guarantee legal permission to distribute derivative content.
- Do not put save files, source ROMs, personal identifiers, private logs, or sensitive files in the public repository.
- Replace any placeholders and verify URLs before announcing the site publicly.
