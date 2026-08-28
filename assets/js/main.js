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
  { day: "Friday",    label: "10:00 AM – 7:00 PM", open: 10, close: 19 },
  { day: "Saturday",  label: "10:00 AM – 6:00 PM", open: 10, close: 18 },
];

const yearEl = document.getElementById("year");
If (yearEl) yearEl.textContent = new Date().getFullYear();
