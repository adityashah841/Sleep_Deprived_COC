import random
from django.conf import settings
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

User = get_user_model()

class RegisterEmail(APIView):
    
    def register_email(self, email):
        user = User.objects.create_user(email=email)
        return user
    
    def post(self, request):    
        email = request.data.get('email')
        if email is None:
            return JsonResponse({'error': 'Email is required'})
        
        email = self.register_email(email)
        if email:
            return Response({'detail': 'Email registered successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Email registration unsuccessful'}, status=status.HTTP_400_BAD_REQUEST)


class SendOTP(APIView):
    """
    Send an OTP code to the user's email address.
    """
    def post(self, request):
        email = request.data.get('email')
        if email:
            # Generate OTP code
            otp = str(random.randint(100000, 999999))
            
            # Save the OTP code to the user's session
            request.session['otp'] = otp
            
            # Send the OTP code to the user's email address
            subject = 'OTP Verification'
            message = f'Your OTP code is {otp}'
            from_email = settings.DEFAULT_FROM_EMAIL
            recipient_list = [email]
            send_mail(subject, message, from_email, recipient_list)
            
            return Response({'detail': 'OTP code sent'}, status=status.HTTP_200_OK)
        else:   
            return Response({'error': 'Please provide an email address'}, status=status.HTTP_400_BAD_REQUEST)

class VerifyOTP(APIView):
    """
    Verify the user's identity using an OTP code.
    """
    def post(self, request):
        email = request.data.get('email')
        otp = request.data.get('otp')
        
        if email and otp:
            # Check if the OTP code matches the one saved in the user's session
            if request.session.get('otp') == otp:
                # Clear the OTP code from the user's session
                del request.session['otp']
                
                # Get or create the user based on their email address
                user, created = User.objects.get_or_create(email=email)
                
                # Serialize the user object
                serializer = UserSerializer(user)
                
                # Return the serialized user object
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid OTP code'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Please provide an email address and OTP code'}, status=status.HTTP_400_BAD_REQUEST)