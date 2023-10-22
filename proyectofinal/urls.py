from django.contrib import admin
from django.urls import path
from django.urls import path, include
from django.conf.urls import handler500, handler404, handler403
from store.views import Handler500view, handler404notfound

urlpatterns = [
    path('admin/', admin.site.urls),
     path('', include('store.urls')),

]

handler400 = handler404notfound
handler500 = Handler500view.as_error_view()