from django.urls import path
from . import views

urlpatterns = [
    path('rec', views.test, name='rec')
]