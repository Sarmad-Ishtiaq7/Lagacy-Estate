// Sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// FAQs Section
function toggleFAQ(element) {
    let parentBox = element.parentElement;
    parentBox.classList.toggle("active");

    let answer = parentBox.querySelector(".faq-answer");
    if (parentBox.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
        answer.style.maxHeight = "0";
    }
}
// swiper slider
document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".swiper", {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// Tabs
function showPackage(index) {
    let packages = document.querySelectorAll(".package-card");
    let tabs = document.querySelectorAll(".tab-card");

    packages.forEach(pkg => pkg.classList.remove("active"));
    tabs.forEach(tab => tab.classList.remove("active"));

    packages[index].classList.add("active");
    tabs[index].classList.add("active");
}