const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  webpackFinal: (config) => {
    config.resolve.alias.components = path.resolve(__dirname, '../components')
    config.resolve.alias.data = path.resolve(__dirname, '../data')
    config.resolve.alias.utils = path.resolve(__dirname, '../utils')

    return config
  }
}
