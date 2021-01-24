from django.contrib import admin
from order.models import Order, Product


class ProductAdmin(admin.TabularInline):
	model = Product
	raw_id_field = ['name']

class OrderAdmin(admin.ModelAdmin):
	list_display = ['id', 'name', 'phone', 'email', 'price_order', 'payment']
	inlines = [ProductAdmin]

admin.site.register(Order, OrderAdmin)

