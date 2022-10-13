<template>
  <div class="portfolio">
    <section class="hero">
      <div class="hero-text container">
        <h4>StephanGriesel</h4>
        <hr />
        <h2>
          port<br />
          FOLIO
        </h2>
        <hr />
      </div>
    </section>
  </div>
  <div class="parallax"></div>
  <div class='text-container'>
    <h1>consulitate.com</h1>
    <p>domain registration, website hosting, design & development</p>
  </div>
  <div class="parallax2"></div>
  <div class='text-container'>
    <h1>sandysoil.properties</h1>
    <p>estate agent vaal triangle region (south africa)</p>
  </div>
  <div class="parallax3"></div>
  <div class='text-container'>
    <h1>krisbach.com</h1>
    <p>music artist from south africa</p>
  </div>
  <div class="parallax5"></div>
  <div class='text-container'>
    <h1>colemantraders.co.za</h1>
    <p>fuel, plant hire & container services from south africa</p>
  </div>
  <div class="parallax6"></div>
  <div class='text-container'>
    <h1>happyskin.co.za</h1>
    <p>beauty salon in south africa</p>
  </div>
  <div class="parallax7"></div>
  <div class='text-container'>
    <h1>chipchop.nl</h1>
    <p>furniture builder from netherlands</p>
  </div>
  <div class="parallax8"></div>
  <div class='text-container'>
    <h1>whsilverbacks.co.uk</h1>
    <p>specialists in stretch tent, temporary structures and event construction offering versatile solutions for any event</p>
  </div>
    <Footer />
</template>

<script>

import Footer from '../components/Footer.vue';

export default {
  name: 'Portfolio',
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
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
.parallax {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561397/stephangriesel/Screenshot_from_2022-03-06_10-49-13_elkvhv.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: contain;
}
.parallax2 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-51-05_usnnca.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: contain;
}
.parallax3 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-52-38_f0pn5o.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: contain;
}
.parallax5 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-50-34_hrvef7.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: contain;
}
.parallax6 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-53-09_gmv5j6.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: contain;
}
.parallax7 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561409/stephangriesel/Screenshot_from_2022-03-06_10-49-40_tvqk5g.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: contain;
}

.text-container {
  height:30vh;
  display:flex;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  h1 {
    margin:0 10px;
    font-weight:900;
  }
}

@media only screen and (min-width: 992px) {
.parallax {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561397/stephangriesel/Screenshot_from_2022-03-06_10-49-13_elkvhv.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax2 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-51-05_usnnca.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax3 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-52-38_f0pn5o.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax5 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-50-34_hrvef7.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax6 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561407/stephangriesel/Screenshot_from_2022-03-06_10-53-09_gmv5j6.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax7 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1646561409/stephangriesel/Screenshot_from_2022-03-06_10-49-40_tvqk5g.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallax8 {
  background-image:url('https://res.cloudinary.com/dvme554nj/image/upload/v1665635516/stephangriesel/Screenshot_2022-10-13_06.29.46_at0brp.png');
  min-height:70vh;
  background-attachment:fixed;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
}

</style>
