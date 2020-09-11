from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from shop.models import Category, Product, Services

class CategorySerializer(serializers.ModelSerializer):
  type = serializers.SerializerMethodField()
  attributes = serializers.SerializerMethodField()
  relationships = serializers.SerializerMethodField()


  class Meta:
      model = Category
      fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class ServicesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Services
    fields = '__all__'