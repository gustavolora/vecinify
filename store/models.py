from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.conf import settings


class Store(models.Model):
    name = models.CharField(max_length=255, unique=True)
    address = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    def __str__(self):
        return "Tienda: {}  Dueño: {}".format(self.name, self.owner)

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField()
    store = models.ForeignKey(Store, on_delete=models.CASCADE)

class Order(models.Model):
    STATUS_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('preparando', 'Preparando'),
        ('entregado', 'Entregado'),
    ]

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES)

class DeliveryPerson(models.Model):
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    available = models.BooleanField()

class OrderHistory(models.Model):
    STATUS_CHOICES = [
        ('cancelado', 'Cancelado'),
        ('entregado', 'Entregado'),
    ]
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    delivery_person = models.ForeignKey(DeliveryPerson, on_delete=models.CASCADE)
    date = models.DateTimeField()
    status = models.CharField(max_length=15, choices=STATUS_CHOICES)

