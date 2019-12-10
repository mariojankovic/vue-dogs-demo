<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Početna</router-link>
        </li>
        <li>
          <router-link to="/pasmine">Popis pasmina</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  box-sizing: border-box;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  display: block;
}

nav a {
  padding: 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
