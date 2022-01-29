const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const userEditButton = document.querySelector(".profile__edit-button");
const addImageButton = document.querySelector(".profile__add-images-button");
const watchImageCloseButton = document.querySelector("#watch-image-closer");
const userForm = document.querySelector(".user-info-form");
const userSubmitButton = userForm.querySelector(".user-info-form__button-save");
const userName = userForm.querySelector("#user-name");
const userCareer = userForm.querySelector("#career");
const profileName = document.querySelector(".profile__title");
const profileCareer = document.querySelector(".profile__subtitle");
const photo = document.querySelector(".photo-card__image");
const editProfile = document.querySelector("#edit-profile");
const addImages = document.querySelector("#add-images");
const popUpAddImageCloseButton = addImages.querySelector("#image-close-button");
const watchImages = document.querySelector("#watch-image-popup");
const watchImage = document.querySelector(".popup__image-full-screen");
const imageCaption = document.querySelector(".popup__image-caption");
const imageForm = document.querySelector(".add-image-form");
const placeName = document.querySelector("#place-name");
const imageLink = document.querySelector("#place-link");
const popUpUserCloseButton = editProfile.querySelector("#user-close-button");
const photoCards = document.querySelector(".photo-cards");
const photoCard = document.querySelector(".photo-card");
const photoCardTemplate = document.querySelector("#photo-card").content;


userEditButton.addEventListener("click", openPopUpUser);

addImageButton.addEventListener("click", openPopUpImage);

userForm.addEventListener("submit", handleFormSubmit);

imageForm.addEventListener("submit", addPhoto);

popUpUserCloseButton.addEventListener("click", () => {
  closePopUp(editProfile);
});

popUpAddImageCloseButton.addEventListener("click", () => {
  closePopUp(addImages);
});

watchImageCloseButton.addEventListener("click", () => {
  closePopUp(watchImages);
});

function closePopUp(popUp) {
  popUp.classList.remove("popup_opened");
}

function openPopUp(popUp) {
  popUp.classList.add("popup_opened");
}

function openPopUpWatchImage(photo) {
  watchImage.src = photo.src;
  watchImage.alt = photo.alt;
  imageCaption.textContent = photo.alt;
  openPopUp(watchImages);
}

function openPopUpUser() {
  openPopUp(editProfile);
  userName.value = profileName.textContent;
  userCareer.value = profileCareer.textContent;
}

function openPopUpImage() {
  openPopUp(addImages);
  placeName.value = "";
  imageLink.value = "";
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileCareer.textContent = userCareer.value;
  closePopUp(editProfile);
}


//Создание карточки по шаблону
function createCard(item, itemTitle) {
  const photoCardElement = photoCardTemplate
    .querySelector(".photo-card")
    .cloneNode(true);
  const deleteButton = photoCardElement.querySelector(".photo-card__delete-button");
  const likeButton = photoCardElement.querySelector(".photo-card__like-button");
  const cardImage = photoCardElement.querySelector(".photo-card__image");
  const cardTitle = photoCardElement.querySelector(".photo-card__title");
  cardImage.src = item;
  cardImage.alt = itemTitle;
  cardTitle.textContent = itemTitle;
  cardImage.addEventListener("click", () => 
    openPopUpWatchImage(cardImage)
  );
  deleteButton.addEventListener("click", () => photoCardElement.remove());
  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("photo-card__like-button_active")
  );
  return photoCardElement;
}
// Заполняем данные фотокарточки из template через форму

function addPhoto(evt) {
  evt.preventDefault();
  photoCards.prepend(createCard(imageLink.value, placeName.value));
  closePopUp(addImages);
  placeName.value = "";
  imageLink.value = "";
}

//Добавление фотокарточек из начального массива

initialCards.forEach(function (item) {
  const cardLink = item.link;
  const cardName = item.name;
  photoCards.append(createCard(cardLink, cardName));
});
