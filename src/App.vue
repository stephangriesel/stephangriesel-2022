<template>
<div class="app">
  <router-view />
</div>
</template>

<script>

import './assets/tailwind.css';

export default {
  name: 'App',
};
</script>

<style>
* {
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}

.app {
  min-height:100vh;
  position: relative;
  background-color:#fff;
}

.container {
  padding:0 20px;
  max-width: 1140px;
  margin: 0 auto;

}
</style>
