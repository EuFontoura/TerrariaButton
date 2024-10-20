let button = document.getElementById('btn');
let overlay = document.getElementById('background-overlay');
let bottomImage = document.getElementById('background-bottom');

button.addEventListener('mouseover', function() {
    overlay.classList.add('image-hover');
});

button.addEventListener('mouseout', function() {
    document.body.classList.remove('image-hover');
});

button.addEventListener('click', function() {
    overlay.classList.add('fade-out');
    setTimeout(() => {
        bottomImage.classList.add('active'); 
        overlay.classList.remove('active');
        button.style.backgroundImage = "URL('./imgs/hellbtn.gif')";
    }, 500);
});
