<template>
  <div>
  
    <button
      class="up"
      @click.prevent="toUp"
      title="Go to top">
      <i class="fas fa-chevron-up"></i>
    </button>
    
    <button class="down"
      @click.prevent="toDown"
      title="Go to down">
      <i class="fas fa-chevron-down"></i>
    </button>
  
  </div>
</template>

<script>
  export default {
    methods: {
      toUp() {
        console.log("toUp");
      },
      toDown() {
        console.log("toDown");
      }
    },
  }
</script>

<style lang="scss" scoped>

.up {
  // display: none;
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
  // display: none;
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