let userEditButton = document.querySelector('.profile__edit-button');
let popUpUserCloseButton = document.querySelector('#user-close-button');
let popUpImageCloseButton = document.querySelector('#image-close-button');
let addImageButton = document.querySelector('.profile__add-images-button');
let popUpContainer = document.querySelector('.popup__container');
let userForm = document.querySelector('.user-info-form');
let userSubmitButton = userForm.querySelector('.user-info-form__button-save');
let popUp = document.querySelector('.popup');
let userName = userForm.querySelector('#user-name');
let userCareer = userForm.querySelector('#career');
let profileName = document.querySelector('.profile__title');
let profileCareer = document.querySelector('.profile__subtitle');

popUpUserCloseButton.addEventListener('click', closePopUpUser);
popUpImageCloseButton.addEventListener('click', closePopUpImage);
userEditButton.addEventListener('click', openPopUpUser);
addImageButton.addEventListener('click', openPopUpImage);

function openPopUpUser (){
    let editProfile = document.querySelector('#editProfile');
    editProfile.classList.add('popup_opened');
    
    
}
function closePopUpUser () {
    editProfile.classList.remove('popup_opened');
    userName.value = profileName.textContent;
    userCareer.value = profileCareer.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = userName.value;
    profileCareer.textContent = userCareer.value;
    editProfile.classList.remove('popup_opened');
    
}
userForm.addEventListener('submit', formSubmitHandler);

function openPopUpImage (){
    let addImages = document.querySelector('#addImages');
    addImages.classList.add('popup_opened');
}

function closePopUpImage () {
    addImages.classList.remove('popup_opened');
}