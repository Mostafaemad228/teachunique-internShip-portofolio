
  // /////////////////////////////////////////
  window.addEventListener("scroll" , function () {    
    var navbar =  document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY >300);
  })
  // ///////////////////////////////////////////////////////////// ///////////////////////
 
  
var myHeader = document.getElementById("header");
var i = 0;
var headerImages =[
    "images/banner/slider-1.jpg",
    "images/banner/slider-2.jpg",
    "images/banner/slider-3.jpg"
];

 function slideShow() {
    myHeader.style.backgroundImage = "url("+headerImages[i]+")"

    if ( i < headerImages.length - 1) {
        i++
    }
    else{
        i = 0
    }
    setTimeout("slideShow()",3000);
 }
 slideShow()


// ////////////////////////// /////////////////////// ///////////////////////
var typed = new Typed('.type-text', {
  strings: [" ceo devfolio " , "front end developer." , "graphic designer." ,"ceo devfolio."],
  typeSpeed: 100,
  backSpeed: 50,
  smartBackspace: true,
  loop : true,
  loopCount: Infinity,

});


// ///////////////////////////////////////////////////////////////////////////






// ////////////////////////// /////////////////////// ///////////////////////

document.querySelector(".toggle-style-switcher").addEventListener("click" , () =>{

  document.querySelector(".style-switcher").classList.toggle("open");  

})
// ///////////////////////////////////// /////////////////////// ///////////////////////

 $(function () {
  $("#carsour-teste").owlCarousel({
      dots:true,
      responsiveBaseElement:window,
      items:1,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoPlayHoverPause:true
  });
  
});
// /////////////////////// /////////////////////// ///////////////////////




var mySong = document.getElementById("my-song");
var icon = document.getElementById("icon");
icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "images/music/pause.png";
  }
  else{
    mySong.pause();
    icon.src = "images/music/play.png";
  }
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  