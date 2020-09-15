from django.db import models
from shop.models import Product

PAY_CHOICES = (
	('Наличные','Наличные'),
	('Безналичный расчет', 'Безналичный расчет'),
	)

DELIVERY_CHOICES = (
	('Самовывоз','Самовывоз'),
	('Новой Почтой','Новой Почтой'),
	)

class Order(models.Model):
	delivery_method = models.CharField(max_length=50, verbose_name='Спопсоб доставки')
	pay_method = models.CharField(max_length=50, verbose_name='Спопсоб оплаты')

	last_name = models.CharField(verbose_name='Фамилия', blank=True, max_length=50)
	first_name = models.CharField(verbose_name='Имя', blank=True, max_length=50)
	sur_name = models.CharField(verbose_name='Отчесво', blank=True, max_length=50)
	city = models.CharField(verbose_name='Город', blank=True, max_length=100)
	department_np = models.CharField(verbose_name='НП №', blank=True, max_length=300)

	mobile_phone = models.CharField(max_length=15, verbose_name='Телефон')
	email = models.EmailField(blank=True, verbose_name='Email')
	note_text =  models.TextField(blank=True, max_length=512, verbose_name='Дополнения, пожелания, заметки')

	created = models.DateTimeField(verbose_name='Создан', auto_now_add=True)
	updated = models.DateTimeField(verbose_name='Обновлен', auto_now=True)
	paid = models.BooleanField(verbose_name='Оплачен', default=False)

	class Meta:
		verbose_name = 'Заказ'
		verbose_name_plural = 'Заказы'

	def __str__(self):
		return 'Заказ: {}'.format(self.id)

	def get_total_cost(self):
		return sum(item.get_cost() for item in self.items.all())

class OrderItem(models.Model):
	order = models.ForeignKey(Order, related_name='items',on_delete=models.CASCADE)
	name			= models.CharField(max_length=400, db_index=True)
	vendor_code		= models.CharField(max_length=200, blank=True)
	price			= models.DecimalField(max_digits=10, decimal_places=2)
	quantity = models.PositiveIntegerField(verbose_name='Количество', default=1)

	def __str__(self):
		return '{}'.format(self.name)

	def get_cost(self):
		return self.price * self.quantity
