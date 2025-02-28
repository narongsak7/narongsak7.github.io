fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.querySelector("h2").textContent = data.title;
    const container = document.getElementById("data-list");

    data.cards.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      // ตรวจสอบว่ารูปโหลดได้หรือไม่
      const img = document.createElement("img");
      img.src = item.imgUrl;
      img.alt = item.title;
      img.onerror = function () {
        img.src = "fallback-image.jpg"; // ใช้รูปภาพสำรองถ้าโหลดไม่ได้
      };

      card.innerHTML = `
        <h3>${item.title}</h3>
        <p><strong>หมวดหมู่:</strong> ${item.category}</p>
        <p>${item.detail}</p>
        <a href="${item.newsUrl}">ดูเพิ่มเติม</a>
      `;

      card.prepend(img); // เพิ่มรูปภาพไว้ด้านบนของการ์ด
      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
  function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px") {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-250px";
    }
  }


  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(updateCanteenTitle, 100); // หน่วงเวลา 100ms เพื่อให้ DOM โหลดครบก่อน
});

function updateCanteenTitle() {
    let pageTitle = document.title.trim(); // ดึงชื่อของหน้าเว็บ
    let titleElement = document.getElementById("canteen-title");

    if (titleElement) { // เช็คว่ามี `<h2 id="canteen-title">` อยู่จริง
        if (pageTitle.includes("วิศวะโรง A")) {
            titleElement.textContent = "วิศวะโรง A";
        } else if (pageTitle.includes("วิศวะโรง B")) {
            titleElement.textContent = "วิศวะโรง B";
        } else if (pageTitle.includes("วิศวะโรง C")) {
            titleElement.textContent = "วิศวะโรง C";
        } else {
            titleElement.textContent = "โรงอาหารคณะวิทยาศาสตร์";
        }
    }
}
