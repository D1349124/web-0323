let timeLeft = 30;
let score = 0;
const progressBar = document.getElementById('progressBar');
const timerText = document.getElementById('timer');
const scoreText = document.getElementById('score');
const cheerBtn = document.getElementById('cheerBtn');

// 1. 倒數計時與進度條
const countdown = setInterval(() => {
    timeLeft--;
    const progress = ((30 - timeLeft) / 30) * 100;
    progressBar.style.width = progress + "%";
    
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerText.innerText = "準備就緒！請重新載入。";
        timerText.style.color = "#FF0000";
    } else {
        timerText.innerText = `預計 ${timeLeft} 秒後自動重連...`;
    }
}, 1000);

// 2. 趣味互動：餵食猴子
cheerBtn.addEventListener('click', () => {
    score++;
    scoreText.innerText = score;
    
    // 簡單的小彩蛋：點擊時按鈕會隨機變色
    const colors = ['#FF0000', '#2BA640', '#065FD4'];
    cheerBtn.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
});