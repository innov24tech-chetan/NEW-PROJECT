//overlay
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//   var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slider-section");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }


var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true
});

var owl = $('.service-carousel');
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true
});


// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 1000, // Autoplay speed in milliseconds (3 seconds in this example)
//     // autoplayHoverPause: true // Pause autoplay when mouse hovers over carousel
//   });
// });

const maxValue = 10;
  
// Get the fill element
const fillElement = document.querySelector('.fill');

// Get the counter value element
const counterValueElement = document.getElementById('counter-value');

// Initialize the counter value
let counterValue = 0;

// Function to update the counter value and fill up the circle
function updateCounter() {
  counterValue++;
  if (counterValue > maxValue) {
    counterValue = 1; // Start over if counter reaches the maximum value
  }
  
  // Calculate the clip path for the fill element
  const fillPercentage = (counterValue / maxValue) * 80;
  fillElement.style.clipPath = `polygon(50% 0%, 50% 100%, ${50 + fillPercentage}% 100%, ${50 + fillPercentage}% 0%)`;
  
  // Update the counter value
  counterValueElement.textContent = counterValue;
}

// Update the counter every second
setInterval(updateCounter, 1000);