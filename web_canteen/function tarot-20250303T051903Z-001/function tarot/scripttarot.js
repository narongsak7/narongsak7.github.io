document.addEventListener('DOMContentLoaded', function() {
    const rollButton = document.getElementById('rollButton');
    const resultDiv = document.getElementById('result');
    const title = document.getElementById('title');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    hamburgerMenu.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    rollButton.addEventListener('click', function() {
        fetch('datatarot.json')
            .then(response => response.json())
            .then(data => {
                const siamSi = data.siamSi;
                const foods = data.foods;

                const siamSiIndex = Math.floor(Math.random() * siamSi.length);
                const foodIndex = Math.floor(Math.random() * foods.length);

                const result = `
                    <img src="${foods[foodIndex].image}" alt="${foods[foodIndex].name}">
                    <p>ผลเซียมซี: ${siamSi[siamSiIndex]}</p>
                    <p>อาหารมงคลวันนี้: ${foods[foodIndex].name}</p>
                `;
                resultDiv.innerHTML = result;
                resultDiv.classList.add('result-card');
                resultDiv.classList.remove('hidden');
                resultDiv.style.marginTop = '50px'; // เพิ่ม margin-top ให้กับการ์ด
                title.style.display = 'none';
                rollButton.style.display = 'none';
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});