"""orten_v2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from django.conf.urls.i18n import i18n_patterns
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import views
from .sitemaps import ProductSitemap, PolygraphySitemap, ServicesSitemap

from shop.views import *

sitemaps = {'product': ProductSitemap, 'polygraphy': PolygraphySitemap, 'services': ServicesSitemap }

urlpatterns = [
    path('i18n/', include('django.conf.urls.i18n')),
    path('admin_tools/', include('admin_tools.urls')),
    path('api/', include('order.urls')),
    path('sitemap.xml', views.index, {'sitemaps': sitemaps}),
    path('sitemap-<section>.xml', views.sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    # path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='sitemap'),
]

urlpatterns += i18n_patterns(
    path('admin/', admin.site.urls),
    path('api/', include('shop.urls')),

    # Crutch for sitemap
    path('service/<slug:slug>/', ServicesDetail.as_view(), name = 'sitemap_services'),
    path('product/<slug:slug>/', ProductDetail.as_view(), name='sitemap_product'),
    path('polygraphy/<slug:slug>/', PolygraphyDetail.as_view(), name='sitemap_polygraphy'),
    prefix_default_language=True,) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns