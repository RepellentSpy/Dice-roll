function hodKostkou() {
    let kostkaValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("value_text").innerHTML = kostkaValue;
    let sum = kostkaValue;
    console.log("Sum:", sum);
    document.getElementById("sum_number").innerHTML = sum;
}

function hodDvemaKostkami() {
    let kostkaValue = Math.floor(Math.random() * 6) + 1;
    let kostka2Value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("value_text").innerHTML = (kostkaValue + " " + kostka2Value)
    let sum = kostkaValue + kostka2Value;
    console.log("Sum:", sum);
    document.getElementById("sum_number").innerHTML = sum;
}

function hodTremiKostkami() {
    let kostkaValue = Math.floor(Math.random() * 6) + 1;
    let kostka2Value = Math.floor(Math.random() * 6) + 1;
    let kostka3Value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("value_text").innerHTML = (kostkaValue + " " + kostka2Value + " " + kostka3Value)
    let sum = kostkaValue + kostka2Value + kostka3Value;
    console.log("Sum:", sum);
    document.getElementById("sum_number").innerHTML = sum;
}

function nekonecne_hazeni() {
    hodKostkou();
    setInterval(hodKostkou, 500);
}

function nekonecne_hazeni2() {
    hodDvemaKostkami();
    setInterval(hodDvemaKostkami, 500);
}

function nekonecne_hazeni3() {
    hodTremiKostkami();
    setInterval(hodTremiKostkami, 500);
}

function toggleCzech() { // Aktuálně rozpracováno a nevyužito
    document.getElementById("page_title").innerHTML = "Házení kostek";
    document.getElementById("1die").innerHTML = "1 kostka";
    document.getElementById("2die").innerHTML = "2 kostky";
    document.getElementById("3die").innerHTML = "3 kostky";
    document.getElementById("infinite1").innerHTML = "Nekonecné házení 1 kostky";
    document.getElementById("infinite2").innerHTML = "Nekonecné házení 2 kostek";
    document.getElementById("infinite3").innerHTML = "Nekonecné házení 3 kostek";
    document.getElementById("sum_text").innerHTML = "Součet: ";
}