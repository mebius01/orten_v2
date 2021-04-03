from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from shop.models import Category, Product, Services, Polygraphy

class CategorySerializerAllById(serializers.ModelSerializer):
  product_count = serializers.SerializerMethodField()
  service_count = serializers.SerializerMethodField()
  polygraphy_count = serializers.SerializerMethodField()

  class Meta:
      model = Category
      fields = '__all__'
  
  def get_product_count(self, obj):
    return obj.product.count()
  def get_service_count(self, obj):
    return obj.services.count()
  def get_polygraphy_count(self, obj):
    return obj.polygraphy.count()


class CategorySerializerUk(serializers.ModelSerializer):
  children = serializers.ListField(read_only=True, source='get_descendants', child=RecursiveField())
  product_count = serializers.SerializerMethodField()
  service_count = serializers.SerializerMethodField()
  polygraphy_count = serializers.SerializerMethodField()
  name = serializers.CharField(source='name_uk')
  description = serializers.CharField(source='description_uk')

  class Meta:
      model = Category
      # fields = ['id','name','slug','image','tree_id','level','parent','children', 'product_count', 'service_count','polygraphy_count']
      exclude = ['name_uk', 'description_uk', 'name_ru', 'description_ru']
  
  def get_product_count(self, obj):
    return obj.product.count()
  def get_service_count(self, obj):
    return obj.services.count()
  def get_polygraphy_count(self, obj):
    return obj.polygraphy.count()

class CategorySerializerRu(serializers.ModelSerializer):
  children = serializers.ListField(read_only=True, source='get_descendants', child=RecursiveField())
  product_count = serializers.SerializerMethodField()
  service_count = serializers.SerializerMethodField()
  polygraphy_count = serializers.SerializerMethodField()
  name = serializers.CharField(source='name_ru')
  description = serializers.CharField(source='description_ru')

  class Meta:
      model = Category
      # fields = ['id','name','slug','image','tree_id','level','parent','children', 'product_count', 'service_count','polygraphy_count']
      exclude = ['name_uk', 'description_uk', 'name_ru', 'description_ru']
  
  def get_product_count(self, obj):
    return obj.product.count()
  def get_service_count(self, obj):
    return obj.services.count()
  def get_polygraphy_count(self, obj):
    return obj.polygraphy.count()

class CategoryByIdSerializerUk(serializers.ModelSerializer):
  name = serializers.CharField(source='name_uk')
  description = serializers.CharField(source='description_uk')
  class Meta:
      model = Category
      exclude = ['name_uk', 'description_uk', 'name_ru', 'description_ru']

class CategoryByIdSerializerRu(serializers.ModelSerializer):
  name = serializers.CharField(source='name_ru')
  description = serializers.CharField(source='description_ru')
  class Meta:
      model = Category
      exclude = ['name_uk', 'description_uk', 'name_ru', 'description_ru']

# # Search 
# class ProductSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Product
#     fields = '__all__'

# class ServicesSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Services
#     fields = '__all__'

# class PolygraphySerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Polygraphy
#     fields = '__all__'

## Langauge Products
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

## Langauge Services
class ServicesSerializerRu(serializers.ModelSerializer):
  name = serializers.CharField(source='name_ru')
  description = serializers.CharField(source='description_ru')
  class Meta:
    model = Services
    exclude = ['name_ru', 'name_uk', 'description_uk', 'description_ru']

class ServicesSerializerUk(serializers.ModelSerializer):
  name = serializers.CharField(source='name_uk')
  description = serializers.CharField(source='description_uk')
  class Meta:
    model = Services
    exclude = ['name_ru', 'name_uk', 'description_uk', 'description_ru']

## Langauge Polygraphy
class PolygraphySerializerRu(serializers.ModelSerializer):
  name = serializers.CharField(source='name_ru')
  description = serializers.CharField(source='description_ru')
  keywords = serializers.CharField(source='keywords_ru')
  body = serializers.CharField(source='body_ru')
  class Meta:
    model = Polygraphy
    exclude = ['name_ru', 'description_ru', 'keywords_ru', 'body_ru', 'name_uk', 'description_uk', 'keywords_uk', 'body_uk']

class PolygraphySerializerUk(serializers.ModelSerializer):
  name = serializers.CharField(source='name_uk')
  description = serializers.CharField(source='description_uk')
  keywords = serializers.CharField(source='keywords_uk')
  body = serializers.CharField(source='body_uk')
  class Meta:
    model = Polygraphy
    exclude = ['name_ru', 'description_ru', 'keywords_ru', 'body_ru', 'name_uk', 'description_uk', 'keywords_uk', 'body_uk']