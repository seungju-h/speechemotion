// Function to open a popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Function to close a popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('a[href="#login-popup"]');
    const signupBtn = document.querySelector('a[href="#signup-popup"]');
    const closeLoginBtn = document.querySelector('#login-popup .close-popup');
    const closeSignupBtn = document.querySelector('#signup-popup .close-popup');

    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            openPopup('login-popup');
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function(event) {
            event.preventDefault();
            openPopup('signup-popup');
        });
    }

    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            closePopup('login-popup');
        });
    }

    if (closeSignupBtn) {
        closeSignupBtn.addEventListener('click', function(event) {
            event.preventDefault();
            closePopup('signup-popup');
        });
    }
});

// Function to handle login submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-popup form');
    const loginError = document.getElementById('login-error');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Replace this condition with your actual login logic
            const isLoginSuccessful = false; // Change this value based on your authentication logic

            if (!isLoginSuccessful) {
                loginError.style.display = 'block';
            } else {
                loginError.style.display = 'none';
                closePopup('login-popup');
            }
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    // ... Existing code ...

    if (usernameInput) {
        const checkUsernameBtn = document.getElementById('check-username-btn');
        const usernameError = document.getElementById('username-error');

        checkUsernameBtn.addEventListener('click', function() {
            // Replace this with your actual username check logic
            // For example:
            const isUsernameTaken = true; // Change this value based on the result of the check
            if (isUsernameTaken) {
                usernameError.style.display = 'block';
            } else {
                usernameError.style.display = 'none';
            }
        });
    }

    if (nicknameInput) {
        const checkNicknameBtn = document.getElementById('check-nickname-btn');
        const generateNicknameBtn = document.getElementById('generate-nickname-btn');
        const nicknameError = document.getElementById('nickname-error');

        checkNicknameBtn.addEventListener('click', function() {
            // Replace this with your actual nickname check logic
            // For example:
            const isNicknameTaken = true; // Change this value based on the result of the check
            if (isNicknameTaken) {
                nicknameError.style.display = 'block';
            } else {
                nicknameError.style.display = 'none';
            }
        });

        generateNicknameBtn.addEventListener('click', function() {
            // Replace this with your actual nickname generation logic from the API
            // For example:
            const generatedNickname = 'RandomNickname'; // Replace with the generated nickname
            nicknameInput.value = generatedNickname;
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-popup form');
    const loginError = document.getElementById('login-error');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Replace this condition with your actual login logic
            const isLoginSuccessful = true; // Change this value based on your authentication logic

            if (!isLoginSuccessful) {
                loginError.style.display = 'block';
            } else {
                loginError.style.display = 'none';
                closePopup('login-popup');

                // Redirect to the "/level" page after successful login
                window.location.href = '/level';
            }
        });
    }
});
