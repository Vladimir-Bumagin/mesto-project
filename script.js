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

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = userName.value;
  profileCareer.textContent = userCareer.value;
  editProfile.classList.remove("popup_opened");
}
userForm.addEventListener("submit", formSubmitHandler);

function openPopUpImage() {
  const addImages = document.querySelector("#addImages");
  addImages.classList.add("popup_opened");
}

function closePopUpImage() {
  addImages.classList.remove("popup_opened");
}

//Функция удаления картинки

const deleteButton = document.querySelector(".photo-card__delete-button");

deleteButton.addEventListener("click", function () {
  const listItem = deleteButton.closest(".photo-card");
  listItem.remove();
});

//Функция "Лайк"
const photoCards = document.querySelector(".photo-cards");

photoCards.onclick = function (event) {
 let likeButton = event.target.closest(".photo-card__like-button"); 

  if (!likeButton) return; 

  highlight(likeButton); 
};
function highlight(likeButton) {
    likeButton.classList.toggle("photo-card__like-button_active");
};

