let navbar = document.querySelector('.navbar')
let navbarBrand = document.querySelector(".navbar-brand")
let navLink = document.querySelectorAll(".nav-link")
// form validtion
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const tel = document.getElementById('password')
const textarea = document.getElementById('textarea')


// add white background to navbar when scroll
window.onscroll = function() {
    if(window.scrollY){
        navbar.classList.add('scroll')
        navbarBrand.classList.add("scroll")
        navLink.forEach(x=>{
            x.classList.add('scroll')
        })
    }else if(window.scrollTo){
        navbar.classList.remove('scroll')
        navbarBrand.classList.remove("scroll")
        navLink.forEach(x=>{
            x.classList.remove('scroll')
        })
    }
}

// form validion
form.addEventListener('submit',e=>{
  e.preventDefault()

  checkInput()
})

function checkInput() { 
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const telvalue = tel.value.trim()
  const textareaValue = textarea.value.trim()

  if(usernameValue === ''){
    setErrorFor(username,'Enter your name')
  } else {
    setSuccessFor(username)
  }

  if(emailValue === ''){
    setErrorFor(email,'Enter your Email addrres')
  } else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email')
  }
  else {
    setSuccessFor(email)
  }

  if(telvalue=== ''){
    setErrorFor(tel,'Enter your Phone number')
  } else {
    setSuccessFor(tel)
  }

  if(textareaValue === '') {
    setErrorFor(textarea, 'Enter your message')
  } else {
    setSuccessFor(textarea)
  }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

