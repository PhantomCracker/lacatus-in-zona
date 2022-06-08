<template>
  <div class="service-card d-block d-md-flex">
    <div class="card p-3 w-100" v-for="service in services" :key="service.id">
        <div class="card-body">
          <h5 class="card-title"> <font-awesome-icon :icon="service.icon" /> {{ service.title }}</h5>
          <p class="card-text pt-4">{{ service.description }}</p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ServicesCard",
  data() {
    return {
      services: [
        { id: 0, title: "Lăcătuș de urgență", icon:"tools", description: "Echipa noastră de profesioniști în servicii de lăcătuș vă poate oferi cel mai înalt nivel de servicii pentru situația dumneavoastră."},
        { id: 1, title: "Schimbare încuietoare", icon:"lock", description: "Vă vom oferi atât dumneavoastră cât și companiei dumneavoastră servicii profesionale, prompte, eficiente și competitive."},
        { id: 2, title: "Reparații furturi", icon:"key", description: "Echipa noastră include lăcătuși instruiți, specialiști cu experiență în feronerie arhitecturală și experți în lacăte."},
        { id: 3, title: "Rezidențial / Comercial", icon:"door-closed", description: "Vă oferim servicii complete pentru nevoi industriale, comerciale și rezidențiale."},
      ]
    }
  },
  components: {},
  methods: {}
}

</script>

<style scoped lang="scss">
  .service-card {
    background-color: $ourBlack;
    border-top: 1rem solid #FFFFFF;
  }
  .card {
    background-color: $ourBlack;
    .card-title {
      font-size: 1.5rem;
      color: $ourBlue;
    }
    .card-text {
      color: #ffffff;
    }

    &:hover {
      background-color: $ourBlue;
      .card-title {
        color: $ourBlack;
      }
    }
  }
</style>