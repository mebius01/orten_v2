module.exports = {
  /*
  ** Headers of the page
  */
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
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Customize the progress bar color
  */
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

