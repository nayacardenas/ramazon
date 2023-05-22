const registro = document.querySelector('#Registro')
registro.addEventListener('submit',(e)=>{
    e.preventDefault();
   
   
    const name = document.querySelector('#reg-name').value
    const apellido = document.querySelector('#reg-apellidos').value
    const email = document.querySelector('#reg-correo').value
    const password = document.querySelector('#reg-pass').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('el usuario ya esta registrado')
    }
    if(!validarCorreo(email)){
        return alert('por favor ingrese un correo valido')
    }
    Users.push({name: name, apellido: apellido, email: email, password: password})
    localStorage.setItem('users',JSON.stringify(Users))
    alert('usuario registrado exitosamente')
    console.log('el usuario ha sido registrado');
    
    function validarCorreo(correo){
        var patronCorreo = /@+.+com/;
        return patronCorreo.test(correo);
    }
    window.location.href="login.html"
    
    
});