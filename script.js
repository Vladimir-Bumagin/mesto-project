const userEditButton = document.querySelector(".profile__edit-button");
const popUpUserCloseButton = document.querySelector("#user-close-button");
const popUpImageCloseButton = document.querySelector("#image-close-button");
const addImageButton = document.querySelector(".profile__add-images-button");
const popUpContainer = document.querySelector(".popup__container");
const userForm = document.querySelector(".user-info-form");
const userSubmitButton = userForm.querySelector(".user-info-form__button-save");
const popUp = document.querySelector(".popup");
const userName = userForm.querySelector("#user-name");
const userCareer = userForm.querySelector("#career");
const profileName = document.querySelector(".profile__title");
const profileCareer = document.querySelector(".profile__subtitle");

popUpUserCloseButton.addEventListener("click", closePopUpUser);

popUpImageCloseButton.addEventListener("click", closePopUpImage);

userEditButton.addEventListener("click", openPopUpUser);

addImageButton.addEventListener("click", openPopUpImage);

function openPopUpUser() {
  const editProfile = document.querySelector("#editProfile");
  editProfile.classList.add("popup_opened");
}
function closePopUpUser() {
  editProfile.classList.remove("popup_opened");
  userName.value = profileName.textContent;
  userCareer.value = profileCareer.textContent;
}

function userFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileCareer.textContent = userCareer.value;
  editProfile.classList.remove("popup_opened");
}
userForm.addEventListener("submit", userFormSubmitHandler);

function openPopUpImage() {
  const addImages = document.querySelector("#addImages");
  addImages.classList.add("popup_opened");
}

function closePopUpImage() {
  addImages.classList.remove("popup_opened");
}

//Функция удаления картинки
const photoCards = document.querySelector(".photo-cards");
photoCards.addEventListener("click", function (event) {
  let deleteButton = event.target.closest(".photo-card__delete-button");
  if (!deleteButton) return;
  deleteButton.parentElement.parentElement.remove();
});

//Функция "Лайк"


photoCards.onclick = function (event) {
 let likeButton = event.target.closest(".photo-card__like-button"); 
  if (!likeButton) return; 
  likeButton.classList.toggle("photo-card__like-button_active");
};


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

    //Добавление фотокарточек из начального массива
  
  
    const photoCardTemplate = document.querySelector('#photo-card').content;  
    const initialElements = [];
    for (let i=0; i < initialCards.length; i++) {
        let photoCardElement = photoCardTemplate.querySelector('.photo-card').cloneNode(true);
        photoCardElement.querySelector('.photo-card__image').src = initialCards[i].link;
        photoCardElement.querySelector('.photo-card__title').textContent = initialCards[i].name;
        initialElements [i] = photoCardElement;
        photoCards.append(initialElements[i]);
    }
    
  //Заполняем данные фотокарточки из template через форму
  const imageForm = document.querySelector('.add-image-form');
  const placeName = document.querySelector('#place-name');
  const imageLink = document.querySelector('#place-link');
  imageForm.addEventListener("submit", isAddPhoto);

function isAddPhoto(evt) {
    evt.preventDefault();
    let photoCardElement = photoCardTemplate.querySelector('.photo-card').cloneNode(true);
        photoCardElement.querySelector('.photo-card__image').src = imageLink.value;
        photoCardElement.querySelector('.photo-card__title').textContent = placeName.value;
        addImages.classList.remove("popup_opened");
        photoCards.prepend(photoCardElement);
  }
