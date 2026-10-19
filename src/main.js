import "./style.css";

const WA = "966552932864";

// package buttons preselect the form
document.querySelectorAll("[data-pkg]").forEach((a) =>
  a.addEventListener("click", () => {
    const sel = document.querySelector('select[name="الباقة"]');
    if (sel) sel.value = a.dataset.pkg;
  })
);

// lead form -> WhatsApp
document.getElementById("lead-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const lines = ["السلام عليكم، أبي أطلق حملة إعلانية:"];
  for (const [k, v] of new FormData(e.target)) if (v) lines.push(`${k}: ${v}`);
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
});

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
btn?.addEventListener("click", () => {
  menu?.classList.toggle("hidden");
  menu?.classList.toggle("flex");
});
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => window.innerWidth < 768 && menu.classList.add("hidden")));

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
