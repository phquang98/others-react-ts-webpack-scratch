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

## Reference

[This 8 videos](https://www.youtube.com/watch?v=Elpu7CIuqjY&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo)
