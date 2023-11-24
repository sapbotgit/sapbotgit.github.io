function fucks() {
    var src;
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

   // getting a hold of the file reference
        var file = e.target.files[0];

   // setting up the reader
        var reader = new FileReader();
        reader.readAsText(file,'UTF-8');

   // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
            var content = readerEvent.target.result; // this is the content!
            src = content;
        }

        src = "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.>+++++++++++++++++++++++++++++++++."
        var mem = [0, 0, 0, 0]
        var state = 0
        console.log(src)
        for (var i = 0; i < src.length; i++) {
            var c = src[i]
            switch(c) {
                case "+":
                    mem[state] += 1
                case "-":
                    mem[state] -= 1
                case ">":
                    state += 1
                    if (state > 3) {state = 0}
                case "<":
                    state -= 1
                    if (state < 0) {state = 3}
                case ".":
                    var p = document.createElement("p");
                    p.textContent = String.fromCharCode(mem[state]);
                    document.body.appendChild(p);
                default:
                    console.log("fuck you");
            }
        }
    }
    input.click();
}