<template>
  <Darkmode />
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
    <div class="root">
      <img src="../assets/frame.png" ref="background" class="background" />
      <img src="../assets/bg.jpg" ref="foreground" class="foreground" />
      <div class="section section-1" ref="first">
        <div>
          <h1>About me</h1>
        </div>
      </div>
      <div class="section section-2" ref="second">
        <div>
          <h2>More about me</h2>
          <p>Loving it</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Darkmode from '../components/Darkmode.vue';

export default {
  name: 'About',
  components: {
    Darkmode,
  },
  setup() {
    const foreground = ref(null);
    const background = ref(null);
    const first = ref(null);
    const second = ref(null);

    // const handleScroll = () => {
    //   const { scrollY } = window.scrollY;
    //   // decreases as user scrolls
    //   first.value.style.opacity = (100 - (scrollY + window.innerHeight - first.value.offsetHeight)) / 100;
    //   // increases as user scrolls
    //   second.value.style.opacity = (scrollY + window.innerHeight - second.value.offsetTop) / 100;

    //   const maxBackgroundSize = 120;
    //   const backgroundSize = scrollY / (maxBackgroundSize - 100); // increases as user scrolls

    //   // zoom the background at a slower rate
    //   background.value.style.transform = 'scale(' + (100 + backgroundSize * 0.4) / 100 + ')';
    //   foreground.value.style.transform = 'scale(' + (100 + backgroundSize) / 100 + ')';
    // };

    // onMounted(() => {
    //   document.addEventListener('scroll', handleScroll);
    // });

    // onUnmounted(() => {
    //   document.removeEventListener('scroll', handleScroll);
    // });

    return {
      foreground,
      background,
      first,
      second,
    };
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
      background-color: #ececec;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}

/* Parallax */

img.background,
img.foreground {
  /* Fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Scale proportionately */
  width: 100%;
  height: auto;
}

img.background {
  /* Positioning */
  position: fixed;
  top: 0;
  left: 0;
}

.section {
  min-height: 100vh;
  position: relative;
}

.section > div {
  position: fixed;
  color: white;
  /* centers this div */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.section-1 {
  margin-bottom: 500px; /* determines the gap between our two sections */
  font-size: 4em;
}

.section-2 {
  opacity: 0; /* defaults to 0 because it's not visible */
}

.section-2 div {
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  text-align: center;
  padding: 50px;
  max-width: 300px;
}

.section-2 h2 {
  font-size: 2em;
  margin-bottom: 40px;
}

.section-2 p {
  line-height: 150%;
}
</style>
