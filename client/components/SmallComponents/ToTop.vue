<template>
  <div>
    <button
      class="up"
      @click.prevent="toUp"
      title="Go to top"
      v-if="visibilityUp"
      >
      <i class="fas fa-chevron-up"></i>
    </button>
    
    <button class="down"
      @click.prevent="toDown"
      title="Go to down"
      v-if="visibilityDown"
      >
      <i class="fas fa-chevron-down"></i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ToTop',
    data() {
      return {
        visibilityUp: false,
        visibilityDown: false,
      }
    },
    methods: {
      handleScroll() {
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let scrollTop = document.documentElement.scrollTop
        if (scrollTop > 158) {
          this.visibilityUp = true
          this.visibilityDown = true
        } else if (scrollTop < 158) {
          this.visibilityUp = false
        }
        if (scrollTop >  height - 180) {
          this.visibilityDown = false
        }
      },
      toUp() {
        document.documentElement.scrollTop = 0;
      },
      toDown() {
        document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style lang="scss" scoped>

.up {
  cursor: pointer;
  border: none;
  height: 30px;
  width: 30px;
  position: fixed;
  right: 12px;
  bottom: 60px;
  background: hsla(208, 98%, 43%, 0.6);
  color: white;
}
.down {
  cursor: pointer;
  border: none;
  height: 30px;
  width: 30px;
  position: fixed;
  right: 12px;
  bottom: 30px;
  background: hsla(0, 86%, 59%, 0.6);
  color: white;
}

</style>