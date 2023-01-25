// Your JS code here.
function addActiveClassOnScroll() {
    // Get all the images
    let images = document.querySelectorAll("img");
  
    // Iterate through each image and check if it is in view
    images.forEach(image => {
      let imageCoords = image.getBoundingClientRect();
      let inView = imageCoords.top >= 0 && imageCoords.bottom <= window.innerHeight;
  
      // If the image is in view, add the active class
      if (inView) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
  }
  
  // Debounce the function to improve performance
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  // Add the addActiveClassOnScroll function to the scroll event
  window.addEventListener("scroll", debounce(addActiveClassOnScroll));
