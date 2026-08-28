const BUSINESS = {
  name: "Harris in Wonderland",
  phone: "(860) 674-0160",
  email: "Adam@harrisinwonderland.com",
};

const HOURS = [
  { day: "Sunday",    label: "12:00 PM – 4:00 PM", open: 12, close: 16 },
  { day: "Monday",    label: "Closed", closed: true },
  { day: "Tuesday",   label: "10:00 AM – 7:30 PM", open: 10, close: 19.5 },
  { day: "Wednesday", label: "10:00 AM – 7:30 PM", open: 10, close: 19.5 },
  { day: "Thursday",  label: "10:00 AM – 7:30 PM", open: 10, close: 19.5 },
  { day: "Friday",    label: "4:30 PM – 7:30 PM", open: 16.5, close: 19.5 },
  { day: "Saturday",  label: "10:00 AM – 6:00 PM", open: 10, close: 18 },
];

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const now = new Date();
const today = now.getDay();
const hoursEl = document.getElementById("hoursList");
if (hoursEl) {
  hoursEl.innerHTML = HOURS.map((row, i) => {
    const cls = [i === today ? "today" : "", row.closed ? "closed" : ""].join(" ").trim();
    return `<li class="${cls}"><span>${row.day}</span><span>${row.label}</span></li>`;
  }).join("");
}

const badge = document.getElementById("openBadge");
if (badge) {
  const row = HOURS[today];
  const hour = now.getHours() + now.getMinutes() / 60;
  const open = row && !row.closed && hour >= row.open && hour < row.close;
  badge.classList.toggle("is-open", open);
  badge.querySelector(".label").textContent = open ? "Open now" : (row.closed ? "Closed Monday" : "Closed — see ticket");
}

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || ""}\nTopic: ${data.topic || "General"}\n\n${data.message}`
    );
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Harris in Wonderland inquiry")}&body=${body}`;
    if (status) status.textContent = "Opening your email…";
  });
}

document.querySelectorAll(".photo-slot img").forEach((img) => {
  const markEmpty = () => {
    img.hidden = true;
    img.closest(".photo-slot")?.classList.add("is-empty");
  };
  img.addEventListener("error", markEmpty);
  if (img.complete && img.naturalWidth === 0) markEmpty();
});
