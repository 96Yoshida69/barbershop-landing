//плавный скролл
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    target?.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const form = document.querySelector(".booking-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: form.querySelector("input[type='text']").value,
    phone: form.querySelector("input[type='tel']").value,
    service: form.querySelector("select").value,
    date: form.querySelector("input[type='date']").value,
  };

  console.log("BOOKING:", data);

  alert("Заявка отправлена! Мы свяжемся с вами 🔥");

  form.reset();
});
