from django.contrib import admin
from .models import Category, Product, Services, Polygraphy
from mptt.admin import MPTTModelAdmin
from import_export.admin import ImportExportModelAdmin
from import_export import resources


class CategoryAdmin(MPTTModelAdmin):
	list_display = ['name', 'id', 'slug']
	prepopulated_fields = {'slug': ('name',)}
	mptt_level_indent = 30

class ProductResource(resources.ModelResource):
	class Meta:
		model = Product
		fields = ('id', 'category', 'name', 'slug', 'provider', 'vendor_code', 'vendor', 'type_product', 'image', 'format_fild', 'color_fild', 'specifications', 'description', 'price', 'stock', 'available', 'start_action', 'end_action', 'action', 'discount')
		# fields = ('id', 'category','name', 'provider', 'vendor', 'vendor_code', 'type_product', 'slug','price', 'available')

class ProductAdmin(ImportExportModelAdmin):
	search_fields = ['name', 'vendor_code',]
	list_display = ['name', 'available', 'price', 'action', 'start_action', 'end_action', 'color_fild', 'format_fild']
	list_filter = ['action', 'created', 'updated', 'available', 'provider', 'type_product','category', 'vendor']
	list_editable = ['price', 'available', 'action', 'start_action', 'end_action', 'color_fild', 'format_fild']
	prepopulated_fields = {'slug': ('name','vendor_code')}
	resource_class = ProductResource

class ServicesResource(resources.ModelResource):
	class Meta:
		model = Services
		# fields = ('id', 'category','name', 'slug', 'vendor', 'vendor_code', 'vendor_model', 'description', 'price')

class ServicesAdmin(ImportExportModelAdmin):
	search_fields = ['name','vendor_code','vendor_model']
	list_display = ['name','vendor','vendor_code','price','updated','created']
	list_filter = ['vendor', 'type_service', 'price', 'name']
	prepopulated_fields = {'slug': ('name', 'vendor_code')}
	resource_class = ServicesResource

class PolygraphyAdmin(admin.ModelAdmin):
	list_display = ('name', 'id', 'slug', )
	prepopulated_fields = {'slug': ('name',)}

admin.site.register(Polygraphy, PolygraphyAdmin)
admin.site.register(Category, CategoryAdmin,)
admin.site.register(Product, ProductAdmin,)
admin.site.register(Services, ServicesAdmin,)
