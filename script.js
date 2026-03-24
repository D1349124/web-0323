let timeLeft = 30;
const progressBar = document.getElementById('progressBar');
const timerText = document.getElementById('timer');

// 倒數計時
const countdown = setInterval(() => {
    timeLeft--;
    const progress = ((30 - timeLeft) / 30) * 100;
    progressBar.style.width = progress + "%";
    
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerText.innerText = "重新連線中...";
    } else {
        timerText.innerText = `預計 ${timeLeft} 秒後自動重連...`;
    }
}, 1000);

// 按鈕跳轉
document.getElementById('homeBtn').addEventListener('click', () => {
    window.location.href = "https://www.youtube.com";
});

document.getElementById('likedBtn').addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/playlist?list=LL";
});