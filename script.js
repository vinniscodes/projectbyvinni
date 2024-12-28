let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

function moveCarousel() {
    if (currentIndex >= items.length) {
        currentIndex = 0; // Reseta para o primeiro item se alcançar o final
    }
    const offset = -currentIndex * (items[0].clientWidth + 30); // Calcula o deslocamento
    carousel.style.transform = `translateX(${offset}px)`; // Move o carrossel
    currentIndex++;
}

setInterval(moveCarousel, 10000); 
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 50000); // Muda a imagem a cada 5 segundos
}

function plusSlides(n) {
    slideIndex += n - 1;  // Ajusta o índice manualmente
    showSlides();
}
