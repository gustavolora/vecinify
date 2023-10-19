from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.conf import settings


class Store(models.Model):
    """
    Modelo para representar una tienda en tu aplicación.

    Atributos:
    - name (CharField): El nombre de la tienda (máximo 255 caracteres).
    - address (TextField): La dirección de la tienda.
    - owner (ForeignKey a settings.AUTH_USER_MODEL): El dueño de la tienda.

    Métodos:
    - __str__(): Devuelve una representación legible de la tienda.

    """

    name = models.CharField(max_length=255, unique=True)
    address = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return "Tienda: {}  Dueño: {}".format(self.name, self.owner)

class Product(models.Model):
    """
    Modelo para representar un producto en tu aplicación.

    Atributos:
    - name (CharField): El nombre del producto (máximo 255 caracteres).
    - description (TextField): La descripción del producto.
    - price (DecimalField): El precio del producto.
    - available (BooleanField): Indica si el producto está disponible.
    - store (ForeignKey a Store): La tienda a la que pertenece el producto.
    - picture (ImageField): La imagen del producto (opcional).

    """

    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField()
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to='products/', null=True, blank=True)
    quantity = models.PositiveIntegerField(default=0)
    def __str__(self) -> str:
        return '{}'.format(self.name)


class DeliveryPerson(models.Model):
    """
    Modelo para representar a un repartidor en tu aplicación.

    Atributos:
    - name (CharField): El nombre del repartidor (máximo 255 caracteres).
    - phone_number (CharField): El número de teléfono del repartidor (máximo 15 caracteres).
    - available (BooleanField): Indica si el repartidor está disponible.
    - address (CharField): La direccion del repartidor.
    - identification (CharField): Identificacion del repartidor
    - profile_picture (ImageField): Se almacena la foto de perfil del repartidor
    """

    first_name = models.CharField(max_length=255)
    last_name = (models.CharField(max_length=50, null=True))
    phone_number = models.CharField(max_length=15)
    available = models.BooleanField()
    address = models.TextField(null=True)
    identification = models.CharField(max_length=20,null=True)  # Puedes ajustar la longitud según tus necesidades.
    profile_picture = models.ImageField(upload_to='delivery_persons/', null=True, blank=True)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)





    
class Order(models.Model):
    """
    Modelo para representar un pedido en tu aplicación.

    Atributos:
    - STATUS_CHOICES: Elecciones para el estado de un pedido.
    - product (ForeignKey a Product): El producto del pedido.
    - quantity (PositiveIntegerField): La cantidad de productos pedidos.
    - user (ForeignKey a settings.AUTH_USER_MODEL): El usuario que realiza el pedido.
    - store (ForeignKey a Store): La tienda a la que se realiza el pedido.
    - status (CharField): El estado del pedido (elegido de STATUS_CHOICES).

    """

    STATUS_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('preparando', 'Preparando'),
        ('en_camino', 'En Camino'),
        ('entregado', 'Entregado'),
        ('cancelado', 'Cancelado'),
    ]

    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES)
    delivery_person = models.ForeignKey(DeliveryPerson, on_delete=models.SET_NULL, null=True, blank=True)
    total = models.DecimalField(null = True,max_digits=10, decimal_places=2)
    
class OrderHistory(models.Model):
    """
    Modelo para representar el historial de pedidos en tu aplicación.

    Atributos:
   - order (ForeignKey a Order): El pedido asociado al historial.
    - user (ForeignKey a settings.AUTH_USER_MODEL): El usuario relacionado con el historial.
    - delivery_person (ForeignKey a DeliveryPerson): El repartidor asignado al pedido.
    - date (DateTimeField): La fecha y hora del historial.
   
    """
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    delivery_person = models.ForeignKey(DeliveryPerson, on_delete=models.CASCADE)
    date = models.DateTimeField()
    status = models.CharField(null=True,max_length=15, choices=Order.STATUS_CHOICES)

class DeliveryHistory(models.Model):
    """
    Modelo para representar el historial de entregas en tu aplicación.

    Atributos:
    - STATUS_CHOICES: Elecciones para el estado de la entrega.
    - order (ForeignKey a Order): El pedido asociado al historial de entregas.
    - user (ForeignKey a settings.AUTH_USER_MODEL): El usuario relacionado con el historial.
    - delivery_person (ForeignKey a DeliveryPerson): El repartidor asignado al pedido.
    - date (DateTimeField): La fecha y hora del historial de entregas.
    - status (CharField): El estado de la entrega (elegido de STATUS_CHOICES).

    """

    STATUS_CHOICES = [
        ('cancelado', 'Cancelado'),
        ('entregado', 'Entregado'),
    ]

    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    delivery_person = models.ForeignKey(DeliveryPerson, on_delete=models.CASCADE)
    date = models.DateTimeField()
    status = models.CharField(max_length=15, choices=STATUS_CHOICES)