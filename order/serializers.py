from rest_framework import serializers
from shop.models import Product
from django.db.models import Sum
from order.models import Order, OrderItem

class OrderAggrSerializer(serializers.ModelSerializer):
  cost = serializers.SerializerMethodField() 
  class Meta:
      model = OrderItem
      fields = ['id','cost','price','quantity',]
  def get_cost(self, obj):
    return obj.price * obj.quantity



class OrderItemSerializer(serializers.ModelSerializer): #Tr
  cost = serializers.DecimalField(source='get_cost', max_digits=10, decimal_places=2)
  class Meta:
    model = OrderItem
    fields = ['order','id','product','price','quantity','cost']

class OrderSerializer(serializers.ModelSerializer): #Al
  order = OrderItemSerializer(many=True, read_only=True)
  name = serializers.CharField(source='__str__')
  total_cost = serializers.SerializerMethodField()

  def get_total_cost(self, instance):
    print(instance)

  class Meta:
    model = Order
    fields = [
      'name',
      'delivery_method',
      'pay_method',
      'last_name',
      'first_name',
      'phone',
      'email',
      'paid',
      'order',
      'total_cost'
    ]
