<template>
  <header :class="{'scrolled-nav': scrolledNav}">
    <nav>
      <div class="branding">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
        <li><router-link class="link" :to="{name: 'Portfolio'}">Portfolio</router-link></li>
        <li><router-link class="link" :to="{name: 'Contact'}">Contact</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
          <li><router-link class="link" :to="{name: 'Portfolio'}">Portfolio</router-link></li>
          <li><router-link class="link" :to="{name: 'Contact'}">Contact</router-link></li>
       </ul>
      </transition>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'navigation',
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};

</script>

<style lang="scss">

header {
  z-index:10;
  width:100%;
  /* position:fixed; */
  transition: 0.5 ease all;

  nav {
    display: flex;
    flex-direction: row;
    padding:12px 0;
    transition:0.5s ease all;
    width:90%;
    margin:0 auto;
    @media(min-width: 1140px){
      max-width:1140px;
    }

    ul,
    .link {
      font-weight:500;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding:16px;
      margin-left:16px;
    }

    .link {
      font-size:14px;
      transition:0.5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;
      &:hover {
        color:#6484a3;
        border-color: #6484a3;
      }
    }
    .branding {
      display:flex;
      align-items: center;
      }

    .navigation {
      position: fixed;
      display:flex;
      align-items:center;
      flex:1;
      justify-content: flex-end;
      z-index: 101;
    }

    .icon {
      display:flex;
      align-items:center;
      position:absolute;
      top:15px;
      left:24px;
      z-index:102;

      i {
        cursor:pointer;
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg)
    }

    .dropdown-nav {
      background:rgba(255, 255, 255, 0.8);
      color:#000;
      display:flex;
      flex-direction: column;
      position:fixed;
      width:100%;
      max-width:125px;
      height: 100%;
      top:60px;
      left:0;
      z-index:20;

      li {
        margin-left:0;
        /* .link {
          color:#000;
        } */
      }
    }

    .mobile-nav-enter-active, .mobile-nav-leave-active  {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from, .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }

    }
}

.scrolled-nav {
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

  .navigation {
    background:rgba(255, 255, 255, 0.0);
    color:rgb(68, 68, 68);
    transition: ease-in-out 1s;
    transform: scale(0.0);
  }
}
</style>
