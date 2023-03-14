// Get all the testimonials and convert the NodeList to an array
const testimonials = Array.from(document.querySelectorAll(".testimonial"));

// Set the starting index
let currentIndex = 0;

// Show the first testimonial
testimonials[currentIndex].classList.add("active");

// Define the function to switch to the next testimonial
function showNextTestimonial() {
  // Hide the current testimonial
  testimonials[currentIndex].classList.remove("active");

  // Increment the index
  currentIndex++;

  // If the index is out of range, wrap around to the beginning
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }

  // Show the next testimonial
  testimonials[currentIndex].classList.add("active");
}

// Set the interval to switch to the next testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);
