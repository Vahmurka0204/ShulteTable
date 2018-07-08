window.addEventListener('load', function () {

    let table = document.getElementById("shulteTable"),
        count =  5,//parseInt(prompt("Count")),
        content = "",
        numbers = [];

    for (let n = 0; n < count * count; n++) {
        numbers[n] = n+1;
    }
    for (let n=0; n<count;n++){
        let n1, n2, t;
        n1=Math.ceil(Math.random()*count*count);

    }

    for (let i = 0; i < count; i++) {
        content += "<tr>";
        
        for (let j = 0; j < count; j++) {
            content += `<td>${numbers[i * count + j]}</td>`;
        }

        content += "</tr>";
    }

    table.innerHTML = content;
}, false);