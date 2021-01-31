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


class LimitPagination(MultipleModelLimitOffsetPagination):
	default_limit = 24

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 24
    page_size_query_param = 'page_size'
    max_page_size = 10

class Home(ListAPIView):
	queryset = Product.objects.all().order_by('-available', '-action', '-image',)[:24];
	# qset_action = qset.order_by('-action', '-image',)[:12];
	# qset_all = qset.order_by('-action', '-image',)
	# if len(qset_all) >= len(qset_action):
	# 	queryset = qset_all
	# else:
	# 	queryset = Product.objects.all().order_by('-action', '-image',)[:12]
	serializer_class = ProductSerializer

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
	search_fields = ['name', 'description', 'vendor_code', 'specifications']
	ordering_fields = ['vendor', 'name', 'price', 'available']
	serializer_class = ProductSerializer
	# def get_serializer_class(self):
	# 	if 'uk' in self.request.META.get('HTTP_ACCEPT_LANGUAGE'):
	# 		return ProductSerializerUk
	# 	return ProductSerializerRu

# class ProductDetail(RetrieveAPIView):
# 	queryset = Product.objects.all()
# 	serializer_class = ProductSerializer
# 	lookup_field = 'slug'

## langauge

class ProductDetail(RetrieveAPIView):
	queryset = Product.objects.all()
	lookup_field = 'slug'
	# serializer_class = ProductSerializer
	def get_serializer_class(self):
		if 'uk' == self.request.LANGUAGE_CODE:
			return ProductSerializerUk
		return ProductSerializerRu

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
	serializer_class = ServicesSerializer
	pagination_class = LargeResultsSetPagination
	filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
	filterset_class = ServicesFilter
	search_fields = ['name', 'description', 'vendor',]
	ordering_fields = ['vendor', 'name', 'price',]

class ServicesDetail(RetrieveAPIView):
	queryset = Services.objects.all()
	serializer_class = ServicesSerializer
	lookup_field = 'slug'

class CategoryList(ListAPIView):
	queryset = Category.objects.root_nodes()
	serializer_class = CategorySerializer

	# @method_decorator(cache_page(settings.CACHE_TTL))
	# def dispatch(self, *args, **kwargs):
	# 	return super(CategoryList, self).dispatch(*args, **kwargs)

class CategoryDetail(RetrieveAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	lookup_field = 'slug'

class CategoryDetailById(RetrieveAPIView):
	queryset = Category.objects.all()
	serializer_class = CategoryByIdSerializer
	lookup_field = 'pk'

class PolygraphyList(ListAPIView):
	queryset = Polygraphy.objects.all()
	pagination_class = LargeResultsSetPagination
	filter_backends = [filters.SearchFilter]
	search_fields = ['name', 'description', 'body', ]
	# ordering_fields = ['vendor', 'name', 'price', 'available']
	serializer_class = PolygraphySerializer

class PolygraphyDetail(RetrieveAPIView):
	queryset = Polygraphy.objects.all()
	lookup_field = 'slug'
	serializer_class = PolygraphySerializer
	# def get_serializer_class(self):
	# 	if 'uk' in self.request.META.get('HTTP_ACCEPT_LANGUAGE'):
	# 		return ProductSerializerUk
	# 	return ProductSerializerRu

class SearchList(ObjectMultipleModelAPIView):
	pagination_class = LimitPagination
	filter_backends = [filters.SearchFilter, filters.OrderingFilter,]
	search_fields = ['name', 'description',]
	ordering_fields = ['vendor', 'name',]
	querylist = [
			{'queryset': Product.objects.all().order_by('-available', '-action', '-image',),'serializer_class': ProductSerializer,'label':'product'},
			{'queryset': Services.objects.all().order_by('-price', '-image',),'serializer_class': ServicesSerializer,'label':'service'},
			{'queryset': Polygraphy.objects.all(), 'serializer_class': PolygraphySerializer,'label':'polygraphy'}
	]


