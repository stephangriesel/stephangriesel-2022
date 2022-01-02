<template>
  <div class="about">
    <section class="hero">
      <div class="hero-text container">
        <h4>StephanGriesel</h4>
        <hr />
        <h2>
          about<br />
          ME
        </h2>
        <hr />
      </div>
    </section>
  </div>
  <div class="parallax"></div>
  <div class='text-container'>
    <h1>Something about me</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ad, quas tenetur voluptatum dicta esse dolores voluptate hic rerum nobis, autem voluptatem! Quis, dolorum doloremque nobis atque delectus veritatis.</p>
  </div>
  <div class="parallax2"></div>
  <div class='text-container'>
    <h1>Something about me</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ad, quas tenetur voluptatum dicta esse dolores voluptate hic rerum nobis, autem voluptatem! Quis, dolorum doloremque nobis atque delectus veritatis.</p>
  </div>
  <div class="parallax3"></div>
  <div class='text-container'>
    <h1>Something about me</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam inventore ad, quas tenetur voluptatum dicta esse dolores voluptate hic rerum nobis, autem voluptatem! Quis, dolorum doloremque nobis atque delectus veritatis.</p>
  </div>
    <div class="parallax4"></div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'About',
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
      background-color: #ececec;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}

.text-container {
  height:800px;
  display:flex;
  justify-content: center;
  align-content: center;
}
</style>
