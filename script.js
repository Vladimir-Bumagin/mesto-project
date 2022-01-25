const userEditButton = document.querySelector(".profile__edit-button");
const addImageButton = document.querySelector(".profile__add-images-button");
const popUpContainer = document.querySelector(".popup__container");
const userForm = document.querySelector(".user-info-form");
const userSubmitButton = userForm.querySelector(".user-info-form__button-save");
const popUp = document.querySelector(".popup");
const userName = userForm.querySelector("#user-name");
const userCareer = userForm.querySelector("#career");
const profileName = document.querySelector(".profile__title");
const profileCareer = document.querySelector(".profile__subtitle");
const photo = document.querySelector(".photo-card__image");
const editProfile = document.querySelector("#editProfile");

const watchImages = document.querySelector("#watchImage");
const watchImage = document.querySelector(".watch-image");
const imageCaption = document.querySelector(".image-caption");
const watchImageCloseButton = document.querySelector("#watchImageCloser");

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
  watchImageCloseButton.addEventListener("click", () => {
    closePopUp(watchImages);
  });
}

userEditButton.addEventListener("click", openPopUpUser);

addImageButton.addEventListener("click", openPopUpImage);

userForm.addEventListener("submit", userFormSubmitHandler);

function openPopUpUser() {
  const popUpUserCloseButton = editProfile.querySelector("#user-close-button");
  openPopUp(editProfile);
  userName.value = profileName.textContent;
  userCareer.value = profileCareer.textContent;
  popUpUserCloseButton.addEventListener("click", () => {
    closePopUp(editProfile);
  });
}

function openPopUpImage() {
  const addImages = document.querySelector("#addImages");
  const popUpAddImageCloseButton = addImages.querySelector(
    "#image-close-button"
  );
  openPopUp(addImages);
  placeName.value = "";
  imageLink.value = "";
  popUpAddImageCloseButton.addEventListener("click", () => {
    closePopUp(addImages);
  });
}

function userFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileCareer.textContent = userCareer.value;
  editProfile.classList.remove("popup_opened");
}

//Функция удаления картинки
const photoCards = document.querySelector(".photo-cards");
photoCards.addEventListener("click", function (event) {
  const deleteButton = event.target.closest(".photo-card__delete-button");
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

//Добавление фотокарточек из начального массива

const photoCardTemplate = document.querySelector("#photo-card").content;
const initialElements = [];

for (let i = 0; i < initialCards.length; i++) {
  const photoCardElement = photoCardTemplate
    .querySelector(".photo-card")
    .cloneNode(true);

  photoCardElement.querySelector(".photo-card__image").src =
    initialCards[i].link;
  photoCardElement.querySelector(".photo-card__image").alt =
    initialCards[i].name;
  photoCardElement.querySelector(".photo-card__title").textContent =
    initialCards[i].name;

  initialElements[i] = photoCardElement;

  const image = initialElements[i].querySelector(".photo-card__image");

  photoCards.append(initialElements[i]);

  image.addEventListener("click", () => {
    openPopUpWatchImage(image);
  });
}

//Заполняем данные фотокарточки из template через форму
const imageForm = document.querySelector(".add-image-form");
const placeName = document.querySelector("#place-name");
const imageLink = document.querySelector("#place-link");

imageForm.addEventListener("submit", isAddPhoto);

function isAddPhoto(evt) {
  const photoCardElement = photoCardTemplate
    .querySelector(".photo-card")
    .cloneNode(true);
  evt.preventDefault();

  photoCardElement.querySelector(".photo-card__image").src = imageLink.value;
  photoCardElement.querySelector(".photo-card__image").alt = placeName.value;
  photoCardElement.querySelector(".photo-card__title").textContent =
    placeName.value;
  addImages.classList.remove("popup_opened");

  photoCards.prepend(photoCardElement);
  placeName.value = "";
  imageLink.value = "";
  const image = photoCardElement.querySelector(".photo-card__image");

  image.addEventListener("click", () => {
    openPopUpWatchImage(image);
  });
}
