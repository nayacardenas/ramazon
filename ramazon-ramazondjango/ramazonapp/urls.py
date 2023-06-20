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

    path('create/',views.create, name = 'create'),
    path('panelAdmin/',views.read, name='read'),
    path('update/<str:pk>',views.update, name='update'),
    path('delete/<str:pk>',views.delete, name='delete')
   







]