const calcSpace = document.getElementById('calc-space');
const calcDisplay = document.getElementById('calc-display');
const calculateTot = document.getElementById('calculate-total');

let StringOperation = ''; // this string holds the whole operation
const breakline = document.createElement('br');


for (let i = 0; i < 11; i++) {
    const button = document.createElement('button');
    button.id = `button${i}`;
    button.style.color = 'black';
    button.textContent = i;
    if (i === 5){
        calcSpace.appendChild(breakline.cloneNode()); // creates a <div> for the buttons.
    }
    button.addEventListener('click', () => {
        StringOperation += i; 
        updateDisplay();
    });
    calcSpace.appendChild(button);
    
};

const operators = ['+', '-', '*', '/', '(', ')', '.'];
operators.forEach((op) => {
    const button = document.createElement('button'); //i have no idead how i did this. copied it online
    button.id = `button-${op}`;
    button.style.color = 'black';
    button.textContent = op;
    button.style = 'background-color: rgb(9, 167, 143); color: white; padding: 10px 20; font-size: 24px'
    if (op === '+'){
        calcSpace.appendChild(breakline.cloneNode()); // creates a <div> for the buttons.
    }
    button.addEventListener('click', () => {
        StringOperation += op;
        updateDisplay();
    });
    calcSpace.appendChild(button);
});


calculateTot.addEventListener('click', () => {
    try {
        const result = new Function(`return ${StringOperation}`)(); // this function will calculate the string
        calcDisplay.innerHTML = `<h1 style="color: black">Total: ${result}</h1>`;
    } catch (error) {
        calcDisplay.innerHTML = `<h1 style="color: red">Error</h1>`;
        console.error('Invalid Expression:', error);
    }
});

function updateDisplay() {
    calcDisplay.innerHTML = `<h1 style="color: black">${StringOperation}</h1>`;
};

function refreshPage() {
    location.reload();
};