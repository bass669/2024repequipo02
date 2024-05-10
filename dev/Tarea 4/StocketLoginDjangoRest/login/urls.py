from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.login),
    path('signin/', views.signin),
    path('main_page', views.main_page, name="main_page"),
    path('chatperfil', views.chatperfil, name="chatperfil"),
]