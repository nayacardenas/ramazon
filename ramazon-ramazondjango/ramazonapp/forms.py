from django import forms
from .models import *
from django.core.validators import EmailValidator

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('id_product','nombre','descripcion','cantidad')

class UsuarioForm(forms.ModelForm):
    class meta:
        model = Usuario
        fields = ('rut','nombre','apellido','correo')


class ContactForm(forms.Form):
    nombre = forms.CharField(label='Nombre', max_length=100)
    email = forms.EmailField(label='Email', validators=[EmailValidator()])
    asunto = forms.CharField(label='Asunto', max_length=100)
    mensaje = forms.CharField(label='Mensaje', widget=forms.Textarea)




