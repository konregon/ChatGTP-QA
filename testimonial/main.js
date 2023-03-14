// Get all testimonials on the page
const testimonials = document.querySelectorAll(".testimonial");

// Loop through each testimonial
testimonials.forEach((testimonial) => {
  // Add a click event listener to each testimonial
  testimonial.addEventListener("click", () => {
    // Toggle the "active" class on the clicked testimonial
    testimonial.classList.toggle("active");
  });
});
