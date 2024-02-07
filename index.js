const yes = document.querySelector("#yes-btn")

yes.addEventListener("click",function(){
    window.location.href = "./bot.html"
});

const moveButton = document.getElementById('no-btn');

moveButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - moveButton.offsetWidth;
    // window.innerwidth is a property of a window that says that it is the inner widht of the screen or of the window means it excluded the things like scrolling
    // moveButton is presumably a reference to an HTML element, likely a button.
    //offsetWidth is a property of HTML elements that gives the width of the element, including its padding and border but excluding margins.
    const maxY = window.innerHeight - moveButton.offsetHeight;

    moveButton.style.left = `${getRandomPosition(maxX)}px`;
    moveButton.style.top = `${getRandomPosition(maxY)}px`;
    // $ is used to make a string or say the function inside it if it change then  the string will change
});

function getRandomPosition(max) {
    const position = Math.random() * (max - 50); // Adjusted to prevent going too close to the edges
    return position;
}