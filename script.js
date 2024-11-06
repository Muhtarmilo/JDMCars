document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carCards = document.querySelectorAll('.car-card');
    let currentIndex = 0;
    const totalCards = carCards.length;

    // Otomatik geçiş fonksiyonu
    function showNextCard() {
        currentIndex = (currentIndex + 1) % totalCards;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Her 3 saniyede bir geçiş yap
    let autoSlide = setInterval(showNextCard, 3000);

    // Fare kartlar üzerindeyken duraklat
    carouselInner.addEventListener('mouseover', () => clearInterval(autoSlide));

    // Fareyi kartlardan çektiğinde devam et
    carouselInner.addEventListener('mouseleave', () => {
        autoSlide = setInterval(showNextCard, 3000);
    });
});

