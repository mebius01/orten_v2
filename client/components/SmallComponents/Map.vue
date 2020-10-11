<template>
  <div>
    <div class="map">
      <img src="/map.png" alt="ТОВ Ортен" @click="showPopUp = !showPopUp"/>
    </div>
    <PopUp v-if="showPopUp" @closePopUp='closePopUp'>
      <div slot="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21787.74040647131!2d32.040273!3d46.952503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4784e49173525ad2!2z0J7RgNGC0LXQvSwg0KLQntCS!5e0!3m2!1sru!2sua!4v1602442728751!5m2!1sru!2sua" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from '../../components/PopUp'
  export default {
    components: {
      PopUp
    },
    data() {
      return {
        showPopUp: false,
      }
    },
    methods: {
      closePopUp() {
        this.showPopUp = false
      },
    },
  }
</script>

<style lang="scss" scoped>
.map {
    width: 260px;
    height: auto;
    cursor: pointer;
    image {
      max-width: 100%;
    }
}
iframe {
    width: 100%;
    height: 86vh;
}
</style>