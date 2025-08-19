
# Components Library

A small **React UI component library** (Badges, Banners, Cards, Testimonials) with a demo app. Built with **Vite + React** and designed to be publishable as an npm package or used directly in an app.

React component library with Badges, Banners, Cards, and Testimonials — built with Vite + React. Demo app included.

---

## Table of contents

* [Getting started](#getting-started)
* [Using the components](#using-the-components)
* [Components & props](#components--props)

  * [Badge](#badge)
  * [Banner](#banner)
  * [Card](#card)
  * [Testimonial](#testimonial)
* [Styling & theming](#styling--theming)
* [Project structure](#project-structure)
* [Local development](#local-development)
* [Build as a library](#build-as-a-library)
* [Contributing](#contributing)
* [Roadmap](#roadmap)
* [License](#license)

---

## Getting started

Clone and install dependencies:

```bash
# with npm
git clone https://github.com/joacopobre/Components-Library
cd Components-Library
npm install
npm run dev

# or with yarn
yarn
yarn dev

# or with pnpm
pnpm install
pnpm dev
```

This starts the **demo app** so you can see all components rendered.

---

## Using the components

### In this repo (demo app)

Import components directly from `src` when hacking locally:

```jsx
import Badge from './src/components/Badges/Badge'
import Banner from './src/components/Banners/Banner'
import Card from './src/components/Cards/Card'
import Testimonial from './src/components/Testimonials/Testimonial'

export default function App() {
  return (
    <>
      <Badge color="green">Success</Badge>
      <Banner type="warning">Heads up! Please check your input.</Banner>
      <Card type="download">Get the latest release</Card>
      <Testimonial name="Leslie Alexander" job="CEO">
        “This library helped us ship UI fast.”
      </Testimonial>
    </>
  )
}
```

### As a library (after publishing)

If you publish to npm (see [Build as a library](#build-as-a-library)):

```jsx
import { Badge, Banner, Card, Testimonial } from '@your-scope/components-library'
```

> **Note:** This project uses Font Awesome icons in some components. If you consume the library, make sure your app has `@fortawesome/react-fontawesome` and `@fortawesome/free-solid-svg-icons` installed, or keep them as peer dependencies.

---

## Components & props

### Badge

A small label. Supports colors and an optional `pill` style.

```jsx
<Badge>Gray</Badge>
<Badge color="red">Error</Badge>
<Badge color="green" variant="pill">Active</Badge>
```

| Prop       | Type      | Default | Values                                                        | Description            |
| ---------- | --------- | ------- | ------------------------------------------------------------- | ---------------------- |
| `color`    | string    | `gray`  | `gray` `red` `yellow` `green` `blue` `indigo` `purple` `pink` | Visual color theme     |
| `variant`  | string    | `""`    | `""` (default), `pill`                                        | Pill corners if `pill` |
| `children` | ReactNode | —       | —                                                             | Badge content          |

---

### Banner

Status/notice block with a title generated from the `type`.

```jsx
<Banner type="success">Everything worked! You can proceed.</Banner>
<Banner type="warning">Heads up! Please check your input.</Banner>
<Banner type="error">There was a problem with your request.</Banner>
<Banner type="neutral">Update available.</Banner>
```

| Prop       | Type      | Default   | Values                                | Description              |
| ---------- | --------- | --------- | ------------------------------------- | ------------------------ |
| `type`     | string    | `neutral` | `success` `warning` `error` `neutral` | Controls color/title     |
| `children` | ReactNode | —         | —                                     | Optional supporting text |

---

### Card

Compact information card with an optional icon based on `type`.

```jsx
<Card type="download">Et magna sit morbi lobortis.</Card>
<Card type="upload">Auctor pellentesque rhoncus sapien.</Card>
<Card type="update">Ac tincidunt vehicula erat.</Card>
```

| Prop       | Type      | Default    | Values                       | Description               |
| ---------- | --------- | ---------- | ---------------------------- | ------------------------- |
| `type`     | string    | `download` | `download` `upload` `update` | Selects icon + title      |
| `children` | ReactNode | —          | —                            | Body text inside the card |

> Icons use Font Awesome. Ensure `@fortawesome/react-fontawesome` and `@fortawesome/free-solid-svg-icons` are available in your app, or keep them as peer dependencies.

---

### Testimonial

Customer quote block. When `imageSrc` is provided, renders an avatar + large quote mark; otherwise a text-only layout.

```jsx
<Testimonial name="Leslie Alexander" job="CEO">
  “Lorem ipsum dolor sit amet, consectetur adipiscing elit…”
</Testimonial>

<Testimonial imageSrc={profile} name="Jacob Jones" job="Product Lead">
  “Sed urna nulla vitae laoreet augue. Amet feugiat est integer…”
</Testimonial>
```

| Prop       | Type      | Default | Description                          |
| ---------- | --------- | ------- | ------------------------------------ |
| `imageSrc` | string    | `null`  | Optional image URL or imported asset |
| `name`     | string    | —       | Person’s name (required)             |
| `job`      | string    | —       | Person’s role or title               |
| `children` | ReactNode | —       | The quote/testimonial text           |

Accessibility hints:

* Provide meaningful `alt` text if the image conveys information; leave `alt=""` if purely decorative.
* Ensure focus order and semantics remain intact when wrapping these in links or interactive containers.

---

## Styling & theming

* The demo uses a global `src/index.css` for simplicity. For real-world reuse, consider **CSS Modules** (e.g., `Badge.module.css`) or a CSS-in-JS solution to avoid global collisions.
* Key class hooks you can theme: `.badge`, `.badge.pill`, `.banner.success|warning|error|neutral`, `.card`, `.testimonial.with-icon`, `.testimonial.no-icon`.
* You can also expose CSS variables (e.g., `--badge-bg`, `--banner-success`) for easy theming.

---

## Project structure

```
src/
  components/
    Badges/
      Badge.jsx
      Badges.jsx
    Banners/
      Banner.jsx
      Banners.jsx
    Cards/
      Card.jsx
      Cards.jsx
    Testimonials/
      Testimonial.jsx
      Testimonials.jsx
  utils/                # Pure helpers (no React hooks)
    buildBannerMessage.js
    getCardMeta.js
  index.css
  main.jsx
  App.jsx
```

---

## Local development

Run the demo app:

```bash
npm run dev
# or: yarn dev / pnpm dev
```

Build the demo:

```bash
npm run build
```

Lint (recommended):

```bash
npm run lint
```

> Add tests with Vitest + React Testing Library (see Roadmap).

---

## Build as a library

1. **Create an entry file** `src/index.js` that re-exports your components:

   ```js
   export { default as Badge } from './components/Badges/Badge'
   export { default as Banner } from './components/Banners/Banner'
   export { default as Card } from './components/Cards/Card'
   export { default as Testimonial } from './components/Testimonials/Testimonial'
   ```
2. **Vite library build**: configure `vite.config.js` with a `build.lib` section so `npm run build` produces `dist/*.js` bundles ready to publish.
3. **package.json**: set `private: false`, add `main`, `module`, `exports`, `files: ["dist"]`, and **peerDependencies** on `react`, `react-dom`, and Font Awesome packages if you use them.
4. (Optional) Add GitHub Actions to build/lint/test on PRs.

Once published:

```bash
npm i @your-scope/components-library
```

---

## Contributing

PRs welcome! If you add a component, please include:

* Minimal props with sensible defaults
* A README section + usage example
* Accessibility considerations (focus order, ARIA if needed)
* Unit tests (once testing is set up)

---

## Roadmap

* [ ] Convert global CSS to CSS Modules
* [ ] Add Storybook for interactive docs
* [ ] Add Vitest + React Testing Library
* [ ] Improve a11y (keyboard navigation, color contrast)
* [ ] Publish to npm under a scope

---

## License

MIT © 2025 Joaco Pobre.
