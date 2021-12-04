module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|tsx)$/],
      },
      use: ['@svgr/webpack'],
    })
    return config
  },
}
