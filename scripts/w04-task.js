/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector('#photo');
/* Profile Object  */
let myprofile = {
    name: "chioma Nwosu",
    photo: "images/personal picture.jpg",
    favoriteFoods: ['pizza', 'spaghetti', 'noodles', 'plaintain'],
    hobbies: ['singing', 'music' ],

    placesLived: [
        {
        place: 'port-harcourt, Nigeria',
        length: '1 year',
        },
        {
        place: 'Abia, Nigeria',
        length: '19 years',
        },
        {
        place: 'lagos Nigeria',
        length: '4 years'

        }
    ],
};


/* Populate Profile Object with placesLive objects */

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").innerHTML = myprofile.name;
/* Photo with attributes */
photoElement.setAttribute("src", myprofile.photo)
photoElement.setAttribute("alt", myprofile.photo)

const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
const  hobbiesElement = document.querySelector("#hobbies");

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  function hobbyTemplate(hobby) {
    return `<li>${hobby}</li>`;
  }

  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }

  foodsElement.innerHTML = generateListMarkup(
    myprofile.favoriteFoods,
    foodsTemplate
  );
  placesElement.innerHTML = generateListMarkup(
    myprofile.placesLived,
    placesTemplate
  );

  hobbiesElement.innerHTML = generateListMarkup (
    myprofile.hobbies,
    hobbyTemplate
  );
  