# Eleventy Starter with Vite

## Features

- Eleventy 2.0.0-canary
- New Eleventy 2.0 Dev Server with live reload
- Vite as Middleware in Eleventy Dev Server (uses [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite/))
- Eleventy build output is post-processed by [Vite](https://vitejs.dev) (with Rollup)
- CSS post-processing with PostCSS incl. [Autoprefixer](https://github.com/postcss/autoprefixer) and cssnano
- Critical CSS, generated and inlined via [rollup-plugin-critical](https://github.com/nystudio107/rollup-plugin-critical)
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
