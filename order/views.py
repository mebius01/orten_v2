from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView

from order.models import *
from order.serializers import *

from django.core.mail import send_mail
from django.template.loader import render_to_string

from django.conf import settings

def send_email(id):
	product = Product.objects.filter(order=id)
	order = Order.objects.get(id=id)
	email_office = settings.DEFAULT_FROM_EMAIL
	email_customer = order.email
	subject = 'ЗАКАЗ НА САЙТЕ ID {}'.format(id)

	# For Customer
	message = render_to_string('email/order_client.html', { 'order': order, 'product': product })
	send_mail(subject, message, email_office, [email_customer], html_message=message)

	# For Company
	message = render_to_string('email/order_admin.html', { 'order': order, 'product': product })
	send_mail(subject, message, email_office, [email_office], html_message=message)

class OrderView(CreateAPIView):
	queryset = Order.objects.all()
	serializer_class = OrderSerializer
	
	def perform_create(self, serializer):
		created_object = serializer.save()
		data = serializer.data
		id = data.get('id')
		send_email(id)

