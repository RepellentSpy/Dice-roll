window.onload = function () {
    document.getElementById("value_text").innerHTML = Cookies.get("rolled_number");
    document.getElementById("sum_number").innerHTML = Cookies.get("sum_amount");

    if (Cookies.get("sum_amount") === undefined) {
        document.getElementById("sum_number").innerHTML = "----"
        document.getElementById("value_text").innerHTML = "----"
    } else {
        if (Cookies.get("manually_stopped") === undefined) {
            animateNumberChange();
        }
    }
    Cookies.remove("manually_stopped", { path: '/' });
}

function hodKostkou() {
    let kostkaValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("value_text").innerHTML = kostkaValue;
    let sum = kostkaValue;
    console.log("Sum:", sum);
    document.getElementById("sum_number").innerHTML = sum;
    animateNumberChange();
    Cookies.set("rolled_number", document.getElementById("value_text").innerHTML, { expires: 365 })
    Cookies.set("sum_amount", document.getElementById("sum_number").innerHTML, { expires: 365 })
}

function hodDvemaKostkami() {
    let kostkaValue = Math.floor(Math.random() * 6) + 1;
    let kostka2Value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("value_text").innerHTML = (kostkaValue + " " + kostka2Value)
    let sum = kostkaValue + kostka2Value;
    console.log("Sum:", sum);
    document.getElementById("sum_number").innerHTML = sum;
    animateNumberChange();
    Cookies.set("rolled_number", document.getElementById("value_text").innerHTML, { expires: 365 })
    Cookies.set("sum_amount", document.getElementById("sum_number").innerHTML, { expires: 365 })
}

function hodTremiKostkami() {
    let kostkaValue = Math.floor(Math.random() * 6) + 1;
    let kostka2Value = Math.floor(Math.random() * 6) + 1;
    let kostka3Value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("value_text").innerHTML = (kostkaValue + " " + kostka2Value + " " + kostka3Value)
    let sum = kostkaValue + kostka2Value + kostka3Value;
    console.log("Sum:", sum);
    document.getElementById("sum_number").innerHTML = sum;
    animateNumberChange();
    Cookies.set("rolled_number", document.getElementById("value_text").innerHTML, { expires: 365 })
    Cookies.set("sum_amount", document.getElementById("sum_number").innerHTML, { expires: 365 })
}

function nekonecne_hazeni() {
    hodKostkou();
    setInterval(hodKostkou, 800);
    disableButtons();
}

function nekonecne_hazeni2() {
    hodDvemaKostkami();
    setInterval(hodDvemaKostkami, 800);
    disableButtons();
}

function nekonecne_hazeni3() {
    hodTremiKostkami();
    setInterval(hodTremiKostkami, 800);
    disableButtons();
}

function stopThrowing() {
    Cookies.set("manually_stopped", true);
    window.location.reload();
    disableButtons();
}

function showStopButton() {
    document.getElementById("stop_button").style.visibility = "visible";
    document.getElementById("stop_button").style.animation = "0.6s stop_appear forwards"
    setTimeout(() => {
        document.getElementById("stop_button").style.animation = ""
    }, 720);
}

function toggleCzech() { // Aktuálně rozpracováno
    document.getElementById("page_title").innerHTML = "Házení kostek";
    document.getElementById("1die").innerHTML = "1 kostka";
    document.getElementById("2die").innerHTML = "2 kostky";
    document.getElementById("3die").innerHTML = "3 kostky";
    document.getElementById("infinite1").innerHTML = "Nekonecné házení 1 kostky";
    document.getElementById("infinite2").innerHTML = "Nekonecné házení 2 kostek";
    document.getElementById("infinite3").innerHTML = "Nekonecné házení 3 kostek";
    document.getElementById("sum_text").innerHTML = "Součet: ";
}

function animateNumberChange() {
    document.getElementById("value_text").style.animation = "0.5s number_change forwards";
    setTimeout(() => {
        document.getElementById("value_text").style.animation = "";
    }, 520);

    document.getElementById("sum_number").style.animation = "0.5s sum_number_change forwards";
    setTimeout(() => {
        document.getElementById("sum_number").style.animation = "";
    }, 520);
}

function disableButtons() {
    document.getElementById("1die").disabled = true;
    document.getElementById("2die").disabled = true;
    document.getElementById("3die").disabled = true;
    document.getElementById("infinite1").disabled = true;
    document.getElementById("infinite2").disabled = true;
    document.getElementById("infinite3").disabled = true;
}