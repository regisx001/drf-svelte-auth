from rest_framework import generics

from .models import User
from .serializers import UserSerializer, UserProfileSerializer


class CreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = []


class RetrieveUser(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = "username"
