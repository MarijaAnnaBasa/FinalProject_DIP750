document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded.');
});

function displayGreeting() {
    var userName = document.getElementById('nameInput').value;

    alert("Hello, " + userName + "!");
}


// Function to show the cookies consent modal
function showCookiesModal() {
    var modal = document.getElementById("cookiesModal");
    modal.style.display = "block";
  }
  
  // Function to hide the cookies consent modal
  function hideCookiesModal() {
    var modal = document.getElementById("cookiesModal");
    modal.style.display = "none";
  }
  
  // Function to handle the "Accept" button click event
  function acceptCookies() {
    // Set a cookie to indicate that the user has accepted cookies
    document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    // Hide the modal
    hideCookiesModal();
  }
  
  // Show the cookies consent modal when the page loads
  window.onload = showCookiesModal;
  
  // Add event listener to the "Accept" button
  document.getElementById("acceptCookiesBtn").addEventListener("click", acceptCookies);
  