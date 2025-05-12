const portfolioItems = [
  {
    title: "Portofolio Graphic Designer",
    url: "https://carinaahz.netlify.app/",
  },
  {
    title: "Website Info Beasiswa ISTTS",
    url: "https://pmb.istts.ac.id/manajemen/jpk/index.php",
  },
  {
    title: "Website Prodi Teknik Industri ISTTS",
    url: "https://industri2025.istts.ac.id/",
  },
];

const container = document.getElementById("portfolioContainer");

function createPortfolioItem(item) {
  const div = document.createElement("div");
  div.className = "portfolio-item";
  div.tabIndex = 0;
  div.role = "link";
  div.setAttribute("aria-label", `Open portfolio website: ${item.title}`);
  div.innerHTML = `<span>${item.title}</span>`;
  div.addEventListener("click", () => {
    window.open(item.url, "_blank", "noopener");
  });
  div.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      div.click();
    }
  });
  return div;
}

function loadPortfolioItems() {
  portfolioItems.forEach((item, index) => {
    const element = createPortfolioItem(item);
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    container.appendChild(element);
    setTimeout(() => {
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }, index * 150);
  });
}

loadPortfolioItems();

function handleFirstTab(e) {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
  }
}
window.addEventListener("keydown", handleFirstTab);
