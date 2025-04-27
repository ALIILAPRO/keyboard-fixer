const persianChars = ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ", "پ", "ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "ظ", "ط", "ز", "ر", "ذ", "د", "پ", "و"];
const englishChars = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ","];

function convertToPersian(text) {
  let result = text;
  for (let i = 0; i < persianChars.length; i++) {
    const regex = new RegExp(escapeRegExp(englishChars[i]), "gi");
    result = result.replace(regex, persianChars[i]);
  }
  return result;
}


function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


document.getElementById('convertBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const outputText = convertToPersian(inputText);
  document.getElementById('outputText').value = outputText;
});


const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    themeLabel.textContent = 'حالت شب';
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    themeLabel.textContent = 'حالت روز';
    localStorage.setItem('theme', 'light');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    themeToggle.checked = false;
    themeLabel.textContent = 'حالت روز';
  } else {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeToggle.checked = true;
    themeLabel.textContent = 'حالت شب';
  }
});