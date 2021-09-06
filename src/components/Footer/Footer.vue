<template>
  <div id="footer">
    <footer class="footer">
   <img class="footer-logo" src="../../assets/images/footer-logo.png" width="210px">
      <Navigation/>
      <div class="final-signature"><img class="footer-icon" src="../../assets/icons/footer-icon.png" width="14px"><p class="footer-text">ALL RIGHTS RESERVED</p></div>
    </footer>
  </div>
</template>

<script>
import Navigation from "@/components/Header/Navigation/Navigation.vue";
export default {
  components: {
    Navigation,
  }
}
</script>

<style>
.footer {
  background-color: rgba(255, 255, 255, 0.34);
  padding :31px 0 50px 20px;
}
.footer-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  text-transform: uppercase;
  margin-bottom: 0;
}
.final-signature {
  display: flex;
  align-items: center;
}
.final-signature img {
margin-right: 10px;
}
</style>
