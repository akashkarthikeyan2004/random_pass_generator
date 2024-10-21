const lengthInput = document.getElementById('length');
const generateBtn = document.getElementById('generate');
const passwordOutput = document.getElementById('password');

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+';

generateBtn.addEventListener('click', () => {
  const length = parseInt(lengthInput.value);
  if (isNaN(length) || length < 1 || length > 20) {
    passwordOutput.textContent = 'Please enter a valid length between 1 and 20.';
    return;
  }

  const characters = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordOutput.textContent = password;
});