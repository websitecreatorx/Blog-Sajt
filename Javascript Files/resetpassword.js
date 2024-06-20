const ResetPasswordForm = document.getElementById('resetpassword-form');

function resetPassword(){
    alert('Password Change Successful');
    ResetPasswordForm.setAttribute('action', '/HTML Files/login.html')
}