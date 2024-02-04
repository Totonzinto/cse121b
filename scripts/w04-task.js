/* LESSON 3 - Programming Tasks */
let photoElement = document.querySelector('#photo');
/* Profile Object  */
let myprofile = {
    name: 'Chioma Nwosu',
    photo: {
      Src:  'images/personal picture.jpg',
      alt: 'my profile picture'
    },

    favoriteFood: ['pizza', 'spaghetti', 'noodles', 'plaintain'],

    hobbies: ['singing', 'music', ],

    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myprofile.placesLived.push(
    {
        place: 'port-harcourt, Nigeria',
        length: '1 year',

        place: 'Abia, Nigeria',
        length: '19 years',

        place: 'lagos Nigeria',
        length: '4 years'

    }
)



/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").innerHTML = myprofile.name;
/* Photo with attributes */
photoElement.Src = myprofile.photo.Src;
photoElement.alt = myprofile.alt;

/* Favorite Foods List*/
myprofile.favoriteFood.forEach(Food => {
    let li = document.createElement('li');
    li.textContent = Food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myprofile.hobbies.forEach(hobby => {
    let ul = document.createElement('li');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myprofile.placesLived.forEach(function(place){
    let dt = document.createElement('dd');
    let dd = document.createElement('dt');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);

});

