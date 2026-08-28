const BUSINESS = {
  name: "Harris in Wonderland",
  phone: "(860) 674-0160",
  phoneHref: "+18606740160",
  email: "harrisinwonderland@gmail.com",
  address: "364 Albany Turnpike, Canton, CT 06019",
  mapsQuery: "364 Albany Turnpike, Canton, CT 06019",
};

const HOURS = [
  { day: "Sunday",    label: "12:00 PM – 4:00 PM" },
  { day: "Monday",    label: "Closed", closed: true },
  { day: "Tuesday",   label: "10:00 AM – 7:30 PM" },
  { day: "Wednesday", label: "10:00 AM – 7:30 PM" },
  { day: "Thursday",  label: "10:00 AM – 7:30 PM" },
  { day: "Friday",    label: "4:30 PM – 7:30 PM" },
  { day: "Saturday",  label: "10:00 AM – 6:00 PM" },
];

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const hoursEl = document.getElementById("hoursList");
if (hoursEl) {
  const today = new Date().getDay();
  hoursEl.innerHTML = HOURS.map((row, i) => {
    const cls = [i === today ? "today" : "", row.closed ? "closed" : ""].join(" ").trim();
    return `<li class="${cls}"><span>${row.day}</span><span>${row.label}</span></li>`;
  }).join("");
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
