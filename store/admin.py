from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Store, Product


admin.site.register(Store)
admin.site.register(Product)






