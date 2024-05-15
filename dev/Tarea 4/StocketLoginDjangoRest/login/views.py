from django.shortcuts import render, redirect
import json

times = 0

def login(request):
    global times
    print('Login Page Opened!')
    times += 1
    if request.path == '/login/signin/':
        report_loc = '../signin/'
    else:
        report_loc = 'signin/'
    return render(request, 'login.html', {'loc': report_loc, 'error': ''})

def signin(request):
    print('Login Request Made!')
    print('Reading Data from JSON')
    with open('user_data.json') as json2:
        data = json.load(json2) 
        l1 = data['u_data'][0]
        emails = list(l1.keys())
        passwords = list(l1.values())
    print('Read data from JSON')

    global times
    times = times + 1
    if request.path == '/login/signin/':
        report_loc = '../signin/'
    else:
        report_loc = 'signin/'
    email = request.POST['email']
    password = request.POST['password']
    
    if email in emails:
        if passwords[emails.index(email)] == password:
            times = 0
            print('Logged in User, redirecting to main page')
            # Aquí es donde redirigimos al usuario a la página principal
            return redirect('main_page')  # Asegúrate de tener una URL llamada 'main_page' definida en tus urls.py
        else:
            print('Email != Password, returning HTTP response')
            return render(request, 'login.html', {'loc': report_loc, 'errorclass': 'alert alert-danger', 'error': 'El correo electrónico o la contraseña no coinciden. No tiene permisos para ingresar'})
    else:
        print('Account does not exist, returning HTTP response')
        return render(request, 'login.html', {'loc': report_loc, 'errorclass': 'alert alert-danger', 'error': 'Sorry. No such account exists. Consider signing up!'})

def main_page(request):

    return render(request, "admin/plantilla/AdminLTE-3.2.0/index.html") # pagina principal

def chatperfil(request):

    return render(request, "chatperfil.html")
