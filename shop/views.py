from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from shop.serializers import *

from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend


class LargeResultsSetPagination(PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'
    max_page_size = 100

class Home(ListAPIView):
  queryset = Product.objects.all().order_by('-action', '-image',)[:12]
  serializer_class = ProductSerializer

class ProductList(ListAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	pagination_class = LargeResultsSetPagination
	filter_backends = [filters.SearchFilter, filters.OrderingFilter]
	search_fields = ['name', 'description', 'vendor_code', 'specifications']
	# filter_backends = [DjangoFilterBackend]
	ordering_fields = ['vendor', 'name', 'price', 'available']
	# filterset_fields = [
	# 		'price',
	# 		'available',
	# 		'category',
	# 		'vendor',
	# 		'type_product',
	# 		'format_fild',
	# 		'color_fild']



class ProductDetail(RetrieveAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	lookup_field = 'slug'


# def handler404(request, exception):
# 	return render(request, '404.html', status=404)
# def handler500(request, exception):
# 	return render(request, '500.html', status=500)
# def robots(request):
# 	return render('robots.txt', mimetype="text/plain")

# class Home(ListView, FormView):
# 	model = Product
# 	template_name = 'shop/home.html'
# 	form_class = CartAddProductForm
# 	queryset = Product.objects.all().order_by('-action', '-image',)[:12]
# 	def get_context_data(self, **kwargs):
# 		context = super().get_context_data(**kwargs)
# 		context["date_now"] = datetime.now()
# 		return context
	


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

# class SearchView(ListView):
# 	def get_queryset(self):
# 		queryset = super().get_queryset()
# 		qs = self.model.objects.all()
# 		try:
# 			search_string = self.request.GET['search']
# 			qs = qs.annotate(
# 				search = (
# 					SearchVector('name')+
# 					SearchVector('description')+
# 					SearchVector('vendor_code')+
# 					SearchVector('specifications')
# 				),
# 			).filter(search=search_string)
# 			queryset = qs.order_by('-action', '-image',)
# 		except KeyError:
# 			queryset =  qs.order_by('-action', '-image',)
# 		return queryset

# class FilteredListView(ListView):
#     filterset_class = None
#     def get_queryset(self):
#         queryset = super().get_queryset()
#         self.filterset = self.filterset_class(self.request.GET, queryset=queryset)
#         return self.filterset.qs

#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['filterset'] = self.filterset
#         return context


# class ProductList(FormView, FilteredListView, SearchView):
# 	model = Product
# 	template_name = 'shop/list_product.html'
# 	form_class = CartAddProductForm
# 	filterset_class = ProductFilter
# 	paginate_by = 24

# 	def get_queryset(self):
# 		queryset = super().get_queryset()
# 		category = self.request.GET.get('category')
# 		if category:
# 			queryset = queryset.filter(category=category)
# 		else:
# 			queryset =  queryset
# 		return queryset

# 	def get_context_data(self, **kwargs):
# 		context = super().get_context_data(**kwargs)
# 		category = self.request.GET.get('category')
# 		search = self.request.GET.get('search')
# 		if category:
# 			context['instance'] = Category.objects.get(id=category)
# 		elif search:
# 			context['search'] = search
# 		context["date_now"] = datetime.now()
# 		return context

# class ServicesListView(FilteredListView):
# 	model = Services
# 	template_name = "shop/list_service.html"
# 	form_class = CartAddProductForm
# 	filterset_class = ServiceFilter
# 	paginate_by = 24

# 	def get_context_data(self, **kwargs):
# 		context = super().get_context_data(**kwargs)
# 		category = self.request.GET.get('category')
# 		if category:
# 			context['instance'] = Category.objects.get(id=category)
# 		return context
