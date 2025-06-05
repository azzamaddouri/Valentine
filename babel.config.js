module.exports = {
  presets: ['module:@react-native/babel-preset'],
   plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@features': './src/features',
            '@navigation': './src/navigation',
            '@components': './src/components',
          },
        },
      ],
    ],
};
