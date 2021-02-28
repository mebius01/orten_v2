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
  export default {
    name: 'PopUp',
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
@import '@/assets/main.scss';
@import '@/assets/animation.scss';

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
      color: $red_color;
      top: 10px;
      right: 20px;
    }
  }

  &__content {
    // @extend .shadow;
    border: 1px $green_color solid;
    width: 100%;
    background: white;
    overflow: auto;
    padding: 0 20px;
    display: grid;
    grid-column: 1fr;
    align-self: center;
    align-items: center;
      h1 {
        text-align: center;
        font-size: 65px;
      }
  }
}
// ul {
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   li {
//     margin: 10px 0;
//     text-align: center;

//     a {
//       width: 300px;
//       font-size: 20px;
//       line-height: 40px;
//       display: inline-block;
//       border-bottom: white 2px solid;
//       @extend .link_style;

//       &:hover {
//           border-bottom: $text_color 2px solid;
//           transition: border-bottom 1s;
//         }
//     }
//   }
// }
</style>