// const { default: uk } = require("./lang/uk");

module.exports = {
  /*
  ** Headers of the page
  */
  nuxt: "universal",
  head: {
    title: 'Ортен',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon-32x32.png'
      },
      { rel: 'stylesheet',
        crossorigin: 'anonymous',
        integrity: 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
      },
      { rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap'
      }
    ]
  },
  env: {
    baseUrl: 'http://localhost:3000',
    apiUrl: 'http://127.0.0.1:8000'
  },
  router: {
    middleware: 'bread'
  },
  modules: [
    'nuxt-uid-module',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            iso: 'ru-Ru',
            name: 'Росія',
            file: 'ru.js'
          },
          {
            code: 'uk',
            iso: 'uk-UA',
            name: 'Україна',
            file: 'uk.js'
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'ru',
        noPrefixDefaultLocale: true,
        strategy: 'no_prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,
          alwaysRedirect: true
        },
        vuex: { moduleName: 'i18n', syncLocale: true, syncMessages: true, syncRouteParams: true }
      }
    ],
    '@nuxtjs/axios',
  ],
  'uid-module': {
    name: 'uid',
    plugin: false,
  },
  axios: {
    baseURL: `http://127.0.0.1:8000/api`,
  //   headers: {
  //     common: {
  //       'Accept-Language': 'ru',
  //     }
  //   }
  },
  plugins: ['~/plugins/jsonld'],

  loading: {
    color: '#d9534f',
    height: '10px',
    continuous: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

