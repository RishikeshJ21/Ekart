"use strict";

var submitBtn = document.querySelector(".submit-btn");
var name = document.querySelector("#name") || null;
var uname = document.querySelector("#uname") || null;
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var tac = document.querySelector("#terms-and-condition") || null;
submitBtn.addEventListener('click', function () {
  if (name != null) {
    if (name.value.length) {
      showAlert('Enter the your Name');
    } else if (!uname.value.length) {
      showAlert('please enter Username');
    } else if (!email.value.length) {
      showAlert('please enter Email');
    } else if (password.value.length < 8) {
      showAlert('password should be 8 letters long!!');
    } else if (!tac.checked) {
      showAlert('you must agree to terms and condition!!');
    } else {
      loader.style.display = 'block';
      sendData("../signup/signup.html", {
        name: name.value,
        uname: uname.value,
        email: email.value,
        password: password.value,
        tac: tac.checked
      });
    }
  } else {
    if (!email.value.length || !password.value.length) {
      showAlert('fill the input');
    } else {
      sendData('../logins/login.html', {
        email: email.value,
        password: password.value
      });
    }
  }
});