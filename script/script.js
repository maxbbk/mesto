let popup = document.querySelector('.popup');
let profileInfoButton = document.querySelector('.profile-info__button');
let popupBodyClose = document.querySelector('.popup-body__close');

function openPopup(event) {
    popup.classList.add('popup__opened')
}
profileInfoButton.addEventListener('click', openPopup);


function closePopup(event) {
    popup.classList.remove('popup__opened')
}
popupBodyClose.addEventListener('click', closePopup);