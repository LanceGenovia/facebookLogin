// Assuming you have API endpoints for registration and login
const registrationEndpoint = 'https://your-api-domain.com/register';
const loginEndpoint = 'https://your-api-domain.com/login';

// Registration form submission
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch(registrationEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Registration successful! You can now log in.');
    } else {
      alert('Registration failed. Please try again later.');
    }
  } catch (error) {
    alert('An error occurred during registration. Please try again later.');
    console.error('Error:', error);
  }
});

// Login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch(loginEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert('Login successful!'); // You can redirect the user to a dashboard or homepage here.
    } else {
      alert('Login failed. Please check your username and password.');
    }
  } catch (error) {
    alert('An error occurred during login. Please try again later.');
    console.error('Error:', error);
  }
});