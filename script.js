// ===========================
// DARK/LIGHT MODE TOGGLE
// ===========================
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===========================
// COUNTER GAME
// ===========================
let count = 0;
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

// ===========================
// FAQ COLLAPSIBLE SECTION
// ===========================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ===========================
// FORM VALIDATION
// ===========================
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Enter a valid email';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  // Success message
  if (valid) {
    formSuccess.textContent = 'Form submitted successfully! 🎉';
    form.reset();
  } else {
    formSuccess.textContent = '';
  }
});

