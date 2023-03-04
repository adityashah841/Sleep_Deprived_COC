from django.urls import path
from .views import SendOTP, VerifyOTP, RegisterEmail

urlpatterns = [
    path('send-otp/', SendOTP.as_view(), name='send-otp'),
    path('verify-otp/', VerifyOTP.as_view(), name='verify-otp'),
    path('register/', RegisterEmail.as_view(), name='register'),
]