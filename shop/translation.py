# -*- coding: utf-8 -*-

from modeltranslation.translator import translator, TranslationOptions
from shop.models import Category, Product, Services, Polygraphy

class CategoryTranslationOptions(TranslationOptions):
	fields = ('name', 'description')

class ProductTranslationOptions(TranslationOptions):
	fields = ('name', 'specifications', 'description')

class ServicesTrnsletionOptions(TranslationOptions):
	fields = ('name', 'description')

class PolygraphyTrnsletionOptions(TranslationOptions):
	fields = ('name', 'description', 'keywords', 'body')

translator.register(Category, CategoryTranslationOptions)
translator.register(Product, ProductTranslationOptions)
translator.register(Services, ServicesTrnsletionOptions)
translator.register(Polygraphy, PolygraphyTrnsletionOptions)
