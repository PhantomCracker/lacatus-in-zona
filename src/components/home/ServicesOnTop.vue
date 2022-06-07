<template>
  <div class="services-on-top">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/toprated.png" alt="satisfied_badge"/>
          <h6 class="mt-3 my-yellow">Servicii profesionale</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/247-service-badge.png" alt="satisfied_badge"/>
          <h6 class="mt-3 my-yellow">25 minute pană la dumneavoastră</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/warranty.png" alt="satisfied_badge"/>
          <h6 class="mt-3 my-yellow">1 an garanție</h6>
        </div>
        <div class="col-6 col-md-3">
          <img src="../../../public/images/services/7484684_money-back-guarantee-png-quality-guarantee-vector-png.png" alt="satisfied_badge"/>
          <h6 class="mt-3 my-yellow">Clienți mulțumiți</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesOnTop"
}
</script>

<style scoped lang="scss">
  .services-on-top {
    background-color: $ourBlack;
    border-top: 3px solid $ourBlue;
    padding-top: 20px;
    img {
      width: 100px;
      height: 100px;
      @media (max-width: 700px) {
        width: 50px;
        height: 50px;
      }
    }
  }

</style>