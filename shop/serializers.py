from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from shop.models import Category, Product, Services


class CategorySerializer(serializers.ModelSerializer):
  class Meta:
      model = Category
      fields = ['id','name','slug','image','tree_id','level','parent']


class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class ServicesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Services
    fields = '__all__'