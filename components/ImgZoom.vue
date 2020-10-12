<template>
  <div
    class="zoom-on-hover m-2"
    :class="[aspectRatio ? 'aspect-ratio' : '', zoom < 2 ? 'zoomable' : 'not-zoomable']"
    :style="styleAspectRatio"
    @mousemove="move"
    @mouseleave="resetZoom"
    @click="handleZoom"
  >
    <b-img-lazy
      ref="normal"
      class="img normal"
      :show="noLazy"
      :src="optimizedSrc"
      :alt="alt"
      offset="50"
      :style="normalStyle"
    />
    <b-img-lazy
      v-if="zoom !== 0"
      ref="zoom"
      :src="src"
      class="img zoom"
      :alt="alt"
      :style="zoomStyle"
      @load.native="load"
    />
  </div>
</template>

<script>

const MAX_ZOOM = 2

function pageOffset (el) {
  const rect = el.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return {
    y: rect.top + scrollTop,
    x: rect.left + scrollLeft
  }
}
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    optimizedSrc: {
      type: String,
      required: true
    },
    aspectRatio: {
      type: Number,
      default: undefined
    },
    alt: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    scale: {
      type: Number,
      default: 1
    },
    noLazy: {
      type: Boolean,
      default: false
    },
    product: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    zoom: 0,
    zoomEvent: undefined
  }),
  computed: {
    zoomStyle () {
      return `width: ${100 * (this.zoom + 1)}%`
    },
    normalStyle () {
      return `opacity: ${this.zoom === 0 ? 1 : 0}`
    },
    styleAspectRatio () {
      return this.aspectRatio ? `padding-bottom: calc(100% / ${this.aspectRatio})` : ''
    }
  },
  methods: {
    handleZoom (event) {
      if (this.zoom < MAX_ZOOM) {
        this.zoomEvent = event
        this.zoom++
        if (this.zoom > 1) {
          this.move(event)
        }
      } else {
        this.zoom = 0
      }
      this.$services.tracking.eventGa({
        eventcategory: 'interaction',
        eventaction: 'zoom',
        eventlabel: this.product.name
      })
    },
    load (e) {
      this.move(this.zoomEvent)
    },
    resetZoom () {
      this.zoom = 0
    },
    move (event) {
      if (!this.$refs.zoom || !this.$refs.normal) { return }

      const offset = pageOffset(this.$el)
      const zoom = this.$refs.zoom.$el
      const normal = this.$refs.normal.$el
      const relativeX = event.clientX - offset.x + window.pageXOffset
      const relativeY = event.clientY - offset.y + window.pageYOffset
      const normalFactorX = relativeX / normal.offsetWidth
      const normalFactorY = relativeY / normal.offsetHeight
      const offsetEvent = (event.type === 'mousemove' || (event.type === 'click' && this.zoom === 1))
      const x = normalFactorX * (zoom.offsetWidth * this.scale - (offsetEvent ? normal.offsetWidth : 0))
      const y = normalFactorY * (zoom.offsetHeight * this.scale - (offsetEvent ? normal.offsetHeight : 0))
      zoom.style.left = -x + 'px'
      zoom.style.top = -y + 'px'
    }
  }
}
</script>

<style scoped lang="scss">
.aspect-ratio {
  width: 100%;
  height: 0;
  .img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.zoom-on-hover {
  position: relative;
  overflow: hidden;

//   &.zoomable{
//     &:hover {
//       cursor: url("~assets/icons/svg/search.svg"), auto;
//       cursor: -webkit-image-set(
//         url('~assets/png/search.png') 1x,
//         url('~assets/png/search@2x.png') 2x
//       ), auto;
//     }
//   }
//   &.not-zoomable {
//     &:hover {
//       cursor: url("~assets/icons/svg/search.svg"), auto;
//       cursor: -webkit-image-set(
//         url('~assets/png/search.png') 1x,
//         url('~assets/png/search@2x.png') 2x
//       ), auto;
//     }
//   }
  .normal {
    width: 100%;
    height: 100%;
  }
  .zoom {
    position: absolute;
    transform-origin: top right;
  }
}

::v-deep .modal-body {
    padding: 0;
}

::v-deep .modal-content {
    height: 100vh;
    border: none;
}

.icon-close {
  position: absolute;
  right: 10px;
  top: 10px;
}

.image-modal {
  height: 100%;
  margin-top: 35%;
}

::v-deep img {
    width: 100%;
}
</style>
