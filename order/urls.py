from django.urls import path, re_path
from order.views import *

urlpatterns = [
  path('order/', OrderList.as_view(), name = 'order_list'),
  path('order/<int:id>', OrderDetail.as_view(), name = 'order_detail'),
]