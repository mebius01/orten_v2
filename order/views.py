from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.shortcuts import render
from order.models import Order, OrderItem
from order.serializers import OrderSerializer


class OrderList(ListAPIView):
	queryset = Order.objects.all()
	serializer_class = OrderSerializer