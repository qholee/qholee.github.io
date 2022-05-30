function bio() {
  var x = document.getElementById("bio");
  x.style.display === "none";

  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
} 




// resizeImage();

	function resizeImage(img) {
   if (img.style.height === "5em") {
    img.style.height = "100%";
    
  } else {
    img.style.height = "5em";
  }
} 