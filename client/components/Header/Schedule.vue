<template>
  <div class="b-component">
    <!-- <p class="toggle" @click="toggleOn"><i class="fas fa-door-open icon"></i>График работы
      <i :class="chevron"></i>
    </p> -->
    <!-- <ul :class="toggleClass" v-if="toggle"> -->
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <template v-if="item.link">
          <nuxt-link :class="item.link.class" :to="item.link.href" exact>
            <i :class="item.class"></i>{{item.text}}
          </nuxt-link>
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
  data() {
    return {
      data: [
        {class: "fas fa-door-open", text: "График работы", link: false},
        {class: "fas fa-clock", text: "Пн-Пт: 9:00 - 18:00", link: false},
        {class: "fas fa-utensils", text: "Пн-Пт: 12:00 - 12:30", link: false},
        {class: "fas fa-clock", text: "Сб-Вс: Выходной", link: false},
      ],
      toggleClass: "fadeInDown",
      chevron:  "fas fa-chevron-down",
      toggle: false
    }
  },
  methods: {
    toggleOn: function() {
      if (this.toggle) {
        this.toggleClass = "fadeOutUp"
        this.chevron = "fas fa-chevron-down"
        setTimeout(() => this.toggle = false, 400);
      }
      if (!this.toggle) {
        this.toggleClass = "fadeInDown"
        this.chevron = "fas fa-chevron-up"
        this.toggle = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/contact.scss";
</style>