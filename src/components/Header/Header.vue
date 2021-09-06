<template>
  <div>
   <header>
    <nav class="navigation">
    <Slide width="120">
      <a id="home" href="#">
        <Navigation/>
      </a>
    </Slide>
    <a href="/" class="logo"><img src="../../assets/images/logo.png" alt="logo" width="177px"></a>
    <a href="tel:380993836702" class="phone-number-icon" v-if="isMobile"><img src="../../assets/icons/phone.png" width="34px"/></a>
    <a href="tel:380993836702" class="phone-number-link" v-if="isTablet">+38 099 383 6702</a>
    </nav>
   </header>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import Navigation from "@/components/Header/Navigation/Navigation";

export default {
  components: {
    Slide,
    Navigation
  },
  data: function () {
    return {
      isMobile: (window.innerWidth < 768)?true:false,
      isTablet:(window.innerWidth >= 768)?true:false,
    }
  },
  created() {
    console.log(this.isTablet)
  }
}
</script>

<style>
.bm-burger-bars {
  height: 2px!important;
}
.phone-number-icon {
  height: 100%;
}
.bm-burger-button {
  cursor: pointer;
  height: 18px;
  width: 25px!important;
  left: 20px;
  position: absolute;
  top: 54px;
}
.navigation {
  display: flex;
  width: 100%;
   justify-content: space-around;
  align-items: center;
}
header {
  height: 112px;
  display: flex;
  align-items: center;
}

.bm-menu {
  background-color: #FBF7F3;
  height: auto;
  left: 0;
  overflow-x: hidden;
  padding-top: 0!important;
  position: fixed;
  top: 0;
  transition: .5s;
  z-index: 1000;
}

a:hover {
  color: #604CC4!important;
}

@media (min-width: 768px) {qqqq
  .logo img {
    width: 237px!important;
  }
  .bm-burger-bars {
    height: 3px!important;
  }
  .bm-burger-button {
    cursor: pointer;
    height: 26px;
    width: 35px !important;
    left: 31px;
    position: absolute;
    top: 54px;
   }
  .phone-number-link {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    color: black;
    text-decoration: none;
  }
  }


</style>
