// Toggle additional information

const showMoreBtn = document.querySelector(".show-more-btn");
const additionalInfo = document.querySelector(".additional-info");

showMoreBtn.addEventListener("click", () => {
  additionalInfo.classList.toggle("show");
  showMoreBtn.textContent = additionalInfo.classList.contains("show")
    ? "Show Less"
    : "Show More";
});
