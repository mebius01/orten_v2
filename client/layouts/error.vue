<template>
  <div class="error">
    <div class="code">{{ error.statusCode }}</div>
    <h1 v-if="error.statusCode === 404">Сторінка не знайдена</h1>
    <h1 v-else>Щось пішло не так</h1>
    <ul>
      <li><i class="fas fa-home"></i> <NuxtLink to="/" exact>Додому</NuxtLink></li>
      <li><i class="fas fa-th"></i> <NuxtLink to="/category" exact>Категорії</NuxtLink></li>
      <li><i class="fas fa-luggage-cart"></i> <NuxtLink to="/product" exact>Товари</NuxtLink></li>
      <li><i class="fas fa-cogs"></i> <NuxtLink to="/service" exact>Сервіс</NuxtLink></li>
      <li><i class="fas fa-print"></i> <NuxtLink to="/polygraphy" exact>Поліграфія</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error_layouts' // you can set a custom layout for the error page
  }
</script>
<style lang="scss" scoped>
@import "@/assets/main.scss";
.error {
  width: 100vw;
  height: 100vh;
  background: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .code {
    font-size: 16em;
  }
  ul {
    display: flex;
    margin: 10px 0;
    li {
      padding: 0 10px;
      a {
        @extend .link_style;
        border-bottom: white 2px solid;
        display: inline-block;
        &:hover {
          border-bottom: $text_color 2px solid;
          transition: border-bottom 1s;
        }
      }
    }
  }
  
}

</style>