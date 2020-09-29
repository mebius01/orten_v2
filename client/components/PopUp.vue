<template>
  <div class="popup">
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
    data() {
      return {
        
      }
    },
    methods: {
      close() {
        this.$emit('closePopUp')
      }
    }
  }
</script>

<style lang="scss" scoped>
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
    background-color: hsla(124, 100%, 93%, 0.562);
    position: fixed;
    top: 0;
    left: 0;

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