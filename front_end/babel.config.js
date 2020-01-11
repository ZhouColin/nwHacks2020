module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.es',
          '.es6',
          '.mjs',
          '.tsx',
          '.ts',
          '.ios.js',
          '.android.js',
          '.json',
        ],
        root: ['./'],
        alias: {
          components: './app/components',
          features: './app/features',
          store: './app//store',
          styles: './app/styles',
          routes: './app/routes',
        },
      },
    ],
  ],
};
