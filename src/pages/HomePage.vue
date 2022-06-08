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
  }
}
</script>

<style scoped>

</style>