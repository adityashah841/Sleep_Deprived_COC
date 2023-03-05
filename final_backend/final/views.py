from rest_framework import status
from django.shortcuts import render
from .rec import recommendation
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import date, datetime

def calculateAge(birthDate):
    today = date.today()
    age = today.year - birthDate.year -((today.month, today.day) < (birthDate.month, birthDate.day))
 
    return age

# Create your views here.
@api_view(['POST'])
def test(request):
    user_id = request.data.get('user_id')
    final = recommendation(user_id)
    data = {}
    for i in final:
        dt = {}
        dt['name'] = i.name
        dob = i.dob
        age = calculateAge(datetime.strptime(dob.split("T")[0], "%Y-%m-%d"))
        dt['age'] = age
        dt['gender'] = i.gender
        dt['height'] = i.height
        dt['is_habit_drink'] = i.is_habit_drink
        dt['is_habit_smoke'] = i.is_habit_smoke
        dt['is_verified'] = i.is_verified
        dt['what_to_find'] = i.what_to_find
        dt['who_to_date'] = i.who_to_date
        dt['is_subscribed'] = i.is_subscribed
        data[f'{i.id}'] = dt

    return Response(data, status=status.HTTP_200_OK)