# React Typescript Webpack Setup From Scratch

Learn what the fuck CRA do when `npx create-react-app my-app --template typescript`.

## Notes

### First video

- all cmds
  - `npm i react react-dom`
  - `npm i -D typescript @types/react @types/react-dom @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-transform-runtime webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader`
- `tsconfig.json` here is for type checking, NOT CODE COMPILATION
  - that job in this exercise is for Webpack + Babel
- Babel here is to compile TS + React -> JS aka browser readable
- Webpack: module bundling aka turn a project with so many files will be reduced into a single `bundle.js` file + be referenced by `index.html` to render the app
  - loader: interpret anything into `.js`
- notices `index.html` do not have `<script>`, as webpack + babel sth sth
- changes are not instantly visible as when using CRA
  - hot reload enable, auto detech changes -> transpile -> display right into browser

### Second video

- all cmds
  - `npm i `
  - `npm i -D css-loader style-loader`
- error when bundling `.css` file -> webpack + babel dont understand/cant interpret it into `.js`
  - -> use loader when detect `.css` file extensions
- loader position IS IMPORTANT
  - `use: ["style-loader", "css-loader"],` OK, but `use: ["css-loader", "style-loader"],` error
- can create declaration files for static assets to become a module ?
- for fonts & svg files, webpack 4 use `url-loader file-loader`, but webpack 5 can treated them as asset/inline

### Third video

- all cmds
  - `npm i -D webpack-merge`
- restructure `/webpack` folder
  - `common.js` will be the main config for webp
  - `dev.js` and `prod.js` will be implemented into `common.js` based on feeded args from `config.js` captured in npm scripts
  - can also create envi variables in webp config files (should use `dotenv` instead)
- mode can make a difference
  - in this small exercise, `dev` created 1.36 MB while `prod` is 138 KB -> ~10 times significantly faster loading website

### Fourth video

- all cmds
  - `npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh`
- hot module replacement/react refresh(newer): only partial render the changes state of the app, other compoes dont rerender
  - e.g without: click btn 5 times, then changes title -> rerender whole page -> btn is 0 not 5
  - e.g with: click btn 5 times, then changes title -> detects changes in titles only -> rerender title -> btn still 5
  - will see this in console, `[WDS] Live Reloading enabled.` and `[WDS] Hot Module Replacement enabled.`

### Fifth video

- all cmds
  - `npm i -D eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-config-prettier prettier`
- npm script `showErr` will exit status 1 if any error existed in the project
  - why use this: good for CI/CD later and no retard `eslint src/App.tsx` to check ESLint working or not
- [Changes in Prettier and ESLint)[https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21]
- some personal flavor, added `eslint-webpack-plugin` to dev envi so that if project has error but still force bundling, webpack will emmit code

## Reference

[This 8 videos](https://www.youtube.com/watch?v=Elpu7CIuqjY&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo)
