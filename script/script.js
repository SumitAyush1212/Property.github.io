
// Get the element with the class "search-form"
const searchForm = document.querySelector('.search-form');

// Add a click event listener to the "Search" button in the form
searchForm.querySelector('button[type="submit"]').addEventListener('click', () => {
  // Get the value of the input field in the form
  const searchValue = searchForm.querySelector('input[type="text"]').value;

  // Do something with the search value, like send it to a server to get search results
  console.log(`Search value: ${searchValue}`);
});

// Get the element with the ID "featured-properties"
const featuredProperties = document.getElementById('featured-properties');

// Loop through each property card element inside the "featured-properties" element
featuredProperties.querySelectorAll('.property-card').forEach(card => {
  // Add a click event listener to each card
  card.addEventListener('click', () => {
    // Get the name and price of the property from the card
    const name = card.querySelector('h3').textContent;
    const price = card.querySelector('.price').textContent;

    // Do something with the name and price, like display them in a modal
    console.log(`Name: ${name}, Price: ${price}`);
  });
});





// const searchForm = document.querySelector('.search-form');

// searchForm.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent the form from submitting

//   const searchInput = searchForm.querySelector('input[type="text"]');
//   const searchTerm = searchInput.value;

//   // Perform the search functionality here
//   console.log(`Searching for ${searchTerm}...`);
// });






$(document).ready(function() {
  $('body').hide().fadeIn(1000);
});



$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
});




$(document).ready(function() {
  $('.parallax-window').parallax({
    imageSrc: 'path/to/image.jpg'
  });
});




