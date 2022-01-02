<template>
  <div class="portfolio">
    <section class="hero">
      <div class="hero-text container">
        <h4>StephanGriesel</h4>
        <hr />
        <h2>
          thank<br />
          YOU
        </h2>
        <hr />
      </div>
    </section>
  </div>
  <div class='text-container'>
    <form>
    Chat soon!
    </form>
  </div>
    <div class="parallax4"></div>
  <Footer />
</template>

<script>

import Footer from '../components/Footer.vue';

export default {
  name: 'Contact',
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

/* PARALLAX */

.parallax4 {
  background-image:url('https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg');
  min-height:30vh;
  background-attachment:fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-container {
  /* height:300px; */
  form {
    display:flex;
    flex-direction: column;
  }
  input, textarea {
    border: 1px rgb(169, 169, 169) solid;
    margin: 5px 0;
    padding:10px;
  }
  button  {
    background: rgb(169, 169, 169);
    padding: 10px;
  }
}

</style>
