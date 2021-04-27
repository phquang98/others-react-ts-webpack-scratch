// combine the common config with dev or prod
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

// envVars example: { WEBPACK_SERVE: true, env: 'dev' | 'prod' }
// write like a fnc -> now can access to args in npm scripts
module.exports = (envVars) => {
  const { env } = envVars;
  console.log(envVars);
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
