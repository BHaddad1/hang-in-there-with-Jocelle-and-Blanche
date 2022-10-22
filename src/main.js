// query selector variables go here 👇
var mainPoster = document.querySelector('.main-poster');
var image = document.querySelector('.poster-img');
var title = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');
var homepage = document.querySelector('.main-poster');

var showRandomButton = document.querySelector('.show-random');
var makeOwnPosterButton = document.querySelector('.show-form')
var showSavedPosterButton = document.querySelector('.show-saved');
var nevermindButton = document.querySelector('.show-main');
var backToMainButtonFromSaved = document.querySelector('.back-to-main');
var makeOwnButton = document.querySelector('.make-poster');
var savePosterButton = document.querySelector('.save-poster');

var makeOwnPosterForm = document.querySelector('.poster-form');
var savedPostersForm = document.querySelector('.saved-posters');
var takeMeBackButtonFromMake = document.querySelector('.show-main');
var backToMainButtonFromSaved = document.querySelector('.back-to-main');
//Iteration 2

var inputFieldForImage = document.querySelector('#poster-image-url');
var inputFieldForTitle = document.querySelector('#poster-title');
var inputFieldForQuote = document.querySelector('#poster-quote');
var mainPosterClass = document.querySelector('.poster');

// Iteration 3
var grid = document.querySelector('.saved-posters-grid');

// we've provided you with some data to work with 👇
var images = [ //this is accessing the assets directory (images that will be used later on when we make a new class of Poster!)
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = []; //array of custom posters; includes array of images, titles, ITERATION 1 to push
var currentPoster = new Poster(image, title, quote);

// event listeners go here 👇
//Iteration 0
window.addEventListener('load', createNewPoster);
showRandomButton.addEventListener('click', createNewPoster);
//Iteration 1
showSavedPosterButton.addEventListener('click', function(){
  showSavedPosters();
  displaySaved();
});
takeMeBackButtonFromMake.addEventListener('click', goBackToMainMake);
backToMainButtonFromSaved.addEventListener('click', goBackToMainSaved);
makeOwnPosterButton.addEventListener('click', showMakeForm);
//Iteration 2
makeOwnButton.addEventListener('click', showUserPoster);
// Iteration 3
savePosterButton.addEventListener('click', saveUserPoster);




// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

function createNewPoster() {
  var newImage = getRandomIndex(images);
  var newTitle = getRandomIndex(titles);
  var newQuote = getRandomIndex(quotes);
  currentPoster = new Poster(newImage, newTitle, newQuote)
  image.src = newImage
  title.innerText = newTitle
  quote.innerText = newQuote
}

function showMakeForm() {
  makeOwnPosterForm.classList.remove('hidden');
  mainPoster.classList.add('hidden');
}

function goBackToMainMake(){
  makeOwnPosterForm.classList.add('hidden');
  mainPoster.classList.remove('hidden');
}

function showSavedPosters() {
  mainPoster.classList.add('hidden');
  savedPostersForm.classList.remove('hidden');
}


function goBackToMainSaved(){
  savedPostersForm.classList.add('hidden');
  mainPoster.classList.remove('hidden');
}

//Iteration 2
function showUserPoster(){
  event.preventDefault()
  var newUserPoster = new Poster(newUserImage, newUserTitle, newUserQuote);
    var newUserImage = inputFieldForImage.value;
    var newUserTitle = inputFieldForTitle.value;
    var newUserQuote = inputFieldForQuote.value;
      image.src = newUserImage;
      title.innerText = newUserTitle;
      quote.innerText = newUserQuote;
    images.push(newUserImage);
    titles.push(newUserTitle);
    quotes.push(newUserQuote);
  goBackToMainMake();
}
// Iteration 3
function saveUserPoster() {
  if(!savedPosters.includes(currentPoster)) {
    return savedPosters.push(currentPoster)
  }
}



function displayUserPoster(){
  var newUserImage = inputFieldForImage.value;
  var newUserTitle = inputFieldForTitle.value;
  var newUserQuote = inputFieldForQuote.value;
  var newUserPoster = new Poster(newUserImage, newUserTitle, newUserQuote);
  grid.innerHTML = newUserPoster
  showSavedPosters();
}

function displaySaved(){
  for (var i = 0; i < savedPosters.length; i++){
    console.log(savedPosters[i])
  grid.innerHTML += `
    <article class="poster">
      <img class="poster-img" src="${savedPosters[i].imageURL}" alt="nothin' to see here">
      <h1 class="poster-title">${savedPosters[i].title}</h1>
      <h3 class="poster-quote">${savedPosters[i].quote}</h3>
    </article>
  `;
  }
}

  //display newUserPoster to grid
  // .InnerHTML
  //newUserPoster is an object; pushed to the variable grid.


//save poster in array in a separate function; add stuff to the saved posters grid because there's nothing there to push stuff into;
//function to display user poster, and call it in the showUserPoster function FIRST, then invoke the function Save poster to push it into the arrays. Saved poster is what we want to display.

//capture the automatic refresh of the page, .preventDefault() on the function to stop it from automatically loading to the main page; the user image should display on the DOM/Main.
//push the new user info into the main poster fields
//prevent the window.addEventLister from running (createNewPoster)
