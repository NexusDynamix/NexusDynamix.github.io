let currentCard = {
    bueno: 0,
    calor: 0,
    nublado: 0
};

const cardData = {
    bueno: [
        { icon: "😊", status: "Bueno", value: "44", type: "PM2.5" },
        { icon: "😐", status: "Medio", value: "27", type: "PM2.5" },
        { icon: "☹️", status: "Bajo", value: "10", type: "PM2.5" }
    ],
    calor: [
        { icon: "🌡️", status: "Calor", value: "38°", temp: "100.4°F / 242.55 K" },
        { icon: "🌡️", status: "Moderado", value: "30°", temp: "86°F / 303.15 K" },
        { icon: "🌡️", status: "Frío", value: "20°", temp: "68°F / 293.15 K" }
    ],
    nublado: [
        { icon: "☁️", status: "Nublado" },
        { icon: "🌥️", status: "Medio nublado" },
        { icon: "🌧️", status: "Lluvia ligera" }
    ]
};

function showNextCard(type) {
    currentCard[type] = (currentCard[type] + 1) % cardData[type].length;
    const card = document.querySelector(`.${type}`);
    const data = cardData[type][currentCard[type]];

    card.querySelector(".icon").textContent = data.icon;
    card.querySelector(".status").textContent = data.status;
    
    if (data.value) {
        if (!card.querySelector(".value")) {
            const valueElement = document.createElement("p");
            valueElement.classList.add("value");
            card.querySelector(".info").appendChild(valueElement);
        }
        card.querySelector(".value").textContent = data.value;
    } else {
        if (card.querySelector(".value")) {
            card.querySelector(".value").remove();
        }
    }

    if (data.type) {
        if (!card.querySelector(".type")) {
            const typeElement = document.createElement("p");
            typeElement.classList.add("type");
            card.querySelector(".info").appendChild(typeElement);
        }
        card.querySelector(".type").textContent = data.type;
    } else {
        if (card.querySelector(".type")) {
            card.querySelector(".type").remove();
        }
    }

    if (data.temp) {
        if (!card.querySelector(".temp")) {
            const tempElement = document.createElement("p");
            tempElement.classList.add("temp");
            card.querySelector(".info").appendChild(tempElement);
        }
        card.querySelector(".temp").textContent = data.temp;
    } else {
        if (card.querySelector(".temp")) {
            card.querySelector(".temp").remove();
        }
    }
}


function makeCall(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}
