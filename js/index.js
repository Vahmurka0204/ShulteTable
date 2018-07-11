window.addEventListener('load', function () {

    let table = document.getElementById("shulteTable"),
        count = 5,//parseInt(prompt("Count")),
        content = "",
        numbers = [],
        n1, n2, square=count*count;

    for (let n = 0; n < square; n++) {
        numbers[n] = n + 1;
    }
    // change zero-element
    n1 = getN1(n1);
    n2 = 0;
    changeValue(n1, n2);
    //
    for (let n = 0; n < count * (count - 1); n++) {
        n1 = getN1(n1);
        n2 = getN2(n1);
        changeValue(n1, n2);
    }

    for (let i = 0; i < count; i++) {
        content += "<tr>";

        for (let j = 0; j < count; j++) {
            content += `<td>${numbers[i * count + j]}</td>`;
        }

        content += "</tr>";
    }
    function getN2(n1) {
        let t = Math.ceil(Math.random() *square);
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
    function getN1(n1) {
        n1 = Math.ceil(Math.random() * square);
        while (n1 === square) {
            n1 = Math.ceil(Math.random() * square);
        }
        return n1;
    }
    table.innerHTML = content;
}, false);