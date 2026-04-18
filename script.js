// تأكيد تشغيل JavaScript
console.log("Abdulaziz CV Website Loaded 🚀");


// 🔥 زر يظهر رسالة
function showMessage() {
    document.getElementById("msg").innerText =
        "Welcome to Abdulaziz CV Website 🚀";
}


// 🔥 زر تغيير الوضع (Dark Mode)
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}


// 🔥 تأثير دخول الصفحة (Animation)
window.onload = function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";

        setTimeout(() => {
            section.style.transition = "0.6s";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 200);
    });
};
