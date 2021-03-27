<template>
  <div>
		<ul class="pagination" v-if="GET_COUNT > 1">
      <template v-if="GET_PAG > 1">
        <li><a href="" @click.prevent="getFirst">First</a></li>
        <li><a href="" @click.prevent="getPrevious">&laquo;</a></li>
        <li><a href="" @click.prevent="getPrevious">{{ Number(GET_PAG) - 1 }}</a></li>
      </template>
      <li><a :href="'?page='+GET_PAG" class="active" @click.prevent>{{GET_PAG}}</a></li>
      <template v-if="GET_PAG !== GET_COUNT">
        <li><a href="" @click.prevent="getNext">{{ Number(GET_PAG) + 1 }}</a></li>
        <li><a href="" @click.prevent="getNext">&raquo;</a></li>
        <li><a href="" :title="GET_COUNT" @click.prevent="getLast">Last</a></li>
      </template>
    </ul>
	</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
  export default {
		name: "Pagination",
    computed: {
			...mapGetters("commodity", ["GET_COUNT", "GET_PAG", "GET_ALL_QUERY"]),
		},
    methods: {
      ...mapActions("commodity", ["SEND_PAGE", "SEND_DATA"]),
      clearQuery(object){
        for (let key in object) {
          if (object[key] === null || object[key] === "" || object[key] === undefined) {
            delete object[key];
          }
        }
        return object;
      },
      getFirst(){
        this.SEND_PAGE(1)
        this.SEND_DATA()
        this.$router.push({path: this.$route.path, query: this.GET_ALL_QUERY})
      },
      getLast(){
        this.SEND_PAGE(this.GET_COUNT)
        this.SEND_DATA()
        this.$router.push({path: this.$route.path, query: this.GET_ALL_QUERY})
      },
      getPrevious() {
        if (this.GET_PAG > 1) {
          this.SEND_PAGE(Number(this.GET_PAG) - 1)
          this.SEND_DATA()
          this.$router.push({path: this.$route.path, query: this.GET_ALL_QUERY})
        }
      },
      getNext() {
        if (this.GET_PAG !== this.GET_COUNT) {
          this.SEND_PAGE(Number(this.GET_PAG) + 1)
          this.SEND_DATA()
          this.$router.push({path: this.$route.path, query: this.GET_ALL_QUERY})
        }
      }
    },
  
  }
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';

.pagination {
  display: flex;
  justify-content: center;
  width:auto;
	padding: 24px;
	.pl {
		border-bottom: $text_color 2px solid;
	}
  a {
    margin: 0 3px;
    background-color: rgb(243, 243, 243);
    color: $text_color;
    float: center;
    padding: 8px 16px;
    text-decoration: none;
    &.active {
      background-color: $green_color;
      color: white;
    }
  }
}
</style>

