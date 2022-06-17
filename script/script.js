let popup = document.querySelector('.popup');
let profileInfoButton = document.querySelector('.profile-info__button');
let popupBodyClose = document.querySelector('.popup-container__close');
let popupContainerButton = document.querySelector('.popup-container__button')


let nameInput = document.querySelector('.popup-container__about_name_input');
let jobInput = document.querySelector('.popup-container__about_job_input');
let profileName = document.querySelector('.profile-info__name');
let profileDescription = document.querySelector('.profile-info__description');


function openPopup(event) {
    nameInput.textContent = profileName;
    jobInput.textContent = profileDescription;
    popup.classList.add('popup__opened')
}
profileInfoButton.addEventListener('click', openPopup);

function closePopup(event) {
    popup.classList.remove('popup__opened')
}
popupBodyClose.addEventListener('click', closePopup);

function addName(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
  }
  popupContainerButton.addEventListener('click', addName);

let like = document.querySelector('.element-content__like')
function likeActive(event) {
    like.classList.remove('element-content__like')
    like.classList.add('element-content__like_active')
}
like.addEventListener('click', likeActive)






  

