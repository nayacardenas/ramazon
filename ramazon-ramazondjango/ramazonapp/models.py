from django.db import models

# Create your models here.

class Usuario(models.Model):
    rut = models.CharField (primary_key = True,max_length=10)
    nombre = models.CharField(max_length=20, null=False)
    apellido = models.CharField(max_length=20,null=False)
    correo = models.EmailField(max_length=100 ,unique=True,null=False)

    def __str__(self) :
        return (f"{self.rut}:{self.nombre}:{self.apellido}:{self.correo}")  
    
    
class Product(models.Model):
    id_product = models.AutoField(primary_key=True,db_column='idProduct')
    nombre = models.CharField(max_length=50,null=False)
    descripcion = models.CharField(max_length=100,null=True)
    cantidad = models.IntegerField(null=False)

    def __str__(self):
        texto = "{0} ({1})"
        return texto.format(self.nombre, self.cantidad)
    
