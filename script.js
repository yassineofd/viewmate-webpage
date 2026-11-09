// If the APK has not been placed in /downloads yet, say so instead of
// leaving visitors with a 404 download.
(function () {
  var link = document.getElementById("apk-link");
  if (!link || location.protocol === "file:") return;
  fetch(link.getAttribute("href"), { method: "HEAD" })
    .then(function (r) {
      if (!r.ok) throw new Error("missing");
    })
    .catch(function () {
      var p = document.createElement("p");
      p.className = "unavailable";
      p.textContent = "The APK isn't published yet. Please check back soon.";
      link.parentNode.appendChild(p);
      link.setAttribute("aria-disabled", "true");
      link.style.opacity = ".5";
      link.style.pointerEvents = "none";
    });
})();
