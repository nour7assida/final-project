let loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("loginMessage").innerHTML =
      "Login successful! Welcome to Syrian Taste 🇸🇾";
  });
}

let contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("contactMessage").innerHTML =
      "Thank you! Your message has been sent.";

    contactForm.reset();
  });
}
