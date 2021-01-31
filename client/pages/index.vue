<template>
  <div class="main-container">
    <Notification />
    <Aside />
		<main>
			<div class="header-for-block"><i class="fas fa-star"></i>Новинки и акции</div>
      <template>
        <div class="card_block">
          <Card v-for="item in products"
            :key="item.id"
            :product="item">
          </Card>
        </div>
      </template>
		</main>
	</div>
</template>

<script>
import Card from "@/components/Card"
import Aside from "@/components/Aside"
import Notification from '@/components/Notification'
import axios from 'axios'

  export default {
    name: "Home",
    components: {
      Card,
      Aside,
      Notification
    },
    async asyncData({$axios}) {
      let response = await $axios.$get("/product/")
      let products = response.results
      return {
        products
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
// $text_color: #2E4053;
// $green_color: #85C987;
// $blue_color: #428bca;
// $red_color: #d9534f;

// .padding-12 {
//   padding: 12px 24px;
// }
// .link_style {
//   text-decoration: none;
//   color: $text_color;
//   display: block;
// }
// .space-between {
//   display: flex;
//   justify-content: space-between;
// }
// .header-for-block {
//   padding-left: 8px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 30px;
//   color: $text_color;
//   background-color: $green_color;

//   i {
//     margin-right: 5px;
//   }
// }
// .accordion {
//   padding-top: 5px;
//   li {
//     .node-count {
//       color: $blue_color;
//     }
//     a {
//       @extend .link_style;
//       padding: 2px 0 2px 12px;
//     }
//   }
//   .submenu {
//     padding-left: 24px;
//     li {
//       a {
//         @extend .link_style;
//       }
//     }
//   }
//   input, select {
//     // @extend input[name=quantity];
//     margin-bottom: 24px;
//     width: 100%;
//     // height: 32px;
//   }
//   .min_max {
//     @extend .space-between;

//     input {
//     width: 40%;
//     height: 32px;
//     }
//   }
//   .form-footer{
//     input {
//       width: 40%;
//       height: 32px;
//       }
//   }
// }
.main-container {
  @extend .padding-12;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 12px;

  @media (max-width: 767px) {
    grid-template-columns: 40% auto;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
}
</style>