from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView

from order.models import *
from order.serializers import *

from django.core.mail import send_mail
from django.template.loader import render_to_string

def email_customer(id):
	email_office = 'consmebius@gmail.com'
	# order = Order.objects.get(id=id)
	# subject = 'Заказ c номером {}'.format(order.id)
	# message = render_to_string('email/order_client.html', {'order': order})
	# send_mail(subject, message, email_office, [order.email], html_message=message)

	product = Product.objects.filter(order=id)
	order = Order.objects.get(id=id)
	subject = 'ЗАКАЗ НА САЙТЕ ID {}'.format(id)
	message = render_to_string('email/order_admin.html', { 'order': order, 'product': product })
	send_mail(subject, message, email_office, [email_office], html_message=message)

class OrderView(CreateAPIView):
	queryset = Order.objects.all()
	serializer_class = OrderSerializer
	
	def perform_create(self, serializer):
		created_object = serializer.save()
		data = serializer.data
		id = data.get('id')
		email_customer(id)

