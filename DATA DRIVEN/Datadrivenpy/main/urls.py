from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path("<single_slug>", views.single_slug, name="single_slug"),

    path("", views.homepage, name="homepage"),

]