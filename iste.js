document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const originalPriceElement = card.querySelector('.original-price');
        const discountedPriceElement = card.querySelector('.discounted-price');

        if (originalPriceElement && discountedPriceElement) {
            const imageContainer = card.querySelector('.image');
            const saleBadge = document.createElement('div');
            saleBadge.className = 'sale';
            saleBadge.textContent = 'Sale!';
            imageContainer.appendChild(saleBadge);
        }
    });
}); 
