/* This parser-blocking, same-origin script gates the first paint before React. */
(function () {
  var script = document.currentScript;
  if (!script) return;
  var key = script.getAttribute("data-storage-key");
  var brand = script.getAttribute("data-brand");
  var paths = (script.getAttribute("data-paths") || "/").split(",");
  var preference = matchMedia("(prefers-reduced-motion: reduce)");
  if (
    !key ||
    !brand ||
    paths.indexOf(location.pathname) < 0 ||
    location.hash ||
    preference.matches
  )
    return;
  try {
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "seen");
  } catch {
    /* Storage is optional. CSS still provides a finite exit. */
  }
  var html = document.documentElement;
  html.setAttribute("data-brand-arrival", brand);
  var timer;
  var frame;
  function dismiss() {
    html.removeAttribute("data-brand-arrival");
    clearTimeout(timer);
    cancelAnimationFrame(frame);
    window.removeEventListener("keydown", onKey);
    document.removeEventListener("click", onClick);
    preference.removeEventListener("change", dismiss);
  }
  function onKey(event) {
    if (event.key === "Tab" || event.key === "Escape") dismiss();
  }
  function onClick(event) {
    if (
      event.target instanceof Element &&
      event.target.closest(".brand-arrival-skip, .brand-entrance-skip")
    )
      dismiss();
  }
  window.addEventListener("keydown", onKey);
  document.addEventListener("click", onClick);
  preference.addEventListener("change", dismiss);
  frame = requestAnimationFrame(function () {
    timer = setTimeout(dismiss, 1850);
  });
})();
