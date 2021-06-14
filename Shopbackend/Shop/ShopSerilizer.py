from rest_framework import serializers
from rest_framework.authtoken.admin import User
from rest_framework.validators import UniqueValidator
from . import models

class ShoppostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Shoppost
        fields = ['id','photo','price','title','quantity','created_at','user']
class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True, validators=[
        UniqueValidator(queryset=User.objects.all(), message="username aready exist")])
    email = serializers.EmailField(required=True,validators=[
        UniqueValidator(queryset=User.objects.all(), message="email aready exist")])
    password = serializers.CharField(min_length=8, required=True, write_only=True)
    is_staff = serializers.BooleanField(default=True)
    class Meta:
        model = User
        fields = ["id","username", "email", "password","is_staff"]
