<template>
  <div class="locksmiths">
    <div class="container">
      <div class="row pt-5 pb-5">
        <div class="col-12 pb-5">
          <h1>Lăcătuș în zonă - Motivul principal pentru a ne alege</h1>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>Lăcătuș de urgență 24/7 în locația dumneavoastră</li>
                <li>Prețuri foarte mici incepand de la 49RON</li>
                <li>Rambursarea banilor garantată dacă nu am remediat</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>Reparații dupa intrări prin efracție</li>
                <li>24/7 atat pentru rezidențial cat și pentru comercial</li>
                <li>Gamă completă de articole pentru a oferi acces la serviciile necesare</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 pt-4">
          <button class="btn btn-primary align-self-center w-25 my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:+40310051198"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Sună acum!</a>
          </button>
        </div>
      </div>
      <div class="row pt-4 pb-5">
        <div class="col-12">
          <img src="../../assets/logo.png" alt="main-logo" class="pb-5 w-50" />
          <h5 class="pb-4">Acoperim mai multe zone din România cu lăcătuși profesioniști chiar în apropierea dumneavoastră:</h5>
          <div class="row">
            <div class="col-12 col-md-12">
              <router-link :to="{ name: 'BucurestiS1Page' }"><p>București-Sector-1</p></router-link>
              <router-link :to="{ name: 'BucurestiS2Page' }"><p>București-Sector-2</p></router-link>
              <router-link :to="{ name: 'BucurestiS3Page' }"><p>București-Sector-3</p></router-link>
              <router-link :to="{ name: 'BucurestiS4Page' }"><p>București-Sector-4</p></router-link>
              <router-link :to="{ name: 'BucurestiS5Page' }"><p>București-Sector-5</p></router-link>
              <router-link :to="{ name: 'BucurestiS6Page' }"><p>București-Sector-6</p></router-link>
              <router-link :to="{ name: 'IlfovPage' }"><p>Ilfov</p></router-link>
            </div>
          </div>
<!--          <ul class="cities">-->
<!--              <router-link v-for="(city, id) in cities" :key="id" :to="'/locksmith-' + city.name.toLowerCase()" tag="li">Professional locksmith in {{ city.name }}</router-link>-->
<!--          </ul>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocksmithNearMe",
  components: {},
}
</script>

<style scoped lang="scss">
.locksmiths {
  background: #fff8f6;
  a {
    color: $ourBlack;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    &.active, &:after, &:focus {
      color: $ourBlack;
    }
    &:hover {
      color: $ourBlue;
    }
  }
}
ul {
  padding-left: 1rem;
  li {
    list-style-type: '✓';
    text-align: left;
    color: $ourBlue;
    padding-left: 10px;
  }
  &.cities li{
    list-style-type: circle;
    color: $ourBlack;
  }
}
.my-primary-btn {
  background-color: $ourBlue;
  border-color: $ourBlue;
}
</style>