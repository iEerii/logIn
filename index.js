document.addEventListener('DOMContentLoaded', () => {
    const buttonMedia = document.querySelectorAll('[data-redirect]');
    const userNameInput = document.getElementById('userName');
    const passwordInput = document.getElementById('password');
    const logInBtn = document.getElementById('logIn');

    const userData = {
        userName: '',
        password: ''
    }
    
    buttonMedia.forEach((button) => {
        button.addEventListener('click', (e) => {
            const redirectTo = e.target.dataset.redirect;
            
            switch(redirectTo) {
                case 'facebook':
                    window.open('https://www.facebook.com');
                    break;
                case 'discord':
                    window.open('https://discord.com');
                    break;
                case 'linkedin':
                    window.open('https://www.linkedin.com')
            }
        });
    });

    const changeData = (e) => {
        userData[e.target.name] = e.target.value;
    }

    userNameInput.addEventListener('input', changeData);

    passwordInput.addEventListener('input', changeData);

    logInBtn.addEventListener('click', () => {
        if(!userData.userName || !userData.password){
            alert('Ingresa tus datos para continuar');
        } else {
            alert('Gracias por escribir tus datos, en breve entrarás a tu feed');
        }
    });
    
});