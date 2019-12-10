<template>
  <div>
    <h2>Sve pasmine</h2>
    <input type="text" v-model="ime" placeholder="Unesite ime pasmine ili samo dio">
    <ul class="dogs">
      <li v-for="(pasmina, index) in filtrirano" :key="index">
        <router-link :to="`/pasmine/${pasmina}`">{{ pasmina }}</router-link>
      </li>
    </ul>
    <h2>Što nam je API vratio (filtrirano od tražilice)</h2>
    <pre>
      {{ filtrirano }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pasmine: [],
      ime: ""
    };
  },
  async mounted() {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");

    if (response.ok) {
      this.pasmine = await response.json();
    } else {
      alert("HTTP-Error: " + response.status);
    }
  },
  computed: {
    filtrirano() {
      if (this.pasmine.message)
        return Object.keys(this.pasmine.message).filter(item =>
          item.includes(this.ime)
        );
    }
  }
};
</script>

<style scoped>
div {
  text-align: left;
}

ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 0;
  padding: 0;
}

li {
  display: block;
}

input {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}
</style>


