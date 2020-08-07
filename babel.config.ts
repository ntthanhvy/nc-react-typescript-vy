module.exports = {
  presets: [
    [
      '@babel/preset-env',
      '@babel/preset-react',
      {
        targets: {
          node: 'current',
        },
      },
      '@babel/preset-typescript',
    ],
  ],
  plugins: ['@babel/plugin-transform-react-jsx'],
}
