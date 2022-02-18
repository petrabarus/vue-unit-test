module.exports = {
  'check-coverage': false,
  'per-file': true,
  'skip-full': true,
  all: true,
  include: ['src/**/*.{js,vue}'],
  exclude: [
    'src/*.js',
    '**/index.js',
    'src/plugins/*',
  ],
  reporter: ['lcov', 'text', 'text-summary'],
  extension: ['.js', '.vue'],
}