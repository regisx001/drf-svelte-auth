from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    avatar = models.ImageField(upload_to="avatar/%Y/%m/%d/", blank=True)
    bio = models.TextField(blank=True, null=True)
    REQUIRED_FIELDS = []
