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

function animateNumberChange() {
    document.getElementById("value_text").style.animation = "0.5s number_change forwards";

    setTimeout(() => {
        document.getElementById("value_text").style.animation = "";
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

function darkMode() {
    dark_mode_button = document.getElementById("dark_mode_button");
    dark_mode_button.remove();
    
    document.body.style.animation = "1.2s dark_mode_change forwards";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    document.getElementById("value_box").style.animation = "1.2s dark_mode_valuebox_change forwards";
    document.getElementById("value_text").style.animation = "1.2s dark_mode_valuetext_change forwards";
    document.getElementById("stop_button").style.background = "repeating-linear-gradient(-55deg, #f21d1f, #f21d1f 7px, #1c0000 7px, #1c0000 13px)";
    document.getElementById("revamped_language_button").style.animation = "1.2s dark_mode_languagebutton_change forwards";
    document.getElementById("selected_language_button").style.animation = "1.2s dark_mode_selectedlanguagebutton_change forwards";

    document.getElementById("labs_icon").src = "images/experiment_tube_white.svg";
    document.getElementById("back_text").style.color = "#8d8df1";

    
    setTimeout(() => {
        document.getElementById("value_box").style.animation = "";
        document.getElementById("value_box").style.backgroundColor = "white";

        document.getElementById("value_text").style.animation = "";
        document.getElementById("value_text").style.color = "black";

        document.getElementById("selected_language_button").style.backgroundColor = "#2e2e2e";
    }, 1201);

    const elements = document.querySelectorAll(".ui-button");
    for (const element of elements) {
        element.style.animation = "1.2s dark_mode_button_change forwards";
    }
}

function changeToCzech() {
    document.getElementById("selected_language_button").style.animation = "0.3s language_indicator_change_toCzech forwards";
    document.getElementById("page_title").innerHTML = "Házení-Kostek";
    document.getElementById("1die").innerHTML = "1 kostka";
    document.getElementById("2die").innerHTML = "2 kostky";
    document.getElementById("3die").innerHTML = "3 kostky";
    document.getElementById("infinite1").innerHTML = "Nekonecné házení 1 kostky";
    document.getElementById("infinite2").innerHTML = "Nekonecné házení 2 kostek";
    document.getElementById("infinite3").innerHTML = "Nekonecné házení 3 kostek";
    document.getElementById("sum_text").innerHTML = "Součet: ";
    document.getElementById("sum_number").style.marginLeft = "7rem";
}

function changeToEnglish() {
    document.getElementById("selected_language_button").style.animation = "0.3s language_indicator_change_toEnglish forwards";
    document.getElementById("page_title").innerHTML = "Dice-Roll";
    document.getElementById("1die").innerHTML = "1 die";
    document.getElementById("2die").innerHTML = "2 dice";
    document.getElementById("3die").innerHTML = "3 dice";
    document.getElementById("infinite1").innerHTML = "Infinitely roll 1";
    document.getElementById("infinite2").innerHTML = "Infinitely roll 2";
    document.getElementById("infinite3").innerHTML = "Infinitely roll 3";
    document.getElementById("sum_text").innerHTML = "Sum: ";
    document.getElementById("sum_number").style.marginLeft = "4.2rem";
}