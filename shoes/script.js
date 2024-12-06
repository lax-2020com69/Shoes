document.addEventListener('DOMContentLoaded', () => {
    // Select the thumbnail images and the main image element
    const thumbnails = document.querySelectorAll('.thumb li');
    const mainImage = document.querySelector('.imgbox img');
    const sizeItems = document.querySelectorAll('.sizes li');

    // Add click event to each thumbnail to change the main image
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Remove the 'active' class from all thumbnails
            thumbnails.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked thumbnail
            thumbnail.classList.add('active');
            // Change the main image source to the clicked thumbnail's image
            mainImage.src = thumbnail.querySelector('img').src;
            mainImage.style.transform = 'scale(1.05)'; // Optional: added scale effect for main image
        });
    });

    // Add click event to each size item to select a size
    sizeItems.forEach(size => {
        size.addEventListener('click', () => {
            // Remove the 'active' class from all size items
            sizeItems.forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked size item
            size.classList.add('active');
        });
    });

    // Add hover effect to the main image for better interactivity
    mainImage.addEventListener('mouseover', () => {
        mainImage.style.transform = 'scale(1.1)';
        mainImage.style.transition = 'transform 0.3s';
    });

    mainImage.addEventListener('mouseout', () => {
        mainImage.style.transform = 'scale(1.0)';
    });

    // Optional: Add a smooth scroll effect when clicking the "Add to Cart" button
    const addToCartButton = document.querySelector('.btn');
    addToCartButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the default action (e.g., navigating to a new page)
        alert('Item added to cart!');
        // Additional code can be added here for more functionality, like updating a cart summary.
    });
});
