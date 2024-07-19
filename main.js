function validateSignUp() {
    const password = document.getElementById('signpassword').value;
    const confirmPassword = document.getElementById('signconfirmPassword').value;
    
  
    if (password!== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    if (password.length < 8) {
      document.getElementById('passcond').style.color = "red";
      // alert('Password must be at least 8 characters long');
      return;
    }
  
    const hasUppercase = /[A-Z]/.test(password);
    if (!hasUppercase) {
      document.getElementById('passcond').style.color = "red";
      return;
    }
    window.location.href = "./index.html"; 
     
  }
  const signUpButton = document.getElementById('signsubbutton');
  signUpButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      validateSignUp();
      
   });
  document.getElementById("signsignupForm").addEventListener("submit", function() {
    var email = document.getElementById("signemail").value;
    var password = document.getElementById("signpassword").value;
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1000);
    document.cookie = "signemail=" + email + "; expires=" + expirationDate.toUTCString() + "; path=/";
    document.cookie = "signpassword=" + password + "; expires=" + expirationDate.toUTCString() + "; path=/";
  });
  
  
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    if (cookie[0] == "signemail") {
      document.getElementById("signemail").value = cookie[1];
    } else if (cookie[0] == "signpassword") {
      document.getElementById("signpassword").value = cookie[1];
    }
  }
  
  
  document.querySelector(".signsign").addEventListener("mouseover", function() {
    document.querySelector(".signsign").textContent = "Please Sign Up ";
  });
  
  document.querySelector(".signsign").addEventListener("mouseout", function() {
    document.querySelector(".signsign").textContent = "Sign Up";
  });


  
  