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
              <nuxt-link :to="localePath({ name: 'product-slug', params: { slug: item.slug } })"
                :title="item.description" exact>
                <span @click="closePopUp">{{item.name}}</span>
              </nuxt-link>
              <span class="content__available">
                <i v-if="item.available" class="fas fa-check" style="color:green"></i>
                <i v-else class="fas fa-times" style="color:red"></i>
              </span>
            </div>
            <div class="btn-gruop">
              <span class="price" v-if="item.action">{{item.discount}}грн.</span>
              <span class="price" v-else>{{item.price}}грн.</span>
              <div class="qty">
                <Buy :object="item"></Buy>
              </div>
              <button class="reset" @click.prevent="delLine(item)"><i class="fas fa-trash-alt"></i></button>
            </div>
          </li>
        </ul>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "@/components/PopUp"
// import ProductList from "@/components/ProductList"
import Buy from "@/components/SmallComponents/Buy"
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "Like",
  components: {
    PopUp,
    Buy
    // ProductList
  },
  data() {
    return {
      showPopUp: false,
    }
  },
  methods: {
    clickLink(slug){
      this.closePopUp()
      this.$router.push({path: `/${this.$i18n.locale}/product/${slug}`})
    },
    ...mapActions("like", ['ACTION_FOR_LIKE']),
    ...mapMutations("like", ['SET_MODIFY_LIKE', 'DELL_INDEXED_LIKE']),
    closePopUp() {
      this.showPopUp = false
    },
    delLine(obj) {
      let arr = this.GET_LIKE
      let index = arr.indexOf(obj)
      this.DELL_INDEXED_LIKE(index)
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
@import "@/assets/list.scss";
</style>