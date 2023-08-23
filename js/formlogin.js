
var Register = document.getElementById('btn-register');
const Username = document.getElementById('username');
const Password = document.getElementById('password');
const Hoten = document.getElementById('fullname');
const Phonenumber = document.getElementById('phone');
const Email = document.getElementById('email');
const Note = document.querySelector('textarea');


function setError(element, message) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = message;
    // element.style.backgroundColor = '#ffc022';
    element.classList.add("error-color");
}

function clearError(element) {
    const errorElement = element.nextElementSibling;
    errorElement.textContent = '';
    element.style.backgroundColor = 'white';
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function checkgender(){
    var maleRadio = document.getElementById("gender_male");
    var femaleRadio = document.getElementById("gender_female");
    var Radio_input = document.getElementsByClassName('radio_input');
    var isMaleChecked = maleRadio.checked;
    var isFemaleChecked = femaleRadio.checked;

    // Kiểm tra xem người dùng đã chọn một trong hai giới tính hay chưa
    if (!isMaleChecked && !isFemaleChecked) {
        //Radio_input[0].style.backgroundColor = 'yellow'; // Đổi màu nền của phần tử có lớp "radio_input"
        Radio_input[0].classList.add("error-color");
        setError(Radio_input[0], 'Vui lòng chọn giới tính');
        return false;
    } else {
        clearError(Radio_input[0]);
    }
}



function checkhobby(){
    var hobby = document.getElementsByClassName('fav_input');
    var checkboxes = document.getElementsByClassName("fav");
    var checkedCount = 0;

    // Count the number of checked checkboxes
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }

    // Check if exactly one checkbox is checked
    if (checkedCount < 1) {
        //hobby[0].style.backgroundColor = 'yellow'; // Đổi màu nền của phần tử có lớp "radio_input"
        hobby[0].classList.add("error-color");
        setError(hobby[0], 'Sở thích chưa chọn');
        return false;
    }else{
        clearError(hobby[0]);
    }
}



    var noteInput = document.getElementById('noteInput');
    var noteError = document.getElementById('note-error');

    function checkNoteLength() {
        const maxLength = 200;
        const noteValue = noteInput.value.trim();

        if (noteValue.length > maxLength) {
            noteError.textContent = 'Ít hơn 200 ký tự: ghi chú';
            noteInput.classList.add("error-color");
            //noteInput.style.backgroundColor = 'yellow';
            return false;
        } else {
            noteError.textContent = '';
            noteInput.style.backgroundColor = 'white';
        }
    }
    noteInput.addEventListener('input', checkNoteLength);


function nationality(){
    
    var nationalitySelect = document.getElementById("national");
    var National_form = document.getElementsByClassName("national_form");
    var selectedNationality = nationalitySelect.value;

    // Check if the user has selected a valid nationality option
    if (selectedNationality === "chonquoctich") {
        //nationalitySelect.style.backgroundColor =  'yellow';
        nationalitySelect.classList.add("error-color"); 
        setError(National_form[0], 'Quốc tịch chưa chọn');
        return false;
    }else{
        nationalitySelect.style.backgroundColor =  'white'; 
        clearError(National_form[0]);
    }
}

function checkValidate() {

    let isValid = true;

    if (Username.value.trim() === '') {
        setError(Username, 'Tên đăng nhập không được để trống');
        isValid = false;
    } else {
        clearError(Username);
    }

    const password = Password.value;
    // Kiểm tra tính hợp lệ của mật khẩu
    if (password.length < 8) {
        setError(Password, 'Mật khẩu phải có ít nhất 8 ký tự');
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        setError(Password, 'Mật khẩu cần ít nhất một chữ thường');
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        setError(Password, 'Mật khẩu cần ít nhất một chữ hoa');
        isValid = false;
    } else if (!/\d/.test(password)) {
        setError(Password, 'Mật khẩu cần ít nhất một số');
        isValid = false;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(password)) {
        setError(Password, 'Mật khẩu cần ít nhất một ký tự đặc biệt');
        isValid = false;
    } else {
        clearError(Password);
    }

    if (Hoten.value.trim() === '') {
        setError(Hoten, 'Họ tên không được để trống');
        isValid = false;
    } else {
        clearError(Hoten);
    }

    if (Phonenumber.value.trim() === '') {
        setError(Phonenumber, 'Số điện thoại không được để trống');
        isValid = false;
    } else {
        clearError(Phonenumber);
    }



    if (Email.value.trim() === '') {
        setError(Email, 'Email không được để trống');
        isValid = false;
    } else if (!validateEmail(Email.value)) {
        setError(Email, 'Email không đúng định dạng');
        isValid = false;
    } else {
        clearError(Email);
    }

    if(checkgender() === false){
        isValid = false;
    }
    if(checkhobby() === false){
        isValid = false;
    }
    if(nationality() === false){
        isValid = false;
    }

    if(checkNoteLength() === false){
        isValid = false;
    }
  

    return isValid;
}

Register.addEventListener('click', function(event) {
    event.preventDefault();
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
});



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

