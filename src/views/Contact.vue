<template>
  <Darkmode/>
  <div class="portfolio">
    <section class="hero">
      <div class="hero-text container">
        <h4>StephanGriesel</h4>
        <hr />
        <h2>
          contact<br />
          ME
        </h2>
        <hr />
      </div>
    </section>
  </div>
    <div class='text-container'>
    <h1>Something about me</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ad, quas tenetur voluptatum dicta esse dolores voluptate hic rerum nobis, autem voluptatem! Quis, dolorum doloremque nobis atque delectus veritatis.</p>
  </div>
    <div class="parallax4"></div>
</template>

<script>

import Darkmode from '../components/Darkmode.vue';

export default {
  name: 'Contact',
  components: {
    Darkmode,
  },
};
</script>

<style lang="scss">
.hero {
  /* background-image: url("../assets/hero-bg.png");
  background-attachment: fixed; */
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

/* PARALLAX */

.parallax {
  background-image:url('https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg');
  min-height:500px;
  background-attachment:fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-container {
  height:800px;
  display:flex;
  justify-content: center;
  align-content: center;
}

</style>
