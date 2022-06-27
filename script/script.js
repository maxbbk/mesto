
                        /* Popup-item */
const profileButton = document.querySelector('.profile__button');

                        /* Открыть попап добавления карт */
const popupItem = document.querySelector('.popup-item');
function OpenInfoPopup(event) {
    popupItem.classList.toggle('popup-item__opened');
}
profileButton.addEventListener('click', OpenInfoPopup);



                        /**Popup info */
const profileInfoButton = document.querySelector('.profile-info__button');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup-container');
const popupContainerButton = document.querySelector('.popup-container__button');
const popupClose = document.querySelector('.popup-container__close');
const nameInput = document.querySelector('.popup-container__about_name_input');
const jobInput = document.querySelector('.popup-container__about_job_input');
const profileName = document.querySelector('.profile-info__name');
const profileDescription = document.querySelector('.profile-info__description');


function openPopup(event) {
    popup.classList.add('popup__opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
profileInfoButton.addEventListener('click', openPopup);

                    /* Форма добавления профайла */
function addName(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
  }
  popupContainer.addEventListener('submit', addName);

                    /* Закрыть попап рекдатора профайла*/
  function closePopup(event) {
    popup.classList.remove('popup__opened');
}
    popupClose.addEventListener('click', closePopup);




                        /**Карточки с фото */

const templateElement = document.querySelector('.template-element').content;
const elements = document.querySelector('.elements');
const newItemButton = document.querySelector('.new-item__button');
const newItemName = document.querySelector('.new-item__about_name_input');
const newItemLink = document.querySelector('.new-item__about_job_input');
const newItem = document.querySelector('.new-item');

                        /* Рендеринг */
const renderItems = () => {
    initialCards.forEach(renderItem);
}

const renderItem = (text) => {  
    const templateClone = templateElement.cloneNode(true);
    templateClone.querySelector('.element-content__text').textContent = text.title;
    templateClone.querySelector('.element__img').src = text.link;
    setEventListener(templateClone);
    elements.prepend(templateClone)
}
renderItems();
                         /* Добавление пользовательской карточки */


                        /* Слушатели */
function setEventListener (templateClone) {
    const likeButton = templateClone.querySelector('.element-content__like');
    likeButton.addEventListener('click', handleLike);
    const removeButton = templateClone.querySelector('.element-content__delete');
    removeButton.addEventListener('click', handleDelete);
    const openPopupImg = templateClone.querySelector('.element__img');
    openPopupImg.addEventListener('click', popupImgOpened);
    const popupImgClose = document.querySelector('.body-img__close');
    popupImgClose.addEventListener('click', popupImgClosed);
}


                        /* Добавление карточки */
const addCard = (event) => {
    event.preventDefault();
    renderItem({title:  newItemName.value, link: newItemLink.value});
    popupAddImgClosed();
}
newItem.addEventListener('submit', addCard);

                        /* Закрыть попап добавления карт */
const popupAddImgClose = document.querySelector('.new-item__close');
    function popupAddImgClosed(event) {
popupItem.classList.toggle('popup-item__closed');
}
popupAddImgClose.addEventListener('click', popupAddImgClosed);

                        /* Лайк */
function handleLike (evt) {
 evt.target.closest('.element-content__like').classList.toggle('element-content__like_active'); 
}
                        /* Удаление */
function handleDelete (evt) {
    evt.target.closest('.element').remove(); 
   }


                        /* Poupap img открытие картинки*/
function popupImgOpened (evt) {
    const popupImg = document.querySelector('.popup-img');
    popupImg.classList.add('popup-img_opened');
    const bodyImgImg = document.querySelector('.body-img__img');
    bodyImgImg.src = evt.target.closest('.element__img').src;
    const bodyImgText = document.querySelector('.body-img__text');
    bodyImgText.textContent = evt.target.closest('.element').querySelector('.element-content__text').textContent;
}
                        /* popupImgClosed закрытие */
function popupImgClosed () {
    const popupImgClose = document.querySelector('.body-img__close');
    const popupImg = document.querySelector('.popup-img');
    popupImg.classList.remove('popup-img_opened');
}   










