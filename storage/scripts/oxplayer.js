var videoPlayer = document.getElementById('video-player');
var p = document.createElement("p");
var playButton = document.createElement('button');
var pauseButton = document.createElement('button');
var timeDisplay = document.createElement('span'); // Создаем элемент для отображения времени
var durationDisplay = document.createElement('span'); // Создаем элемент для отображения длительности

p.textContent = '';
playButton.textContent = 'Play';
pauseButton.textContent = 'Pause';

playButton.classList.add('play-button');
pauseButton.classList.add('pause-button');

playButton.addEventListener('click', function() {
    videoPlayer.play();
});

pauseButton.addEventListener('click', function() {
    videoPlayer.pause();
});

document.body.appendChild(p);
document.body.appendChild(playButton);
document.body.appendChild(pauseButton);
document.body.appendChild(timeDisplay); // Добавляем элемент для отображения времени в body
document.body.appendChild(durationDisplay); // Добавляем элемент для отображения длительности в body
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
