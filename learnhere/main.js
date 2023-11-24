function zaz(a) {
    var fib = [1, 2]
    for (let i = 0; i < a; i++) {
        fib.push((fib[fib.length - 1] ** fib[fib.length - 2]))
    }
    return fib[fib.length - 1];
}

function webzaz() {
    for (let i = 0; i < 10; i++) {
        var p = document.createElement("p");
        p.textContent = String(zaz(i));
        document.body.appendChild(p);
    }
    return;
}