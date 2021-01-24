from django.urls import path, re_path
from order.views import *

urlpatterns = [
  path('order/', OrderView.as_view(), name = 'order'),
]