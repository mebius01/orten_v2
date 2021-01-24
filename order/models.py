from django.db import models
import uuid

class Order(models.Model):
  delivery_method = models.CharField(max_length=50)
  pay_method = models.CharField(max_length=50)
  name = models.CharField(blank=True, max_length=50)
  phone = models.CharField(blank=True, max_length=15)
  email = models.EmailField(blank=True)
  note =  models.TextField(blank=True, max_length=512)
  payment = models.BooleanField(default=False)
  price_order = models.DecimalField(max_digits=10, decimal_places=2, default=0)
  created = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)
  
  class Meta:
    verbose_name = 'Заказ'
    verbose_name_plural = 'Заказы'

class Product(models.Model):
  order = models.ForeignKey(Order, related_name='order',on_delete=models.CASCADE)
  name = models.CharField(max_length=400, db_index=True)
  vendor_code		= models.CharField(max_length=200)
  price = models.DecimalField(verbose_name='Цена', max_digits=10, decimal_places=2)
  quantity = models.PositiveIntegerField(verbose_name='Количество', default=1)
  price_total = models.DecimalField(verbose_name='Общая стоимость', max_digits=10, decimal_places=2)

  def __str__(self):
    return '%s %s %s %s %s' % (self.name, self.vendor_code, self.price, self.quantity, self.price_total)


