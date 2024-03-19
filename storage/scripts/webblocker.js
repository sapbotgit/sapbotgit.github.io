var ads = [
    "https://rutube.ru/channel/32802461/"
];

var referal = [
    `<a href="http://ouo.io/ref/4zPXa1ct"><img src="http://ouo.io/images/banners/r1.jpg" title="ouo.io - Make short links and earn the biggest money" /></a>`
]

var surveys = [
    "https://yandex.ru/poll/Hg7GqjjazmocnCDaogjRsy", 
    "https://yandex.ru/poll/AdahFYufcm64E74KEwbFMn", 
    "https://yandex.ru/poll/RxZnjMjnkKbz8cx7NoknGH",
    "https://yandex.ru/poll/95faBpNbhtU9ERJdhxLp9F",
    "https://yandex.ru/poll/2voExdMhK7vPWs1Gc2mi2B"
];

function random(from, to) {
   return Math.floor(Math.random() * (to - from)) + from;
}

function getlink() {
    if (random(1, 5) != 1) {
        return ads[random(0, ads.length)];
    } else {
        return surveys[random(0, surveys.length)];
    }
}

function listFonts() {
    var fontList = ["Times New Roman", "Arial", "Segoe Script", "Segoe Print"];
    return fontList;
}

function createIframe() {
    var iframe = document.createElement('iframe');
    iframe.src = "about:blank";
    iframe.style.position = 'fixed';
    iframe.style.bottom = '0';
    iframe.style.right = '0';
    iframe.style.width = String(window.width / 4) + "px";
    iframe.style.height = String(window.innerHeight / 2) + "px";
    document.body.appendChild(iframe);
    return iframe;
}

function security() {
    var frame = createIframe();
    function newad() {
        frame.src = getlink();
        frame.style.width = String(window.innerWidth / 5) + "px";
        frame.style.height = String(window.innerHeight / 2) + "px";
        setTimeout(newad, 10000);
    }
    newad();
}


if (!window.location.href.includes("?passed")) {
    document.getElementById("content").innerHTML = referal[random(0, referal.length)];
    security()
} else {
    document.title = "WebBlocker PRO";
}
