<template>
  <div class="column">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <template v-if="item.link">
          <a :class="item.link.class" :href="item.link.href" exact>
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

<script>
export default {
  name: "Schedule",
  data() {
    return {
      data: [
        {class: "fas fa-door-open", text: "График работы", link: false},
        {class: "fas fa-clock", text: "Пн-Пт: 9:00 - 18:00", link: false},
        {class: "fas fa-utensils", text: "Пн-Пт: 12:00 - 12:30", link: false},
        {class: "fas fa-clock", text: "Сб-Вс: Выходной", link: false},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/color.scss";
@import "@/assets/main.scss";
@import "@/assets/contact.scss";
</style>