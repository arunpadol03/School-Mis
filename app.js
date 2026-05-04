const API = "https://script.google.com/macros/s/AKfycbydr1FVj-gAplbz6S3pqsE2kbjbpd1r3lQ5ceNF-Bxxx06MYhYuVS6j0TI-fbKffbuIDQ/exec";

function login() {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      schoolId: document.getElementById("schoolId").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem("schoolId", document.getElementById("schoolId").value);
      window.location = "dashboard.html";
    } else {
      alert(data.message);
    }
  });
}
