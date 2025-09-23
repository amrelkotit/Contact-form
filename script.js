const form = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const fname = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!fname || !email || !subject || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "#ffcc00";
    feedback.classList.remove("hidden");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Enter a valid email address.";
    feedback.style.color = "#ff9933";
    feedback.classList.remove("hidden");
    return;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "#66ff99";
  feedback.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "sent.html";
  }, 1500);
});
