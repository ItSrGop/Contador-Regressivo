function startCountdown() {
    const hoursInput = parseInt(document.getElementsByClassName('hoursInput')[0].value) || 0;
    const minutesInput = parseInt(document.getElementsByClassName('minutesInput')[0].value) || 0;
    const secondsInput = parseInt(document.getElementsByClassName('secondsInput')[0].value) || 0;
    const countdownDisplay = document.getElementsByClassName('countdownDisplay')[0];

    let remainingTime = hoursInput * 3600 + minutesInput * 60 + secondsInput;

    const interval = setInterval(function() {
        if (remainingTime <= 0) {
            clearInterval(interval);
            countdownDisplay.innerText = 'Tempo esgotado!';
            return;
        }

        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        countdownDisplay.innerText = `${hours}h ${minutes}m ${seconds}s`;

        remainingTime--;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementsByClassName('startButton')[0];
    if (startButton) {
        startButton.addEventListener('click', startCountdown);
    }
});
