from django.contrib import admin
from .models import *
class Shoppostadmin(admin.ModelAdmin):
    list_diaplay = ['photo','title']
admin.site.register(Shoppost,Shoppostadmin)

