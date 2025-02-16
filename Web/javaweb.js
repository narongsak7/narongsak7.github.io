const storeList = document.getElementById("store-list");

stores.forEach((store, index) => {
    const storeCol = document.createElement("div");
    storeCol.className = "col-md-6 mb-4";

    let storeContent = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">
                    <a href="store${index + 1}_menu.html" class="text-decoration-none">${store.name}</a>
                </h5>
                <p class="card-text">${store.description}</p>
                <p><strong>ที่ตั้ง: </strong>${store.location}</p>
                <a href="store${index + 1}_menu.html" class="btn btn-primary">ดูเมนู</a>
            </div>
        </div>
    `;
    storeCol.innerHTML = storeContent;
    storeList.appendChild(storeCol);
});