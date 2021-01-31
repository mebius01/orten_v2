<template>
  <div class="not" :class="animationClass" @keydown.passive.esc="exc">

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
    data() {
      return {
        animationClass: "zoomIn",
        error: '',
        success: ''
      }
    },
    methods: {
      errorData() {
        setTimeout(() => this.classAnimation = "slideOutRight", 3000)
        setTimeout(() => {
          this.error = []
          this.classAnimation = "slideInRight" 
        }, 4000)
      },
      close() {
        this.animationClass = "zoomOut"
        // setTimeout(() => this.$emit('closenot'), 500);
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
  justify-content: space-between;
  border-radius: 5px;
  padding: 10px;
  background: rgb(255, 168, 168);
  
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
  background: rgb(168, 255, 168);

  .icon {
    @extend .icon;
    font-size: 32px;
    color: #5CBB5C;
    border-right: 4px solid #5CBB5C;
  }
}
</style>