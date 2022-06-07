<template>
  <div class="home">
    <HeroComponent />
    <ServicesOnTop />
  </div>
</template>

<script>
import HeroComponent from "@/components/home/HeroComponent";
import ServicesOnTop from "@/components/home/ServicesOnTop";

export default {
  name: "HomePage",
  components: {
    ServicesOnTop,
    HeroComponent
  }
}
</script>

<style scoped>

</style>