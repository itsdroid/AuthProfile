// to toggle the password hide unhide
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


    if (document.getElementById('datetime')) {
        function updateDateTime() {
            try {
                const now = new Date();
                document.getElementById('datetime').innerText = now.toLocaleString();
            } catch (error) {
                console.error('Error updating date and time:', error);
            }
        }
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }
});
