<template>
  <div class="column">
    <ul>
      <li v-for="(item, index) in $t('contact.data')" :key="index">
        <template v-if="item.link">
          <a :class="item.link.class" :href="item.link.href" target="_blank">
            <i :class="item.class"></i>{{item.text}}
          </a>
        </template>
        <template v-else>
            <i :class="item.class"></i>{{item.text}}
        </template>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/color.scss";
@import "@/assets/main.scss";
@import "@/assets/contact.scss";
</style>