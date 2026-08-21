let loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("loginMessage").textContent =
      "You are in. Welcome back.";
  });
}

let contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("contactMessage").textContent =
      "Thanks. We will get back to you shortly.";

    contactForm.reset();
  });
}
