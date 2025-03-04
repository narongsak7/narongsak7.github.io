let wheelTexts = [];
const baseColors = ["#D6DF7E", "#187B25", "#FAA49A", "#C4391D"];

function shuffleColors(count) {
    let shuffledColors = [];
    let colorIndex = 0;

    for (let i = 0; i < count; i++) {
        shuffledColors.push(baseColors[colorIndex % baseColors.length]);
        colorIndex++;

        if (i > 0 && shuffledColors[i] === shuffledColors[i - 1]) {
            colorIndex++;
            shuffledColors[i] = baseColors[colorIndex % baseColors.length];
        }
    }

    return shuffledColors;
}

function addTextToWheel() {
    const inputText = document.getElementById("inputText").value.trim();
    if (inputText !== "") {
        wheelTexts.push(inputText);
        updateWheel();
        document.getElementById("inputText").value = "";

        document.getElementById("wheelContainer").style.display = "block";
        document.getElementById("spinButtonContainer").style.display = "block";
    }
}

function removeTextFromWheel(index) {
    if (index >= 0 && index < wheelTexts.length) {
        wheelTexts.splice(index, 1);
        updateWheel();
    }
}

function updateWheel() {
    const wheelElement = document.getElementById("wheel");
    wheelElement.innerHTML = "";

    if (wheelTexts.length === 0) return;

    const angleStep = 360 / wheelTexts.length;
    const colors = shuffleColors(wheelTexts.length);
    let gradientParts = [];

    wheelTexts.forEach((_, index) => {
        let startAngle = angleStep * index;
        let endAngle = angleStep * (index + 1);
        gradientParts.push(`${colors[index]} ${startAngle}deg ${endAngle}deg`);
    });

    wheelElement.style.background = `conic-gradient(${gradientParts.join(", ")})`;

    wheelTexts.forEach((text, index) => {
        const textElement = document.createElement("div");
        textElement.textContent = text;
        textElement.classList.add("wheel-text");

        const angle = angleStep * index;
        const radius = 85;
        const x = radius * Math.cos((angle + angleStep / 2) * (Math.PI / 180));
        const y = radius * Math.sin((angle + angleStep / 2) * (Math.PI / 180));

        textElement.style.position = "absolute";
        textElement.style.left = `calc(50% + ${x}px)`;
        textElement.style.top = `calc(50% - ${y}px)`;
        textElement.style.transform = `translate(-50%, -50%) rotate(${angle + angleStep / 2}deg)`;
        textElement.style.transformOrigin = "center";
        textElement.style.color = "white";
        textElement.style.fontSize = wheelTexts.length > 6 ? "12px" : "16px";
        textElement.style.textAlign = "center";
        textElement.style.whiteSpace = "nowrap";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "ลบ";
        deleteButton.style.position = "absolute";
        deleteButton.style.top = "0";
        deleteButton.style.right = "-20px";
        deleteButton.style.backgroundColor = "#f44336";
        deleteButton.style.color = "white";
        deleteButton.style.border = "none";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.display = "none";

        deleteButton.onclick = () => {
            removeTextFromWheel(index);
        };

        textElement.onmouseenter = () => {
            deleteButton.style.display = "block";
        };

        textElement.onmouseleave = () => {
            deleteButton.style.display = "none";
        };

        textElement.appendChild(deleteButton);
        wheelElement.appendChild(textElement);
    });
}

function spinWheel() {
    if (wheelTexts.length > 0) {
        let wheel = document.getElementById("wheel");
        let randomDegree = Math.floor(Math.random() * 360) + 1080;
        wheel.style.transition = "transform 3s ease-out";
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        setTimeout(() => {
            let winningIndex = Math.floor(((randomDegree % 360) / 360) * wheelTexts.length);
            let resultText = wheelTexts[winningIndex];

            // Show result text in the center of the screen
            let resultDiv = document.getElementById("resultText");
            let resultMessage = document.getElementById("resultMessage");
            resultMessage.textContent = ` ${resultText}`;
            resultDiv.style.display = "block";

            // Hide result after 3 seconds
            setTimeout(() => {
                resultDiv.style.display = "none";
            }, 3000);
        }, 3000);
    }
}
