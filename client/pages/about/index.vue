<template>
  <div class="main-container">
    <Aside />
    <main class="card_block">
    <div class="header-for-block"><i class="fas fa-exclamation-circle"></i>О нас</div>
    <div class="card" v-for="(item, index) in $t('about.data')" :key="index" >
      <h4 v-if="item.h">{{ item.h }}</h4>
      <p v-if="item.p">{{ item.p }}</p>
      <ul>
        <li v-for="(li, index) in item.li" :key="index" >{{li}}</li>
      </ul>
    </div>
    
    </main>
  </div>
</template>

<script>
import Aside from "@/components/Aside"
  export default {
    components: {
      Aside
    },
  head() {
    return {
      title: this.$i18n.t('about.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('about.description')
        },
        {
          hid: 'title',
          name: 'title',
          content: this.$i18n.t('about.title')
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/assets/main.scss";
.card_block {
  gap: 5px;
  grid-template-columns: repeat(1, 1fr);
}
.card {
  h4 {
    padding-top: 10px;
    padding-bottom: 5px;
    // text-align: center;
    text-transform: uppercase;
  }
  ul {
    display: inline-block;
    margin-top: 8px;
    li {
      padding: 5px;
      margin-left: 15px;
      border-bottom: 1px solid $green_color;
    }
  }
}
</style>
