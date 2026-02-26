const result = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === 'C') {
            currentInput = '';
            result.textContent = '0';
        } else if (value === 'backspace') {
            currentInput = currentInput.slice(0, -1);
            result.textContent = currentInput || '0';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                result.textContent = currentInput;
            } catch (e) {
                result.textContent = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            result.textContent = currentInput;
        }
    });
});


