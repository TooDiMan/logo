<template>
  <div>
  <nav>
    <scrollactive class="nav" active-class="-active">
      <a href="#services_section" class="scrollactive-item">SERVICES</a>
      <a href="#about_me_section" class="scrollactive-item">ABOUT ME</a>
      <a href="#reviews-section" class="scrollactive-item">FEEDBACK</a>
      <a href="#articles_section" class="scrollactive-item">ARTICLES</a>
      <a href="#contacts_section" class="scrollactive-item">CONTACTS</a>
    </scrollactive>
  </nav>
<!--  <SocialIcons/>-->
  </div>
</template>

<script>
// import SocialIcons from '../../Contacts_section/SocialIcons.vue'
export default {
  components: {
    // SocialIcons
  }
}

</script>

<style>
.nav{
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 20px;
}
.nav a  {
  display: block;
   width: 100%;
}
.nav a  {
  color: black;
  text-decoration: none;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  margin-bottom: 18px;
  text-transform: uppercase;
}
.nav a:last-child {
  margin-bottom: 31px;
}
</style>
