// Get recipe ID from URL parameters
function getRecipeIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Display recipe on page load
document.addEventListener('DOMContentLoaded', function() {
  const recipeId = getRecipeIdFromUrl();

  if (!recipeId) {
    console.error('No recipe ID provided');
    displayError('Recipe not found');
    return;
  }

  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    displayError('Recipe not found');
    return;
  }

  displayRecipe(recipe);
});

// Display recipe details on the page
function displayRecipe(recipe) {
  // Set page title
  document.title = recipe.title + ' - RecipesforYou';

  // Get recipe container
  const recipeContainer = document.getElementById('recipe-container');

  if (!recipeContainer) {
    console.error('Recipe container not found');
    return;
  }

  // Build recipe HTML
  const recipeHTML = `
  <section id="${recipe.id}" class="recipe-details">
    <div class="recipe-header">
      <div class="recipe-left">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h1>${recipe.title}</h1>
        <p>${recipe.description}</p>
      </div>

      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="steps">
      <h2>How To Prepare</h2>
      <ol>
        ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
  </section>
`;
  recipeContainer.innerHTML = recipeHTML;
}

// Display error message
function displayError(message) {
  const recipeContainer = document.getElementById('recipe-container');

  if (recipeContainer) {
    recipeContainer.innerHTML = `
      <div class="error-message">
        <h2>${message}</h2>
        <p><a href="recipes.html">Back to Recipes</a></p>
      </div>
    `;
  }
}

// Add click handlers to recipe cards to navigate to recipe page
document.addEventListener('DOMContentLoaded', function() {
  const recipeCards = document.querySelectorAll('.recipe-card[data-id]');

  recipeCards.forEach(card => {
    card.addEventListener('click', function(e) {
      const recipeId = this.getAttribute('data-id');

      // Only navigate if it's not already pointing to a specific recipe page
      if (!this.href.includes('?id=')) {
        e.preventDefault();
        window.location.href = `recipeInfo.html?id=${recipeId}`;
      }
    });
  });
});

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });