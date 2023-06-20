from django import forms
from .models import *

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('id_product','nombre','descripcion','cantidad')

class UsuarioForm(forms.ModelForm):
    class meta:
        model = Usuario
        fields = ('rut','nombre','apellido','correo')

