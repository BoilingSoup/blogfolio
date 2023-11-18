let d = localStorage.getItem("dark");

if (d.trim() === "false") {
  document.documentElement.classList.remove("dark");
  document.querySelector('meta[name="theme-color"]').content = "#e2e8f0";

  // scrollbar
  document.documentElement.style.setProperty("--scroll-border-color", "#52525b");
  document.documentElement.style.setProperty("--scroll-thumb-bg", "#e2e8f0");
  document.documentElement.style.setProperty("--scroll-track-bg", "#27272a");
}
