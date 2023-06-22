from django.urls import path
from . import views

urlpatterns = [
    path('', views.viewIndex, name='index'),
    path('sobreNosotros/',views.viewAboutus, name='sobreNosotros'),
    path('formulario',views.viewForm, name='formulario'),
    path('tarjeta/',views.viewCard, name='tarjeta'),
    path('libros/',views.viewBooks, name='libros'),
    path('login/',views.viewLogin,name = 'login'),
    path('registro/',views.viewRegistro, name='registro'),
    path('celulares/',views.verCelus, name='celulares'),
    path('notebooks/',views.verNotebooks, name='compus'),
    path('muebles/',views.verMuebles, name='muebles'),
    path('cocina/',views.verCocina, name='cocina'),
    path('celu1/',views.viewCelu1, name='celu1'),
    path('celu2/',views.viewCelu1, name='celu2'),
    path('celu3/',views.viewCelu1, name='celu3'),
    path('celu4/',views.viewCelu1, name='celu4'),
    path('celu5/',views.viewCelu1, name='celu5'),
    path('celu6/',views.viewCelu1, name='celu6'),
    path('celu7/',views.viewCelu1, name='celu7'),
    path('celu8/',views.viewCelu1, name='celu8'),
    path('celu9/',views.viewCelu1, name='celu9'),
    path('note1/',views.viewNote1, name='note1'),
    path('note2/',views.viewNote1, name='note2'),
    path('note3/',views.viewNote1, name='note3'),
    path('note4/',views.viewNote1, name='note4'),
    path('note5/',views.viewNote1, name='note5'),
    path('note6/',views.viewNote1, name='note6'),
    path('note7/',views.viewNote1, name='note7'),
    path('note8/',views.viewNote1, name='note8'),
    path('note9/',views.viewNote1, name='note9'),
    

    path('create/',views.create, name = 'create'),
    path('panelAdmin/',views.read, name='read'),
    path('update/<str:pk>',views.update, name='update'),
    path('delete/<str:pk>',views.delete, name='delete')
   







]