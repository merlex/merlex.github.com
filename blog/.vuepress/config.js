module.exports = {
    title: 'Merlex Github Blog',
    theme: "@vuepress/theme-blog",
    plugins: [
    ],
    themeConfig: {

        dateFormat: 'YYYY-MM-DD',

        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#footer
         */
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/merlex',
                }
            ],
            copyright: [{
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2022-present Vue.js',
                    link: '',
                },
            ],
        },
        directories:[
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            itemPermalink: '/:year/:month/:day/:slug',
          },
          {
            id: 'writing',
            dirname: '_writings',
            path: '/',
            itemPermalink: '/:year/:month/:day/:slug',
          },
        ],
        /**
         * Ref: https://vuepress-theme-blog.ulivz.com/#sitemap
         */
        sitemap: {
            hostname: 'https://merlex.github.io/'
        },
        smoothScroll: true
    },
}