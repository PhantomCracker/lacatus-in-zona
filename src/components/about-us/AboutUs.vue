<template>
  <div class="about-us">
    <div class="container about-us-bg pt-4 mt-4 pb-4 mb-4">
      <div class="row">
        <div class="col-12 col-lg-6 mx-auto d-block mb-3 mt-3 my-blue">
          <h1>Lăcătuș în zonă - O poveste despre noi</h1>
        </div>
      </div>
      <div class="row text-start">
        <div class="col-12 col-lg-4">
          <img src="../../../public/images/MaskGroup.png" class="rounded mx-auto d-block  mb-3" alt="about-us-photo"/>
        </div>
        <div class="col-12 col-lg-8 ps-5">
          <p>Suntem o <span class="fw-bold">afacere locală de lăcătuși din Romania</span> care a început ca o mică, dar ambițioasă aventură în <span class="fw-bold">2002</span>, oferind servicii de lăcătuș de urgență 24 de ore pe zi. În doar câțiva ani am crescut calitatea serviciilor noastre și fiabilitatea lăcătușilor noștri profesioniști. Am ajutat la construirea numelui bun al afacerii noastre și, cu o creștere naturală, a urmat în curând maturitatea companiei noastre.</p>
          <p>Suntem autorizați ca o companie de lăcătușerie cu servicii complete, deservind cu succes și eficient întreaga zonă din Romania – București, Iași, Cluj, Timișoara, Suceava, Bacău, Focșani, Pitești, Galați, Ploiești, Tg. Mureș, Arad, Călărași, Alexandria. Suntem acoperiți în mod egal de rețeaua noastră de profesioniști cu înaltă experiență.</p>
          <p>Toți lăcătușii noștri sunt pe deplin certificați și investim timp și energie pentru a actualiza constant atât seturile de instrumente standard, cât și cunoștințele noastre de lăcătuș - tehnici, materiale, cele mai bune practici și cele mai recente tehnologii.</p>
          <div>
            <b-button v-b-toggle="'read-more'" class="collapse-button d-flex">Citește mai mult</b-button>
            <b-collapse id="read-more">
              <p>Oferim servicii complete de lăcătuș, servicii de lăcătuș de urgență, servicii de lăcătuș pentru afaceri, servicii de lăcătuș urgent și multe altele. Echipa noastră de profesioniști cu experiență vă poate oferi cel mai bun nivel de servicii cerut de situația dumneavoastră, de la simple înlocuiri de lacăt și deblocarea ușilor din față până la planificarea sau îmbunătățirea sistemelor de securitate mai avansate. Asistența noastră este gata să fie livrată în doar 25 de minute din momentul în care ați efectuat apelul – credem în importanța furnizării unui serviciu rapid și a restabilirii mobilității și securității clienților noștri în cel mai scurt timp posibil. Credem în calitatea lucrărilor noastre de lăcătuș și oferim o garanție de un an pentru toate încuietorile.</p>
              <p>Devotamentul nostru pentru calitatea serviciilor și satisfacția clienților ne-a ajutat să ne construim o reputație puternică ca furnizor profesionist de servicii de lăcătuș pentru toate tipurile și dimensiunile de clienți și probleme. Este o misiune continuă pentru noi să păstrăm și să continuăm să întărim această reputație prin furnizarea celor mai bune servicii de lăcătuș, cea mai înaltă calitate a manoperei și experiențe extrem de plăcute pentru clienți.</p>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {},
  // mounted() {
  //   this.$gtag.event('page', { method: 'Visited page' })
  // },
  methods: {}
}
</script>

<style scoped lang="scss">
  .about-us {
    h1 {
      font-weight: 500;
    }
    .collapse-button {
      color: $ourBlue;
      background-color: transparent;
      border: none;
      border-top: 5px solid $ourBlue;
      border-radius: 0;
      text-align: left;
      padding-left: 0;
      &:focus {
        box-shadow: none;
      }
    }
  }
</style>