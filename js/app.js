var openLogin = document.querySelector('#login');
var closeLogin = document.querySelector('.form_login i');
var openRegister = document.querySelector('#register');
var closeRegister = document.querySelector('.form_register i');


var modal_login = document.querySelector('.modal_login');
var modal_Register = document.querySelector('.modal_register');

var RegesterinLogin = document.querySelector('#Reg');

function ModalLogin(){
    modal_login.classList.toggle('hide')
}

function ModalRegister(){
    modal_Register.classList.toggle('hide')
}

function Register(){
    modal_login.classList.toggle('hide')
    modal_Register.classList.toggle('hide')
}


openLogin.addEventListener('click', ModalLogin)
closeLogin.addEventListener('click', ModalLogin)
openRegister.addEventListener('click',ModalRegister)
closeRegister.addEventListener('click',ModalRegister)

RegesterinLogin.addEventListener('click',Register)



//Back top page
const backToTopBtn = document.getElementById("backToTop");

// Hiển thị nút khi cuộn xuống
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Di chuyển mượt lên đầu trang khi nhấp vào nút
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

