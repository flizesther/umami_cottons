<template>
  <b-container-fluid>
    <vue-horizontal-list :items="items" :options="options">
      <template v-slot:default="{item}">
        <div class="item">
          <h5>{{item.title}}</h5>
          <p>{{item.content}}</p>
        </div>
      </template>
    </vue-horizontal-list>

    <b-img src="/images/main-image.jpg" class="w-100" fluid alt="Responsive image"></b-img>
    <h1 class="d-flex justify-content-center">Umami Cottons</h1>
    <b-img
      src="/images/um.png"
      class="w-25 d-flex mx-auto justify-content-center"
      fluid
      alt="Responsive image"
    ></b-img>
    <b-card-group deck>
      <b-card
        class="first-box"
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          class="image-slide"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="/images/cierre.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="/images/nina-con-upendas.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="/images/upenda.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="/images/upenda-abrazo.jpg"
          ></b-carousel-slide>
        </b-carousel>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>This card has supporting text below as a natural lead-in to additional content.</b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>

      <b-card
        title="Title"
        img-src="https://picsum.photos/300/300/?image=41"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first to show that equal height action.
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </b-card-group>
    <div class="d-flex justify-content-center">
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color image (#777)"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="Named color image (red)"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="Named color image (black)"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX color image"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="RGBa color image"></b-img>
      <b-img class="image-bottom" src="/images/cierre.jpg" alt="HEX shorthand color (#88f)"></b-img>
    </div>
  </b-container-fluid>
</template>

<script>
import VueHorizontalList from "vue-horizontal-list";
export default {
  head() {
    return {
      title: "Inicio",
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  components: {
    VueHorizontalList
  },
  data() {
    return {
      mainProps: { blank: true, width: 75, height: 75, class: "m1" },
      slide: 0,
      sliding: null,
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 }
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding: 24
        }
      },
      items: [{ title: "Item 0", content: "Content item with description" }]
    };
  },

  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss" scoped>
//import personal font
@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
  background-color: $blue;
}

.image-slide {
  height: 500px;
  width: 500px;
}
.image-bottom {
  height: 250px;
  width: 250px;
}
</style>
