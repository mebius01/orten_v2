<template>
  <div>
    <div class="main-container">
      <aside>
        <Aside />
      </aside>
      <main>
        <div class="header-for-block">
          <span><i class="fas fa-braille"></i>{{ object.name }}</span>
        </div>
        <img v-if="object.baner" :src="object.baner" :alt="object.name">
				<div class="body">
					<div v-html="object.body"></div>
				</div>
      </main>
    </div>
  </div>
</template>

<script>
import Aside from '../../components/Aside'
	export default {
		name: "PolygraphySlug",
		components: {
			Aside
		},
		validate({ params }) {
			return /^[a-z0-9-]+$/.test(params.slug) // если params валидно
		},
    head() {
      return {
        title: this.object.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.object.description
          }
        ]
      }
    },
    jsonld() {
      return {
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": this.object.name,
        "baner": this.object.baner,
        "description": this.object.description,
      }
    },
		async asyncData({$axios, params, env, app}) {
      const locale = app.i18n.locale
      const apiUrl = env.apiUrl
      const object = await $axios.$get(`${apiUrl}/${locale}/api/polygraphy/${params.slug}`)
      return {object}
    }
	}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
// Table
img {
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
  border-radius: 2%;
  padding: 5px;
}
.body {
  padding: 20px 0;
}
table {
  margin-top: 12px;
  margin-bottom: 12px;
}
th,
td {
  padding: 0.25rem;
  text-align: left;
  border: 1px solid #ccc;
}
tbody tr:nth-child(odd) {
  background: #eee;
}
table {
  text-align: center;
}
@media only screen and (max-width: 760px),
  (min-width: 768px) and (max-width: 1024px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  tr {
    border: 1px solid #ccc;
  }
  td {
    border: none !important;
    width: 100% !important;
    position: relative;
    padding-left: 50%;
  }
  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }
}

.card_header {
  text-align: center;
  font-weight: bolder;
}

</style>