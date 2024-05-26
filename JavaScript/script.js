document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');

    window.appendToDisplay = function(value) {
        display.value += value;
    }

    window.clearDisplay = function() {
        display.value = '';
    }

    window.evaluateResult = function() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
});
