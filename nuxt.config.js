module.exports = {
    target: 'server',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/api.js'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/fontawesome'
    ],
    fontawesome: {
        component: 'fa',
        icons: {
            solid: ['faCog', 'faChevronLeft'],
            brands: ['faFacebookSquare', 'faInstagram']
        }
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org/docs/
        "bootstrap-vue/nuxt",
        "@nuxtjs/style-resources",
        "@nuxtjs/axios",
        "nuxt-vue-select"
    ],
    styleResources: {
        scss: ["@/assets/scss/variables.scss"]
    },
    axios: {
        // proxy: true  
    },
    http: {
        // proxyHeaders: false
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    components: true,

    router: {
        linkActiveClass: "active"
    },

    serverMiddleware: ['~/api/index.js'],

    /*
     ** Nuxt.js runtime-config 
     */
    publicRuntimeConfig: {
        API_BASE_URL_V1: process.env.API_URL_V1,
        API_URL: process.env.API_URL,
        API_CLIENT_URL: process.env.API_CLIENT_URL,
        DEBUG_ENABLE: process.env.DEBUG_ENABLE || false
    },
    privateRuntimeConfig: {
        API_KEY: process.env.API_KEY,
        API_AUTH_URL: process.env.API_AUTH_URL
    }
};