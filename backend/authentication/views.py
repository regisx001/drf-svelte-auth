from rest_framework import generics
from rest_framework.views import APIView

from rest_framework.response import Response

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


class RetreiveUserData(APIView):

    def post(self, request):
        user = User.objects.filter(id=request.user.id).first()
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=200)
