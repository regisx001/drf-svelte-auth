from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.CreateUser.as_view()),
    path("users/<str:username>/", views.RetrieveUser.as_view())
]
