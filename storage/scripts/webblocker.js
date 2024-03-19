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
    //Timeless captcha offer!
    var TIMELESS = document.createElement("h1");
    TIMELESS.textContent = "ВРЕМЕННОЕ ПРЕДЛОЖЕНИЕ! РЕШИТЕ КАПЧУ И РЕКЛАМЫ НЕ БУДЕТ";
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const context = canvas.getContext('2d');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 6; i++) {
        captchaText += characters.charAt(random(0, characters.length));
    }
    var fonts = listFonts();
    console.log(fonts);
    var selectedFont = fonts[random(0, fonts.length)];
    console.log(selectedFont)
    context.font = '24px ' + selectedFont;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillText(captchaText, canvas.width / 2, canvas.height / 2 + 6);
    document.body.appendChild(TIMELESS);
    document.body.appendChild(canvas);
    var txt = document.createElement('input');
    var but = document.createElement('input');
    txt.type = "text";
    but.type = "button";
    function pass() {
        if (txt.value == captchaText) {document.location.href = document.location.href + "?passed";}
    }
    but.onclick = pass;

    document.body.appendChild(but);
    document.body.appendChild(txt);
    //-----
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
    security()
} else {
    document.title = "WebBlocker PRO";
}
