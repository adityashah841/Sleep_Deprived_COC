from django.shortcuts import render
from .rec import recommendation
from django.http import HttpResponse

# Create your views here.
def test(request):
    final = recommendation(1)
    return HttpResponse("Hello")