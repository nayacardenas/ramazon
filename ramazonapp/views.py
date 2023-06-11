from django.shortcuts import render

# Create your views here.
def viewIndex(request):
    return render(request,'menu.html')

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