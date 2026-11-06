// Lightbox for project galleries.
// Any <a class="g-item" href="full-size.jpg"> inside a .gallery opens in the viewer.
// Without JavaScript the link still opens the image on its own.
(function () {
  const items = Array.from(document.querySelectorAll('.gallery a.g-item'));
  if (!items.length || typeof HTMLDialogElement === 'undefined') return;

  const dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.setAttribute('aria-label', 'Image viewer');
  dlg.innerHTML = `
    <figure class="lb-figure">
      <img class="lb-img" alt="">
      <figcaption class="lb-caption"></figcaption>
    </figure>
    <p class="lb-count" aria-live="polite"></p>
    <button class="lb-btn lb-prev" type="button" aria-label="Previous image">&#8249;</button>
    <button class="lb-btn lb-next" type="button" aria-label="Next image">&#8250;</button>
    <button class="lb-btn lb-close" type="button" aria-label="Close viewer">&times;</button>`;
  document.body.appendChild(dlg);

  const img = dlg.querySelector('.lb-img');
  const cap = dlg.querySelector('.lb-caption');
  const count = dlg.querySelector('.lb-count');
  let index = 0;
  let opener = null;

  function show(i) {
    index = (i + items.length) % items.length;
    const a = items[index];
    const thumb = a.querySelector('img');
    const figcap = a.closest('figure')?.querySelector('figcaption');
    img.src = a.getAttribute('href');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = figcap ? figcap.textContent.trim() : '';
    count.textContent = `${index + 1} of ${items.length}`;
  }

  items.forEach((a, i) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      opener = a;
      show(i);
      dlg.showModal();
    });
  });

  dlg.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
  dlg.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
  dlg.querySelector('.lb-close').addEventListener('click', () => dlg.close());

  // Click on the dark backdrop closes; clicks on the image don't.
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
  });

  dlg.addEventListener('close', () => { if (opener) opener.focus(); });
})();
