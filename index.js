const form = document.getElementById('emailForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
    name,
    email,
    message
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'send-email.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Email sent successfully!');
      form.reset();
    } else {
      alert('Failed to send email. Please try again later.');
    }
  };
  xhr.send(JSON.stringify(data));
});
