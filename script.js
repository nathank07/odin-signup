const password = document.querySelectorAll('.password');
const passwordLabel = document.querySelector('.error');
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    if(password[0].value != password[1].value){
        password.forEach(box => {
            box.style.borderColor = "red";
        });
        passwordLabel.style.opacity = 1;
    }
    else{
        password.forEach(box => {
            box.style.borderColor = "#b2b3b4";
        });
        passwordLabel.style.opacity = 0;
    }
});

