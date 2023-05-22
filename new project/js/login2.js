const login = document.querySelector('#login')
login.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.querySelector('#usuario').value
    const email = document.querySelector('#correo').value
    const password = document.querySelector('#pass').value
    const Users = JSON.parse(localStorage.getItem('users')) || []

    const validUser = Users.find(user => user.name === name && user.email === email && user.password === password)
    if(!validUser){
        return alert("datos incorrectos")
    }
    else{
        window.location.href="menu.html"
    }
   
})