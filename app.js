
let model = {
  selectedCat: null,
  cats: [
    {
    name: 'Cat Nip',
    location: 'catNip.jpg',
    clicks:0
    },
    {
      name: 'Champagne Cat',
      location: 'champagneCat.jpg',
      clicks:0
    },
    {
      name: 'Hidden Cat',
      location: 'hiddenCat.jpg',
      clicks:0
    },
    {
      name: 'Kitten',
      location: 'kitten.jpg',
      clicks:0
    },
    {
      name: 'Salvia Cat',
      location: 'salviaCat.jpg',
      clicks:0
      }
  ]
};

let viewCat = {
  init: function(){
    this.catElement = document.getElementById('cat');
    this.catNameElement = document.getElementById('catName');
    this.catCountElement = document.getElementById('catCount');
    this.catImageElement = document.getElementById('catImage');
    this.catImageElement.addEventListener('click', function(){
      octopus.clickCounter();
    });
    this.render();
  },
  render: function() {
    var currentCat = octopus.getSelectedCat();
    this.catCountElement.textContent = currentCat.clicks;
    this.catNameElement.textContent = currentCat.name;
    this.catImageElement.src = currentCat.location;
  }
};

let viewList = {
  init: function() {
    this.catListElement = document.getElementById('catList');
    this.render();
  },
  render: function() {
    var cat, elem, i;
    var cats = octopus.getCats();
    this.catListElement.innerHTML = '';
    for(i=0; i<cats.length; i++) {
      cat = cats[i];
      element = document.createElement('li');
      element.textContent = cat.name;
      element.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setSelectedCat(catCopy);
          viewCat.render();
        };
      })(cat));
      this.catListElement.appendChild(element);
    }
  }
};

let octopus = {
init: function() {
  model.selectedCat = model.cats[0];
  viewCat.init();
  viewList.init()
},
getSelectedCat: function() {
  return model.selectedCat;
},
getCats: function() {
  return model.cats;
},
setSelectedCat: function(cat) {
  model.selectedCat = cat;
},
clickCounter: function() {
  model.selectedCat.clicks++;
  viewCat.render();
}
};
octopus.init();
