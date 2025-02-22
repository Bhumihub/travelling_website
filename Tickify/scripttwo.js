// Dynamic text animation
const dynamicText = document.querySelector('.dynamic-text');
const textArray = ['wanna', 'book', 'ticket', 'noww..'];
let textIndex = 0;

function changeText() {
    dynamicText.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

// Change text every 2 seconds
setInterval(changeText, 2000);

// Modal functionality
const modal = document.getElementById('modal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});