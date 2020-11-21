from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from shop.models import Category, Product, Services


class CategorySerializer(serializers.ModelSerializer):
  children = serializers.ListField(read_only=True, source='get_descendants', child=RecursiveField())
  product_count = serializers.SerializerMethodField()
  service_count = serializers.SerializerMethodField()
  class Meta:
      model = Category
      fields = ['id','name','slug','image','tree_id','level','parent','children', 'product_count', 'service_count']
  
  def get_product_count(self, obj):
    return obj.product.count()
  def get_service_count(self, obj):
    return obj.services.count()


class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class ServicesSerializer(serializers.ModelSerializer):
  class Meta:
    model = Services
    fields = '__all__'