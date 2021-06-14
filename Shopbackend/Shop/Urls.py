from django.urls import path
from .import views

urlpatterns = [
    path('Login',views.Login),
    path('Register',views.Register),
    path('shopcreate',views.Shopost),
    path('update/<int:id>',views.Shopupdate),
    path('delete/<int:id>',views.Shopdelete),
    path('viewdata',views.shopviewid),
    path('alldata',views.shopallview)
]