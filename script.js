let counterValue = 0;

function incrementCounter() {
    counterValue++;
    document.getElementById("counter-value").textContent = counterValue;
}

function decrementCounter() {
    counterValue--;
    if (counterValue < 0) {
        counterValue = 0;
    }
    document.getElementById("counter-value").textContent = counterValue;
}

function resetCounter() {
    counterValue = 0;
    document.getElementById("counter-value").textContent = counterValue;
}