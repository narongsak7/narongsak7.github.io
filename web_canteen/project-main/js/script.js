// script.js

// ฟังก์ชัน randomFood() ที่จะถูกเรียกเมื่อคลิกปุ่ม
function randomFood() {
    document.getElementById("loading").style.display = "block";
    document.getElementById("foodContainer").style.display = "none";
    
    setTimeout(() => {
        const foods = [
            { name: "ข้าวผัด", img: "https://s359.kapook.com/pagebuilder/d0b8a629-aded-4ff0-b623-6511bc54fb52.jpg" },
            { name: "ก๋วยเตี๋ยวน้ำตก", img: "https://eknoodle.com/wp-content/uploads/2022/12/44.jpg" },
            { name: "คะน้าหมูกรอบ", img: "https://www.deksomboon.com/thumb.html?w=900&h=450&src=media_center/recipe/2016/4/4/749/recipe749201604046334.jpg&type=auto" },
            { name: "ผัดไทย", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/375px-Phat_Thai_kung_Chang_Khien_street_stall.jpg" },
            { name: "ข้าวมันไก่", img: "https://thainipponfoods.com/wp-content/uploads/2022/05/rice-steamed-with-chicken-breast-2.jpg" },
            { name: "ส้มตำ", img: "https://www.eatecon.com/wp-content/uploads/2019/09/papaya-salad-g476c5fb29_1920-1536x1152.jpg" },
            { name: "ผัดกระเพรา", img: "https://f.ptcdn.info/864/083/000/sc4sjl1ufh2Gu8dTX1BnJ-o.jpg" },
            { name: "ราดหน้า", img: "https://food.mthai.com/app/uploads/2017/07/noodle-with-pork-in-gravy.jpg" },
            { name: "ผัดซีอิ๊ว", img: "https://s359.kapook.com//pagebuilder/09a92003-6eb9-4d67-b0b5-5334af7bc019.jpg" },
            { name: "ข้าวหมูแดง", img: "https://17513napaporn.wordpress.com/wp-content/uploads/2016/12/281f53e1d46e4fbea3e187a755a58254.jpg" },
            { name: "ข้าวหมูกรอบ", img: "https://www.thammculture.com/wp-content/uploads/2022/02/Untitled-172.jpg" },
            { name: "ข้าวขาหมู", img: "https://mpics.mgronline.com/pics/Images/567000008813603.JPEG" },
        ];

        let randomIndex = Math.floor(Math.random() * foods.length);
        document.getElementById("foodName").textContent = foods[randomIndex].name;
        document.getElementById("foodImage").src = foods[randomIndex].img;

        document.getElementById("loading").style.display = "none";
        document.getElementById("foodContainer").style.display = "block";
        document.getElementById("foodContainer").classList.add("show");
    }, 1500);
}
