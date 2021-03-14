# basic import
from rest_framework.generics import ListAPIView, RetrieveAPIView
from shop.serializers import *
from rest_framework import viewsets

# pagination
from rest_framework.pagination import PageNumberPagination

# serch and filtering in one model
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend, FilterSet, NumberFilter

# for search and ordering in multiple model
from drf_multiple_model.views import ObjectMultipleModelAPIView
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination

# cache redis
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.conf import settings

from django.utils.translation import get_language

class LimitPagination(MultipleModelLimitOffsetPagination):
	default_limit = 24

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 24
    page_size_query_param = 'page_size'
    max_page_size = 10

# Seaech
class SearchList(ObjectMultipleModelAPIView):
	pagination_class = LimitPagination
	filter_backends = [filters.SearchFilter, filters.OrderingFilter,]
	search_fields = ['name', 'description']
	ordering_fields = ['vendor', 'name',]
	def get_querylist(self, *args, **kwargs):
		if 'uk' == self.request.LANGUAGE_CODE:
			querylist = [
				{'queryset': Product.objects.all().order_by('-available', '-action', '-image',),'serializer_class': ProductSerializerUk,'label':'product'},
				{'queryset': Services.objects.all().order_by('-price', '-image',),'serializer_class': ServicesSerializerUk,'label':'service'},
				{'queryset': Polygraphy.objects.all(), 'serializer_class': PolygraphySerializerUk,'label':'polygraphy'}
			]
			return querylist
		else:
			querylist = [
				{'queryset': Product.objects.all().order_by('-available', '-action', '-image',),'serializer_class': ProductSerializerRu,'label':'product'},
				{'queryset': Services.objects.all().order_by('-price', '-image',),'serializer_class': ServicesSerializerRu,'label':'service'},
				{'queryset': Polygraphy.objects.all(), 'serializer_class': PolygraphySerializerRu,'label':'polygraphy'}
			]
			return querylist

# Home
class Home(ListAPIView):
	queryset = Product.objects.all().order_by('-available', '-action', '-image',)[:24];
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return ProductSerializerUk
		return ProductSerializerRu

# Products
class ProductFilter(FilterSet):
	min_price = NumberFilter(field_name="price", lookup_expr='gte')
	max_price = NumberFilter(field_name="price", lookup_expr='lte')
	
	class Meta:
		model = Product
		fields = [
		'available',
		'category',
		'vendor',
		'type_product',
		'format_fild',
		'color_fild',
		'min_price',
		'max_price'
		]

class ProductList(ListAPIView):
	queryset = Product.objects.all().order_by('-action', '-image',)
	pagination_class = LargeResultsSetPagination
	filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
	filterset_class = ProductFilter
	search_fields = ['name', 'vendor_code', 'description', 'specifications']
	ordering_fields = ['vendor', 'name', 'price', 'available']
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return ProductSerializerUk
		return ProductSerializerRu

class ProductDetail(RetrieveAPIView):
	queryset = Product.objects.all()
	lookup_field = 'slug'
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return ProductSerializerUk
		return ProductSerializerRu

# Services
class ServicesFilter(ProductFilter):
	min_price = NumberFilter(field_name="price", lookup_expr='gte')
	max_price = NumberFilter(field_name="price", lookup_expr='lte')

	class Meta:
		model = Services
		fields = [
			'category',
			'vendor',
			'type_service',
			'min_price',
			'max_price'
		]

class ServicesList(ListAPIView):
	queryset = Services.objects.all().order_by('-image', '-price',)
	pagination_class = LargeResultsSetPagination
	filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
	filterset_class = ServicesFilter
	search_fields = ['name', 'description', 'vendor',]
	ordering_fields = ['vendor', 'name', 'price',]
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return ServicesSerializerUk
		return ServicesSerializerRu

class ServicesDetail(RetrieveAPIView):
	queryset = Services.objects.all()
	lookup_field = 'slug'
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return ServicesSerializerUk
		return ServicesSerializerRu

# Categories
class CategoryList(ListAPIView):
	queryset = Category.objects.root_nodes()
	# serializer_class = CategorySerializer
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return CategorySerializerUk
		return CategorySerializerRu

	@method_decorator(cache_page(settings.CACHE_TTL))
	def dispatch(self, *args, **kwargs):
		return super(CategoryList, self).dispatch(*args, **kwargs)

class CategoryDetail(RetrieveAPIView):
	queryset = Category.objects.all()
	lookup_field = 'slug'
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return CategorySerializerUk
		return CategorySerializerRu

class CategoryDetailById(RetrieveAPIView):
	queryset = Category.objects.all()
	lookup_field = 'pk'
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return CategoryByIdSerializerUk
		return CategoryByIdSerializerRu

# Polygraphy
class PolygraphyList(ListAPIView):
	queryset = Polygraphy.objects.all()
	pagination_class = LargeResultsSetPagination
	filter_backends = [filters.SearchFilter]
	search_fields = ['name', 'description', 'keywords', 'body', ]

	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return PolygraphySerializerUk
		return PolygraphySerializerRu

class PolygraphyDetail(RetrieveAPIView):
	queryset = Polygraphy.objects.all()
	lookup_field = 'slug'
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return PolygraphySerializerUk
		return PolygraphySerializerRu


