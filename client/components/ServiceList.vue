<template>
  <li>
    <div class="content">
      <img v-if="service.image" class="card-img-top" :src="service.image" :alt="service.name">
      <img v-else class="card-img-top" src="/default-img.png" alt="default img">
      <span class="content__vendor">{{service.vendor}}</span>
      <a :href="'/service/'+service.slug" @click.prevent="openService(service)">{{service.name}}</a>
    </div>
    <div class="btn-gruop">
      <span class="price">{{service.price}}грн.</span>
    </div>
  </li>
</template>

<script>
  export default {
    name: "ServiceList",
    props: {
      service: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      openService(service) {
        this.$emit('clossSearch')
        this.$router.push('/service/'+service.slug)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';

.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px;
}
// .link_style {
//   text-decoration: none;
//   color: $text_color;
//   display: block;
// }

  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      display: grid;
      gap: 10px;
      justify-items: center;
      align-items: center;
      grid-template-columns: 100px 100px auto 100px;

      a {
        @extend .link_style;
        color: $blue-color;

      }
      .available {
        font-size: 16px;
        font-weight: 600;
      }
    }
    .btn-gruop {
      @extend .align-items;

      .price {
        @extend .padding-5;
        font-size: 18px;
        font-weight: 600;
        background-color: rgba(252, 99, 91, 0.18);
      }
    }
    
  }
</style>