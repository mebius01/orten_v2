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
              <div class="buy">
                <Buy :object="item"></Buy>
                <button class="reset" @click.prevent="delLine(item)"><i class="fas fa-trash-alt"></i></button>
              </div>
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
    ...mapMutations("like", ['SET_MODIFY_LIKE', 'DELL_INDEXED_LIKE']),
    closePopUp() {
      this.showPopUp = false
    },
    delLine(obj) {
      let arr = this.GET_LIKE
      let index = arr.indexOf(obj)
      this.DELL_INDEXED_LIKE(index)
      // this.SHAKE_FOR_PRODUCTS()
      console.log(index);
    },
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
@import "@/assets/icon_header.scss";
</style>