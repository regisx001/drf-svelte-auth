from django.urls import path
from . import views

urlpatterns = [
    path("", views.ListCreateUser.as_view())
]
