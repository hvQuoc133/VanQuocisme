
document.addEventListener("DOMContentLoaded", function () {
    const numStars = 100; // Số lượng sao

    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement("div");
        star.className = "shooting_star";
        document.body.appendChild(star);

        const randomX = Math.random();
        const randomY = Math.random();

        star.style.left = `${randomX * 100}vw`;
        star.style.top = `${randomY * 100}vh`;

        const animationDuration = 10 + Math.random() * 15; // Điều chỉnh thời gian rơi
        star.style.animation = `shooting ${animationDuration}s linear infinite`;

        // Tạo đuôi sao
        const tail = document.createElement("div");
        tail.className = "tail";
        star.appendChild(tail);
    }
});

function redirectToFacebook() {
    // Lấy đường dẫn từ thẻ a
    var facebookLink = "https://www.facebook.com/quochom11111/"; // Thay thế bằng đường dẫn thực tế nếu cần
    
    // Chuyển hướng đến trang Facebook
    window.open(facebookLink, "_blank");
}

function redirectToTiktok() {
    // Lấy đường dẫn từ thẻ a
    var tiktokLink = "https://www.tiktok.com/@tra1nheartnet1"; // Thay thế bằng đường dẫn thực tế nếu cần
    
    // Chuyển hướng đến trang Facebook
    window.open(tiktokLink, "_blank");
}

function redirectToInstagram() {
    // Lấy đường dẫn từ thẻ a
    var instagramLink = "https://www.instagram.com/vquoc.113/"; // Thay thế bằng đường dẫn thực tế nếu cần
    
    // Chuyển hướng đến trang Facebook
    window.open(instagramLink, "_blank");
}

function redirectToGithub() {
    // Lấy đường dẫn từ thẻ a
    var githubLink = "https://github.com/hvQuoc133"; // Thay thế bằng đường dẫn thực tế nếu cần
    
    // Chuyển hướng đến trang Facebook
    window.open(githubLink, "_blank");
}