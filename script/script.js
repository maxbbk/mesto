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


let like = document.querySelector('.element-content__like')
function likeActive(event) {
    like.classList.remove('element-content__like')
    like.classList.add('element-content__like_active')
}

like.addEventListener('click', likeActive)




let profileInfo = document.querySelector('.profile-info');
let popupContainerButton = document.querySelector('.popup-container__button')

function addName() {
    let name = document.querySelector('.popup-container__name');
    let about = document.querySelector('.popup-container__about');

    let profileInfoName = document.querySelector('.profile-info__name');
    let profileInfoDescription = document.querySelector('.profile-info__description');
  
    profileInfoName.textContent = `${name.value}`;
    profileInfoDescription.textContent = `${about.value}`;
   
    name.value = '';
    about.value = '';
    
    
    closePopup()
  }
  popupContainerButton.addEventListener('click', addName);

