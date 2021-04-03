<template>
  <li>
    <div class="content">
      <img v-if="service.image" class="card-img-top" :src="service.image" :alt="service.name">
      <img v-else class="card-img-top" src="/default-img.png" alt="default img">
      <span class="content__vendor">{{service.vendor}}</span>
      <!-- @click.prevent="openService(service)" -->
      <nuxt-link :to="localePath({ name: 'service-slug', params: { slug: service.slug } })">{{service.name}}</nuxt-link>
    </div>
    <div class="btn-gruop">
      <span>{{service.price}}грн.</span>
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
        this.$router.push(`/${this.$i18n.locale}/service/` + service.slug)
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


  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      display: grid;
      gap: 10px;
      // justify-items: center;
      align-items: center;
      grid-template-columns: 100px 100px auto 100px;
      @media (min-width:320px) and (max-width: 767px) {
        .card-img-top {
          width: 100px;
          height: auto;
        }
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        justify-content: start
      }
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
      margin-left: 10px;
      justify-content: flex-start;
      @extend .padding-5;
      font-size: 18px;
      font-weight: 600;
      background-color: rgba(252, 99, 91, 0.18);
    }
      width: 100%;
      @media (min-width:320px) and (max-width: 767px) {
        flex-direction: column;
        justify-content: flex-start;
    }

      
    
  }
</style>