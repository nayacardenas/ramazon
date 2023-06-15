from django.shortcuts import render
from django.contrib.auth.models import User
from django.shortcuts import HttpResponse,redirect

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

def viewRegistro(request):
        if request.method == 'GET':
            return render(request,'registro.html')
        else:

            if  request.POST['password1'] == request.POST['password2']:
            
                try:
                    user = User.objects.create_user(correo = request.POST['reg-correo'],password= request.POST['reg-pass']) 
                    user.save()
                    print("usuario creado correctamente")
                        #return redirect('login')
                
            
                
                except:
        

                    return HttpResponse('usuario ya existe')
            return HttpResponse('contraseñas no coinciden')


