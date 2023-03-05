from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Person

User = get_user_model
class UserSerializer1(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'email']

class UserSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'bio', 'college', 'country', 'createdAt', 'dob', 'email', 'face_detection_probabilities', 'gender', 'height', 'insta_username', 'interests', 'is_habit_drink', 'is_habit_smoke', 'is_verified', 'mobile', 'name', 'status', 'type', 'updatedAt', 'verified_at', 'what_to_find', 'who_to_date', 'is_subscribed']