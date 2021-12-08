<template>
  <header :class="{'scrolled-nav': scrollPosition}">
    <nav>
      <div class="branding">
        <div>
          S
        </div>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
        <li><router-link class="link" :to="{name: ''}">About</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
          <li><router-link class="link" :to="{name: ''}">About</router-link></li>
          <li><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
          <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
       </ul>
      </transition>
    </nav>
  </header>
</template>

<script>

export default {};

</script>

<style>

</style>
