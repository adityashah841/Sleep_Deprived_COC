from django.urls import path
from .views import test

urlpatterns = [
    path('rec', test, name='rec'),
#     path('send-otp', SendOTP.as_view, name='send-otp'),
#     path('verify-otp', VerifyOTP.as_view, name='verify-otp')
]