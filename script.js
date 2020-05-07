const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

// Search meal and fetch from API
// since this is a submit, we need to prevent the default behavior by adding a preventDefault event so it doesn't actually submit to a file
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = "";

  // Get the search term
  const term = search.value;

  // Check for empty --- 'trim' removes excess white space
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  } else {
    alert("Please enter a search term");
  }
}

// Event listeners
submit.addEventListener("submit", searchMeal);
