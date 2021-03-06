import axios from "axios";

module.exports = {
  /*
   ** Headers of the page
   */
  nuxt: "universal",
  head: {
    title: "Ортен",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Richo, Duplo, Konica Minolta, ColorWay - Купить в Николаеве, интернет-магазин Ортен ★ Ортен более 20 лет рынке копировальной техники и сервисного обслуживания",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" },
      {
        rel: "stylesheet",
        crossorigin: "anonymous",
        integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",
        href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap",
      },
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL, //|| "http://localhost:3000",
    apiUrl: process.env.API_URL, //|| "http://localhost:8000",
  },
  router: {
    // trailingSlash: true,
    middleware: "redirect",
  },
  modules: [
    "cookie-universal-nuxt",
    "@nuxtjs/gtm",
    "@nuxtjs/robots",
    "nuxt-uid-module",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "ru",
            iso: "ru-Ua",
            name: "Російська",
            file: "ru.js",
          },
          {
            code: "uk",
            iso: "uk-UA",
            name: "Українська",
            file: "uk.js",
          },
        ],
        baseUrl: process.env.BASE_URL,
        seo: true,
        lazy: true,
        langDir: "lang/",
        defaultLocale: "uk",
        noPrefixDefaultLocale: true,
        strategy: "prefix", //!
        skipSettingLocaleOnNavigate: true, //!
        detectBrowserLanguage: false,
        // detectBrowserLanguage: {
        //   useCookie: true,
        //   cookieKey: "i18n_redirected",
        //   onlyOnRoot: true,
        // },
        vuex: { moduleName: "i18n", syncLocale: true, syncMessages: true, syncRouteParams: true },
      },
    ],
    "@nuxtjs/axios",
  ],
  gtm: {
    id: "GTM-56KXN4",
  },

  robots: [
    {
      UserAgent: "Googlebot",
      Disallow: ["/order", "/cart", "/admin"],
    },
    {
      UserAgent: "Yandex",
      Disallow: ["/order", "/cart", "/admin"],
    },
    {
      UserAgent: "*",
      Disallow: ["/order", "/cart", "/admin"],
    },
    {
      Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
    },
  ],
  "uid-module": {
    name: "uid",
    plugin: false,
  },

  plugins: ["~/plugins/jsonld"],

  loading: {
    color: "#d9534f",
    height: "10px",
    continuous: false,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
