const { InjectManifest } = require('workbox-webpack-plugin')
const { join } = require('path')

const getConfig = () => {
  return {
    swSrc: join(__dirname, '/public/sw-base.js'),
    swDest: join(__dirname, '/public/service-worker.js'),
    maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
    include: [/\.svg$/, /\.html$/, /\.css$/, /\.js$/],
  }
}

const getInjectPlugin = () => {
  const pluginConfig = getConfig()
  return new InjectManifest(pluginConfig)
}

module.exports = {
  webpack: (config, env) => {
    // From https://github.com/redixhumayun/react-app-rewired-workbox/tree/master/src
    if (env.NODE_ENV === 'production') {
      const configuredPlugin = getInjectPlugin()
      config.plugins.push(configuredPlugin)
    }
    return config
  },
}
