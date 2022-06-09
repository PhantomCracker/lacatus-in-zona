<template>
  <div class="information">
    <div class="container pt-5 pb-5">
      <div class="row">
        <h1 class="fw-bold">Servicii de lăcătuș de urgență 24/7</h1>
        <h4 class="pt-3 pb-3 fw-lighter">Oferim cel mai rapid serviciu de lăcătuș din toată țara – 24/7, pe tot parcursul anului</h4>
        <h6> Când suni la numărul nostru de urgență, vom:
          <ul class="pt-3 pb-3">
            <li>✔ Răspunde imediat</li>
            <li>✔ Fi la locație în mai puțin de 25 de minute</li>
            <li>✔ Repara problema dumneavoastră</li>
          </ul>
        </h6>
        <p class="small-text">Căutați un lăcătuș local ieftin și aproape, 24 de ore din 24, în aceeași zi?</p>
        <p>Oferim servicii de lăcătuș de cea mai bună calitate cu mai multe echipe situate în apropierea dumneavoastră; oferim servicii de lăcătuș pentru afaceri, servicii de lăcătuș de urgență, servicii de lăcătuș 24 de ore din 24. Cu noi veți primi servicii de lăcătuș de încredere în cel mai urgent mod.</p>
        <p>Echipele noastre de lăcătuși sunt foarte bine pregătite pentru a oferi sfaturi de securitate pentru o mare varietate de aplicabilități. Furnizăm și montăm toate mărcile majore de încuietori și fitinguri de securitate. Serviciul nostru de apelare de urgență 24/7 se va asigura că proprietatea dumneavoastră este securizată rapid și eficient. Suntem întotdeauna gata să ajutăm clienții noștri cu cea mai bună echipă de lăcătuși profesioniști oriunde v-ați afla, puteți fi sigur că avem echipa potrivită lângă dumneavoastră, gata să vă asiste 24 de ore, 7 zile pe săptămână.</p>
        <p class="small-text">Lăcătușii noștri se află în apropierea dumneavoastră, la doar 25 de minute distanță. Manopera de la 49 GBP și încuietori de la 25 GBP cu garanție de 12 luni.</p>
        <button class="btn btn-primary my-primary-btn mt-4">
          <a class="text-white text-decoration-none" href="tel:+40310051198"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Sună acum!</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationComponent",
  components: {},
  methods: {}
}
</script>

<style scoped lang="scss">
  .information{
    .container {
      background-image: url("../../../public/images/bglayer_1.png");
      background-size: cover;
      background-repeat: no-repeat;

    }
    h3 {
      font-weight: 200;
    }
    ul {
      li {
        list-style-type: none;
        font-style: italic;
      }
    }
    .my-primary-btn {
      width: 25%;
      margin: 0 auto;
      background-color: $ourBlue;
      border-color: $ourBlue;
      @media screen and (max-width: 500px)  {
        width: 70%;
      }
    }
  }
</style>