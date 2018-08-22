window.addEventListener('load', function () {

    let table = document.getElementById("shulteTable"),
        count = 5,//parseInt(prompt("Count")),
        inputSec = document.getElementById("seconds"),
        content = "",
        numbers = [],
        time = 0,
        flag=0,
        n1, n2, square = count * count;

    for (let n = 0; n < square; n++) {
        numbers[n] = n + 1;
    }
    var stopBtn = {}
    // change zero-element
    n1 = 0;
    n2 = getN(n1);
    changeValue(n1, n2);
    //
    for (let n = 0; n < count * (count - 1); n++) {
        n1 = getN(n1);
        n2 = getN(n1);
        changeValue(n1, n2);
    }

    for (let i = 0; i < count; i++) {
        content += "<tr>";

        for (let j = 0; j < count; j++) {
            content += `<td>${numbers[i * count + j]}</td>`;
        }

        content += "</tr>";
    }
    function getN(n1 = -1) {
        let t = Math.ceil(Math.random() * square);
        while (t === n1 || t === square) {
            t = Math.ceil(Math.random() * square);
        }
        return (t);
    }
    function changeValue(n1, n2) {
        let t;
        t = numbers[n1];
        numbers[n1] = numbers[n2];
        numbers[n2] = t;
    }
    inputSec.innerHTML='0.0';
    var stopWtch;// = setInterval(function () { time++; inputSec.innerHTML = time / 10 }, 100);

    table.innerHTML = content;
    document.getElementsByTagName("body")[0].addEventListener('keydown', function () {
        if (event.keyCode === 32 && flag===1) {
            clearInterval(stopWtch);
            flag=0;
        }
        if (event.keyCode !== 32 && flag===0) {
            time=0;
            flag=1;
            stopWtch = setInterval(function () { time++; inputSec.innerHTML = Math.trunc(time / 10)+'.'+time%10 }, 100);
        }
    });
}, false);