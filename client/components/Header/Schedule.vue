<template>
  <div class="b-component">
    <p class="toggle" @click="toggleOn"><i class="fas fa-door-open icon"></i>График работы
      <i :class="chevron"></i>
    </p>
    <ul :class="toggleClass" v-if="toggle">
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
        // {class: "fas fa-door-open", text: "График работы", link: false},
        {class: "fas fa-clock", text: "Пн-Пт: 9:00 - 18:00", link: false},
        {class: "fas fa-utensils", text: "Пн-Пт: 12:00 - 12:30", link: false},
        {class: "fas fa-clock", text: "Сб: 9:00 - 14:00", link: false},
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
// Animation
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  }
  @keyframes fadeInDown {
    0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    }
    100% {
    opacity: 1;
    transform: none;
    }
  }
.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  }
  @keyframes fadeOutUp {
    0% {
    opacity: 1;
    }
    100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    }
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