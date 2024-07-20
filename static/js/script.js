// script.js

function togglePassword(fieldId) {
    var passwordInput = document.getElementById(fieldId);
    var eyeIcon = passwordInput.nextElementSibling;
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '&#128065;'; // Unicode for eye with slash icon
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '&#128065;'; // Unicode for eye icon
    }
}
