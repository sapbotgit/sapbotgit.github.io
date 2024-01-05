var videoPlayer = document.getElementById('video-player');
var p = document.createElement("p");
var playButton = document.createElement('button');
var pauseButton = document.createElement('button');
var stopButton = document.createElement('button');
var muteButton = document.createElement('button'); // Создаем кнопку для включения/выключения звука

var timeDisplay = document.createElement('span');
var durationDisplay = document.createElement('span');
var watermark = document.createElement('div');

p.textContent = '';
playButton.textContent = 'Play';
pauseButton.textContent = 'Pause';
stopButton.textContent = 'Stop';
muteButton.textContent = 'Mute'; // Устанавливаем текст кнопки для включения/выключения звука

playButton.classList.add('play-button');
pauseButton.classList.add('pause-button');
stopButton.classList.add('stop-button');
muteButton.classList.add('mute-button'); // Добавляем CSS класс для кнопки включения/выключения звука

playButton.addEventListener('click', function() {
    videoPlayer.play();
});

pauseButton.addEventListener('click', function() {
    videoPlayer.pause();
});

stopButton.addEventListener('click', function() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
});

muteButton.addEventListener('click', function() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        videoPlayer.muted = true;
        muteButton.textContent = 'Unmute';
    }
});

document.body.appendChild(p);
document.body.appendChild(playButton);
document.body.appendChild(pauseButton);
document.body.appendChild(stopButton);
document.body.appendChild(muteButton); // Добавляем кнопку включения/выключения звука в body
document.body.appendChild(timeDisplay);
document.body.appendChild(durationDisplay);

// Остальной код...



// Rest of the code...


var watermark = document.createElement('div'); // Создаем элемент для водяного знака

// Стилизация водяного знака
watermark.style.position = 'absolute';
watermark.style.top = '50%';
watermark.style.left = '50%';
watermark.style.transform = 'translate(-50%, -50%)';
watermark.style.padding = '5px';
watermark.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
watermark.style.color = 'white';
watermark.style.fontWeight = 'bold';
watermark.textContent = 'КОПИРОВАНИЕ ЗАПРЕЩЕНО';

document.body.appendChild(watermark); // Добавляем элемент для водяного знака в videoPlayer

// Защита от скачивания
// Запрет контекстного меню
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Запрет правой кнопки мыши
document.addEventListener('mousedown', function(e) {
    if (e.button === 2) {
        e.preventDefault();
    }
});

// РЕКЛАМА И Т.П. \\
videoPlayer.addEventListener('play', function() {
    console.log('Видео начало воспроизведение');
});

videoPlayer.addEventListener('pause', function() {
    console.log('Видео приостановлено');
});

videoPlayer.addEventListener('ended', function() {
    console.log('Видео завершено');
});

// Обновляем отображение времени и длительности каждую секунду
setInterval(function() {
    var currentTime = videoPlayer.currentTime;
    var duration = videoPlayer.duration;
    var currentMinutes = Math.floor(currentTime / 60);
    var currentSeconds = Math.floor(currentTime % 60);
    var durationMinutes = Math.floor(duration / 60);
    var durationSeconds = Math.floor(duration % 60);
    timeDisplay.textContent = 'Время: ' + currentMinutes + ':' + currentSeconds + " ";
    durationDisplay.textContent = 'Длительность: ' + durationMinutes + ':' + durationSeconds;
}, 1000);
