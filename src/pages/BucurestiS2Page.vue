<template>
  <div class="city">
    <div class="hero">
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-lg-12 d-flex align-self-center flex-column mt-3 mt-md-0 pb-4">
            <h1 class="text-white text-start text-center">Lăcătuș în zonă -<span class="my-yellow"> București Sector 2</span></h1>
            <ul class="text-center ps-0 pt-2">
              <li class="text-white"><h3><span class="fw-bold">Deblocare uși în regim de urgență</span></h3></li>
              <li class="text-white">Cele mai bune prețuri începand cu 49RON</li>
              <li class="text-white">Rambursarea banilor garantată dacă nu am remediat problema </li>
              <li class="text-white">Gamă completă de ustensile pentru a vă oferi cele mai profesionale servicii</li>
            </ul>
            <button class="btn btn-primary align-self-center my-primary-btn mt-4">
              <a class="text-white text-decoration-none" href="tel:+40310051198"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Sună acum!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ServicesOnTop />
    <ServiceCard />
    <InformationComponent />
    <AboutTechnicians />
    <ChooseUs />
  </div>
</template>

<script>

import ServicesOnTop from "@/components/home/ServicesOnTop";
import ServiceCard from "@/components/home/ServicesCard";
import AboutTechnicians from "@/components/home/AboutTechnicians";
import ChooseUs from "@/components/home/ChooseUs";
import InformationComponent from "@/components/home/InformationComponent";
export default {
  name: "BucurestiS1Page",
  components: {InformationComponent, ChooseUs, AboutTechnicians, ServiceCard, ServicesOnTop},
  metaInfo: {
    title: 'Servicii de lăcătuș în regim de urgență | București - Sector 2',
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

<style scoped lang="scss">
.hero {
  background-image: url("../../public/images/cities/Bucuresti-sector2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 500px;
  border-bottom: 10px solid #000000;
  ul {
    list-style-type: none;
  }

  @media (max-width: 700px) {
    max-height: 100%;
  }

  .my-primary-btn {
    width: 25%;
    @media (max-width: 700px) {
      width: 50%;
    }
  }

  .hero-man {
    background-image: url("../../public/images/header-man.png");
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
      padding-left: 5px;
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