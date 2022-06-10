<template>
  <div class="home">
    <HeroComponent />
    <ServicesOnTop />
    <ServicesCard />
    <InformationComponent />
    <AboutTechnicians />
    <ChooseUs />
  </div>
</template>

<script>
import HeroComponent from "@/components/home/HeroComponent";
import ServicesOnTop from "@/components/home/ServicesOnTop";
import ServicesCard from "@/components/home/ServicesCard";
import InformationComponent from "@/components/home/InformationComponent";
import AboutTechnicians from "@/components/home/AboutTechnicians";
import ChooseUs from "@/components/home/ChooseUs";

export default {
  name: "HomePage",
  components: {
    ChooseUs,
    AboutTechnicians,
    InformationComponent,
    ServicesCard,
    ServicesOnTop,
    HeroComponent
  },
  methods: {
    track () {
      this.$ga.page('/')
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