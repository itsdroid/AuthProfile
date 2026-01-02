// to toglle the password hide unhide
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = '/images/eye.svg';  
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = '/images/eye-off.svg';  
    }
}


//flash message fade animation
window.addEventListener('DOMContentLoaded', () => {
const flashMessages = document.querySelectorAll('.flash-message');

flashMessages.forEach(msg => {
    setTimeout(() => {
        msg.classList.add('opacity-0', 'transition-opacity', 'duration-500');  // Add fade classes

        setTimeout(() => {
            msg.remove();  
        }, 500);  
    }, 1000); 
});

// Date and time update
if (document.getElementById('datetime')) {
    function updateDateTime() {
        const now = new Date();
        document.getElementById('datetime').innerText = now.toLocaleString();
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
}
});






// email validator
async function validateEmail() {
    const email = document.getElementById("email").value;
    const apiKey = "a84c7fb312224cea9a63469748e80a43"; // Replace with actual API key
    const url = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apiKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.data.status === "valid") {
      req.flash('success', 'valid email');
    } else {
      req.flash('error' , 'invalid email');
    }
  }
  