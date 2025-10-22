document.addEventListener('DOMContentLoaded', () => {
  initProfileTime();
  initAvatarUpload();
  initContactFormValidation();
});

function initProfileTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (!timeElement) return;

  const updateTime = () => {
    timeElement.textContent = Date.now();
  };

  updateTime();
  setInterval(updateTime, 1000);
}

function initAvatarUpload() {
  const avatarInput = document.getElementById('avatar-upload');
  const avatarImage = document.querySelector('[data-testid="test-user-avatar"]');
  if (!avatarInput || !avatarImage) return;

  avatarImage.addEventListener('error', () => {
    avatarImage.src = 'https://via.placeholder.com/300?text=Avatar';
  });

  avatarInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;

    const objectUrl = URL.createObjectURL(file);
    avatarImage.src = objectUrl;
  });
}

function initContactFormValidation() {
  const form = document.querySelector('.contact__form');
  if (!form) return;

  const nameInput = document.querySelector('[data-testid="test-contact-name"]');
  const emailInput = document.querySelector('[data-testid="test-contact-email"]');
  const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
  const messageInput = document.querySelector('[data-testid="test-contact-message"]');
  
  const nameError = document.querySelector('[data-testid="test-contact-error-name"]');
  const emailError = document.querySelector('[data-testid="test-contact-error-email"]');
  const subjectError = document.querySelector('[data-testid="test-contact-error-subject"]');
  const messageError = document.querySelector('[data-testid="test-contact-error-message"]');
  
  const successMessage = document.querySelector('[data-testid="test-contact-success"]');

  // Validation functions
  const validateName = (value) => {
    return value.trim().length > 0;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value.trim());
  };

  const validateSubject = (value) => {
    return value.trim().length > 0;
  };

  const validateMessage = (value) => {
    return value.trim().length >= 10;
  };

  // Clear error function
  const clearError = (errorElement, inputElement) => {
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.hidden = true;
    }
    if (inputElement) {
      inputElement.setAttribute('aria-invalid', 'false');
    }
  };

  // Show error function
  const showError = (errorElement, inputElement, message) => {
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.hidden = false;
    }
    if (inputElement) {
      inputElement.setAttribute('aria-invalid', 'true');
    }
  };

  // Clear errors on input
  if (nameInput) {
    nameInput.addEventListener('input', () => {
      clearError(nameError, nameInput);
      if (successMessage) successMessage.hidden = true;
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      clearError(emailError, emailInput);
      if (successMessage) successMessage.hidden = true;
    });
  }

  if (subjectInput) {
    subjectInput.addEventListener('input', () => {
      clearError(subjectError, subjectInput);
      if (successMessage) successMessage.hidden = true;
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      clearError(messageError, messageInput);
      if (successMessage) successMessage.hidden = true;
    });
  }

  // Form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let isValid = true;

    // Hide success message first
    if (successMessage) {
      successMessage.hidden = true;
    }

    // Clear all previous errors
    clearError(nameError, nameInput);
    clearError(emailError, emailInput);
    clearError(subjectError, subjectInput);
    clearError(messageError, messageInput);

    // Validate name
    if (!nameInput || !validateName(nameInput.value)) {
      showError(nameError, nameInput, 'Please enter your full name.');
      isValid = false;
    }

    // Validate email
    if (!emailInput || !validateEmail(emailInput.value)) {
      showError(emailError, emailInput, 'Please enter a valid email address.');
      isValid = false;
    }

    // Validate subject
    if (!subjectInput || !validateSubject(subjectInput.value)) {
      showError(subjectError, subjectInput, 'Please enter a subject.');
      isValid = false;
    }

    // Validate message
    if (!messageInput || !validateMessage(messageInput.value)) {
      showError(messageError, messageInput, 'Message must be at least 10 characters long.');
      isValid = false;
    }

    // If all valid, show success and reset form
    if (isValid) {
      if (successMessage) {
        successMessage.hidden = false;
        console.log('Success message shown'); // Debug log
        
        // Auto-hide toast after 4 seconds
        setTimeout(() => {
          if (successMessage) successMessage.hidden = true;
        }, 4000);
      }
      form.reset();
    }
  });
}