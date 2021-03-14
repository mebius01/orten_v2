/**
 * Преобразовывает объект в строку для локального хранилища
 * @param {Object} object
 */
const stringifyJson = (object) => {
  return String(JSON.stringify(object));
};

/**
 * Преобразовывает строку из локального хранилища в Объект
 * @param {String} string
 */
const parseJson = (string) => {
  return JSON.parse(string);
};

/**
 * Суммирует общее количество товаров в корзине
 * @param {Object} ob1
 * @param {Object} ob2
 */
const sumQuantity = (ob1, ob2) => {
  return ob1.quantity + ob2.quantity;
};

/**
 * Отнимает общее количество товаров в корзине
 * @param {Object} obj
 */
const minusQuantity = (obj) => {
  return obj.quantity - 1;
};

const state = () => ({
  products: [],
  counter: null,
  full_cost: null,
}); // state

const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.products = payload;
  },
  SET_ADD_PRODUCT: (state, payload) => {
    state.products.push(payload);
  },
  SET_MODIFY_PRODUCTS: (state, payload) => {
    state.products = payload;
  },
  SET_COUNTER: (state, payload) => {
    state.counter = payload;
  },
  SET_FULL_COST: (state, payload) => {
    state.full_cost = payload;
  },
  SET_INDEXED_PROD: (state, payload) => {
    state.products[payload.index].quantity = payload.quantity;
    state.products[payload.index].total_cost = payload.total_cost;
  },
  DELL_INDEXED_PROD: (state, payload) => {
    state.products.splice(payload, 1);
  },
  SET_CLEAR_BASKET: (state) => {
    state.products = [];
    state.counter = null;
    state.full_cost = null;
  },
}; // synchronous

const actions = {
  // ! new
  ADD_TO_CART({ state, commit }, object) {
    const arr = state.products;
    if (!arr.includes(object)) {
      arr.push(object);
    }
    arr.filter((el) => {
      if (el.id === object.id) {
        el.quantity = sumQuantity(el, object);
      }
    });
    // arr.filter((el) => {
    //   if (el.id === object.id) {
    //     el.quantity = sumQuantity(el, object);
    //   } else {
    //     arr.push(object);
    //   }
    // });
    const count = arr.reduce((sum, current) => {
      return sum + current.quantity;
    }, 0);
    // const totalPrice = arr.reduce((sum, current) => {
    //   return sum + current;
    // }, 0);
    commit("SET_COUNTER", count);
    commit("SET_PRODUCTS", arr);
  },
  // ! new
  DEL_FROM_CART({ state, commit }, object) {
    const arr = state.products;
    arr.filter((el) => {
      if (el.id === object.id && el.quantity > 1) {
        el.quantity = minusQuantity(el, object);
      }
      if (el.id === object.id && el.quantity === 1) {
        const i = arr.indexOf(el);
        arr.splice(i, 1);
      }
    });
    const count = arr.reduce((sum, current) => {
      return sum + current.quantity;
    }, 0);
    const totalPrice = arr.reduce((sum, current) => {
      return sum + current;
    }, 0);
    commit("SET_COUNTER", count);
    commit("SET_PRODUCTS", arr);
  },
  SHAKE_FOR_PRODUCTS({ state, commit }) {
    let arr = state.products;
    let full_cost = arr.reduce((sum, current) => {
      return sum + current.total_cost;
    }, 0);
    commit("SET_FULL_COST", full_cost);

    let counter = arr.reduce((sum, current) => {
      return sum + current.quantity;
    }, 0);
    commit("SET_COUNTER", counter);
  },
  CLEAR_BASKET({ commit }) {
    commit("SET_CLEAR_BASKET");
  },
};

const getters = {
  GET_PRODUCTS(state) {
    return state.products;
  },
  GET_FULL_COST(state) {
    return state.full_cost;
  },
  GET_COUNTER(state) {
    return state.counter;
  },
  GET_OBJ(state, index) {
    return state.products[index];
  },
}; // get data from state

export default {
  state,
  actions,
  getters,
  mutations,
};
