<template>
  <div class="b">
    <h1>Polygraphy</h1>
  </div>
</template>

<script>
  export default {
    layout: "polygraphy",
    head() {
    return {
      title: "Полиграфия - Ортен",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Это описание страницы Полиграфия'
        }
      ]
    }
  }
  }
</script>

<style lang="scss" scoped>
  .b {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 65px;
    margin: 0 auto;
  }
</style>