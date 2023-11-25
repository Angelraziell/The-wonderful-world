var slideIndex = 0;
 showSlides(); 
function showSlides() {
  var j;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (j = 0; j < slides.length; j++){
    slides[j].style.display = "none"; 
 }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (j = 1; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change slide every 3 seconds
 } 