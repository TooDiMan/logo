<template>
  <div  id="reviews-section" name="reviews-section">
    <img src="../../assets/images/review-title.png" width="165px" class="review_section_title">
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="transparent"
        img-width="338"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Нелли Кларк</h5>
        <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet.</p>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Нелли Кларк 22222</h5>
        <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet.</p>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Нелли Кларк 3333</h5>
        <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet.</p>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Нелли Кларк 44444</h5>
        <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet.</p>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
          img-src="https://i.ibb.co/0K2mrZV/Rectangle-6.png">
        <h5 class="review-name">Нелли Кларк 5555</h5>
        <p class="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem at fusce at egestas. Tempor ullamcorper ultrices nisl orci. Aenean consequat faucibus amet senectus. Tortor sit elit amet.</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<style>
.sr-only {
  display: none;
}

.review_section_title {
  margin: 42px auto 25px auto ;
}
.carousel-item  .img-fluid {
  width: 338px !important;
  margin: 0 auto;
}
.review-name {
  color: black;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
  width: 85%;
}


.review-text {
  color: black;
  font-size: 13px;
  font-weight: 400;
  width: 85%;
}
.carousel-caption {
  color: black!important;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20%!important;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-control-prev-icon {
  background-image: url('../../assets/icons/arrow-left(4).png')!important;
  width: 61px!important;
  height:42px!important;
}

.carousel-control-next-icon {
  background-image: url('../../assets/icons/arrow-right(4).png')!important;
  width: 61px!important;
  height:42px!important;
}

.carousel-control-prev, .carousel-control-next {

  width: 19%!important;
  opacity: 1!important;
}
</style>