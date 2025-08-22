// /frontend/js/auth.js

/**
 * This script handles client-side interactions on the authentication pages.
 * For now, its only responsibility is to toggle password visibility.
 */
document.addEventListener('DOMContentLoaded', () => {

    // Find the password toggle icon on the page.
    const passwordToggleIcon = document.querySelector('.password-toggle-icon');

    // If the icon exists, set up the event listener.
    if (passwordToggleIcon) {
        // The password input is expected to be the input field with the id 'password'.
        const passwordInput = document.getElementById('password');

        if (passwordInput) {
            passwordToggleIcon.addEventListener('click', () => {
                // Check the current type of the input.
                const isPassword = passwordInput.getAttribute('type') === 'password';

                // Toggle the input type.
                passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

                // Here you could also change the icon's src to reflect the state,
                // e.g., switching between an 'eye' and 'eye-off' icon.
                // For now, we just toggle functionality.
            });
        }
    }

    // Note: Form redirection is currently handled by the 'action' attribute
    // in the HTML <form> tag. No JavaScript is needed for that placeholder behavior.
});
