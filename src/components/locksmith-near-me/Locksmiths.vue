<template>
  <div class="locksmiths">
    <div class="container">
      <div class="row pt-5 pb-5">
        <div class="col-12 pb-5">
          <h1>Locksmith near you - The main reason to choose us</h1>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>Emergency Locksmith 24/7 in your location</li>
                <li>Labour from 49£ and locks from 25£</li>
                <li>Money back guaranteed if we couldn’t fix</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <ul class="d-flex flex-column align-items-center">
                <li>After burglary Repair</li>
                <li>24/7 for Residential or Comercial</li>
                <li>Full range of items to provide access for required services</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 pt-4">
          <button class="btn btn-primary align-self-center w-25 my-primary-btn mt-4">
            <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
          </button>
        </div>
      </div>
      <div class="row pt-4 pb-5">
        <div class="col-12">
          <img src="../../../public/images/Main-Logo.png" alt="main-logo" class="pb-5" />
          <h5 class="pb-4">We cover multiple areas in United Kingdom with professional locksmiths right near you: </h5>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>B</h2>
              <router-link :to="{ name: 'BrightonCity' }"><p>Locksmith in Brighton</p></router-link>
              <router-link :to="{ name: 'BristolCity' }"><p>Locksmith in Bristol</p></router-link>
              <router-link :to="{ name: 'BirgminghamCity' }"><p>Locksmith in Birgmingham</p></router-link>
              <router-link :to="{ name: 'BoltonCity' }"><p>Locksmith in Bolton</p></router-link>
              <router-link :to="{ name: 'BradfordCity' }"><p>Locksmith in Bradford</p></router-link>
              <router-link :to="{ name: 'BromleyCity' }"><p>Locksmith in Bromley</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>C</h2>
              <router-link :to="{ name: 'CreweCity' }"><p>Locksmith in Crewe</p></router-link>
              <router-link :to="{ name: 'ColchesterCity' }"><p>Locksmith in Colchester</p></router-link>
              <router-link :to="{ name: 'ChesterCity' }"><p>Locksmith in Chester</p></router-link>
              <router-link :to="{ name: 'ChelmsfordCity' }"><p>Locksmith in Chelmsford</p></router-link>
              <router-link :to="{ name: 'CambridgeCity' }"><p>Locksmith in Cambridge</p></router-link>
              <router-link :to="{ name: 'CoventryCity' }"><p>Locksmith in Coventry</p></router-link>
              <router-link :to="{ name: 'CroydonCity' }"><p>Locksmith in Croydon</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>D</h2>
              <router-link :to="{ name: 'DurhamCity' }"><p>Locksmith in Durham</p></router-link>
              <router-link :to="{ name: 'DerbyCity' }"><p>Locksmith in Derby</p></router-link>
              <router-link :to="{ name: 'DoncasterCity' }"><p>Locksmith in Doncaster</p></router-link>
              <router-link :to="{ name: 'DarlingtonCity' }"><p>Locksmith in Darlington</p></router-link>
              <router-link :to="{ name: 'DudleyCity' }"><p>Locksmith in Dudley</p></router-link>
              <router-link :to="{ name: 'DartfordCity' }"><p>Locksmith in Dartford</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>E</h2>
              <router-link :to="{ name: 'EnfieldCity' }"><p>Locksmith in Enfield</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>G</h2>
              <router-link :to="{ name: 'GuildfordCity' }"><p>Locksmith in Guildford</p></router-link>
              <router-link :to="{ name: 'GlouchesterCity' }"><p>Locksmith in Glouchester</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>H</h2>
              <router-link :to="{ name: 'HarrowCity' }"><p>Locksmith in Harrow</p></router-link>
              <router-link :to="{ name: 'HemelCity' }"><p>Locksmith in Hemel Hempstead</p></router-link>
              <router-link :to="{ name: 'HuddersfieldCity' }"><p>Locksmith in Huddersfield</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>I</h2>
              <router-link :to="{ name: 'IpswichCity' }"><p>Locksmith in Ipswich</p></router-link>
              <router-link :to="{ name: 'IlfordCity' }"><p>Locksmith in Ilford</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>K</h2>
              <router-link :to="{ name: 'KingstonCity' }"><p>Locksmith in Kingston upon Thames</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>L</h2>
              <router-link :to="{ name: 'LeedsCity' }"><p>Locksmith in Leeds</p></router-link>
              <router-link :to="{ name: 'LiverpoolCity' }"><p>Locksmith in Liverpool</p></router-link>
              <router-link :to="{ name: 'LutonCity' }"><p>Locksmith in Luton</p></router-link>
              <router-link :to="{ name: 'LeicesterCity' }"><p>Locksmith in Leicester</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>M</h2>
              <router-link :to="{ name: 'MiddlesbroughCity' }"><p>Locksmith in Middlesbrough</p></router-link>
              <router-link :to="{ name: 'MiltonCity' }"><p>Locksmith in Milton Keynes</p></router-link>
              <router-link :to="{ name: 'ManchesterCity' }"><p>Locksmith in Manchester</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>N</h2>
              <router-link :to="{ name: 'NottinghamCity' }"><p>Locksmith in Nottingham</p></router-link>
              <router-link :to="{ name: 'NorthamptonCity' }"><p>Locksmith in Northampton</p></router-link>
              <router-link :to="{ name: 'NewcastleCity' }"><p>Locksmith in Newcastle</p></router-link>
              <router-link :to="{ name: 'NorwichCity' }"><p>Locksmith in Norwich</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>O</h2>
              <router-link :to="{ name: 'OxfordCity' }"><p>Locksmith in Oxford</p></router-link>
              <router-link :to="{ name: 'OldhamCity' }"><p>Locksmith in Oldham</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>P</h2>
              <router-link :to="{ name: 'PeterboroughCity' }"><p>Locksmith in Peterborough</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>R</h2>
              <router-link :to="{ name: 'ReadingCity' }"><p>Locksmith in Reading</p></router-link>
              <router-link :to="{ name: 'RedhillCity' }"><p>Locksmith in Redhill</p></router-link>
              <router-link :to="{ name: 'RomfordCity' }"><p>Locksmith in Romford</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>S</h2>
              <router-link :to="{ name: 'StokeCity' }"><p>Locksmith in Stoke on Trent</p></router-link>
              <router-link :to="{ name: 'SheffieldCity' }"><p>Locksmith in Sheffield</p></router-link>
              <router-link :to="{ name: 'StevenageCity' }"><p>Locksmith in Stevenage</p></router-link>
              <router-link :to="{ name: 'SwindonCity' }"><p>Locksmith in Swindon</p></router-link>
              <router-link :to="{ name: 'SunderlandCity' }"><p>Locksmith in Sunderland</p></router-link>
              <router-link :to="{ name: 'SloughCity' }"><p>Locksmith in Slough</p></router-link>
              <router-link :to="{ name: 'StockportCity' }"><p>Locksmith in Stockport</p></router-link>
              <router-link :to="{ name: 'StAlbansCity' }"><p>Locksmith in St Albans</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>T</h2>
              <router-link :to="{ name: 'TwickenhamCity' }"><p>Locksmith in Twickenham</p></router-link>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <h2>U</h2>
              <router-link :to="{ name: 'UxbridgeCity' }"><p>Locksmith in Uxbridge</p></router-link>
            </div>
            <div class="col-12 col-md-3">
              <h2>W</h2>
              <router-link :to="{ name: 'WiganCity' }"><p>Locksmith in Wigan</p></router-link>
              <router-link :to="{ name: 'WarringtonCity' }"><p>Locksmith in Warrington</p></router-link>
              <router-link :to="{ name: 'WolverhamptonCity' }"><p>Locksmith in Wolverhampton</p></router-link>
              <router-link :to="{ name: 'WakefieldCity' }"><p>Locksmith in Wakefield</p></router-link>
              <router-link :to="{ name: 'WatfordCity' }"><p>Locksmith in Watford</p></router-link>
            </div>
            <div class="col-12 col-md-3">

            </div>
            <div class="col-12 col-md-3">

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
  name: "Locksmiths",
  components: {},
  data() {
    return {
      cities: [
        { id: 1, name: "Bristol" },
        { id: 2, name: "Sheffield" },
        { id: 3, name: "Chester" },
        { id: 4, name: "Milton Keynes" },
        { id: 5, name: "Oxford" },
        { id: 6, name: "Middlesbrough" },
        { id: 7, name: "Stevenage" },
        { id: 8, name: "Reading" },
        { id: 9, name: "Leeds" },
        { id: 10, name: "Guildford" },
        { id: 11, name: "Newcastle" },
        { id: 12, name: "Colchester" },
        { id: 13, name: "Ipswich" },
        { id: 14, name: "Wigan" },
        { id: 15, name: "Birmingham" },
        { id: 16, name: "Derby" },
        { id: 17, name: "Leicester" },
        { id: 18, name: "Brighton" },
        { id: 19, name: "Stoke on Trent" },
        { id: 20, name: "Crewe" },
        { id: 21, name: "Peterborough" },
        { id: 22, name: "Norwich" },
        { id: 23, name: "Gloucester" },
        { id: 24, name: "Swindon" },
        { id: 25, name: "Sunderland" },
        { id: 26, name: "Cambridge" },
        { id: 27, name: "Coventry" },
        { id: 28, name: "Warrington" },
        { id: 29, name: "Manchester" },
        { id: 30, name: "Oldham" },
        { id: 31, name: "Liverpool" },
        { id: 32, name: "Chelmsford" }
      ]
    }
  }
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
      color: $ourYellow;
    }
  }
}
ul {
  padding-left: 1rem;
  li {
    list-style-type: '✓';
    text-align: left;
    color: $ourYellow;
    padding-left: 10px;
  }
  &.cities li{
    list-style-type: circle;
    color: $ourBlack;
  }
}

</style>