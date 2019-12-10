<template>
  <div class="pasmina">
    <h2>{{ $route.params.naziv }}</h2>
    <img :src="pasmina.message">

    <h2>Što nam je API vratio o pojedinom psu</h2>
    <pre>
      {{ pasmina }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pasmina: {}
    };
  },
  async mounted() {
    let response = await fetch(
      `https://dog.ceo/api/breed/${this.$route.params.naziv}/images/random`
    );

    if (response.ok) {
      this.pasmina = await response.json();
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }
};
</script>
