const submit1 = document.getElementById("submit1");
const submit2 = document.getElementById("submit2");
const info = document.getElementById("material-info");

submit1.addEventListener("click", function (event) {
    event.preventDefault();
    const worktype = document.getElementById("workType").value;
    const hours = document.getElementById("hours").value;
    const result = document.getElementById("result1");
    const danger = document.getElementById("danger1");
    if (hours !== "") {
        sum = 0;

        switch (worktype) {
            case "0":
                sum = hours * 100;
                break;
            case "1":
                sum = hours * 50;
                break;
            case "2":
                sum = hours * 60;
                break;
        }


        result.textContent = "Przybliżona cena takiej usługi wynosiłaby: " + sum + " PLN";
        danger.textContent = ""
    }
    else {
        result.textContent = "";
        danger.textContent = "Wypełnij wszystkie pola!"
    }
});

submit2.addEventListener("click", function (event) {
    event.preventDefault();

    var radioButtons = document.querySelectorAll("#materials input[name='opcja']");
    for (var i = 0; i < radioButtons.length; i++) {
        var radioButton = radioButtons[i];
        if (radioButton.checked) {
            var material = radioButton.value;
            console.log("Wybrana wartość:", material);
            break;
        }
    }


    const volume = document.getElementById("volume").value;
    const quality = document.getElementById("quality").value;
    const result = document.getElementById("result2");
    const danger = document.getElementById("danger2");
    if (material !== "" && volume !== "" && quality !== "") {
        const density = 1.35;
        switch (quality) {
            case "0":
                per1cm = 0.04;
                break;
            case "1":
                per1cm = 0.02;
                break;
            case "2":
                per1cm = 0.015;
                break;
        }

        switch (material) {
            case "PLA":
                perG = 0.1;
                markup = 3.0;
                break;
            case "PET":
                perG = 0.12;
                markup = 3.5;
                break;
            case "TPU":
                perG = 0.2;
                markup = 5.0;
                break;
        }

        weight = density * volume;

        sum = Math.round((perG * weight + per1cm * volume) * markup, 2);
        console.log(sum);
        if (sum < 50) {
            danger.innerHTML = "Przybliżona cena takiego wydruku wynosiłaby: " + sum + " PLN <br> Nie przyjmuję zamówień poniżej 50 PLN";
            result.textContent = "";
        } else {
            danger.textContent = "";
            result.textContent = "Przybliżona cena takiego wydruku wynosiłaby: " + sum + " PLN";
        }
    }
    else {
        result.textContent = "";
        danger.textContent = "Wypełnij wszystkie pola!"
    }
});

info.addEventListener("click", function (event) {
    event.preventDefault();

    alert("PLA jest wykonany z odnawialnych surowców, takich jak skrobia kukurydziana lub trzcina cukrowa. Jego główne zastosowania to prototypowanie, modele i elementy dekoracyjne. \n\nPET-G jest odporny na uderzenia i ma wysoką wytrzymałość na rozciąganie. PET-G jest higroskopijny, co oznacza, że może wchłaniać wilgoć z powietrza, co może wpływać na jakość druku. Materiał ten jest często stosowany do produkcji opakowań, elementów maszynowych i prototypów.\n\nTPU to elastyczny materiał, który ma zdolność do powrotu do swojego pierwotnego kształtu po odkształceniu. Jest miękki, wytrzymały i elastyczny, co sprawia, że jest idealny do drukowania elementów, takich jak uszczelki, obudowy ochronne i elementy amortyzujące.TPU jest również odporny na ścieranie i chemikalia.Zastosowania TPU obejmują branżę obuwniczą, medycynę, elektronikę oraz produkcję sportową i rekreacyjną.");

});