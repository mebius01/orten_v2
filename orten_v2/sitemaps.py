from django.contrib.sitemaps import Sitemap
from shop.models import Product, Services, Polygraphy

class ProductSitemap(Sitemap):
  priority = 1.0
  changefreq = 'daily'
  def items(self):
    return Product.objects.all()

  def location(self, item):
    return '/product/%s' % (item.slug)


class ServicesSitemap(Sitemap):
  priority = 1.0
  changefreq = 'weekly'
  def items(self):
    return Services.objects.all()

  def location(self, item):
    return '/service/%s' % (item.slug)

class PolygraphySitemap(Sitemap):
  priority = 0.5
  changefreq = 'weekly'
  def items(self):
    return Polygraphy.objects.all()

  def location(self, item):
    return '/polygraphy/%s' % (item.slug)