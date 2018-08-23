window.addEventListener('load', function () {

    let table = document.getElementById("shulteTable"),
        count = 5,//parseInt(prompt("Count")),
        stopWatch = document.getElementById("stpwtch"),
        content,
        matrixElements = [],
        time = 0,
        isStpWtchOn = 0,
        n1, n2;
    const square = count * count;
    var stopWtch;

    for (let n = 0; n < square; n++) {
        matrixElements[n] = n + 1;
    }
    fillTable();
    stopWatch.innerHTML = '0.0';
    function getN(n1 = -1) {
        let t = Math.ceil(Math.random() * square);
        while (t === n1 || t === square) {
            t = Math.ceil(Math.random() * square);
        }
        return (t);
    }
    function changeValue(n1, n2) {
        let t;
        t = matrixElements[n1];
        matrixElements[n1] = matrixElements[n2];
        matrixElements[n2] = t;
    }
    function fillTable() {
        content = "";
        for (let i = 0; i < count; i++) {
            content += "<tr>";
            for (let j = 0; j < count; j++) {
                content += `<td>${matrixElements[i * count + j]}</td>`;
            }
            content += "</tr>";
            table.innerHTML = content;
        }
    }
    document.getElementsByTagName("body")[0].addEventListener('keydown', function () {
        if (event.keyCode === 32 && isStpWtchOn === 1) {
            clearInterval(stopWtch);
            isStpWtchOn = 0;
        }
        if (event.keyCode !== 32 && isStpWtchOn === 0) {
            time = 0;
            isStpWtchOn = 1;
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
            fillTable();
            stopWtch = setInterval(function () { time++; stopWatch.innerHTML = Math.trunc(time / 10) + '.' + time % 10 }, 100);
        }
    });
}, false);


