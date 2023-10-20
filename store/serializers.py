from rest_framework import serializers
from .models import Store, Product, DeliveryPerson, OrderHistory, Order, DeliveryHistory
from django.conf import settings
from django.contrib.auth.models import User
from django.utils import timezone


class DeliveryHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryHistory
        fields= '__all__'



class StoreSerializer(serializers.ModelSerializer):
    """
    Serializador para la tienda (Store)

    Campos:
    - Todos los campos de la tienda.
    Ejemplo de uso:
    ```python
    # Crear una nueva tienda
    serializer = StoreSerializer(data={'name': 'Mi Tienda', 'address': 'Dirección de la tienda' 'owner':'Dueño de la tienda'})
    if serializer.is_valid():
        store = serializer.save()
    ```

    """

    class Meta:
        model = Store
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    """
    Serializador para crear y gestionar órdenes.

    Este serializador permite la creación y gestión de órdenes en la aplicación.

    Atributos:
        model (Model): El modelo asociado a este serializador.
        fields (list): Lista de campos del modelo que se incluirán en la serialización.

    Métodos:
        create(validated_data): Crea una nueva orden a partir de los datos validados.

    Ejemplo de uso:
    ```python
    # Crear una nueva orden
    serializer = OrderSerializer(data={'product': 1, 'quantity': 3, 'status': 'pendiente'})
    if serializer.is_valid():
        order = serializer.save()
    ```

    """
    class Meta:
        model = Order
        fields = '__all__'

    
        """
        Crea una nueva orden a partir de los datos validados.

        Args:
            validated_data (dict): Los datos validados para crear la orden.

        Returns:
            Order: La orden creada.

        """
    def create(self, validated_data):
        product = validated_data.get('product')
        quantity = validated_data.get('quantity')
        
        if product.available and product.quantity >= quantity:
            # Actualizar la cantidad disponible
            product.quantity -= quantity
            product.save()

            # Crear la orden
            return Order.objects.create(**validated_data)
        else:
            raise serializers.ValidationError("Producto no disponible o cantidad insuficiente.")


class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    Serializador para el registro de usuarios

    Campos:
    - username: Nombre de usuario.
    - email: Correo electrónico.
    - password: Contraseña (solo lectura).
    - first_name: Nombre de usuario.
    - last_name: Apellido de usuario.
    - date_joined: Fecha de registro de usuario.

    """
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'date_joined')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        """
        Crea un nuevo usuario en la base de datos con los datos proporcionados.

        Args:
        - validated_data (dict): Datos validados del usuario a crear.

        Returns:
        - User: El usuario recién creado.

        """
        first_name = validated_data.get('first_name')
        last_name = validated_data.get('last_name')
        
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=first_name,
            last_name=last_name,
            date_joined=timezone.now
        )
        return user


class UserSerializer(serializers.ModelSerializer):
    """
    Serializador para usuarios

    Campos:
    - Todos los campos del usuario.

    """
    class Meta:
        model = User
        fields = '__all__'

class ProductSerializers(serializers.ModelSerializer):
    """
    Serializador para productos.

    Campos:
    - Todos los campos de productos.

    """
    class Meta:
        model = Product
        fields = '__all__'

class DeliveryPersonSerializer(serializers.ModelSerializer):
    """
    Serializador para repartidores.

    Campos:
    - Todos los campos de repartidores.

    """
    class Meta:
        model = DeliveryPerson
        fields = '__all__'

class OrderHistorySerializer(serializers.ModelSerializer):
    """
    Serializador para el historial de pedidos.

    Campos:
    - Todos los campos del historial de pedidos.

    """
    class Meta:
        model = OrderHistory
        fields = '__all__'