<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>StephanGriesel</h4>
        <hr />
        <h2>
          <span class="animate__animated animate__fadeIn animate__delay-0.5s">always</span><br />
          <span class="animate__animated animate__fadeIn animate__delay-1s">CURIOUS</span>
        </h2>
        <hr />
      </div>
      <Footer />
    </section>
  </div>
</template>

<script>

import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
.hero {
  position: relative;
  height: 100vh;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #ECECEC;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>
