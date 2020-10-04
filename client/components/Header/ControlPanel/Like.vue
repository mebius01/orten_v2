<template>
  <div class="heart">
    <i class="fas fa-heart" @click="showPopUp = !showPopUp"></i>
    <span v-if="GET_LIKE.length">{{GET_LIKE.length}}</span>
    <PopUp v-if="showPopUp" @closePopUp='closePopUp'>
      <div v-if="showPopUp" slot="like">
        <div class="card-grid">
          <Card v-for="(item, index) in GET_LIKE"
          :key="index"
          :product="item"
          ></Card>
        </div>
      </div>
    </PopUp>
  </div>
</template>

<script>
import PopUp from "../../PopUp"
import Card from '../../Card'
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "Like",
  components: {
    PopUp,
    Card
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

span {
  position: relative;
  top: -20px;
  right: 20px;
  border-radius: 5px;
  padding: 0 5px;
  // font-size: 12px;
  color: white;
  background: #F68A8A;
}
i {
  cursor: pointer;
  padding: 0;
  font-size: 26px;
  margin: 0 10px;
}
</style>