<template>
  <div>
    <div class="main-container">
      <aside>
        <Aside />
      </aside>
      <main>
        <div class="header-for-block"><i class="fas fa-swatchbook"></i>{{ $t('dom.polygraphy') }}</div>
        <template >
          <div class="card_block">
            <PolygraphyCard v-for="item in GET_RESULTS"
              :key="item.id"
              :item="item">
            </PolygraphyCard>
          </div>
        </template>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PolygraphyCard from '../../components/PolygraphyCard'
import Aside from '../../components/Aside'
  export default {
    name: "Polygraphy",
    components: {
      PolygraphyCard,
      Aside
    },
    head() {
      return {
        title: "Полиграфия - Ортен",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Это описание страницы Полиграфия'
          }
        ]
      }
    },
    methods: {
      ...mapActions("commodity", ["SEND_DATA", "SEND_QUERY", "SEND_URL"]),
      ...mapActions("breadcrumbs", ["SEND_END_PAGE","SEND_ID"]),
    },
    computed: {
      ...mapGetters("commodity", ["GET_RESULTS"]),
    },
    mounted() {
      this.SEND_ID(182)
      this.SEND_END_PAGE({name: this.$t('dom.polygraphy')})
    },
    created() {
      const url = "/polygraphy/"
      this.SEND_URL(url)
      this.SEND_DATA()
    }
  }
</script>

<style lang="scss" scoped>

</style>