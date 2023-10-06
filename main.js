// Load-Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        } else {
            entry.target.classList.remove("appear");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// Scroll Animation
const scrollAnimationElements = document.querySelectorAll(".scroll-animation");

const handleScrollAnimation = () => {
    scrollAnimationElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight / 2 && rect.bottom >= 0) {
            el.classList.add("appear");
        } else {
            el.classList.remove("appear");
        }
    });
};

window.addEventListener("scroll", handleScrollAnimation);


