<template>
  <div class="card-grid">
    <div class="card" v-for="(item, index) in object_list.results" :key="index">
        <div class="card__action" v-if="item.action">Акция до {{item.end_action}}</div>
    <a class="card__link" :href="'/product/'+item.slug">
        <div class="card__img">
            <img class="card-img-top" :src="item.image" :alt="item.name">
        </div>
    </a>
    <a class="card__link" :href="'/product/'+item.slug">
        <div class="card__body">
            <h2 class="card__name color--blue">{{item.name}}</h2>
            <p class="card__pn space-between">
                <span>Артикул:</span>
                <span>{{item.vendor_code}}</span>
            </p>
            <p class="card__vendor space-between">
                <span>Вендор:</span>
                <span>{{item.vendor}}</span>
            </p>
            <div class="card__price">
                  <template v-if="item.action">
                    <p class="space-between">
                        <span>Цена:</span>
                        <span class="card--text-crossed">{{item.price}}</span>
                    </p>
                    <p class="space-between">
                        <span>Цена:</span>
                        <span class="card--red-text">{{item.discount}}</span>
                    </p>
                  </template>
                  <template v-else>
                    <p class="space-between">
                      <span>Цена:</span>
                      <span class="card__price--text">{{item.price}}</span>
                  </p>
                  </template>
            </div>
        </div>
    </a>
    <form class="form-footer" method="post">
        <input type="number" name="" value="1" min="1"> 
        <button type="submit" class="apply"><i style="padding-right:5px;" class="fa fa-shopping-cart"></i>Купить</button>
    </form>
</div>
  </div>
</template>

<script>
  export default {
    async asyncData({$axios, params }) {
    const object_list = await $axios.$get('http://127.0.0.1:8000/api/product/')
      return {object_list}
    }
  }
</script>

<style lang="scss" scoped>
.padding-12 {
  padding: 12px 24px;
}
.card-grid {
  @extend .padding-12;
}
</style>