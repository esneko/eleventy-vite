# Eleventy Starter with Vite

## Features

- Eleventy 2.0.0-canary
- New Eleventy 2.0 Dev Server with live reload
- Vite as Middleware in Eleventy Dev Server (uses [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite/))
- Eleventy build output is post-processed by [Vite](https://vitejs.dev) (with Rollup)
- CSS post-processing with PostCSS incl. [Autoprefixer](https://github.com/postcss/autoprefixer) and cssnano
- Uses [opinionated CSS structure](https://matthiasott.com/notes/how-i-structure-my-css)
- Critical CSS, generated and inlined via [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical). The main CSS file is then loaded asynchronously with [Scott Jehl’s `media` loading strategy](https://www.filamentgroup.com/lab/load-css-simpler/) (adds `media="print"` and swaps to `media="all"` once loaded)
- Basic dark mode support (using `prefers-color-scheme` and CSS Custom Properties)
- Lighthouse score 💯

## Getting started

Install dependencies

```sh
yarn
```

## Run dev server

The project comes with Eleventy’s built-in development server. You can start the server with

```sh
yarn start
```

## Build

To trigger a production build, use

```sh
yarn build
```
