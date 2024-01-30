/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Chioma Nwosu';
const year = new Date();
let currentYear = year.getFullYear();
let profilepicture = 'images/personal picture.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
imageElement.setAttribute('src',`${profilepicture}`);
nameElement.innerHTML =(`<strong>${fullname}</strong>`);
yearElement.textContent = currentYear;
imageElement.setAttribute('alt', `profile image of ${fullname}`);


/* Step 5 - Array */
const favoritefoods = ['spaghetti', 'noodles', 'plantain', 'cereals'];
foodElement.innerHTML += `<br>${favoritefoods}`;
const anotherfood = " Pizza";
favoritefoods.push(anotherfood);
foodElement.innerHTML += `<br>${favoritefoods}`;
favoritefoods.shift();
foodElement.innerHTML += `<br>${favoritefoods}`;
favoritefoods.pop();
foodElement.innerHTML += `<br>${favoritefoods}`;

