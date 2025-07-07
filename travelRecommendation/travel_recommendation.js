/* Nav Search Bar */
function searchFunction() {
  const value = document.getElementById('searchInput').value;
    // Example: redirect based on search value
  if (value === "about us") {
    window.location.href = "aboutus.html";
  } else if (value === "contact" || value === "contact us") {
    window.location.href = "contactus.html";
  } else if (value === "home") {
    window.location.href = "home.html";
  } else {
    alert('No results found for: ' + value);
  }
}

function resetSearchInput() {
  document.getElementById('searchInput').value = '';
}