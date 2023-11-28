/*

----------------------------------------------------
Из-за того что сапбот хочет денег он разработал ЭТО!
Сапботу очень нужны деньги... Он их делит с компанией.
----------------------------------------------------

*/


var ads = [
    "https://daclv.antaresarcturus.top/?pl=e17yRIS6H0GxbfcwG8lBbQ",
    "https://rutube.ru/channel/32802461/",
    "https://nquw.adj.st/?adj_t=iij3c6b&adj_campaign=app_link&adj_adgroup=4212828&adj_fallback=https%3A%2F%2Fmarket.yandex.ru%2F%3Futm_source%3Dpartner_network%26utm_medium%3Dapp_link%26utm_campaign%3D4212828%26clid%3D4212828%26distr_type%3D7%26pp%3D943%26src_pof%3D4212828%26mclid%3D1003%26vid%3DWebBlocker&adj_label=pp%3A943%2Bsrc_pof%3A4212828%2Bclid%3A4212828%2Bmclid%3A1003%2Bdistr_type%3A7%2Bvid%3AWebBlocker%2Bvid%3AWebBlocker&adj_redirect_macos=https%3A%2F%2Fmarket.yandex.ru%2F%3Futm_source%3Dpartner_network%26utm_medium%3Dapp_link%26utm_campaign%3D4212828%26clid%3D4212828%26distr_type%3D7%26pp%3D943%26src_pof%3D4212828%26mclid%3D1003%26vid%3DWebBlocker&clid=4212828&distr_type=7&mclid=1003&pp=943&src_pof=4212828&vid=WebBlocker",
    "https://rucaptcha.com/?from=20286265"
];

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

function security() {
    var ZZtitle = document.createElement("h2");
    var ZZtext = document.createElement("p");
    var ZZad = document.createElement("iframe");
    document.title = "WebBlocker";
    ZZtitle.textContent = "Секунду!";
    ZZtext.textContent = "Данный сайт защищён WebLocker! Подождите 30 секунд (2 рекламы)! РЕКЛАМА:";
    ZZad.src = getlink()
    window.stop()
    ZZad.height = 500
    ZZad.width = ZZad.height
    document.body.appendChild(ZZtitle);
    document.body.appendChild(ZZtext);
    document.body.appendChild(ZZad);
    function removeit() {
        window.location.href = window.location.href + "?passed";
    }
    function changead() {
        ZZad.src = getlink()
        ZZtext.textContent = "Осталось всего 15 секунд (одна реклама)! РЕКЛАМА:"
    }
    setTimeout(removeit, 30000);
    setTimeout(changead, 15000);
}

if (!window.location.href.includes("?passed")) {
    security()
} else {
    document.title = "WebUnlocked";
}
