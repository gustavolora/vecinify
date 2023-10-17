from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from .serializers import StoreSerializer, ProductSerializers, DeliveryPersonSerializer,UserRegistrationSerializer, OrderHistorySerializer, UserSerializer
from .models import Store, Product, DeliveryPerson, OrderHistory
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated


class CustomLoginView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        # Realiza la autenticación del usuario
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user_id': user.id})
        return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)


# añadiendo vistas para los serializadores
class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class StoreView(viewsets.ModelViewSet):
    serializer_class = StoreSerializer
    queryset = Store.objects.all()


class ProductView(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializers
    queryset = Product.objects.all()
    http_method_names = ['put', 'patch', 'post', 'delete']

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    queryset = User.objects.all()

class DeliveryPersonView(viewsets.ModelViewSet):
    serializer_class = DeliveryPersonSerializer
    queryset = DeliveryPerson.objects.all()


class OrderHistoryView(viewsets.ModelViewSet):
    serializer_class = OrderHistorySerializer
    queryset = OrderHistory.objects.all()
