const counter = document.getElementById('counter');
const message = document.getElementById('message');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const saveButton = document.getElementById('save');

let count = 0;

// display
function updateCounter() {
    counter.innerText = count;
}

// message
function showMessage(msg) {
    message.innerText = msg;
    message.classList.add('animated');
    setTimeout(() => {
        message.classList.remove('animated');
        message.innerText = '';
    }, 1690);
}

// Increment button
incrementButton.addEventListener('click', () => {
    count++;
    updateCounter();
    showMessage('Welcome Aboard');
});

// Decrement button
decrementButton.addEventListener('click', () => {
    count--;
    updateCounter();
    showMessage('See You Next Time');
});

// Reset button
resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
    message.innerText = '';
    showMessage('reset to 0')
});

// Save button
saveButton.addEventListener('click', () => {
    localStorage.setItem('counterValue', count);
    showMessage('value Saved');
});


const savedValue = localStorage.getItem('counterValue');
if (savedValue !== null) {
    count = parseInt(savedValue);
    updateCounter();
}


updateCounter();
