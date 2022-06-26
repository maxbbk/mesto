const initialCards = [
    {
        title: 'Карачаевск',
        link: 'https://images.unsplash.com/photo-1655634535290-6bab0013accc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        title: 'Гора Эльбрус',
        link: 'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80https://images.unsplash.com/photo-1655635949384-f737c5133dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        title: 'Домбай',
        link: 'https://images.unsplash.com/photo-1655721530222-884d311f4b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        title: 'Гора папус',
        link: 'https://images.unsplash.com/photo-1655721533109-bce2aee6b6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        title: 'Гора мамус',
        link: 'https://images.unsplash.com/photo-1655721529083-fc950008ac30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
    },
    {
        title: 'Гора горелус',
        link: 'https://images.unsplash.com/photo-1655374631048-1416d81cd20a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=498&q=80'
    },
]


                        /**Popup-item */
const profileButton = document.querySelector('.profile__button');
const popupItem = document.querySelector('.popup-item');
const popupContainerClose = document.querySelector('.new-item__close');

function OpenInfoPopup(event) {
    popupItem.classList.add('popup-item__opened');
}
profileButton.addEventListener('click', OpenInfoPopup);



function CloseInfoPopup(event) {
    popupItem.classList.remove('popup-item__opened');
}
popupContainerClose.addEventListener('click', CloseInfoPopup);

                        /**Popup info */
let profileInfoButton = document.querySelector('.profile-info__button');
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup-container');
let popupContainerButton = document.querySelector('.popup-container__button');
let popupClose = document.querySelector('.popup-container__close');
let nameInput = document.querySelector('.popup-container__about_name_input');
let jobInput = document.querySelector('.popup-container__about_job_input');
let profileName = document.querySelector('.profile-info__name');
let profileDescription = document.querySelector('.profile-info__description');


function openPopup(event) {
    popup.classList.add('popup__opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
profileInfoButton.addEventListener('click', openPopup);

function addName(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closePopup();
  }
  popupContainer.addEventListener('submit', addName);

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

    elements.prepend(templateClone);
}


                        /* Добавление карточки */
const addCard = (event) => {
    event.preventDefault();
    renderItem({title:  newItemName.value, link: newItemLink.value});
    CloseInfoPopup();
}
newItem.addEventListener('submit', addCard );

                        /* Лайк */
function handleLike (evt) {
 evt.target.closest('.element-content__like').classList.toggle('element-content__like_active'); 
}
                        /* Удаление */
function handleDelete (evt) {
    evt.target.closest('.element').remove(); 
   }
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

                        /* Poupap img */
function popupImgOpened (evt) {
    const popupImg = document.querySelector('.popup-img');
    popupImg.classList.add('popup-img_opened');
    const bodyImgImg = document.querySelector('.body-img__img');
    bodyImgImg.src = evt.target.closest('.element__img').src;
    const bodyImgText = document.querySelector('.body-img__text');
    bodyImgText.textContent = evt.target.closest('.element').querySelector('.element-content__text').textContent;
    
}

function popupImgClosed () {
    const popupImgClose = document.querySelector('.body-img__close');
    const popupImg = document.querySelector('.popup-img');
    popupImg.classList.remove('popup-img_opened');
}


renderItems();







