var carousel = $('.menu');
var heading = $('#carouselHeading');
var text = $('#alphabet');

var audio =document.getElementById('audio');
audio.src = '/assets/audio/A.mp3';
audio.play();

// Event listener for manual slide change
carousel.on('click', '.prev', function() {
  updateContent(-1);
});

carousel.on('click', '.next', function() {
  console.log(text.text());
  updateContent(1);
});

// Event listener for when the slide changes
carousel.on('slid.bs.carousel', function() {
  updateContent();
});


// Function to update heading and text based on active slide
function updateContent(indexSlide = 0 ) {

let slideTexts = [
  {alphabet:'A', audio:'/assets/audio/A.mp3'},
  {alphabet:'B', audio:'/assets/audio/B.mp3'},
  {alphabet:'C', audio:'/assets/audio/C.mp3'},
  {alphabet:'D', audio:'/assets/audio/D.mp3'},
  {alphabet:'E', audio:'/assets/audio/E.mp3'},
  {alphabet:'F', audio:'/assets/audio/F.mp3'},
  {alphabet:'G', audio:'/assets/audio/G.mp3'},
  {alphabet:'H', audio:'/assets/audio/H.mp3'},
  {alphabet:'I', audio:'/assets/audio/I.mp3'},
  {alphabet:'J', audio:'/assets/audio/J.mp3'},
  {alphabet:'K', audio:'/assets/audio/K.mp3'},
  {alphabet:'L', audio:'/assets/audio/L.mp3'},
  {alphabet:'M', audio:'/assets/audio/M.mp3'},
  {alphabet:'N', audio:'/assets/audio/N.mp3'},
  {alphabet:'O', audio:'/assets/audio/O.mp3'},
  {alphabet:'P', audio:'/assets/audio/P.mp3'},
  {alphabet:'Q', audio:'/assets/audio/Q.mp3'},
  {alphabet:'R', audio:'/assets/audio/R.mp3'},
  {alphabet:'S', audio:'/assets/audio/S.mp3'},
  {alphabet:'T', audio:'/assets/audio/T.mp3'},
  {alphabet:'U', audio:'/assets/audio/U.mp3'},
  {alphabet:'V', audio:'/assets/audio/V.mp3'},
  {alphabet:'W', audio:'/assets/audio/W.mp3'},
  {alphabet:'X', audio:'/assets/audio/X.mp3'},
  {alphabet:'Y', audio:'/assets/audio/Y.mp3'},
  {alphabet:'Z', audio:'/assets/audio/Z.mp3'}
];
var alphabet = $('#alphabet').text();
  // console.log(alphabet);
var index = slideTexts.findIndex(function(obj) {
  return obj.alphabet === alphabet;
});

index += indexSlide;
if (index > 25 || index < 0) {
  index = 0;
}
console.log(index);
  
  text.text(slideTexts[index].alphabet);

  // Change the audio source and autoplay
  audio.src = slideTexts[index].audio;
  audio.play();

  // Generate random color and set it to the heading
  var randomColor = getRandomColor();
  text.css('color', randomColor);
}

// Function to generate random color
// Function to generate random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}