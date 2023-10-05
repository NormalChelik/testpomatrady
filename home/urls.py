from django.urls import path

from .views import *

urlpatterns = [
    path('', home),
    path('test1/', test1, name='test1'),
    path('test2/', test2, name='test2'),
    path('prez1/', pdf_view_1, name='prez1'),
    path('prez2/', pdf_view_2, name='prez2'),
]