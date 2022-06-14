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
  
    profileInfo.innerHTML = `
          <p class="profile-info__name">${name.value}</p>
          <p class="profile-info__description">${about.value}</p>
          <button class="profile-info__button"><img src="./images/pen.png"></button>
        `;
    name.value = '';
    about.value = '';
  }
  popupContainerButton.addEventListener('click', addName);