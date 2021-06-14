from django.db import models
from datetime import datetime
from rest_framework.authtoken.admin import User

class Shoppost(models.Model):
    photo = models.ImageField(upload_to='photos/%y/%m/%d',blank=True)
    price = models.CharField(max_length=20)
    title = models.CharField(max_length=200)
    quantity = models.CharField(max_length=200)
    created_at = models.DateField(default=datetime.now())
    user = models.ForeignKey(User, on_delete=models.CASCADE)
