// File tabs.js
'use strict';

(function () {
  var countryAboutButton = document.querySelectorAll('.country-about__btn');
  var countryInfoBlock = document.querySelectorAll('.country-about__info-block');

  function addClassHidden () {
    Object.keys(countryInfoBlock).forEach(function(el) {
      countryInfoBlock[el].classList.add('country-about__info-block-hidden');
    })
  }

  Object.keys(countryAboutButton).forEach(function(el) {
    countryAboutButton[el].addEventListener('change', function () {
      addClassHidden ()
      countryInfoBlock[el].classList.remove('country-about__info-block-hidden');
    })
  })
})();
