const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = ({ dev, rootDir, srcDir }) => ({
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Nunito', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: !dev,
        content: [
        `${srcDir}/components/**/*.{vue,js}`,
        `${srcDir}/layouts/**/*.vue`,
        `${srcDir}/pages/**/*.vue`,
        `${srcDir}/plugins/**/*.{js,ts}`,
        `${rootDir}/nuxt.config.{js,ts}`
        ]
    }
})