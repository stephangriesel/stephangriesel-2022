<template>
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
    <form action="https://form.taxi/s/jpnu0sjk" method="POST">
    <label for="Name">Name:</label>
    <input type="text" name="Name">
    <label for="Email">Email</label>
    <input type="email" name="Email">
    <label for="Message">Message</label>
    <textarea name="Message"></textarea>
    <button type="submit" value="Send">SEND</button>
    </form>
  </div>
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

:root {
  --white: #FFFFFF;
  --greyLight-1: #E4EBF5;
  --greyLight-2: #dcdcdc;
  --greyLight-3: #dddddd;
  --greyDark: #777777;
}

$shadow: .3rem .3rem .6rem var(--greyLight-2),
-.2rem -.2rem .5rem var(--white);
$inner-shadow: inset .2rem .2rem .5rem var(--greyLight-2),
inset -.2rem -.2rem .5rem var(--white);

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
    margin: 0.8rem 0;
    width: 20.4rem;
    height: 4rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.4rem;
    padding-left: 1.4rem;
    box-shadow: $inner-shadow;
    background: none;
    font-family: inherit;
    color: var(--greyDark);
    &::placeholder { color: var(--greyLight-3); }
    &:focus { outline: none; box-shadow: $shadow; }
  }

  }
  button  {
    margin:10px 0;
    background: rgb(255, 255, 255);
    border: 1px rgb(216, 216, 216) solid;
    color:#000000;
    padding: 10px;
    background-image: linear-gradient(0, #bbbbbb, #c5c5c5);
    background-size: 0;
    transition: .8s;
    background-repeat: no-repeat;
    &:hover {
      background-size: 100%;
      color: #fff;
  }
}
</style>
