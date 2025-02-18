var carousel = $('.menu');
  var image = document.getElementById('image');
  var text = $('#alphabet');
  var audio = document.getElementById('audio');
  audio.src = '/assets/audio/Anggur.mp3';
  audio.play();

  // Event listener for manual slide change
  carousel.on('click', '.prev', function() {
    updateContent(-1);
  });

  carousel.on('click', '.next', function() {
    console.log(text.text());
    updateContent(1);
  });



  
  // Function to update heading and text based on active slide
  function updateContent(indexSlide = 0 ) {
  
  let slideTexts = [
    {image:'/assets/image/Anggur.png',alphabet:'Anggur', audio:'/assets/audio/Anggur.mp3'},
    {image:'/assets/image/Buku.png',alphabet:'Buku', audio:'/assets/audio/Buku.mp3'},
    {image:'/assets/image/Cokelat.png',alphabet:'Cokelat', audio:'/assets/audio/Cokelat.mp3'},
    {image:'/assets/image/Domba.png',alphabet:'Domba', audio:'/assets/audio/Domba.mp3'},
    {image:'/assets/image/Elang.png',alphabet:'Elang', audio:'/assets/audio/Elang.mp3'},
    {image:'/assets/image/Flamingo.png',alphabet:'Flamingo', audio:'/assets/audio/Flamingo.mp3'},
    {image:'/assets/image/Gajah.png',alphabet:'Gajah', audio:'/assets/audio/Gajah.mp3'},
    {image:'/assets/image/Harimau.png',alphabet:'Harimau', audio:'/assets/audio/Harimau.mp3'},
    {image:'/assets/image/Ikan.png',alphabet:'Ikan', audio:'/assets/audio/Ikan.mp3'},
    {image:'/assets/image/Jerapah.png',alphabet:'Jerapah', audio:'/assets/audio/Jerapah.mp3'},
    {image:'/assets/image/Kelinci.png',alphabet:'Kelinci', audio:'/assets/audio/Kelinci.mp3'},
    {image:'/assets/image/Lumba-lumba.png',alphabet:'Lumba-lumba', audio:'/assets/audio/Lumba-lumba.mp3'},
    {image:'/assets/image/Merak.png',alphabet:'Merak', audio:'/assets/audio/Merak.mp3'},
    {image:'/assets/image/Nanas.png',alphabet:'Nanas', audio:'/assets/audio/Nanas.mp3'},
    {image:'/assets/image/Orangutan.png',alphabet:'Orangutan', audio:'/assets/audio/Orangutan.mp3'},
    {image:'/assets/image/Penguin.png',alphabet:'Penguin', audio:'/assets/audio/Penguin.mp3'},
    {image:'/assets/image/Qari.png',alphabet:'Qari', audio:'/assets/audio/Qari.mp3'},
    {image:'/assets/image/Rusa.png',alphabet:'Rusa', audio:'/assets/audio/Rusa.mp3'},
    {image:'/assets/image/Semangka.png',alphabet:'Semangka', audio:'/assets/audio/Semangka.mp3'},
    {image:'/assets/image/Tomat.png',alphabet:'Tomat', audio:'/assets/audio/Tomat.mp3'},
    {image:'/assets/image/Ular.png',alphabet:'Ular', audio:'/assets/audio/Ular.mp3'},
    {image:'/assets/image/Vase.png',alphabet:'Vase', audio:'/assets/audio/Vase.mp3'},
    {image:'/assets/image/Wastafel.png',alphabet:'Wastafel', audio:'/assets/audio/Wastafel.mp3'},
    {image:'/assets/image/Xylofon.png',alphabet:'Xylofon', audio:'/assets/audio/Xylofon.mp3'},
    {image:'/assets/image/Yoyo.png',alphabet:'Yoyo', audio:'/assets/audio/Yoyo.mp3'},
    {image:'/assets/image/Zebra.png',alphabet:'Zebra', audio:'/assets/audio/Zebra.mp3'},
  ];
  var alphabet = $('#alphabet').text();
    // console.log(alphabet);
  var index = slideTexts.findIndex(function(obj) {
    return getFirstLetter(obj.alphabet) === getFirstLetter(alphabet);
  });

  index += indexSlide;
  if (index > 25 || index < 0) {
    index = 0;
  }
  console.log(index);
    
    text.text(slideTexts[index].alphabet);
    
    //image 
    image.src = slideTexts[index].image;
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

  function getFirstLetter(word) {
    return word.slice(0, 1);
}