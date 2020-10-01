<template>
  <div class="popup" :class="animationClass" @keydown.passive.esc="exc">
    <div class="popup__header" @click="close">
      <i class="fas fa-times"></i>
    </div>
    <div class="popup__content">
      <slot name="phone">
        <Contact />
      </slot>
      <slot name="pay"></slot>
      <slot name="delivery"></slot>
    </div>
  </div>
</template>

<script>
import Contact from './Contact'
  export default {
    // https://overcoder.net/q/499771/%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-vuejs-%D0%B2-%D0%BE%D0%BA%D0%BD%D0%BEd
    // created() {
    //   window.addEventListener('scroll', this.handleScroll);
    // },
    // 
    // bdestroyed () {
    //   window.removeEventListener('scroll', this.handleScroll);
    // },
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
      exc() {
        console.log("Exc"); // Any code to be executed when the window is scrolled
      }
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
  .shadow {
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
  }
  .popup {
    height: 100%;
    width: 100%;
    padding: 50px;
    display: flex;
    background-color: hsla(0, 0%, 100%, 0.699);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

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
      @extend .shadow;
      width: 100%;
      background: white;
    }
  }
</style>