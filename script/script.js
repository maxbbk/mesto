let popup = document.querySelector('.popup');
let profileButton = document.querySelector('.profile-info__button');
let popupClose = document.querySelector('.popup-container__close');
let popupContainerButton = document.querySelector('.popup-container__button')


let nameInput = document.querySelector('.popup-container__about_name_input');
let jobInput = document.querySelector('.popup-container__about_job_input');
let profileName = document.querySelector('.profile-info__name');
let profileDescription = document.querySelector('.profile-info__description');

let like = document.querySelector('.element-content__like')

function openPopup(event) {
    popup.classList.add('popup__opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;

}
profileButton.addEventListener('click', openPopup);

function closePopup(event) {
    popup.classList.remove('popup__opened')
}
popupClose.addEventListener('click', closePopup);

function addName(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
  }
  popupContainerButton.addEventListener('click', addName);


function likeActive(event) {
    like.classList.remove('element-content__like')
    like.classList.add('element-content__like_active')
}
like.addEventListener('click', likeActive)






  

