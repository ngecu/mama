# todos/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('api/', views.ListToTutorial.as_view()),
    path('api/<int:pk>/', views.DetailToTutorial.as_view()),
    path('api/archives/', views.ListToArchive.as_view()),
    path('api/archives/<int:pk>/', views.DetailToArchive.as_view()),

    path("",views.homepage,name="homepage"),
    path('tutorial_series/<str:pk>/',views.tutorial,name="tutorial_series"),
    path("likecomment/", views.likePost, name='likepost'),
    path("dislikecomment/", views.dislikePost, name='dislikepost'),
    path("subscribe/", views.subscribe, name='subscribe'),
    path("comment/<str:pk>/", views.comment, name='comment'),




]