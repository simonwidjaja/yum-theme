const path = require('path')

module.exports = {
  reactStrictMode: true,
  //---
  // Config Webpack
  webpack: config => {
    // Use custom alias to prevent path navigation (../../../)
    config.resolve.alias['@@'] = path.resolve(path.join(__dirname));
    config.resolve.alias['@@components'] = path.resolve(path.join(__dirname, 'components'));
    config.resolve.alias['@@layouts'] = path.resolve(path.join(__dirname, 'components', 'layouts'));
    // config.resolve.alias['@@themes'] = path.resolve(path.join(__dirname, 'themes'));
    config.resolve.alias['@@config'] = path.resolve(path.join(__dirname, 'config'));
    config.resolve.alias['@@data'] = path.resolve(path.join(__dirname, 'data'));
    // config.resolve.alias['@@helper'] = path.resolve(path.join(__dirname, 'helper'));
    config.resolve.alias['@@yum'] = path.resolve(path.join(__dirname, 'themes', 'yum'));
    return config;
  }    
}
