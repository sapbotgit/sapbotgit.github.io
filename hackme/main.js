var username;
var password;
var DATKA = document.forms.NuNafiga;
var suser = DATKA.elements.username;
var spass = DATKA.elements.password;
var tries = 3;
/*password = "admin";
username = "admin";*/

username = "$Vzlomal="; password = "Tupoy&";
function check() {
    console.log(suser.value);
    console.log(spass.value);
    if (suser.value == username && spass.value == password) {
        alert("Доступ разрешён");
        window.location = window.location + "/profile";
    } else {
        alert("Неверное имя пользователя или пароль! Осталось попыток: " + String(tries - 1));
        if (tries == 0) {
            window.location = window.location + "/ban";
        }
        tries--;
    }
}