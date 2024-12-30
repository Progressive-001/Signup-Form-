
//signForm
const signForm = document.getElementById("signForm");

// error element
const usernameError1 = document.getElementById("usernameError1");

const usernameError2 = document.getElementById("usernameError2");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const svgError = document.getElementById("svgError");

// Handling form submit
signForm.addEventListener("submit", function(event){
  // Prevent the default submit behavior.
  event.preventDefault();

  // Form field element value
  const userName1 = document.getElementById("username1").value;
  const userName2 = document.getElementById("username2").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

   // Form field element value
   const inputs = {
   userName1: document.getElementById("username1"),
   userName2: document.getElementById("username2"),
   email: document.getElementById("email"),
   password: document.getElementById("password"),
   };
 

  let valid = true;

  //Clear previous error messages
  [userName1, usernameError1, usernameError2, emailError, passwordError].forEach(function(item){
    item.textContent = "";
    // item.classList.remove("error");
  });

   //Validation user First name
  //the username should be at least 3 characters long
  if(userName1.length < 3){
    valid = false;
    usernameError1.textContent = "Username must be at least 3 characters long."
    usernameError1.style.display = "block";
    inputs.userName1.classList.add("error");
  }
  else{
    inputs.userName1.classList.remove("error");
  }

   //Validation user First name
  //the user First name cannot be empty
  if(userName1.trim() === ""){
    valid = false;
    usernameError1.textContent = "First name cannot be empty."
    usernameError1.style.display = "block";
    inputs.userName1.classList.add("error");
  }
  else{
    inputs.userName1.classList.remove("error");
  }

  //Validation username
  //the username should be at least 3 characters long
  if(userName2.length < 3){
    valid = false;
    usernameError2.textContent = "Username must be at least 3 characters long."
    usernameError2.style.display = "block";
    inputs.userName2.classList.add("error");
  }
  else{
    inputs.userName2.classList.remove("error");
  }

  //Validation user Last name
  //the user Last name cannot be empty
  if(userName2.trim() === ""){
    valid = false;
    usernameError2.textContent = "Last name cannot be empty."
    usernameError2.style.display = "block";
    inputs.userName2.classList.add("error");
  } 
  else{
    inputs.userName2.classList.remove("error");
  }

  // Validate email
  const emailPattern = /^([\w.-]{2,50})@[a-z0-9]{2,20}\.[a-z0-9]{0,20}/i;
  //example_.123@gmail.com
  // Regex.test()
  if(!emailPattern.test(email)){
    valid = false;
    emailError.textContent = "Please enter a valid email address."
    emailError.style.display = "block";
    inputs.email.classList.add("error");
  }
  else{
    inputs.email.classList.remove("error");
  }

  // Validate Password
  function validatePassword(password){
    // check if password has at least six characters
    const lengthPattern = /\S{6,}/;

    // check if password has at least a number
    const digitPattern = /\d/;

    // return the test
    return lengthPattern.test(password) && digitPattern.test(password)
  }

  if(!validatePassword(password)){
    valid = false;
    passwordError.textContent = "Password must be at least 6 characters long and must contain at least a number."
    passwordError.style.display = "block";
    inputs.password.classList.add("error");
  }
  else{
    inputs.password.classList.remove("error");
  }
  

  //Validation user password
  //the user password cannot be empty
  if(password.trim() === ""){
    valid = false;
    passwordError.textContent = "Password cannot be empty."
    passwordError.style.display = "block";
    inputs.password.classList.add("error");
  }
  
  // If all is valid, submit the form 
  if(valid){
   alert("Form submitted successfully!");
   // item.classList.remove("error");
   // here we can add code to actually submit the form data to a server 
  }

});

