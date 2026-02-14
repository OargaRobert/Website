function SendMail(event) {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value,
  };
  emailjs
    .send("service_n3tr5bb", "template_uhz8pzc", params)
    .then(function (res) {
      alert("Emailul a fost trimis cu succes! " + res.status);
    });
}
