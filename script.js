let fname;
let email;
let subject;
let message;
const submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function() {
    fname = document.getElementById('name').value;
    email = document.getElementById('email').value;
    subject = document.getElementById('subject').value;
    message = document.getElementById('message').value;
    window.location.href = "sent.html";
}