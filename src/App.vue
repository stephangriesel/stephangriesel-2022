<template>
<Darkmode/>
</template>

<script>
import Darkmode from './components/Darkmode.vue';

import './assets/tailwind.css';

export default {
  name: 'App',
  components: {
    Darkmode,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
