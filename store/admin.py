from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from store.models import NewUser

from .models import NewUser

admin.site.register(NewUser, UserAdmin)