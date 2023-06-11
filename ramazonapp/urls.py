from django.urls import path
from . import views

urlpatterns = [
    path('', views.viewIndex, name='index'),
    path('sobreNosotros',views.viewAboutus, name='sobreNosotros'),
    path('formulario',views.viewForm, name='formulario'),
    path('tarjeta/',views.viewCard, name='tarjeta'),
    path('libros',views.viewBooks, name='libros'),


]