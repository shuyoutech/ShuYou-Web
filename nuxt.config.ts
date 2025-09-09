// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/test-utils',
        '@nuxt/ui',
        'nuxt-og-image'
    ],

    css: ['~/assets/css/main.css'],

    routeRules: {
        '/docs': {redirect: '/docs/getting-started', prerender: false}
    },

    nitro: {
        prerender: {
            routes: [
                '/'
            ],
            crawlLinks: true
        }
    },

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    }
})