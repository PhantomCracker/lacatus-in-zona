<template>
  <AboutUs />
</template>

<script>
import AboutUs from "@/components/about-us/AboutUs";
export default {
  name: "AboutUsPage",
  components: {AboutUs},
  methods: {
    track () {
      this.$ga.page('/despre-noi')
    }
  },
  metaInfo: {
    title: 'Servicii de lăcătuș în regim de urgență',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        vmid: 'description',
        name: 'description',
        content: 'Servicii de lăcătuș de urgență 24/7 în București. Lăcătușul local din București oferă, de asemenea, o gamă de servicii și consumabile concepute pentru a îmbunătăți securitatea casei sau a afacerii dumneavoastră'
      }
    ]
  }
}
</script>

<style scoped>

</style>