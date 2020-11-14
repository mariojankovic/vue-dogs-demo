<template>
  <div>
    <h2>Sve pasmine</h2>
    <!-- Koristimo v-model koji nudi nešto što nazivamo two-way binding, odnosno vežemo varijablu u javascriptu koja se naziva ime s ovim input elementom, što znači da ovaj input može mijenjati vrijednost te varijable ali će isto tako i stalno motriti vrijednost te varijable ako bi se ona promijenila negdje drugdje -->
    <input
      type="text"
      v-model="ime"
      placeholder="Unesite ime pasmine ili samo dio"
    />
    <ul class="dogs">
      <!-- Klasična petlja u Vue-u koja prolazi kroz sve što array pod nazivom filtrirano vraća. Skrolajte na dno popisa pa ćete vidit kako izgleda sam array filtrirano odnosno ono što vraća. -->
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
      // Defaultovi za sve pasmine i search. Pasmine su prazan array kojeg će kasnije response zamijenit s pravom stvari
      pasmine: [],
      ime: "",
    };
  },
  async mounted() {
    /**
     * 
     Naš API ispod je vratio jedan objekt koji izgleda ovako: https://dog.ceo/api/breeds/list/all. Odnosno ako pogledate taj JSON, on je vratio objekt koji izgleda ovako: 
      {
        "message": {
            "affenpinscher": [],
            "african": [],
            "airedale": [],
            "akita": [],
            "appenzeller": [],
            "basenji": [],
            "beagle": [],
            ...
        }
      }

      Promotrite da je to objekt message: {} unutar već postojećeg objekta {} (vitičaste zagrade predstavljaju objekt, uglate array). Koristimo async/await i funkciju fetch unutar Javascripta. Ako vas više interesira o ovome, googlajte obje teme. Načelno nam async/await omogućava da sustav pričeka da fetch funkcija vrati nešto što ima smisla i ukoliko je taj response bio pozitivan odnosno 'ok' on će zamijeniti pasmine gore u data s onim što je API vratio. Ako API vrati error bit će samo poruka u prozoru.
     */
    let response = await fetch("https://dog.ceo/api/breeds/list/all");

    if (response.ok) {
      this.pasmine = await response.json();
    } else {
      alert("HTTP-Error: " + response.status);
    }
  },
  computed: {
    /**
     * Sve što smo dobili od API i spremili gore u varijablu imena pasmine sada filtriramo. Točnije, ako pogledate što nam je API vratio (malo je neobičan) vidit ćete da imamo objekt u kojem je hrpa arrayeva (primjerice affenpinscher: []) gdje je key sam naziv jednog keya u tom objektu (ovako: { objKey: 'keyValue' }) zapravo naziv pasmine. Pa smo morali u objektu sve te keyeve pokupit i njih potom filtrirati na način da pitamo da li uključuje (includes) nešto što nam this.ime vraća odnosno nešto što search nalazi.
     */
    filtrirano() {
      let filtered = [];
      if (this.pasmine.message)
        filtered = Object.keys(this.pasmine.message).filter((item) =>
          item.includes(this.ime)
        );

      return filtered;
    },
  },
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


