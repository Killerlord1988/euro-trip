// File modal.js
'use strict';

(function () {
  var modalTemplate = document.querySelector('#modal__buy')
    .content
    .querySelector('.modal');
  var modal = modalTemplate.cloneNode(true);

  var successTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  var success = successTemplate.cloneNode(true);

  var buyTour = document.querySelectorAll('.buy__tour');

  Object.keys(buyTour).forEach(function (btn) {
    buyTour[btn].addEventListener('click', function () {
      document.body.querySelector('main').prepend(modal);
      var modalBuy = document.body.querySelector('main .modal');
      var overlayArea = modalBuy.querySelector('.modal__overlay')
      var closeButton = modalBuy.querySelector('.modal__close');

      function removeModalClick() {
        modalBuy.parentNode.removeChild(modalBuy);
        overlayArea.removeEventListener('click', removeModalOverlayClick);
        closeButton.removeEventListener('click', removeModalClick);
        document.removeEventListener('keydown', removeModalPressEscape);
      };

      function removeModalOverlayClick(evt) {
        if (evt.target === overlayArea) {
          modalBuy.parentNode.removeChild(modalBuy);
          overlayArea.removeEventListener('click', removeModalOverlayClick);
          closeButton.removeEventListener('click', removeModalClick);
          document.removeEventListener('keydown', removeModalPressEscape);
        }
      };

      function removeModalPressEscape(evt) {
        if (evt.key === 'Escape') {
          modalBuy.parentNode.removeChild(modalBuy);
          overlayArea.removeEventListener('click', removeModalOverlayClick);
          closeButton.removeEventListener('click', removeModalClick);
          document.removeEventListener('keydown', removeModalPressEscape);
        }
      };

      overlayArea.addEventListener('click', removeModalOverlayClick);
      closeButton.addEventListener('click', removeModalClick);
      document.addEventListener('keydown', removeModalPressEscape);
    })
  })






})();
