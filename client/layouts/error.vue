<template>
  <div class="error">
    <div class="code">{{ error.statusCode }}</div>
    <h1 v-if="error.statusCode === 404">Сторінка не знайдена</h1>
    <h1 v-else>Щось пішло не так</h1>
    <ul>
      <li><i class="fas fa-home"></i> <NuxtLink :to="`/${$i18n.locale}`" exact>Додому</NuxtLink></li>
      <li><i class="fas fa-th"></i> <NuxtLink :to="`/${$i18n.locale}/category`" exact>Категорії</NuxtLink></li>
      <li><i class="fas fa-luggage-cart"></i> <NuxtLink :to="`/${$i18n.locale}/product`" exact>Товари</NuxtLink></li>
      <li><i class="fas fa-cogs"></i> <NuxtLink :to="`/${$i18n.locale}/service`" exact>Сервіс</NuxtLink></li>
      <li><i class="fas fa-print"></i> <NuxtLink :to="`/${$i18n.locale}/polygraphy`" exact>Поліграфія</NuxtLink></li>
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
        border-bottom: rgb(243, 243, 243) 2px solid;
        display: inline-block;
        &:hover {
          border-bottom: $text_color 2px solid;
          transition: border-bottom 1s;
        }
      }
    }
  }
  @media (max-width: 650px) and (min-width: 200px){
    .code {
      font-size: 8em;
    }
    h1 {
      font-size: 20px;
    }
      ul {
        flex-direction: column;
      }
}
}

</style>