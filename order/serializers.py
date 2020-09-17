from rest_framework import serializers
from shop.models import Product
from order.models import Order, OrderItem

class OrderItemSerialize(serializers.ModelSerializer):
  pass

class OrderSerializer(serializers.ModelSerializer):

  class Meta:
    model = Order
    fields = '__all__'