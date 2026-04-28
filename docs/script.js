const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const langBtn = document.getElementById("langBtn");
const year = document.getElementById("year");

let currentLanguage = localStorage.getItem("technoMindLanguage") || "ar";

year.textContent = new Date().getFullYear();

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("technoMindLanguage", language);

  const isArabic = language === "ar";
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.dir = isArabic ? "rtl" : "ltr";
  langBtn.textContent = isArabic ? "English" : "العربية";

  document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
    element.textContent = isArabic ? element.dataset.ar : element.dataset.en;
  });
}

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

langBtn.addEventListener("click", () => {
  applyLanguage(currentLanguage === "ar" ? "en" : "ar");
});

applyLanguage(currentLanguage);
