from django.contrib.auth.hashers import make_password
from rest_framework.permissions import IsAuthenticated

from  .import models
from rest_framework import status
from rest_framework.authtoken.admin import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .ShopSerilizer import UserSerializer, ShoppostSerializer


@api_view(['POST'])
def Login(request):
    try:
        data=request.data
        password = data['password']
        username = data['username']
        email = data['email']
        userdata = User.objects.get(username=username,email=email)
        if userdata.check_password(password):
            token = RefreshToken.for_user(userdata)
            user = UserSerializer(userdata).data
            user['token']=str(token.access_token)
            return Response(data=user,status=status.HTTP_200_OK)
        else:
            massage = {'detail': "Dude User with this password dosenot exist"}
            return Response(massage, status=status.HTTP_401_UNAUTHORIZED)
    except:
        message = {'detail': "Dude User with this username or password doesnot exist"}
        return Response(message, status=status.HTTP_401_UNAUTHORIZED)
@api_view(['POST'])
def Register(request):
    password = request.data['password']
    serializer = UserSerializer(data={**request.data,'password':make_password(password)})
    if serializer.is_valid():
        serializer.save()
        user = User.objects.last()
        token = RefreshToken.for_user(user)
        serializer1 = UserSerializer(user).data
        serializer1['token']=str(token.access_token)
        return Response(data=serializer1,status=status.HTTP_200_OK)
    else:
        return Response(data=serializer.errors, status=400)
@api_view(['POST'])
def Shopost(request):
    shopdata = ShoppostSerializer(data=request.data)
    if shopdata.is_valid():
        shopdata.save()
        shopcreate = models.Shoppost.objects.last()
        responseshop = ShoppostSerializer(shopcreate).data
        return Response(data=responseshop,status=status.HTTP_201_CREATED)
    else:
        return Response(data=shopdata.errors,status=status.HTTP_400_BAD_REQUEST)
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def Shopupdate(request,id):
    shopdata = models.Shoppost.objects.get(user=request.user.id,id=id)
    shopserilizer = ShoppostSerializer(data=request.data, instance=shopdata)
    if shopserilizer.is_valid():
        shopserilizer.save()
    else:
        return Response(shopserilizer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(data=shopserilizer.data,status=status.HTTP_200_OK)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def Shopdelete(request,id):
    shopdata = models.Shoppost.objects.get(user=request.user.id,id=id)
    shopdata.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def shopviewid(request):
    shopdata = models.Shoppost.objects.filter(user=request.user.id)
    shopserilizer = ShoppostSerializer(shopdata,many=True).data
    return Response(data=shopserilizer,status=status.HTTP_202_ACCEPTED)
@api_view(['GET'])
def shopallview(request):
    shopdata = models.Shoppost.objects.all()
    shopserilizer = ShoppostSerializer(shopdata,many=True).data
    return Response(data=shopserilizer,status=status.HTTP_202_ACCEPTED)


