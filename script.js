id = "formValidation";
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      if (nameInput && nameInput.value.trim() === "") {
        alert("お名前を入力してください");
        return;
      }
      if (emailInput) {
        const email = emailInput.value.trim();
        if (email === "") {
          alert("メールアドレスを入力してください");
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("有効なメールアドレスを入力してください");
          return;
        }
      }
      if (messageInput && messageInput.value.trim() === "") {
        alert("お問い合わせ内容を入力してください");
        return;
      }
      alert("フォームが正常に送信されました！近日中にご連絡いたします。");
      form.reset();
    });
  }
});

id = "navigationToggle";
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("hidden");
    });
  }
});
function scrollToSection(contact) {
  const section = document.getElementById(contact);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
