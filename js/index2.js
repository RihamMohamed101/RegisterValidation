


let formLogin = document.getElementById('formLogin');


formLogin.addEventListener('submit', (e) => {
    let x = 1;
    let mail = document.getElementById('mail');
    let pass = document.getElementById('pass');
    
    if ( mail.value == '' || pass.value == '') {
        let err = document.getElementById('error');
        err.innerHTML = 'invalid input ';
    }

    else {
        let LocalDta = localStorage.getItem('userData');
        if (LocalDta) {
            let userinfo = JSON.parse('LocalDta');
            for (let i = 0; i < userinfo.length; i++) {
                if (userinfo[i].mail == mail && userinfo[i].pass == pass)
                {
                    x = 0;
                }

            }
        }
    }

    if (x == 1) e.preventDefault();
})