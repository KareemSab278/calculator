const calcSpace = document.getElementById('calc-space');
const calcDisplay = document.getElementById('calc-display');
const calculateTot = document.getElementById('calculate-total');

// Holds the entire operation string
let StringOperation = '';

function updateDisplay() {
  calcDisplay.innerHTML = `<h1>${StringOperation || '0'}</h1>`;
}

// Refreshes the page when CLEAR ALL is clicked
function refreshPage() {
  location.reload();
}

// Create number buttons (0-9)
for (let i = 0; i < 10; i++) {
  const button = document.createElement('button');
  button.id = `button-${i}`;
  button.textContent = i;
  button.addEventListener('click', () => {
    StringOperation += i;
    updateDisplay();
  });
  calcSpace.appendChild(button);
}

// Create operator buttons
const operators = ['+', '-', '*', '/', '(', ')', '.'];
operators.forEach((op) => {
  const button = document.createElement('button');
  button.id = `button-${op}`;
  button.textContent = op;
  button.addEventListener('click', () => {
    StringOperation += op;
    updateDisplay();
  });
  calcSpace.appendChild(button);
});

// Calculate total
calculateTot.addEventListener('click', () => {
  try {
    const result = new Function(`return ${StringOperation}`)();
    calcDisplay.innerHTML = `<h1>Total: ${result}</h1>`;
  } catch (error) {
    calcDisplay.innerHTML = `<h1 style="color: red">Error</h1>`;
    console.error('Invalid Expression:', error);
  }
});

// Update the display initially
updateDisplay();
