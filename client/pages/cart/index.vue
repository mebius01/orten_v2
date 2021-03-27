<template>
	<main class="main-container">
		<Notification 
			:error="errorName || errorPhone"
		/>
		<div>
			<div class="header-for-block">
				<span><i class="fas fa-user-tie"></i>{{$t('dom.btn.send_cart')}}</span>
			</div>
			<form>
				<select class="form-control" v-model="delivery_method">
					<option :value="$t('dom.export.pickup')">{{$t('dom.export.pickup')}}</option>
					<option :value="$t('dom.export.np')">{{$t('dom.export.np')}}</option>
				</select>
				<select class="form-control" v-model="pay_method">
					<option :value="$t('dom.payment.cash')">{{ $t('dom.payment.cash') }}</option>
					<option :value="$t('dom.payment.no_cash')">{{ $t('dom.payment.no_cash') }}</option>
				</select>
				<input :class="{ error: errorName }" type="text" maxlength="50" class="form-control" :placeholder="$t('dom.name')" v-model="name">
				<input :class="{ error: errorPhone }" type="text" name="phone" maxlength="15" class="form-control" :placeholder="$t('dom.phone')" v-model="phone">
				<input type="email" name="email" maxlength="254" class="form-control" :placeholder="$t('dom.email')" v-model="email">
				<textarea cols="40" rows="10" maxlength="512" class="form-control" :placeholder="$t('dom.note')" v-model="note"></textarea>
				<div class="flex-row">
					<button class="apply" type="submit" @click.prevent="postOrder">{{ $t('dom.btn.send_cart') }}</button>
				</div>
			</form>
		</div>

		<div>
			<div class="header-for-block">
				<span><i class="fas fa-truck-loading"></i>Корзина товаров</span>
			</div>
			<div class="control_cart">
				<ul>
					<li v-for="(item, index) in GET_PRODUCTS" :key="index" >
						<div class="content">
							<img :src="item.image" :alt="item.name">
							<span class="content__vendor">{{item.vendor}}</span>
							<a :href="'/product/'+item.slug"
								:title="item.description"
								@click.prevent="clickLink(item.slug)">
								<span>{{item.name}}</span>
							</a>
						</div>
						<div class="btn-gruop">
							<div v-if="item.action" class="price-block">
                <span class="text-crossed">{{item.price}}грн.</span>
                <span class="price" :title="'Акция до ' + item.end_action">{{item.discount}}грн.</span>
              </div>
              <div v-else class="price-block">
                <span class="price">{{item.price}}грн.</span>
              </div>
							<div class="btn-gruop">
								<span class="quantity">{{item.quantity}}шт.</span>
								<span class="total_cost">{{item.total_cost}} грн.</span>
						</div>
						</div>
						
					</li>
				</ul>
				<div class="full_cost">
					<span>{{ $t('dom.total_cost') }}:</span>
					<span class="cost">{{GET_FULL_COST}} грн.</span>
				</div>
			</div>
		</div>
		<PopUp v-if="showPopUp">
      <div slot="basket">
        <h1>{{ $t('dom.thank') }}</h1>
      </div>
    </PopUp>
	</main>
</template>


<script>
import PopUp from "@/components/PopUp"
import Notification from "@/components/Notification"
import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Cart",
    components: {
			PopUp,
			Notification
		},
		data() {
			return {
				showPopUp: false,
				delivery_method: this.$t('dom.export.pickup'),
				pay_method: this.$t('dom.payment.cash'),
				name: null,
				phone: null,
				email: null,
				note: '',
				paid: false,
				csrftoken: null,
				hostname: "localhost",
				errorName: null,
				errorPhone: null
			}
		},
		methods: {
			clickLink(slug){
				this.$router.push({path: `/${this.$i18n.locale}/product/${slug}`})
			},
			...mapActions("basket", ['CLEAR_BASKET']),
			clearOrder() {
				this.delivery_method = 'Самовывоз'
				this.pay_method = 'Наличные'
				this.name = null
				this.phone = null
				this.email = null
				this.note = ''
				this.CLEAR_BASKET()
			},
			sendData(data, headers){
				this.$axios.$post(`${process.env.apiUrl}/api/order/`, data, headers)
					.then(data => {
						this.showPopUp = true
						setTimeout(() => {
							this.showPopUp = false
							this.clearOrder()
							this.$router.replace({ path: `/${this.$i18n.locale}/` })
						}, 3000)
					})
					.catch(error => { this.error = error })
				
			},
			getDiscount(object){
        if (object.action) {
          return object.discount
        } else {
          return object.price
        }
      },
			createDate(){
				const product = this.GET_PRODUCTS.reduce((arr, item) => {
					const data = {
						"name": item.name,
						"vendor_code": item.vendor_code,
						"price": this.getDiscount(item),
						"quantity": item.quantity,
						"price_total": item.total_cost
					}
					arr.push(data)
					return arr
				}, [])
				return {
					delivery_method: this.delivery_method,
					pay_method: this.pay_method,
					name: this.name,
					phone: this.phone,
					email: this.email,
					note: this.note,
					price_order: this.GET_FULL_COST,
					order: product
				}
			},
			validForm(name, phone){
				if (!name) {
					this.errorName = this.$t('notification.errorName') 
					setTimeout(()=> {
						this.errorName = null
					}, 3000);
					return false
				}
				if (!phone) {
					this.errorPhone = this.$t('notification.errorPhone')
					setTimeout(()=> {
						this.errorPhone = null
					}, 3000);
					return false
				}
				return true
			},
			postOrder() {
				const data = this.createDate()
        if (this.validForm(data.name, data.phone)) {
					this.sendData(data, {headers: {'X-CSRFToken': this.csrftoken}})					
				}
				
			}
		},
		computed: {
    ...mapGetters("basket", ['GET_PRODUCTS', 'GET_FULL_COST', 'GET_COUNTER'])
		},
		mounted() {
			this.csrftoken = this.$cookies.get("csrftoken")
			this.hostname = window.location.hostname
			console.log(this.hostname);
		},
	}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
@import  "@/assets/icon_header.scss";
@import  "@/assets/list.scss";
@import '@/assets/form.scss';
.error {
	border: 1px rgb(255,168,168) solid;
}
.full_cost {
	padding: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $text_color;
	font-weight: 600;
	font-size: 20px;

	.cost {
		padding: 5px 0;
		border-bottom: $green_color 1px solid;
	}
}
main {
	.apply {
		width: 100%
	}
  @extend .padding-12;
  display: grid;
  grid-template-columns: 30% auto;
  gap: 12px;

  @media (max-width: 767px) {
    grid-template-columns: 40% auto;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
}

</style>