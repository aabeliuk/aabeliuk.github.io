(function () {
  var lightbox   = document.getElementById('infographic-lightbox');
  var lbImg      = document.getElementById('lightbox-img');
  var lbClose    = document.getElementById('lightbox-close');
  var lbBackdrop = document.getElementById('lightbox-backdrop');

  if (!lightbox || !lbImg || !lbClose || !lbBackdrop) return;

  // Move lightbox to <body> to sit in the root stacking context,
  // avoiding z-index conflicts with #main's animation stacking context.
  document.body.appendChild(lightbox);

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('lightbox--open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('lightbox--open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-lightbox-trigger').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
}());
