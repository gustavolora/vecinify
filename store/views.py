from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token


def login(request):
    if request.method=='POST':
        user = request.POST['name']
        
