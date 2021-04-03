<template>
  <div class="accordion">
    <div class="header-for-block"><i class="fas fa-filter"></i>{{$t('dom.filter')}}</div>
    <div class="filters">
      <form method="get">
        <div class="flex-row">
          <input type="text" name="min_price" :placeholder="$t('dom.min')" v-model="min_price">
          <input type="text" name="max_price" :placeholder="$t('dom.max')" v-model="max_price">
        </div>
        <!-- <input type="hidden" name="category" v-if="pageProduct" v-model="category"> -->
        <select name="format_fild" v-if="pageProduct" v-model="format_fild">
          <option value="" selected>{{$t('dom.format')}}</option>
          <option value="A0">A0</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
          <option value="A5">A5</option>
          <option value="A6">A6</option>
          <option value="A7">A7</option>
          <option value="A8">A8</option>
        </select>
        <select name="color_fild" id="id_color_fild" v-if="pageProduct"  v-model="color_fild">
          <option value="" selected>{{ $t('dom.color.name') }}</option>
          <option value="BW">{{ $t('dom.color.bw') }}</option>
          <option value="Color">{{ $t('dom.color.color') }}</option>
        </select>
        <input type="text" name="search" class="search" :placeholder="$t('dom.search')" v-model="search">
        <div class="space-between">
          <span style="color:#85c987" >{{$t('dom.available')}}</span>
          <input type="checkbox" class="check-box" name="available" value="True" v-if="pageProduct"  v-model="available">
        </div>
        <div class="flex-row">
          <button class="apply" type="submit" @click.prevent="submitForm">{{ $t('dom.btn.send') }}</button>
          <button class="reset" type="reset" @click.prevent="resetForm">{{ $t('dom.btn.reset') }}</button>
        </div>
        
      </form>
      
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
  export default {
    name: "Filters",
    middleware: 'getQuery',
    data() {
      return {
        min_price: this.$route.min_price || null,
        max_price: this.$route.max_price || null,
        // category: this.$route.category || null,
        format_fild: this.$route.format_fild || "",
        color_fild: this.$route.color_fild || "",
        search: this.$route.search || "",
        available: this.$route.available || null,
        page: this.$route.page || '1',

        pageProduct: this.$route.path === `/${this.$i18n.locale}/product`,
        pageService: this.$route.path === `/${this.$i18n.locale}/service`,
      }
    },
    computed: {
      ...mapGetters("commodity", [
        "GET_ALL_QUERY",
        "GET_MIN",
        "GET_MAX",
        "GET_FORMAT",
        "GET_COLOR",
        "GET_SEARCH",
        "GET_AVA",
      ]),
    },
    methods: {
      ...mapActions("commodity", [
        "SEND_MIN",
        "SEND_MAX",
        "SEND_CATEGORY",
        "SEND_FORMAT",
        "SEND_COLOR",
        "SEND_SEARCH",
        "SEND_AVA",
        "SEND_PAGE",
        "SEND_DATA" // !
      ]),
      submitForm(){
        this.SEND_MIN(this.min_price)
        this.SEND_MAX(this.max_price)
        this.SEND_FORMAT(this.format_fild)
        this.SEND_COLOR(this.color_fild)
        this.SEND_SEARCH(this.search)
        this.SEND_AVA(this.available)
        this.SEND_PAGE(1)
        this.SEND_DATA()
        this.$router.push({path: this.$route.path, query: this.GET_ALL_QUERY})
      },
      resetForm() {
        this.SEND_MIN(null)
        this.SEND_MAX(null)
        this.SEND_CATEGORY(null)
        this.SEND_FORMAT(null)
        this.SEND_COLOR(null)
        this.SEND_SEARCH(null)
        this.SEND_AVA(null)
        this.SEND_DATA()
        this.$router.push({path: this.$route.path, query: this.GET_ALL_QUERY})
      },
    },
  }
  /*

      submitForm(){
        this.$router.push({path: this.$route.path, query: this.clearQuery(this.query)})
      },
      resetForm(){
        this.$router.push({path: this.$route.path, query: this.zeroOutQuery(this.query)})
      }
  */
</script>

<style lang="scss" scoped>
@import '@/assets/color.scss';
@import '@/assets/main.scss';
  input, select, button {
    color: $text_color;
    margin-bottom: 4px;
    width: 100%;
    height: 32px;
    padding: 5px;
    outline: none;
    border: 1px solid $green_color;
  }
  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button, input {
      width: 49%;
      cursor: pointer;
    }
    .reset {
      border-color: $red_color;
      background-color: white;
      color: $red_color;
      &:hover {
        background-color: $red_color;
        color: white;
      }
    }
    .apply {
      border-color: $green_color;
      background-color: white;
      color: $green_color;
      &:hover {
        background-color: $green_color;
        color: white;
      }
    }
  }
  input[type='checkbox'] {
    width: 22px;
    height: 22px;
    cursor: pointer;
    opacity: 1;
    border: 1px solid $green_color;

  }
  select { 
    display: block; ;
    appearance: none;
    background-color: #fff;  
  }
</style>