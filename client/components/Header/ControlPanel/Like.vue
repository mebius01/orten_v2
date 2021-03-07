<template>
  <div class="heart">
    <span class="icon">
      <i class="fas fa-heart" @click="showPopUp = !showPopUp"></i>
      <span v-if="GET_LIKE.length">{{GET_LIKE.length}}</span>
    </span>
    <PopUp v-if="showPopUp && GET_LIKE.length" @closePopUp='closePopUp'>
      <div slot="like">
        <ul>
          <ProductList v-for="item in GET_LIKE"
            :key="item.id"
            :product="item">
          </ProductList>
        </ul>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "@/components/PopUp"
import ProductList from "@/components/ProductList"
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "Like",
  components: {
    PopUp,
    ProductList
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