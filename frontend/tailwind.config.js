module.exports = {
  content: ['./src/**/*.js', './build/static/js/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
};
