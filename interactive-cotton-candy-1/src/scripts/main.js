const cottonCandy = document.querySelector('.cotton-candy');
const colors = ['#b3e5fc', '#e1bee7', '#ffcdd2', '#c8e6c9', '#fff9c4'];
let colorIndex = 0;
let isLarge = false;
let isSquished = false;

cottonCandy.addEventListener('click', () => {
    // Change color
    colorIndex = (colorIndex + 1) % colors.length;
    cottonCandy.style.backgroundColor = colors[colorIndex];
});

cottonCandy.addEventListener('mouseover', () => {
    // Grow size
    if (!isLarge) {
        cottonCandy.style.transform = 'scale(1.2)';
        isLarge = true;
    }
});

cottonCandy.addEventListener('mouseout', () => {
    // Return to original size
    cottonCandy.style.transform = 'scale(1)';
    isLarge = false;
});

cottonCandy.addEventListener('mousedown', () => {
    // Squish shape
    if (!isSquished) {
        cottonCandy.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
        isSquished = true;
    } else {
        cottonCandy.style.borderRadius = '50% 50% 50% 50% / 60% 60% 40% 40%';
        isSquished = false;
    }
});