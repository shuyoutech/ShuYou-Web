// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {enabled: false},
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

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

  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

  css: ['~/assets/css/main.css'],
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './app/assets/icons'
    }]
  },

  typescript: {
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      }
    }
  },

  ui: {
    fonts: false,
  },

  app: {},

  imports: {
    autoImport: true
  },

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
