const stars = document.querySelectorAll(".star");
const submitBtn = document.querySelector(".submit-btn");
const thankyouCard = document.querySelector(".thankyou-card");
const starRatingCard = document.querySelector(".star-rating-card");

let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = star.getAttribute("data-rating");
    stars.forEach((s) => {
      s.classList.remove("selected");
      if (s.getAttribute("data-rating") <= selectedRating) {
        s.classList.add("selected");
      }
    });
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedRating > 0) {
    thankyouCard.classList.remove("hide");
    starRatingCard.classList.add("hide");
  }
});
