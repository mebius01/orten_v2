<template>
	<main>
		<div>
			<div class="header-for-block">
				<span><i class="fas fa-user-tie"></i>Форма</span>
			</div>
			<form>
				<select class="form-control" v-model="delivery_method">
					<option value="Самовывоз">Самовывоз</option>
					<option value="Новой Почтой">Новой Почтой</option>
				</select>
				<select class="form-control" v-model="pay_method">
					<option value="Наличные">Наличные</option>
					<option value="Безналичный расчет">Безналичный расчет</option>
				</select>
				<input type="text" maxlength="50" class="form-control" placeholder="Имя" v-model="name">
				<input type="text" name="phone" maxlength="15" class="form-control" placeholder="Телефон" v-model="phone">
				<input type="email" name="email" maxlength="254" class="form-control" placeholder="Email" v-model="email">
				<textarea cols="40" rows="10" maxlength="512" class="form-control" placeholder="Дополнения, Отделение Новой Почты" v-model="note"></textarea>
				<div class="flex-row">
					<input class="apply" type="submit" @click.prevent="postOrder">
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
								:title="item.description">
								<span>{{item.name}}</span>
							</a>
						</div>
						<div class="btn-gruop">
							<span class="vendor_code">PN: {{item.vendor_code}}</span>
							<span class="price">{{item.price}} грн.</span>
							<form class="space-between buy">
								<div class="form_quantity">
									<input class="quantity" :value="item.quantity">шт.
								</div>
								<span class="total_cost">{{item.total_cost}} грн.</span>
							</form>
						</div>
					</li>
				</ul>
				<div class="full_cost">
					<span>Общая стоимость:</span>
					<span class="cost">{{GET_FULL_COST}} грн.</span>
				</div>
			</div>
		</div>
		<PopUp v-if="showPopUp">
      <div slot="basket">
        <h1>Спасибо за Ваш заказ!</h1>
      </div>
    </PopUp>
	</main>
</template>




<script>
import PopUp from "@/components/PopUp"
import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Cart",
    components: {
			PopUp
		},
		data() {
			return {
				showPopUp: false,
				delivery_method: 'Самовывоз',
				pay_method: 'Наличные',
				name: null,
				phone: null,
				email: null,
				note: '',
				paid: false
			}
		},
		methods: {
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
			postOrder() {
				const product = this.GET_PRODUCTS.reduce((arr, item) => {
					const data = {
						"name": item.name,
						"vendor_code": item.vendor_code,
						"price": item.price,
						"quantity": item.quantity,
						"price_total": item.total_cost
					}
					arr.push(data)
					return arr
				}, [])
				const formData = {
					delivery_method: this.delivery_method,
					pay_method: this.pay_method,
					name: this.name,
					phone: this.phone,
					email: this.email,
					note: this.note,
					price_order: this.GET_FULL_COST,
					order: product
				}
				this.$axios.defaults.xsrfCookieName = 'csrftoken'
        this.$axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
				this.$axios.$post(`${process.env.apiUrl}/api/order/`, formData)
					.then(data => {
						this.showPopUp = true
						setTimeout(() => {
							this.showPopUp = false
							this.clearOrder()
							this.$router.replace({ path: '/' })
						}, 3000)
					})
					.catch(error => { console.error(error) })
			}
		},
		computed: {
    ...mapGetters("basket", ['GET_PRODUCTS', 'GET_FULL_COST', 'GET_COUNTER'])
		},
	}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
@import  "@/assets/icon_header.scss";
@import '@/assets/form.scss';
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