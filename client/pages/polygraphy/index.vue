<template>
  <div>
    <div class="main-container">
      <aside>
        <Aside />
      </aside>
      <main>
        <div class="header-for-block"><i class="fas fa-swatchbook"></i>Полиграфия</div>
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
    },
    computed: {
      ...mapGetters("commodity", ["GET_RESULTS"]),
    },
    created() {
      const query = this.$route.query
      const url = "/polygraphy/"
      // this.SEND_QUERY(query)
      this.SEND_URL(url)
      this.SEND_DATA()
    }
  }
</script>

<style lang="scss" scoped>

</style>