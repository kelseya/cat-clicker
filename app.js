const kittenClickCounter = document.querySelector('#kittenClicks');
const hiddenCatClickCounter = document.querySelector('#hiddenCatClicks');
const kittenPhoto = document.querySelector('#kitten');
const hiddenCatPhoto = document.querySelector('#hiddenCat')
let kittenClicks = 0;
let hiddenCatClicks = 0;

kittenPhoto.addEventListener('click', function(){
  kittenClicks = kittenClicks+1;
  kittenClickCounter.innerText = kittenClicks
});

hiddenCatPhoto.addEventListener('click', function(){
  hiddenCatClicks = hiddenCatClicks+1;
  hiddenCatClickCounter.innerText = hiddenCatClicks
})

const catName1 = document.querySelector('.kitten')
catName1.innerText = 'Kitten ';
const catName2 = document.querySelector('.hiddenCat')
catName2.innerText = 'Hidden Cat ';
