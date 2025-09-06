// common function
function getElementID(id){
    const element = document.getElementById(id)
    return element;
}


const redHeartIcon = getElementID('red-heart-icon');
const cardBtns = document.getElementsByClassName('card-btn')

for(let cardButtons of cardBtns){
    cardButtons.addEventListener('click', function(){
        const redHeartValue = (redHeartIcon.innerText) = parseInt(redHeartIcon.innerText) + 1;
    })
}