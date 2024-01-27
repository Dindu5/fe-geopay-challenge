// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: ["@nuxt/image"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  ssr: false,
});
