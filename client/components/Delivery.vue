<template>
	<div>
    <div class="card" v-for="(item, index) in $t('delivery.data')" :key="index" >
      <h4 v-if="item.h">{{ item.h }}</h4>
      <p v-if="item.p">{{ item.p }}</p>
      <ul>
        <li v-for="(li, index) in item.li" :key="index" >{{li}}</li>
      </ul>
    </div>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/main.scss";
  h4 {
    padding-top: 10px;
    padding-bottom: 5px;
    // text-align: center;
    text-transform: uppercase;
  }
  ul {
    display: inline-block;
    margin-top: 8px;
    li {
      padding: 5px;
      margin-left: 15px;
			margin-bottom: 15px;
      border-bottom: 1px solid $green_color;
    }
  }
</style>