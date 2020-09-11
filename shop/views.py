from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from shop.serializers import *

from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend, RangeFilter, FilterSet, NumberFilter

from rest_framework import status, viewsets

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 24
    page_size_query_param = 'page_size'
    max_page_size = 10

class Home(ListAPIView):
	qset = Product.objects.all();
	qset_action = qset.order_by('-action', '-image',)[:12];
	qset_all = qset.order_by('-action', '-image',)
	if len(qset_all) >= len(qset_action):
		queryset = qset_all
	else:
		queryset = Product.objects.all().order_by('-action', '-image',)[:12]
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
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	pagination_class = LargeResultsSetPagination
	filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
	filterset_class = ProductFilter
	search_fields = ['name', 'description', 'vendor_code', 'specifications']
	ordering_fields = ['vendor', 'name', 'price', 'available']

class ProductDetail(RetrieveAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	lookup_field = 'slug'

class ServicesFilter(FilterSet):
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
	queryset = Services.objects.all()
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
	queryset = Category.objects.all()
	serializer_class = CategorySerializer



# def handler404(request, exception):
# 	return render(request, '404.html', status=404)
# def handler500(request, exception):
# 	return render(request, '500.html', status=500)
# def robots(request):
# 	return render('robots.txt', mimetype="text/plain")



# class ListCategory(ListView):
# 	model = Product
# 	template_name = 'shop/child_category.html'
# 	def get_context_data(self, **kwargs):
# 		context = super().get_context_data(**kwargs)
# 		"""с помощью get_full_path() получаем строку урла
# 		 и создаем массив ['',url_1,url_2,url_3,'']"""
# 		leaf = self.request.get_full_path().split('/')[-2]
# 		context['instance'] = Category.objects.get(slug=leaf)
# 		return context
