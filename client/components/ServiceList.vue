<template>
  <li>
    <div class="content">
      <img :src="service.image" alt="">
      <a :href="'/service/'+service.slug" @click.prevent="openService(service)">{{service.name}}</a>
    </div>
    <div class="btn-gruop">
      <span class="vendor_code">PN: {{service.vendor_code}}</span>
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
$text-color: #2E4053;
$blue-color: #428bca;

.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}

  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      @extend .align-items;
      justify-content: flex-start;
      width: 70%;

      img {
        @extend .padding-5;
        width: 56px;
        height: 100%;
      }

      a {
        display: flex;
        @extend .padding-5;
        @extend .link_style;
        color: $blue-color;

      }
      .available {
        @extend .padding-5;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .btn-gruop {
      @extend .align-items;
      justify-content: flex-end;

      .price {
        @extend .padding-5;
        font-size: 16px;
        font-weight: 600;
        background-color: rgba(252, 99, 91, 0.18);
      }
      .vendor_code {
        @extend .padding-5;
        font-size: 12px;
      }
    }
    
  }
</style>