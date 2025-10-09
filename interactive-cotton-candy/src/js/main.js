// This file contains the JavaScript code that handles user interactions with the cotton candy.

document.addEventListener('DOMContentLoaded', () => {
    const cottonCandy = document.getElementById('cotton-candy');

    // Function to change the size of the cotton candy
    function changeSize() {
        const newSize = Math.random() * 100 + 50; // Random size between 50px and 150px
        cottonCandy.style.width = `${newSize}px`;
        cottonCandy.style.height = `${newSize}px`;
    }

    // Function to change the color of the cotton candy
    function changeColor() {
        const colors = ['#B2E0E6', '#FFB2D1', '#FFD700', '#FF69B4', '#87CEFA'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        cottonCandy.style.backgroundColor = randomColor;
    }

    // Function to change the shape of the cotton candy
    function changeShape() {
        const shapes = ['50%', '0%']; // Cloud shape and round shape
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        cottonCandy.style.borderRadius = randomShape;
    }

    // Event listeners for user interactions
    cottonCandy.addEventListener('click', () => {
        changeSize();
        changeColor();
        changeShape();
    });
});