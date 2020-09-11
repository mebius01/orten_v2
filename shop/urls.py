"""orten URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path, re_path
from shop.views import *

app_name = 'shop'

urlpatterns = [
  path('api/home/', Home.as_view(), name='home'),
  path('api/product/', ProductList.as_view(), name ='product_list'),
  path('api/product/<slug:slug>/', ProductDetail.as_view(), name='product_detail'),
  path('api/services/', ServicesList.as_view(), name ='services_list'),
  path('api/services/<slug:slug>/', ServicesDetail.as_view(), name = 'services_detail'),
  path('api/category/', CategoryList.as_view(), name ='category_list'),
]