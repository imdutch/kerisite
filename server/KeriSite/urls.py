from django.conf.urls import url
from django.views.generic import TemplateView
from . import views
from django.conf.urls.static import static

urlpatterns = [
  url(r'^$',views.Home,name="Home"),
]
