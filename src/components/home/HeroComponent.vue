<template>
  <div class="hero">
    <div class="container">
      <div class="row d-flex flex-column-reverse flex-lg-row">
        <div class="col-12 col-lg-6 d-flex hero-man"></div>
        <div class="col-12 col-lg-6 d-flex align-self-center flex-column mt-md-0 pb-3">
          <h1 class="text-white text-start"><span class="my-blue">Servicii de lăcătuș</span> disponibile 24/7</h1>
          <ul class="with-border bg-black">
            <li class="text-white text-start pl-2 pt-2">Cele mai bune prețuri începand cu</li>
            <li class="text-white text-start pl-2">Rambursarea banilor garantată dacă nu am remediat problema </li>
            <li class="text-white text-start pl-2 pb-2">Gamă completă de ustensile pentru a vă oferi cele mai profesionale servicii</li>
          </ul>
          <button class="btn btn-primary w-100 my-primary-btn mt-1">
            <a class="text-white text-decoration-none" href="tel:01173256595">Serviciu la fața locului în maxim 25 de minute</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
  components: {},
  methods: {}
}
</script>

<style scoped lang="scss">
.hero {
  background-image: url("../../../public/images/hero-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
  border-bottom: 10px solid #000000;

  @media (max-width: 700px) {
    max-height: 100%;
  }
  .hero-man {
    background-image: url("../../../public/images/header-man.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 300px;
    @media (max-width: 700px) {
      border-top: 10px solid black;
    }
  }
  li {
    font-family: 'Ubuntu', sans-serif;
  }
}
h1 {
  font-size: 2.5rem;
  &.with-border {
    border-left: 10px solid $ourBlue;
    padding-left: 25px;
    @media (max-width: 700px) {
      font-size: 3.5rem;
    }
  }
}
.btn-primary {
  background-color: $ourBlue !important;
  border: none;
  &:focus, :active, :target, :visited {
    border: none;
    box-shadow: none;

  }
  a {
    text-align: center;
  }
}
</style>
