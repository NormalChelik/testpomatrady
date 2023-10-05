from django.urls import path

from .views import *

urlpatterns = [
    path('', home),
    path('test1/', test1, name='test1'),
path('test2/', test2, name='test2')
]