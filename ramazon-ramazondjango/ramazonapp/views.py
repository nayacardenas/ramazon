from django.http import Http404
from django.shortcuts import render
from .models import *
from .forms import *



# Create your views here.



def create(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            form = ProductForm()
            context = {'mensaje':"datos guardados",'form':form}
            return render(request,'create.html',context)
        
    else:
        form = ProductForm()
        context = {'form':form}

        return render(request,'create.html',context)
    

def read(request):
    productos = Product.objects.all()
    context = {'productos':productos}
    print("enviando datos")
    return render(request,'panelAdmin.html',context)


def update(request, pk):
    try:
        producto = Product.objects.get(id_product = pk)
        context = {}
        if producto:
            print("encontro producto")
            if request.method == 'POST':
                form = ProductForm(request.POST,instance=producto)
                form.save()
                mensaje = "datos actualizados"
                context = {'producto':producto, 'form':form,'mensaje':mensaje}
                return render(request,'update.html',context)
            else:
                print("no es un post")
                form = ProductForm(instance=producto)
                context = {'producto':producto,'form':form}
                return render(request,'update.html',context)
    except:
        print("algo salio mal")
        productos = Product.objects.all()
        context = {'productos':productos}
        return render(request,'panelAdmin.html')
    

def delete(request, pk):
    productos = Product.objects.all()
    try:
        producto = Product.objects.get(id_product = pk)
        context = {}
        if producto:
            producto.delete()
            print("elimnao ")
            context = {'productos':productos}
            return render(request,'panelAdmin.html',context)
    except:
        print("algo malio sal")
        
        



            

    






def viewIndex(request):
    return render(request,'menu.html')

def verCelus(request):
    return render(request,'celulares.html')

def verMuebles(request):
    return render(request,'muebles.html')

def verNotebooks(request):
    return render(request,'notebook.html')

def verCocina(request):
    return render(request,'cocina.html')


def viewAboutus(request):
    return render(request,'quienes somos .html')

def viewForm(request):
    return render(request,'formulario.html')

def viewCard(request):
    return render(request,'tarjeta.html')

def viewBooks(request):
    return render(request,'libros.html')

def viewLogin(request):
    return render(request,'login.html')

def viewCelu1(request):
    return render(request,'celu1.html')


def viewRegistro(request):
    return render(request,'registro.html')

def viewCelu2(request):
    return render(request,'celu2.html')

def viewCelu3(request):
    return render(request,'celu3.html')

def viewCelu4(request):
    return render(request,'celu4.html')

def viewCelu5(request):
    return render(request,'celu5.html')

def viewCelu6(request):
    return render(request,'celu6.html')

def viewCelu7(request):
    return render(request,'celu7.html')

def viewCelu8(request):
    return render(request,'celu8.html')

def viewCelu9(request):
    return render(request,'celu9.html')

def viewNote1(request):
    return render(request,'note1.html')

def viewNote2(request):
    return render(request,'note2.html')

def viewNote3(request):
    return render(request,'note3.html')

def viewNote4(request):
    return render(request,'note4.html')

def viewNote5(request):
    return render(request,'note5.html')

def viewNote6(request):
    return render(request,'note6.html')

def viewNote7(request):
    return render(request,'note7.html')

def viewNote8(request):
    return render(request,'note8.html')

def viewNote9(request):
    return render(request,'note9.html')