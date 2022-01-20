// toggle login container
const signupbutton = document.querySelector('.signup-button')
const loginbutton = document.querySelector('.login-button')
const loginModal = document.querySelector('.login-container')
const mainContainer = document.querySelector('.main-container')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const loginOption = document.querySelector('.login-option')
const signupOption = document.querySelector('.signup-option')

//event listener
signupbutton.addEventListener('click', registerButton)
loginbutton.addEventListener('click', loginButton)
loginOption.addEventListener('click', changeOptionLogin)
signupOption.addEventListener('click', changeOptionRegister)

function changeOptionLogin(event) {
  event.preventDefault();
  registerForm.classList.add('deactive')
  loginForm.classList.remove('deactive')
  loginForm.classList.add('active')
  loginOption.classList.add('active');
  signupOption.classList.remove('active')
}

function changeOptionRegister(event) {
  event.preventDefault();
  loginForm.classList.add('deactive')
  registerForm.classList.remove('deactive')
  registerForm.classList.add('active')
  signupOption.classList.add('active')
  loginOption.classList.remove('active')
}

function loginButton(event) {
  event.preventDefault();
  mainContainer.classList.toggle('active');
  loginModal.classList.toggle('active');
  registerForm.classList.toggle('deactive');
  loginOption.classList.toggle('active');
}

function registerButton(event) {
  event.preventDefault();
  mainContainer.classList.toggle('active');
  loginModal.classList.toggle('active')
  loginForm.classList.toggle('deactive');
  signupOption.classList.toggle('active')
}