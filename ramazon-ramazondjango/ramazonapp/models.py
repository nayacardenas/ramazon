from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre = models.CharField(max_length=100, null= False)
    apellido = models.CharField(max_length=100, null= False)
    correo = models.CharField(max_length=100, null= False)

    def __str__(self) :
        return self
