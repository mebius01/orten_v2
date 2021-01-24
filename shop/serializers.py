from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from shop.models import Category, Product, Services, Polygraphy


class CategorySerializer(serializers.ModelSerializer):
  children = serializers.ListField(read_only=True, source='get_descendants', child=RecursiveField())
  product_count = serializers.SerializerMethodField()
  service_count = serializers.SerializerMethodField()
  polygraphy_count = serializers.SerializerMethodField()

  class Meta:
      model = Category
      fields = ['id','name','slug','image','tree_id','level','parent','children', 'product_count', 'service_count','polygraphy_count']
  
  def get_product_count(self, obj):
    return obj.product.count()
  def get_service_count(self, obj):
    return obj.services.count()
  def get_polygraphy_count(self, obj):
    return obj.polygraphy.count()


class CategoryByIdSerializer(serializers.ModelSerializer):
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

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = '__all__'

class PolygraphySerializer(serializers.ModelSerializer):
  class Meta:
    model = Polygraphy
    fields = '__all__'

## langauge
class ProductSerializerUk(serializers.ModelSerializer):
  name = serializers.CharField(source='name_uk')
  specifications = serializers.CharField(source='specifications_uk')
  description = serializers.CharField(source='description_uk')
  class Meta:
    model = Product
    exclude = ['name_ru', 'name_uk', 'specifications_ru', 'specifications_uk', 'description_uk', 'description_ru']

class ProductSerializerRu(serializers.ModelSerializer):
  name = serializers.CharField(source='name_ru')
  specifications = serializers.CharField(source='specifications_ru')
  description = serializers.CharField(source='description_ru')
  class Meta:
    model = Product
    exclude = ['name_ru', 'name_uk', 'specifications_ru', 'specifications_uk', 'description_uk', 'description_ru']