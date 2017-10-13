# Frontend Starter Kit

This Starter Kit is a setup for robust and scalable web development with performance in mind. It contains a
Pattern-Library, Tests for code quality and handles typical developer tasks like image optimization, minifying files
and a build/deploy setup for a live environment.

## Quick Start a Project
* `git clone` Repository
* `npm install` - install Dependencies
* `npm run svgson` write information about all SVGs in '01-src/icons' to a JSON file in order to automate the creation of icon components in fractal
* `gulp` - start init and watch
* `gulp deploy` - build assets production ready (for fractal and sitepackage!)

## Other Usefull Tasks
* `gulp images` copy & optimize 'images'
* `gulp icons` copy & optimize 'icons' and create a sprite.svg
* `gulp fonts` copy 'fonts'
* `gulp misc` copy 'mist' (e.g. videos)
* `gulp init` build all FE assets
* `gulp watch-and-serve` just start the watcher and browser-sync without init task

## Features

* Designed with progressive enhancement
* Designed for high performance
* Designed for maintainable CSS with [ITCSS Architecture](http://cssguidelin.es/)
* Includes
   * [svg4everybody](https://github.com/jonathantneal/svg4everybody)

## Further Documentation

### SCSS Folder Structure

The SCSS folder structure is based of `ITCSS`, an modular and scalable CSS structure approach. For an detailed explanation of `ITCSS` check this article: [https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/).

* 0-settings: Global variables, site-wide settings, config switches, etc.
* 1-tools: Site-wide mixins and functions.
* 2-generic: Low-specificity, far-reaching rulesets (e.g. resets).
* 3-elements: Base Styles (e.g. Unclassed HTML Elements).
* 4-objects: Styling for non-cosmetic design patterns (e.g. wrapper, layouts, sections).
* 5-components: Specific UI components (e.g. c-stage, c-text-media).
* 6-utilities: Utilities and helper classes with ability to override anything which goes before in the triangle (declarations in this layer will carry !important).
* 7-vendor: Additional vendor libraries which must be be overwritten for the most part

### JS files and folder

Javascript is written in ES6 syntax and will be compiled with Babel & Webpack.

### SVGs

Use the SVG `use` element to reference an svg icon from the generated sprite file:

```html
<svg>
    <use xlink:href="sprite.svg#icon_name"></use>
</svg>
```

### Images folder

* images: fixed images like logos without any editorial purpose

## Troubleshooting

### `npm run setup` fails with errors.

Make sure you have the latest stable release of node.js installed. If your node.js version is the latest version, you might need to update the npm packages in this project. Use `npm-check-updates` for an easy to use package updater.

\* _If not already done, install the npm-check-updates package with `npm install -g npm-check-updates`._
