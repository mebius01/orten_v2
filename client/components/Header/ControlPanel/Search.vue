<template>
  <div>
    <div class="search">
      <form role="search">
        <input type="text" placeholder="Search..." 
          v-model="search"
          @input="onChangeInput"
          />
      </form>
      <i class="btn-closse fas fa-times"
        v-if="search"
        @click="clossSearch">
      </i>
      <span class="overall_total" v-if="search">
        {{overall_total}}
      </span>
            
      <ul class="result" v-if="search">
          <template v-if="product">
            <li v-for="item in product" :key="item.id">
              <div class="content">
                <img :src="item.image" alt="">
                <a :href="'/product/'+item.slug" @click.prevent="openProduct(item)">{{item.name}}</a>
                <span class="available">
                  <i v-if="item.available" class="fas fa-check" style="color:green"></i>
                  <i v-else class="fas fa-times" style="color:red"></i>
                </span>
                <span v-if="item.action">
                  <i class="fas fa-splotch" style="color:#fc6251; margin-left:10px; font-size:10px;">
                    Aкция до {{item.end_action}}
                  </i>
                </span>
              </div>
              <div class="btn-gruop">
                <span class="vendor_code">PN: {{item.vendor_code}}</span>
                <span class="price" v-if="item.discount">{{item.discount}}грн.</span>
                <span class="price" v-else>{{item.price}}грн.</span>
              </div>
            </li>
          </template>
          <template v-if="service">
            <li v-for="item in service" :key="item.id">
              <div class="content">
                <img :src="item.image" alt="">
                <a href="'service/'+item.slug" @click.prevent="openService(item)">{{item.name}}</a>
              </div>
              <div class="btn-gruop">
                <span class="vendor_code">PN: {{item.vendor_code}}</span>
                <span class="price">{{item.price}}грн.</span>
              </div>
            </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'autocomplete',
    data() {
      return {
        search: '',
        overall_total: 0,
        product: [],
        service: [],
        statusError: ''
      };
    },
    methods: {
      onChangeInput() {
        if (this.search.length > 4 ) {
          axios
        .get('http://127.0.0.1:8000/api/search/?format=json&search='+this.search)
        .then(response => {
          let data = response.data
          this.product = data.results.product
          this.service = data.results.service
          this.overall_total = data.overall_total
        })
        .catch(error => (this.statusError = error))
        }
        
      },
      clossSearch() {
        this.search = ''
      },
      openProduct(product) {
        this.clossSearch()
        this.$router.push('/product/'+product.slug)
      },
      openService(service) {
        this.clossSearch()
        this.$router.push('/service/'+service.slug)
      }
    },
}
</script>

<style lang="scss" scoped>

.align-items {
  display: flex;
  align-items: center;
}
.padding-5 {
  padding: 5px;
}
$text-color: #2E4053;
$blue-color: #428bca;
.link_style {
  text-decoration: none;
  color: $text-color;
  display: block;
}

.search {
  width: 80vw;
  margin: 0 5px;
  position: relative;
  input {
    width: 100%;
    height: 32px;
    padding: 5px;
    outline: none;
    border: none;
  }
}
.btn-closse, .overall_total {
  position: absolute;
  right: 10px;
  top: 16px;
  cursor: pointer;
  color: #fd5050;
  line-height: 0;
  letter-spacing: 0;
  font-size: 16px;
  }
.overall_total {
  right: 50px;
  // font-size: 16px;
  color: $blue-color;
}
.result {
  position: absolute;
  top: 40px;
  height: 40vh;
  width: 80vw;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
  padding: 10px;
  overflow-y: scroll;
  background: rgb(255, 255, 255);
  z-index: 9;

  li {
    @extend .align-items;
    @extend .padding-5;
    justify-content: space-between;
    border-bottom: #85C987 1px solid;

    .content {
      @extend .align-items;
      justify-content: flex-start;
      width: 70%;

      img {
        @extend .padding-5;
        width: 56px;
        height: 100%;
      }

      a {
        display: flex;
        @extend .padding-5;
        @extend .link_style;
        color: $blue-color;

      }
      .available {
        @extend .padding-5;
        font-size: 16px;
        font-weight: 600;
      }
    }
    .btn-gruop {
      @extend .align-items;
      justify-content: flex-end;

      .price {
        @extend .padding-5;
        font-size: 16px;
        font-weight: 600;
        background-color: rgba(252, 99, 91, 0.18);
      }
      .vendor_code {
        @extend .padding-5;
        font-size: 12px;
      }
    }
    
  }
}
</style>