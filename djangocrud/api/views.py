from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import MovieSerializer,MovieMiniSerializer
from .models import Movie
from rest_framework.response import Response

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    
    def list(self,request,*args,**kwargs):
    	movies = Movie.objects.all()
    	serializer = MovieMiniSerializer(movies,nany=True)
    	return  Response(serializer.data)