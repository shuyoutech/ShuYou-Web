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
    'nuxt-og-image',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
  ],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }]
  },

  ui: {
    fonts: false,
  },

  app: {},

  alias: {
    '~': './',
    '@': './',
    '~~': './',
    '@@': './',
    'assets': './assets',
    'public': './public'
  },

  imports: {
    autoImport: true
  },

  routeRules: {
    '/docs': {redirect: '/docs/getting-started', prerender: false}
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
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