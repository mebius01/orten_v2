from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.shortcuts import render
from order.models import Order, OrderItem
from order.serializers import OrderSerializer, OrderAggrSerializer


class OrderList(ListAPIView):
	queryset = Order.objects.all()
	serializer_class = OrderSerializer

class OrderAggr(ListAPIView):
	queryset = OrderItem.objects.all()
	serializer_class = OrderAggrSerializer