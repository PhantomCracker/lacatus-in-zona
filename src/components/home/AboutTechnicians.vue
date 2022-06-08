<template>
  <div class="about-technicians">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex align-self-center flex-column">
          <p class="small-text text-start text-white">Tehnicienii noștri sunt echipați cu <span class="fw-bold">cea mai recentă tehnologie</span> și sunt disponibili 24/7 la cererea dumneavoastră.</p>
          <ul>
            <li>Sisteme de cheie master</li>
            <li>Cilindri de înaltă securitate</li>
            <li>Schimbare încuietori</li>
            <li>Deblocați mai multe tipuri de uși</li>
            <li>Serviciu de deblocare rapidă</li>
            <li>Montaj si reparații încuietori</li>
            <li>Încuietori pentru ferestre</li>
            <li>Blocaje și lacăte</li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 d-block">
          <img class="technician-man pt-5" src="../../../public/images/man2.png" alt="hero-man" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutTechnicians",
  components: {},
  methods: {},
}
</script>

<style scoped lang="scss">
  .about-technicians {
    background-image: url("../../../public/images/bg3.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    ul {
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
      padding-left: 1rem;
      li {
        list-style-type: circle;
        text-align: left;
        color: $ourBlue;
      }
    }
    .technician-man {
      width: 35%;
      height: 100%;
      height: auto;
    }
  }
</style>