<template>
  <div class="menu-sched-contact">
    <div class="b-component">
      <p class="toggle" @click="toggleOn"><i class="fas fa-folder-minus icon"></i>Основное меню
        <template v-if="toggle">
          <i :class="chevronUp"></i>
        </template>
        <template v-else>
          <i v-if="!toggle" :class="chevronDown"></i>
        </template>
      </p>
      <ul :class="{ scale_up_ver_top: toggle, scale_down_ver_top: !toggle}" v-if="toggle">
        <li v-for="(item, index) in menu" :key="index">
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

    <div class="b-component">
      <p class="toggle" @click="toggleOn"><i class="fas fa-door-open icon"></i>График работы
        <template v-if="toggle">
          <i :class="chevronUp"></i>
        </template>
        <template v-else>
          <i v-if="!toggle" :class="chevronDown"></i>
        </template>
      </p>
      <ul :class="{ scale_up_ver_top: toggle, scale_down_ver_top: !toggle}" v-if="toggle">
        <li v-for="(item, index) in menu" :key="index">
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

    <div class="b-component">
      <p class="toggle" @click="toggleOn"><i class="fas fa-address-card icon"></i>Наши контакты
        <template v-if="toggle">
          <i :class="chevronUp"></i>
        </template>
        <template v-else>
          <i v-if="!toggle" :class="chevronDown"></i>
        </template>
      </p>
      <ul :class="{ scale_up_ver_top: toggle, scale_down_ver_top: !toggle}" v-if="toggle">
        <li v-for="(item, index) in menu" :key="index">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {class: "fas fa-handshake", text: "Кто мы", link: {class: "", href: "/about"}},
        {class: "fas fa-folder-minus", text: "Категории", link: {class: "", href: "/category"}},
        {class: "fab fa-product-hunt", text: "Товары", link: {class: "", href: "/product"}},
        {class: "fas fa-cogs", text: "Сервис", link: {class: "", href: "/service"}},
        {class: "fas fa-print", text: "Полиграфия", link: {class: "", href: "/polygraphy"}},
        {class: "fas fa-cash-register", text: "Доставка и оплата", link: {class: "", href: "/pay"}},
      ],
      schedule: [
        {class: "fas fa-clock", text: "Пн-Пт: 9:00 - 18:00", link: false},
        {class: "fas fa-utensils", text: "Пн-Пт: 12:00 - 12:30", link: false},
        {class: "fas fa-clock", text: "Сб: 9:00 - 14:00", link: false},
      ],
      contact: [
        {class: "fa fa-home", text: "г. Николаев пр. Мира, 5", link: {class: "", href: "https://www.google.com/maps/place/%D0%9E%D1%80%D1%82%D1%8D%D0%BD,+%D0%9E%D0%9E%D0%9E/@46.952503,32.040273,15z/data=!4m2!3m1!1s0x0:0x4784e49173525ad2?ved=2ahUKEwiLnpXuiPLfAhXNqIsKHWxSBAYQ_BIwCnoECAUQCA"}},
        {class: "fas fa-envelope", text: "orten_office@ukr.net", link: {class: "", href: "mailto:orten_office@ukr.net"}},
        {class: "fas fa-phone", text: "(0512) 56-65-39", link: {class: "", href: "tel:+380512566539"}},
        {class: "fas fa-mobile", text: "(050) 318-40-64", link: {class: "", href: "tel:+380503184064"}},
      ],
      chevronUp: "fas fa-chevron-up",
      chevronDown: "fas fa-chevron-down",
      toggle: false
    }
  },
  methods: {
    toggleOn: function() {
      // setTimeout(() => this.toggle = false, 2000);
      this.toggle = !this.toggle
    }
  }
}
</script>

<style lang="scss" scoped>
.scale_up_ver_top {
	animation: scale_up_ver_top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) ;
}
@keyframes scale_up_ver_top {
  0% {
    transform: scaleY(0.4);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
}
.scale_down_ver_top {
	animation: scale_down_ver_top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@keyframes scale_down_ver_top {
  0% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(0.3);
    transform-origin: 100% 0%;
  }
}
.padding-12 {
  padding: 12px 24px;
}
.space-between {
  display: flex;
  justify-content: space-between;
}
$text-color: #2E4053;
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
.nuxt-link-active {
  border-bottom: $text-color 2px solid;
}
.toggle {
  // border: 1px solid;
  padding: 2px;
  width: 200px;
  cursor: pointer;
}
.fa-chevron-up, .fa-chevron-down  {
  margin-left: 5px;
}
.icon {
  margin-right: 5px;
}
.b-component {
  margin-right: 10px;
}
.menu-sched-contact {
  @extend .space-between;
  @media (max-width: 650px) {
    padding: 12px 0;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
}
ul {
  width: 200px;
  padding: 5px;
  position: fixed;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
  // border: 1px solid;
  margin-top: 10px;
    li {
      padding: 2px;
      i {
        margin-right: 5px;
      }
    }
    a {
      @extend .link_style;
      border-bottom: white 2px solid;
      &:hover {
        border-bottom: $text-color 2px solid;
        transition: border-bottom 1s;
      }
    }
}
</style>