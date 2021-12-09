<template>
  <header :class="{'scrolled-nav': scrollPosition}">
    <nav>
      <div class="branding">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
        <li><router-link class="link" :to="{name: ''}">About</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
        <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fa fa-bars" :class="{'icon-active' : mobileNav}"></i>
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

export default {
  name: 'navigation',
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
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

<style lang="scss" scoped>

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
        color:#989809;
        border-color: #989809;
      }
    }
    .branding {
      display:flex;
      align-items: center;
      }

    .navigation {
      display:flex;
      align-items:center;
      flex:1;
      justify-content: flex-end;
      margin-right:6em;
    }

    .icon {
      display:flex;
      align-items:center;
      position:absolute;
      top:15px;
      left:24px;

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
      background:white;
      display:flex;
      flex-direction: column;
      position:fixed;
      width:100%;
      max-width:250px;
      height: 100%;
      top:40px;
      left:0;
      z-index:20;

      li {
        margin-left:0;
        /* .link {
          color:#000;
        } */
      }
    }
    }
}
</style>
