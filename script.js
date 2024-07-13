// General buttons
const login_btn = document.getElementById("log-in_btn");
const register_btn = document.getElementById("register_btn");

const welcome_h1 = document.getElementById("welcome_h1");

// Register modal
const modal_register = document.querySelector(".modal-register");
const usernameRegister_input = document.getElementById("username-register_input");
const passwordRegister_input = document.getElementById("password-register_input");
const confirmPasswordRegister_input = document.getElementById("confirm-password_input");
const input_confirm = document.querySelector(".input-container-confirm");
const modalRegister_btn = document.getElementById("modal-register_btn");
const modalCloseRegister_btn = document.getElementById("modal-closeRegister_btn");

// Login modal
const modal_login = document.querySelector(".modal-login");
const usernameLogin_input = document.getElementById("username-login_input");
const passwordLogin_input = document.getElementById("password-login_input");
const modalLogin_btn = document.getElementById("modal-register_btn");
const modalCloseLogin_btn = document.getElementById("modal-closeLogin_btn");

// Regex
let regex_username = /^[a-zA-Z0-9_.]{4,}$/;
let regex_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

// Open-close register modal
register_btn.onclick=()=>{
    modal_register.style.display="block";
}
modalCloseRegister_btn.onclick=()=>{
    modal_register.style.display="none";
}

// Taking data
let username;
let password;
let confirm_password;

const alertWarn = document.createElement("span");
alertWarn.innerText = "Confirmed password is not match!";
alertWarn.style.display="none";

function userRegister(){
    event.preventDefault();

    username = usernameRegister_input.value;
    password = passwordRegister_input.value;
    confirm_password = confirmPasswordRegister_input.value;

    if(password === confirm_password){
        password = confirm_password;
        alert("Successfully registered!");
        modal_register.style.display="none";
    }else{
        input_confirm.appendChild(alertWarn);
        alertWarn.style.color="red";
        alertWarn.style.display="block";
    }

    if (!regex_username.test(username)) {
        alert('Username must be at least 4 characters long and can only contain letters, numbers, and underscores.');
        return;
    }

    if (!regex_password.test(password)) {
        alert('Password must be at least 6 characters long, contain at least one lowercase letter, one uppercase letter, one number, and one special character.');
        return;
    }


}


// Open-close login modal
login_btn.onclick=()=>{
    modal_login.style.display="block";
}
modalCloseLogin_btn.onclick=()=>{
    modal_login.style.display="none";
}

// Checking login 
function userLogin(){
    event.preventDefault();
    if(usernameLogin_input.value === username && passwordLogin_input.value === password){
        modal_login.style.display="none";
        location.replace("./welcome.html");
    }else{
        alert("Username or password wrong!");
    }
}