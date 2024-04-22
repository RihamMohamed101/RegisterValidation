

let formRegister = document.getElementById('formRegister');
let data = [];

if (data == null) {
    data = JSON.parse(localStorage.userData);
}

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();

    let nam = document.getElementById('name');
    let mail = document.getElementById('mail');
    let pass = document.getElementById('pass');
    
    if (nam.value == '' || mail.value == '' || pass.value == '')
    {
        let err = document.getElementById('error');
        err.innerHTML = 'invalid input ';
    }

    else
    { 

        let userData = {
            nam: nam.value,
            mail: mail.value, 
            pass : pass.value ,
        }

        data.push(userData);
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(data);
     }

})



