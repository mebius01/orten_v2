from django.contrib import admin
from order.models import Order, OrderItem


class OrderItemInline(admin.TabularInline):
  model = OrderItem
  raw_id_field = ['order']

class OrderAdmin(admin.ModelAdmin):
  list_editable = ['paid']
  list_display = ['id', 'first_name', 'last_name', 'email', 'city', 'paid', 'created', 'updated']
  list_filter = ['paid', 'created', 'updated']
  inlines = [OrderItemInline]

admin.site.register(Order, OrderAdmin)

