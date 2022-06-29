const profileInfoButton = document.querySelector('.profile-info__button');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup-container');
const popupContainerButton = document.querySelector('.popup-container__button');
const popupClose = document.querySelector('.popup-container__close');
const nameInput = document.querySelector('.popup-container__about_name_input');
const jobInput = document.querySelector('.popup-container__about_job_input');
const profileName = document.querySelector('.profile-info__name');
const profileDescription = document.querySelector('.profile-info__description');
const popupItem = document.querySelector('.popup-item');
const profileButton = document.querySelector('.profile__button');
const templateElement = document.querySelector('.template-element').content;
const elements = document.querySelector('.elements');
const newItemButton = document.querySelector('.new-item__button');
const newItemName = document.querySelector('.new-item__about_name_input');
const newItemLink = document.querySelector('.new-item__about_job_input');
const newItem = document.querySelector('.new-item');
const popupAddImgClose = document.querySelector('.new-item__close');
const handleHopupImgClose = document.querySelector('.body-img__close');
                        /* Открыть попап добавления карт */
function OpenInfoPopup(event) {
    popupItem.classList.add('popup-item__opened');
}
                        /**Popup info */
function openPopup(event) {
    popup.classList.add('popup__opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
                    /* Форма добавления профайла */
function addName(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
  }
                    /* Закрыть попап рекдатора профайла*/
  function closePopup(event) {
    popup.classList.remove('popup__opened');
}
                        /* Рендеринг */
/*const renderItems = () => {
    initialCards.forEach(twofunction);
}*/

/* const renderItem = (text) => {  
    const templateClone = templateElement.cloneNode(true);
        templateClone.querySelector('.element-content__text').textContent = text.title;
        templateClone.querySelector('.element__img').src = text.link;
        templateClone.querySelector('.element__img').alt = text.alt;
    setEventListener(templateClone);
    elements.prepend(templateClone)
} */

function createCard (text) {
    const templateClone = templateElement.cloneNode(true);
        templateClone.querySelector('.element-content__text').textContent = text.title;
        templateClone.querySelector('.element__img').src = text.link;
        templateClone.querySelector('.element__img').alt = text.alt;
    setEventListener(templateClone);
    return templateClone;
}

function renderCard (item) {
    elements.prepend(item);
}

initialCards.forEach((eee) => {
    renderCard(createCard (eee));
});

                         /* Добавление пользовательской карточки */
const addCard = (event) => {
    event.preventDefault();
    renderCard(createCard({title:  newItemName.value, link: newItemLink.value, alt: newItemName.value}));
    addImgClose();
}
                        /* Очистка формы */
function clearInputForm () {
    newItemName.value = '';
    newItemLink.value = '';
}
                        /* Слушатели */
function setEventListener (templateClone) {
    const handleLikeButton = templateClone.querySelector('.element-content__like');
    handleLikeButton.addEventListener('click', likeButton);
    const handleRemoveButton = templateClone.querySelector('.element-content__delete');
    handleRemoveButton.addEventListener('click', deleteElement);
    const handleOpenPopupImg = templateClone.querySelector('.element__img');
    handleOpenPopupImg.addEventListener('click', openPopupImg);
    handleHopupImgClose.addEventListener('click', closePopupImg);
}
                        /* Закрыть попап добавления карт */

function addImgClose(event) {
popupItem.classList.remove('popup-item__opened');
}
                        /* Лайк */
function likeButton (evt) {
 evt.target.closest('.element-content__like').classList.toggle('element-content__like_active'); 
}
                        /* Удаление */
function deleteElement (evt) {
    evt.target.closest('.element').remove(); 
   }
                        /* Poupap img открытие картинки*/
function openPopupImg (evt) {
    const popupImg = document.querySelector('.popup-img');
    popupImg.classList.add('popup-img_opened');
    const bodyImgImg = document.querySelector('.body-img__img');
    bodyImgImg.src = evt.target.closest('.element__img').src;
    bodyImgImg.alt = evt.target.closest('.element__img').alt;
    const bodyImgText = document.querySelector('.body-img__text');
    bodyImgText.textContent = evt.target.closest('.element').querySelector('.element-content__text').textContent;
}
                        /* popupImgClos закрытие */
function closePopupImg () {
    const popupImg = document.querySelector('.popup-img');
    popupImg.classList.remove('popup-img_opened');
}   


profileButton.addEventListener('click', OpenInfoPopup);
profileInfoButton.addEventListener('click', openPopup);
popupContainer.addEventListener('submit', addName);
popupClose.addEventListener('click', closePopup);
newItem.addEventListener('submit', addCard);
popupAddImgClose.addEventListener('click', addImgClose);








