// product
// product-slug
// category
// category-slug
// service
// service-slug
// polygraphy
// polygraphy-slug

import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api'

const breadcrumbs = async ({ store, route }) => {
// 	const dataRoute = {
// 		name: route.name,
// 		path: route.path,
// 		query: route.query,
// 		slug: route.params.slug
// 	}

// /**
//  * Получить первый элемент для массивы хлебных крошек и категорию
//  * @param {string } tb 'product' or 'service'
//  * @param { string } slug slug for product or service
//  * @returns { object } {name, slug, category}
//  */
// const fetchGoods = (tb, slug) => {
//   return axios.get(`${baseUrl}/${tb}/${slug}`)
//     .then(res => {
//       const data = { name: res.data.name, slug: res.data.slug, category: res.data.category }
//       return data
//     })
// }

// /**
//  * Получение дерева категорий
//  * @param { string } tb 
//  * @param { string } id 
//  */
// const getTree = (tb = 'category_id', id) => {
//   axios.get(`${baseUrl}/${tb}/${id}`)
//     .then(res => {
//       const data = res.data
//       store.dispatch('breadcrumbs/SEND_SLUG', { name: data.name, slug: data.slug, parent: data.parent })
//       if (data.parent) {
//         getTree('category_id', data.parent)
//       }
//     })
// }


// const defStrategy = (data) => {
//   const product = 'product'
//   // if (data.name === "product") {
//   //   // если q то q == категории товара
//   //   // not slug
//   //   // not q
//   //   console.log({ Strategy: data.name })
//   // }
//   if (data.name === "product-slug") {
//     const slug = data.slug
//     // is slug
//     // not q
    
//     fetchGoods(product, slug)
//       .then(data => {
//         store.dispatch('breadcrumbs/SEND_SLUG', data)
// 				getTree('category_id', data.category)
// 				// console.log(data);
//     })
//   }
//   // if (data.name === "category") {
//   //   // not slug
//   //   // not q
//   //   console.log({ Strategy: data.name })
//   // }
//   // if (data.name === "category-slug") {
//   //   // is slug
//   //   // not q
//   //   console.log({ Strategy: data.name })
//   // }
//   // if (data.name === "service") {
//   //   // если q то q == категории товара
//   //   // not slug
//   //   // not q
//   //   console.log({ Strategy: data.name });
//   // }
//   // if (data.name === "service-slug") {
//   //   // is slug
//   //   // not q
//   //   console.log({ Strategy: data.name });
//   // }
//   // if (data.name === "polygraphy") {
//   //   // not slug
//   //   // not q
//   //   console.log({ Strategy: data.name });
//   // }
//   // if (data.name === "polygraphy-slug") {
//   //   // is slug
//   //   // not q
//   //   console.log({ Strategy: data.name });
//   // }
// }


// defStrategy(dataRoute)

	// store.dispatch('breadcrumbs/SEND_SLUG', data)
}

export default breadcrumbs