const qs = require('qs')
/**
 * Парсер QUERY
 * @param { string } url http://127.0.0.1:8000/api/product/?page=5&search=HP+1010
 * @returns { string } {?page: "5", search: "HP 1010"}
 */
const parseQuery = (url) => {
	const q = qs.parse(url)
	return q
}

/**
 * Получить номер страниц
 * @param { string } string ?page=5&search=HP+1010
 * @returns { string } 5
 */
const pageNumber = (string) => {
	const q = parseQuery(string)
	return q['?page']                      //!! FIX this
}

/**
 * Собирает строку из объекта query
 * @param { object } query {page:"2", search:"HP 1010"}
 * @returns { string } query ?page=2&search=HP+1010
 */
const stringifyQuery = (q) => {
	const r = qs.stringify(q)
  return r ? '?' + r : ''
}

const state = () => ({
	url: null,
	query: null,
	count: null,
	next: null,
	previous: null,
	results: null,
	pageNumberNext: null,
	pageNumberPrev: null,
	pageNumberCurrent: null,
	firstPage: null,
	lastPage: null,
	grid: true,
})

const mutations = {
	SET_URL: (state, payload) => { state.url = payload; },
	SET_QUERY: (state, payload) => { state.query = payload },
  SET_RESULTS: (state, payload) => { state.results = payload },
	SET_NEXT: (state, payload) => { state.next = payload },
	SET_PREVIOUS: (state, payload) => { state.previous = payload; },
	SET_COUNT: (state, payload) => { state.count = payload; },
	SET_PAGE_NUMBER_NEXT: (state, payload) => {state.pageNumberNext = payload },
	SET_PAGE_NUMBER_PREV: (state, payload) => {state.pageNumberPrev = payload },
	SET_PAGE_NUMBER_CURRENT: (state, payload) => { state.pageNumberCurrent = payload; },
	SET_PAGE_FIRST: (state, payload) => {state.firstPage = payload },
	SET_PAGE_LAST: (state, payload) => {state.lastPage = payload },
	SET_GRID: (state) => { state.grid = !state.grid }
}

const actions = {
	SEND_GRID({ state, commit }) {
		commit("SET_GRID")
	},
	SEND_URL({ commit }, url) {
		commit("SET_URL", url)
	},
	SEND_PAGE_NUMBER_CURRENT({ commit }, page) {
		commit("SET_PAGE_NUMBER_CURRENT", page)
	},
	SET_PAGE_FIRST({ commit }, page) {
		console.log(page)
	},
	SET_PAGE_LAST({ commit }, page) {
		console.log(page)
	},
	SEND_DATA({ $axios, state, commit }) {
		this.$axios.get(state.url + state.query)
			.then(res => { 
				const data = res.data
				const next = data.next
				const previous = data.previous
				const results = data.results
				const count = data.count
				
				// Next Previous page
				const regexp = /(\?).*?$/
				const result_next = regexp.exec(next)
				const result_previous = regexp.exec(previous)
				
				if (result_next && result_previous) {
					commit("SET_NEXT", result_next[0])
					commit("SET_PAGE_NUMBER_NEXT", pageNumber(result_next[0]))
					commit("SET_PREVIOUS", result_previous[0])
					commit("SET_PAGE_NUMBER_PREV", pageNumber(result_previous[0]))
					
				}
				if (result_next && result_previous === null) {
					commit("SET_NEXT", result_next[0])
					commit("SET_PAGE_NUMBER_NEXT", pageNumber(result_next[0]))
					commit("SET_PREVIOUS", null)
					commit("SET_PAGE_NUMBER_PREV", null)
				}
				if (result_next === null && result_previous) {
					commit("SET_NEXT", null)
					commit("SET_PAGE_NUMBER_NEXT", null)
					commit("SET_PREVIOUS", result_previous[0])
					commit("SET_PAGE_NUMBER_PREV", pageNumber(result_previous[0]))
				}

				// Get Count page
				const interimCount = Math.ceil(count / 24)
				commit("SET_COUNT", interimCount)
				commit("SET_RESULTS", results)
			})
	},
	SEND_QUERY({ commit }, query) {
		const q = stringifyQuery(query)
		commit("SET_QUERY", q)
	}
}

const getters = {
	GET_RESULTS(state) { return state.results; },
	GET_COUNT(state) {return state.count},
	GET_NEXT( state ) { return state.next },
	GET_PREVIOUS(state) { return state.previous; },
	GET_PAGE_NUMBER_NEXT(state) { return state.pageNumberNext },
	GET_PAGE_NUMBER_PREV(state) { return state.pageNumberPrev },
	GET_PAGE_NUMBER_CURRENT(state) { return state.pageNumberCurrent; },
	GET_PAGE_FIRST(state) { return state.firstPage },
	GET_PAGE_LAST(state) { return state.lastPage },
	GET_GRID(state) { return state.grid },
}

export default {
    state,
    actions,
    getters,
    mutations
}
