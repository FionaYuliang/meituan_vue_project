module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // babel.config.js
  plugins: [ [
    'import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true,
    },
    'vant', 
    ],
  ],
}



