from django.urls import path, include
from store import views
from rest_framework import routers
from store import views
from rest_framework.documentation import include_docs_urls
from .views import CustomLoginView
from .views import UserRegistrationView


router = routers.DefaultRouter()
router.register('Store',views.StoreView,'store')
router.register('Product', views.ProductView)
router.register('DeliveryPerson', views.DeliveryPersonView)
router.register('OrderHistory', views.OrderHistoryView)
router.register('User', views.UserView)

urlpatterns = [
        path('api/v1/',include(router.urls), name="api-v1"),
        path('docs/', include_docs_urls(title="Vecinify API")),
        path('api/registro/', UserRegistrationView.as_view(), name='registro'),
        path('api/login', CustomLoginView.as_view(), name='login'),

]
