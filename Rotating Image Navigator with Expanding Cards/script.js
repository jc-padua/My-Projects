const circle = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
const card = document.querySelectorAll('.card');

const rotatingCircle = document.querySelector('.rotating-circle');
const navCircle = document.querySelectorAll('.nav-circle');
const defCircle = document.querySelector('.default-circle');

function getImage() {
    const imgArr = [];
    card.forEach((el, idx) => {
        const image = el.style.backgroundImage;
        imgArr.push(image);
    })
    navCircle.forEach((el, idx) => {
        el.style.backgroundImage = `${imgArr[idx]}`
    })
}
getImage();

//Selecting Image  => Rotating Nav

navCircle.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        if (idx === 0) {
            rotatingCircle.style.transform = 'rotate(55deg)';
            cardFlex(0);
        } else if (idx === 1) {
            rotatingCircle.style.transform = 'rotate(30deg)';
            cardFlex(1);
        } else if (idx === 2) {
            rotatingCircle.style.transform = 'rotate(-28deg)';
            cardFlex(2);
        } else if (idx === 3) {
            rotatingCircle.style.transform = 'rotate(-55deg)';
            cardFlex(3);

        }
    })
})

defCircle.addEventListener('click', () => {
    rotatingCircle.style.transform = 'rotate(1deg)';
    card.forEach(card => {
        card.classList.add('active-card');
    })
})


//Default Look of Cards
card.forEach(card => {
    card.classList.add('active-card');
})

//Card Animations 
function removeActiveCard() {
    card.forEach((card) => {
        card.classList.remove('active-card')
    })
}

function cardFlex(idx) {
    removeActiveCard();
    card.forEach((card, cardIndex) => {
        if (cardIndex === idx) {
            card.classList.add('active-card');
        }
    })
}

