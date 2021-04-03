from django.contrib.sitemaps import Sitemap
from django.urls import reverse


from shop.models import Product, Services, Polygraphy


class ProductSitemap(Sitemap):
  priority = 1.0
  changefreq = 'daily'
  i18n = True
  limit = 1000

  def items(self):
    return Product.objects.all()

  def location(self, item):
    return reverse('sitemap_product', args=[item.slug])



class ServicesSitemap(Sitemap):
  priority = 1.0
  changefreq = 'weekly'
  i18n = True
  limit = 1000

  def items(self):
    return Services.objects.all()

  def location(self, item):
    return reverse('sitemap_services', args=[item.slug])

class PolygraphySitemap(Sitemap):
  priority = 0.5
  changefreq = 'weekly'
  i18n = True
  limit = 1000
  def items(self):
    return Polygraphy.objects.all()

  def location(self, item):
    return reverse('sitemap_polygraphy', args=[item.slug])