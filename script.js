let timeLeft = 30;
const progressBar = document.getElementById('progressBar');
const timerText = document.getElementById('timer');
const homeBtn = document.getElementById('homeBtn');
const likedBtn = document.getElementById('likedBtn');

// 1. 倒數計時器
const countdown = setInterval(() => {
    timeLeft--;
    const progress = ((30 - timeLeft) / 30) * 100;
    progressBar.style.width = progress + "%";
    
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerText.innerText = "正在嘗試自動重新連線...";
        timerText.style.color = "#FF0000";
    } else {
        timerText.innerText = `預計 ${timeLeft} 秒後自動重連...`;
    }
}, 1000);

// 2. 跳轉功能
homeBtn.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com";
});

likedBtn.addEventListener('click', () => {
    window.location.href = "https://www.youtube.com/playlist?list=LL";
});