from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from django.views.generic import TemplateView
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from .serializers import *
from .models import Store, Product, DeliveryPerson, OrderHistory, Order, DeliveryHistory
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone


# Handler error for 404 and 500 error
def handler404notfound(request, exc):
    return render(request, '404.html' ,{'exception':exc }, status=404)

class Handler500view(TemplateView):
    template_name = "500.html"

    @classmethod
    def as_error_view(cls):

        v = cls.as_view()
        def view(request):
            r = v(request)
            r.render()
            return r
        return view

class CategoryView(viewsets.ModelViewSet):
    """
    
    Vista personalizada la cual permite ver la categoria de los productos
    Metodos soportados:
    - GET: permite visualizar todas las categorias
    - POST: permite agregar categorias nuevas
    - PUT: Permite actualizar una categoria existente
    - PATCH: Permite actualizar una categoria existente
    """
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    http_method_names = ['get','post','put' 'patch']

class OrderItemView(viewsets.ModelViewSet):
    serializer_class = OrderItemSerializer
    queryset = OrderItem.objects.all()
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']

class DeliveryHistoryView(viewsets.ModelViewSet):
    """ 

    Vista para poder consultar y listar el historial de pedidos realizados
    esta vista es de solo lectura
    Metodos soportados:
    - GET: Consultar el historial de pedidos
    
    """
    serializer_class = DeliveryHistorySerializer
    queryset = DeliveryHistory.objects.all()
    #queryset = DeliveryHistory.objects.all()
    http_method_names = ['get']



class CustomLoginView(ObtainAuthToken):
    """

    Vista personalizada para el inicio de sesión de usuarios.

    Esta vista personalizada se utiliza para autenticar a los usuarios y generar un token de autenticación.

    Métodos permitidos:
    - POST: Iniciar sesión y obtener un token de autenticación.
    """

    def post(self, request, *args, **kwargs):
        """

        Iniciar sesión y obtener un token de autenticación.
        Para poder realizar peticiones

        :param request: La solicitud HTTP.
        :type request: HttpRequest
        :return: Token de autenticación y el ID de usuario si la autenticación es exitosa.
        :rtype: JsonResponse
        """
        # Realiza la autenticación del usuario
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user_id': user.id})
        return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import Order, OrderItem
from .serializers import OrderSerializer, OrderItemSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']

    @action(detail=True, methods=['post'])
    def assign_delivery_person(self, request, pk=None):
        order = self.get_object()
        if order.status == 'pendiente' and request.user.is_delivery_person and request.user.delivery_person.available:
            order.delivery_person = request.user.delivery_person
            order.status = 'preparando'
            order.save()
            serializer = OrderSerializer(order)
            return Response(serializer.data)

        return Response({'error': 'No se puede asignar el pedido'}, status=status.HTTP_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            order = serializer.save()
            order_items_data = self.request.data.get('order_items', [])

            for item_data in order_items_data:
                item_data['order'] = order.id
                OrderItem.objects.create(**item_data)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'])
    def update_order_status(self, request, pk=None):
        order = self.get_object()
        new_status = request.data.get('status')
        if new_status in ('entregado', 'cancelado'):
            if order.status == 'pendiente':
                order.status = new_status
                order.save()

                delivery_person = request.user.delivery_person
                delivery_history_data = {
                    'order': order.id,
                    'user': request.user.id,
                    'date': timezone.now(),
                    'status': new_status
                }

                if delivery_person:
                    delivery_history_data['delivery_person'] = delivery_person.id

                delivery_history_serializer = DeliveryHistorySerializer(data=delivery_history_data)

                if delivery_history_serializer.is_valid():
                    delivery_history_serializer.save()
                    serializer = OrderSerializer(order)
                    return Response(serializer.data)
                else:
                    return Response(delivery_history_serializer.errors, status=status.HTTP_BAD_REQUEST)
            else:
                return Response({'error': 'La orden no está en estado pendiente'}, status=status.HTTP_BAD_REQUEST)
        else:
            return Response({'error': 'Estado no válido'}, status=status.HTTP_BAD_REQUEST)


class UserView(viewsets.ModelViewSet):
    """

    Vista para gestionar usuarios.

    Esta vista permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en usuarios.

    Métodos permitidos:
    - GET: Obtener la lista de usuarios.
    - PATCH: Crear un nuevo usuario.
    - PUT: usuario existente.
    
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()
    http_method_names = ['get', 'patch', 'put']


class StoreView(viewsets.ModelViewSet):
    """

    Vista para gestionar tiendas.

    Esta vista permite realizar operaciones CRUD en tiendas.

    Métodos permitidos:
    - GET: Obtener la lista de tiendas.
    - POST: Crear una nueva tienda.
    - PUT/PATCH: Actualizar una tienda existente.
    """
    serializer_class = StoreSerializer
    queryset = Store.objects.all()
    http_method_names = ['get', 'patch', 'post', 'put']



class ProductView(viewsets.ModelViewSet):
    """

    Vista para gestionar productos.

    Esta vista permite realizar operaciones CRUD en productos. Requiere autenticación.

    Métodos permitidos:
    - GET: Obtener la lista de productos.
    - POST: Crear un nuevo producto.
    - PUT/PATCH: Actualizar un producto existente.
    
    """
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializers
    queryset = Product.objects.all()
    http_method_names = ['get', 'patch', 'post', 'put']


class UserRegistrationView(generics.CreateAPIView):
    """

    Vista para registrar nuevos usuarios.

    Esta vista permite a los usuarios registrarse proporcionando 
    su nombre de usuario, correo electrónico y contraseña.

    Métodos permitidos:
    - POST: Crear un nuevo usuario.
    """
    serializer_class = UserRegistrationSerializer
    queryset = User.objects.all()
    http_method_names = ['post']


class DeliveryPersonView(viewsets.ModelViewSet):
    """
    Vista para gestionar personal de entrega.

    Esta vista permite realizar operaciones CRUD en personas de entrega.

    Métodos permitidos:
    - GET: Obtener la lista de personas de entrega.
    - POST: Crear una nueva persona de entrega.
    - PUT/PATCH: Actualizar una persona de entrega existente.
    """
    serializer_class = DeliveryPersonSerializer
    queryset = DeliveryPerson.objects.all()
    http_method_names = ['get', 'patch', 'post', 'put']


class OrderHistoryView(viewsets.ModelViewSet):
    """

    Vista para gestionar historial de pedidos.

    Esta vista permite realizar operaciones CRUD en el historial de pedidos.

    Se debe Estar autenticado para poder realizar operaciones en esta vista

    Métodos permitidos:
    - GET: Obtener el historial de pedidos.
    - POST: Crear un nuevo registro en el historial de pedidos.
    - PUT/PATCH: Actualizar un registro existente en el historial de pedidos.
    - DELETE: Eliminar un registro en el historial de pedidos.

    """
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = OrderHistorySerializer
    queryset = OrderHistory.objects.all()
    http_method_names = ['get', 'patch', 'post', 'put']

    def perform_create(self, serializer):
        user = self.request.user
        order_id = self.request.data.get('order')
        delivery_person_id = self.request.data.get('delivery_person')

        order = Order.objects.get(id=order_id)
        delivery_person = DeliveryPerson.objects.get(id=delivery_person_id)

        serializer.save(user=user, order=order,
                        delivery_person=delivery_person)
