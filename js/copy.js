// Progressive enhancement: click or tap an `.email` address to copy it to the
// clipboard, with brief "Copied" feedback. Without JS — or without the Clipboard
// API (e.g. a non-secure context) — the address stays one-click-selectable via
// CSS `user-select: all`, so nothing here is required for the page to work.
//
// Loaded as an external file (not inline) so the site's strict
// Content-Security-Policy (default-src 'self') needs no 'unsafe-inline'.
(function () {
  function flash(el) {
    el.classList.add('copied');
    window.clearTimeout(el._copyT);
    el._copyT = window.setTimeout(function () {
      el.classList.remove('copied');
    }, 1600);
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('.email');
    if (!el) return;
    var addr = (el.textContent || '').trim();
    if (!addr || !navigator.clipboard || !navigator.clipboard.writeText) return;
    navigator.clipboard.writeText(addr).then(
      function () { flash(el); },
      function () {},
    );
  });
})();
