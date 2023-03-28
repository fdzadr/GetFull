const webpack = require('webpack');

module.exports = {
  images: {
    domains: ["via.placeholder.com"],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
    
    // Important: return the modified config
    return config;
  }
};

