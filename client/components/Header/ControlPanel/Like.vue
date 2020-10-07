<template>
  <div class="heart">
    <span class="icon">
      <i class="fas fa-heart" @click="showPopUp = !showPopUp"></i>
      <span v-if="GET_LIKE.length">{{GET_LIKE.length}}</span>
    </span>
    <PopUp v-if="showPopUp && GET_LIKE.length" @closePopUp='closePopUp'>
      <div slot="like">
        <ul>
          <li v-for="(item, index) in GET_LIKE" :key="index" >
            <div class="content">
              <img :src="item.image" :alt="item.name">
              <span class="content__vendor">{{item.vendor}}</span>
              <a :href="'/product/'+item.slug" 
                @click.prevent="openProduct(product)"
                :title="item.description">
                {{item.name}}
              </a>
              <span class="content__available">
                <i v-if="item.available" class="fas fa-check" style="color:green"></i>
                <i v-else class="fas fa-times" style="color:red"></i>
              </span>
              <span class="content__action" v-if="item.action">
                <i class="fas fa-splotch" style="margin-left:10px">
                  Aкция до {{item.end_action}}
                </i>
              </span>
            </div>
            <div class="btn-gruop">
              <span class="vendor_code">PN: {{item.vendor_code}}</span>
              <span class="price" v-if="item.action">{{item.discount}}грн.</span>
              <span class="price" v-else>{{item.price}}грн.</span>
              <div class="qty">
                <Buy :object="item"></Buy>
              </div>
              <button class="reset" @click.prevent="delProduct(item)"><i class="fas fa-trash-alt"></i></button>
            </div>
          </li>
        </ul>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "../../PopUp"
import Buy from '../../SmallComponents/Buy'
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "Like",
  components: {
    PopUp,
    Buy
  },
  data() {
    return {
      showPopUp: false,
    }
  },
  methods: {
    ...mapActions("like", ['ACTION_FOR_LIKE']),
    ...mapMutations("like", ['SET_MODIFY_LIKE']),
    closePopUp() {
      this.showPopUp = false
    }
  },
  computed: {
    ...mapGetters("like", ['GET_LIKE', 'GET_FULL_COST', 'GET_COUNTER'])
  },

  mounted() {
    if (localStorage.like_like) {
      this.SET_MODIFY_LIKE(JSON.parse(localStorage.getItem("like_like")))
    }
  },
  watch: {
    GET_LIKE() {
      localStorage.setItem("like_like", JSON.stringify(this.GET_LIKE));
    }
  }
}
</script>

<style lang="scss" scoped>
$text_color: #2E4053;
$green_color: #85C987;
$global_blue: #428bca;
$color_red: #d9534f;

.icon {
  position: relative;

  i {
    cursor: pointer;
    padding: 0;
    font-size: 26px;
    margin: 0 10px;
  }
  span {
    position: absolute;
    top: -20px;
    right: -5px;
    border-radius: 5px;
    padding: 0 5px;
    // font-size: 12px;
    color: white;
    background: #F68A8A;
  }
}
// item
$text-color: #2E4053;
$blue-color: #428bca;
$color-red: #d9534f;

.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px 5px;
}
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}
  ul {
    padding: 20px;
  }
  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      @extend .align-items;
      justify-content: flex-start;
      width: 65%;
      &__vendor {
        font-size: 12px;
        font-weight: 600;
        width: 120px;
        @extend .padding-5;
      }
      &__available {
        @extend .padding-5;
      }
      &__action {
        font-size: 12px;
        font-weight: 400;
        color: $color-red;
        @extend .padding-5;
      }
      img {
        @extend .padding-5;
        width: 56px;
        height: 100%;
      }

      a {
        display: flex;
        padding: 0 5px;
        @extend .link_style;
        color: $blue-color;

      }
      // .available {
      //   @extend .padding-5;
      //   font-size: 16px;
      //   font-weight: 600;
      // }
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
      .qty {
        margin-left: 5px;
      }
    }

  }
  .reset{
    margin-left: 5px;
    height: 31px;
    width: 31px;
    text-decoration: none;
    border: none;
    text-align: center;
    color: $color-red;
      background-color: white;
      border: $color-red 1px solid;
      &:hover{
        background-color: $color-red;
        color: white;
        
      }
  }
</style>