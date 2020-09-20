from rest_framework import serializers
from shop.models import Product
from order.models import Order, OrderItem


class OrderItemSerializer(serializers.ModelSerializer): #Tr
  cost = serializers.DecimalField(source='get_cost', max_digits=10, decimal_places=2) 
  class Meta:
    model = OrderItem
    fields = ['order','id','product','price','quantity','cost']



class OrderSerializer(serializers.ModelSerializer): #Al

  order = OrderItemSerializer(many=True, read_only=True)
  name = serializers.CharField(source='__str__')
  total_cost = serializers.SerializerMethodField()

  def get_total_cost(self, obj):
    pass

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
