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
  path('home/', Home.as_view(), name='home'),
  path('product/', ProductList.as_view(), name ='product_list'),
  path('product/<int:id>/', ProductDetail.as_view(), name='product_detail'),
  path('service/', ServicesList.as_view(), name ='services_list'),
  path('service/<int:id>/', ServicesDetail.as_view(), name = 'services_detail'),
  path('category/', CategoryList.as_view(), name = 'category_list'),
  path('category/<int:id>', CategoryDetail.as_view(), name ='category_detail'),
  path('search/', SearchList.as_view(), name ='serch_list'),

]