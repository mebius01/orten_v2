<template>
  <div class="popup" :class="animationClass" @keydown.passive.esc="exc">
    <div class="popup__header" @click="close">
      <i class="fas fa-times"></i>
    </div>
    <div class="popup__content">
      <slot name="menu"></slot>
      <slot name="basket"></slot>
      <slot name="like"></slot>
      <slot name="phone"></slot>
      <slot name="pay"></slot>
      <slot name="delivery"></slot>
      <slot name="map"></slot>
      <slot name="product"></slot>
    </div>
  </div>
</template>

<script>
import Contact from './Contact'
  export default {
    data() {
      return {
        animationClass: "zoomIn"
      }
    },
    methods: {
      close() {
        this.animationClass = "zoomOut"
        setTimeout(() => this.$emit('closePopUp'), 500);
      },
      closeEsc(e) {
        if (e.keyCode == 27) {
          this.close()
        }
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('keydown', this.closeEsc);
      }
    },
    destroyed() {
      window.removeEventListener('keydown', this.closeEsc);
    },
  }
</script>

<style lang="scss" scoped>
.zoomIn {
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  }
  @keyframes zoomIn {
  0% {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }
  50% {
  opacity: 1;
  }
  } 

.zoomOut {
  animation-name: zoomOut;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  }
  
  @keyframes zoomOut {
  0% {
  opacity: 1;
  }
  50% {
  opacity: 0;
  transform: scale3d(.3, .3, .3);
  }
  100% {
  opacity: 0;
  }
  } 

  $text-color: #2E4053;
  $green-color: #85C987;
  $global_blue: #428bca;
  $color_red: #fc6251;
  // .shadow {
  //   box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
  // }
  .popup {
    height: 100%;
    width: 100%;
    padding: 50px;
    display: flex;
    background-color: hsla(0, 0%, 100%, 0.699);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    &__header {
      i {
        cursor: pointer;
        font-size: 38px;
        position: absolute;
        color: $color_red;
        top: 10px;
        right: 20px;
      }
    }

    &__content {
      // @extend .shadow;
      border: 1px $green-color solid;
      width: 100%;
      background: white;
      overflow: auto;
    }
  }
</style>