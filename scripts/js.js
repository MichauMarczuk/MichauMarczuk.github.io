function adjustCardHeights() {
    const cards = document.querySelectorAll('.cardLink');
    let maxHeight = 0;

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = '';

      const cardHeight = card.getBoundingClientRect().height;
      const emToPx = parseFloat(getComputedStyle(card).fontSize); // Pobieranie rozmiaru czcionki dla jednej em w pikselach
      const heightToAdd = 11 * emToPx; // Obliczanie wysokości 11em w pikselach
      const newCardHeight = cardHeight + heightToAdd; // Dodawanie 11em do aktualnej wysokości
      if (newCardHeight > maxHeight) {
        maxHeight = newCardHeight;
      }
    });

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = maxHeight + 'px';
    });
  }

function adjustCalcHeights() {
    const cards = document.querySelectorAll('.calc-body');
    let maxHeight = 0;

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = '';

      const cardHeight = card.getBoundingClientRect().height;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = maxHeight + 'px';
    });
  }

function adjustTechHeights() {
    const cards = document.querySelectorAll('.tech-body');
    let maxHeight = 0;

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = '';

      const cardHeight = card.getBoundingClientRect().height;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = maxHeight + 'px';
    });
  }
/*
function adjustProjHeights() {
    const cards = document.querySelectorAll('.proj-body');
    let maxHeight = 0;

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = '';

      const cardHeight = card.getBoundingClientRect().height;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = maxHeight + 'px';
    });
  }
  window.addEventListener('load', adjustProjHeights);
  window.addEventListener('resize', adjustProjHeights);
  
  */
/*
function adjustxdHeights() {
    const cards = document.querySelectorAll('.xd');
    let maxHeight = 0;

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = '';

      const cardHeight = card.getBoundingClientRect().height;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    cards.forEach(card => {
      const cardBody = card.querySelector('.card-body');
      cardBody.style.height = maxHeight + 'px';
    });
  }


  
  window.addEventListener('load', adjustxdHeights);
  window.addEventListener('resize', adjustxdHeights);*/

  

  window.addEventListener('load', adjustTechHeights);
  window.addEventListener('resize', adjustTechHeights);


  window.addEventListener('load', adjustCardHeights);
  window.addEventListener('resize', adjustCardHeights);

  window.addEventListener('load', adjustCalcHeights);
  window.addEventListener('resize', adjustCalcHeights);

  const cardGroup = document.getElementById('cardGroup');
  


    window.addEventListener('DOMContentLoaded', (event) => {
      resizeImages();
    });

    window.addEventListener('resize', (event) => {
      resizeImages();
    });

    function resizeImages() {
      var carouselItems = document.querySelectorAll('.carousel-item');
      carouselItems.forEach(function(item) {
        var img = item.querySelector('img');
        var aspectRatio = img.naturalWidth / img.naturalHeight;
        var parentWidth = item.offsetWidth;
        var parentHeight = item.offsetHeight;

        if (parentWidth / parentHeight > aspectRatio) {
          img.style.width = '100%';
          img.style.height = 'auto';
        } else {
          img.style.width = 'auto';
          img.style.height = '100%';
        }
      });
    }