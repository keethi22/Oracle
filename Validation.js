document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    
    // Validate each field
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById('course');
    
    let isValid = true;
    
    // Name validation
    if (!name.value || name.value.length < 3) {
        document.getElementById('name-error').textContent = 'Please enter a valid name (at least 3 characters)';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
    
    // Gender validation
    if (!gender) {
        document.getElementById('gender-error').textContent = 'Please select your gender';
        document.getElementById('gender-error').style.display = 'block';
        isValid = false;
    }
    
    // Course validation
    if (!course.value) {
        document.getElementById('course-error').textContent = 'Please select a course';
        document.getElementById('course-error').style.display = 'block';
        isValid = false;
    }
    
    // If all valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // In a real application, you would submit to a server here
        // this.submit();
    }
});

// Real-time validation for name and email
document.getElementById('name').addEventListener('input', function() {
    if (this.value.length > 0 && this.value.length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
        document.getElementById('name-error').style.display = 'block';
    } else {
        document.getElementById('name-error').style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailRegex.test(this.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
        document.getElementById('email-error').style.display = 'block';
    } else {
        document.getElementById('email-error').style.display = 'none';
    }
});
