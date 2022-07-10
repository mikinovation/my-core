const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './app/helpers/**/*.rb',
        './app/javascript/**/*.tsx',
        './app/views/**/*',
    ],
    theme: {
        colors
    },
    plugins: [],
}