from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('enhancedadminoriginal/', views.crud, name='enhanced'),
    
]