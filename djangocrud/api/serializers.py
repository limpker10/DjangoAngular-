from django.contrib.auth.models import User
from rest_framework import serializers
from .model import Movie


class MovieSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Movie
        fields = ['url', 'username', 'email', 'groups']

