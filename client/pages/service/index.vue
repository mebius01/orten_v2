<template>
  <div class="b">
    <h1>Service</h1>
  </div>
</template>

<script>
  export default {
    layout: "service",
    head() {
    return {
      title: "Сервис - Ортен",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Это описание страницы Сервис'
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