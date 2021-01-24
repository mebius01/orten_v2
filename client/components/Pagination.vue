<template>
  <div class="pagination">
		<a href="" v-if="GET_PAGE_NUMBER_CURRENT != 1">First</a>
    <a
			v-if="GET_PREVIOUS && GET_PAGE_NUMBER_PREV"
			:href="GET_PREVIOUS"
			>
			{{GET_PAGE_NUMBER_PREV}}
		</a>
    <a
			v-if="GET_PAGE_NUMBER_CURRENT"
			class="active"
			href='' >
			{{GET_PAGE_NUMBER_CURRENT}}
		</a>
		<a
			v-if="GET_NEXT && GET_PAGE_NUMBER_NEXT"
			:href="GET_NEXT"
			>
			{{GET_PAGE_NUMBER_NEXT}}
		</a>
		<a href="" v-if="GET_NEXT">{{GET_COUNT}}</a>
  </div>
</template>

<script>
import { mapGetters, } from 'vuex'
  export default {
		name: "Pagination",
    computed: {
			...mapGetters("commodity", [
				"GET_COUNT",
				"GET_NEXT",
				"GET_PREVIOUS",
				"GET_PAGE_NUMBER_NEXT",
				"GET_PAGE_NUMBER_PREV",
				"GET_PAGE_NUMBER_CURRENT"
			]),
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