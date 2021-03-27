<template>
  <div class="not" @keydown.passive.esc="exc">

    <template v-if="success">
      <div class="success">
        <div class="icon">
          <span>&#10003;</span>
        </div>
        <div class="content">
          {{ success }}
        </div>
      </div>
    </template>

    <template v-if="error">
      <div class="error">
        <div class="icon">
          <span>&#9888;</span>
        </div>
        <div class="content">
          {{ error }}
        </div>
      </div>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'Notification',
    props: {
      error: {
        type: String,
        default() {
          return null
        }
      },
      success: {
        type: String,
        default(){
          return null
        }
      }
    },
    // methods: {
    //   close() {
    //     this.error = null
    //     this.success = null
    //   },
    //   closeEsc(e) {
    //     if (e.keyCode == 27) {
    //       this.close()
    //     }
    //   }
    // },
    // created() {
    //   if (process.browser) {
    //     window.addEventListener('keydown', this.closeEsc);
    //   }
    // },
    // destroyed() {
    //   window.removeEventListener('keydown', this.closeEsc);
    // },
  }
</script>

<style lang="scss" scoped>
@import "@/assets/color.scss";
.not {
  width: 300px;
  height: auto;
  padding: 10px;
  z-index: 9999;
  position: fixed;
  top: 10px;
  right: 10px;
}
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  background: $red_color_l;
  
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    margin-right: 10px;
    font-size: 32px;
    color: #ff5e5e;
    border-right: 4px solid #ff5e5e;
  }
}

.success {
  @extend .error;
  background: $green_color_l;

  .icon {
    @extend .icon;
    font-size: 32px;
    color: #5CBB5C;
    border-right: 4px solid #5CBB5C;
  }
}
</style>