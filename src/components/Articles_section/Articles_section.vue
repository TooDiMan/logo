<template>
  <div id="articles_section" class="container" name="articles_section">
    <img src="../../assets/images/articles-title.png" width="142px" class="articles_section_title">
    <ul class="articles-list">
      <li class="articles-list-item">
        <h4 class="article-title">нимфомания - что это?</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
              <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="92px"/></a>

      </li>
      <li class="articles-list-item">
        <h4 class="article-title">тело</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
              <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="77px"/></a>

      </li>
      <li class="articles-list-item">
        <h4 class="article-title">психика</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
              <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="92px"/></a>

      </li>
      <li class="articles-list-item">
        <h4 class="article-title">энергия</h4>
        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet at egestas lectus nibh aenean. Aenean consequat faucibus amet senectus. </p>
         <a href="#" class="arrow-link">READ MORE <img src="../../assets/icons/arrow.png" width="92px"/></a>
      </li>
    </ul>
    <img width=" 337px" class="deco-img" src="../../assets/images/deco-img.png">
  </div>
</template>

<script>
</script>

<style>

@font-face {
  font-family: 'Mak';
  src: url('../../assets/fonts/MAK.eot');
  src: local('☺'), url('../../assets/fonts/MAK.woff') format('woff'), url('../../assets/fonts/MAK.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


#articles_section {
  margin-top: 100px;
}
.articles_section_title {
  margin: 100px auto 26px 0;
}
.article-title {
  font-family: 'Mak';
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.articles-list .articles-list-item:first-child{
  background-image: url("../../assets/images/img-bg-1.png");
  width: 335px;
  height: 619px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}

.articles-list .articles-list-item:nth-child(2){
  background-image: url("../../assets/images/art-2-bg.png");
  width: 335px;
  height: 422px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}

.articles-list .articles-list-item:nth-child(3){
  background-image: url("../../assets/images/art-3-bg.png");
  width: 335px;
  height: 422px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}
.articles-list .articles-list-item:nth-child(4){
  background-image: url("../../assets/images/art-bg-4.png");
  width: 335px;
  height: 422px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 60px 22px 0 22px;
  margin: 0 auto 21px auto;
}
ul {
  padding: 0;
  margin: 0;
}
.articles-list {
  display: block;
  margin: 0 auto;
  padding: 0;
}

.article-text {
  color: #484848;
  font-weight: 400;
  font-size: 13px;
  line-height: 30px;
  margin-bottom: 0;
}
.deco-img {
  display: block;
  margin: 100px auto 0 auto;
}
</style>
