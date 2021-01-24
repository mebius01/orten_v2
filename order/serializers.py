from rest_framework import serializers
from order.models import *

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ["name", "vendor_code", "price", "quantity", "price_total"]

class OrderSerializer(serializers.ModelSerializer):
  order = ProductSerializer(many=True)
  
  class Meta:
    model = Order
    fields = ['id','delivery_method', 'pay_method', 'name', 'phone', 'email', 'note', 'price_order', 'order']
  
  def create(self, validated_data):
    orders_data = validated_data.pop('order')
    order = Order.objects.create(**validated_data)
    for item in orders_data:
        Product.objects.create(order=order, **item)
    return order

