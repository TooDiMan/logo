<template>
  <div id="app">
<!--    <router-view/>-->
    <Header/>
    <Banner/>
    <ServicesSection/>
    <AboutMeSection/>
    <ReviewsSection/>
    <ArticlesSection/>
    <ContactsSection/>
    <Footer/>
  </div>

</template>

<script>
import Header from './components/Header/Header.vue';
import Banner from  './components/Banner/Banner.vue';
import AboutMeSection from './components/About_me_section/About_me_section.vue';
import  ServicesSection from './components/Services_section/Services_section.vue';
import  ArticlesSection from './components/Articles_section/Articles_section.vue';
import ContactsSection from './components/Contacts_section/Contacts_section.vue';
import ReviewsSection from './components/Reviews_section/Reviews_section.vue';
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    AboutMeSection,
    ServicesSection,
    ArticlesSection,
    ContactsSection,
    ReviewsSection,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html {
  box-sizing: border-box;
}
:root {
  --main-color: #063175;
  --border-radius: 2px;
  font-family: 'Montserrat', sans-serif;
}

body {

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
body {
 background-image: url("./assets/images/bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button:hover {
  cursor: pointer;
}
button:focus {
  outline: none;
}
a {
  display: block;
  text-decoration: none;
}
ul {
  list-style: none;
}
.container {
  width: 335px;
  margin: 0 auto;
}
@media screen and (min-width: 768px) {
  .container {
    width: 620px;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    width: 876px;
  }
}
</style>
