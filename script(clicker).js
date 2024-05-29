let clickCount = 0;
let timeRemaining = 0;
let timerInterval;

document.getElementById('clickButton').addEventListener('click', () => {
    if (timeRemaining > 0) {
        clickCount++;
        document.getElementById('clickCount').textContent = clickCount;
    }
});

document.getElementById('startButton').addEventListener('click', () => {
    clickCount = 0;
    document.getElementById('clickCount').textContent = clickCount;

    const timeLimit = parseInt(document.getElementById('timeLimit').value);
    timeRemaining = timeLimit;
    document.getElementById('timeRemaining').textContent = timeRemaining;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('timeRemaining').textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert(`Játék vége! Összes kattintás: ${clickCount}`);
        }
    }, 1000);
});