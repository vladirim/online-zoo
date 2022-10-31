/* Nav button color update */

const aboutButton = document.querySelector('.about');
const mapButton = document.querySelector('.map');
const zoosButton = document.querySelector('.zoos');
const donateButton = document.querySelector('.donate');
const contactUsButton = document.querySelector('.contact-us');

function updateNavButtonColor(currentButton) {

    if (currentButton === 'aboutButton') {
        aboutButton.classList.add('active-nav-button');
        mapButton.classList.remove('active-nav-button');
        zoosButton.classList.remove('active-nav-button')
        donateButton.classList.remove('active-nav-button')
        contactUsButton.classList.remove('active-nav-button')

    }
    else if (currentButton === 'mapButton') {
        mapButton.classList.add('active-nav-button');
        aboutButton.classList.remove('active-nav-button');
        zoosButton.classList.remove('active-nav-button')
        donateButton.classList.remove('active-nav-button')
        contactUsButton.classList.remove('active-nav-button')
    }
    else if (currentButton === 'zoosButton') {
        zoosButton.classList.add('active-nav-button');
        aboutButton.classList.remove('active-nav-button')
        mapButton.classList.remove('active-nav-button');
        donateButton.classList.remove('active-nav-button')
        contactUsButton.classList.remove('active-nav-button')
    }
    else if (currentButton === 'donateButton') {
        donateButton.classList.add('active-nav-button');
        aboutButton.classList.remove('active-nav-button')
        mapButton.classList.remove('active-nav-button');
        zoosButton.classList.remove('active-nav-button')
        contactUsButton.classList.remove('active-nav-button')
    }
    else if (currentButton === 'contactUsButton') {
        contactUsButton.classList.add('active-nav-button');
        aboutButton.classList.remove('active-nav-button')
        mapButton.classList.remove('active-nav-button');
        zoosButton.classList.remove('active-nav-button')
        donateButton.classList.remove('active-nav-button')
    }

}

aboutButton.addEventListener('click', () => updateNavButtonColor('aboutButton'));
mapButton.addEventListener('click', () => updateNavButtonColor('mapButton'));
zoosButton.addEventListener('click', () => updateNavButtonColor('zoosButton'));
donateButton.addEventListener('click', () => updateNavButtonColor('donateButton'));
contactUsButton.addEventListener('click', () => updateNavButtonColor('contactUsButton'));


/* Copyright button color update */

const copyrightButton = document.querySelector('.copyright');

function addCoyrightButton() {
    copyrightButton.classList.add('active-nav-button');
  }

copyrightButton.addEventListener('click', addCoyrightButton);

const roundButton = document.querySelector('.round__button');

function addRoundtButtonGreen() {
    roundButton.classList.add('button-green');
  }

  roundButton.addEventListener('click', addRoundtButtonGreen);

