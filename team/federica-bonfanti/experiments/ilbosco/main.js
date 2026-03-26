document.querySelectorAll('.card__toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const more = btn.closest('.card').querySelector('.card__more');
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      more.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Dimmi di più';
    } else {
      more.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = 'Dimmi di meno';
    }
  });
});

// Chi Siamo accordion
const chiSiamoToggle = document.querySelector('.footer__chi-siamo-toggle');
const chiSiamoBody   = document.querySelector('.footer__chi-siamo-body');
const chiSiamoClose  = document.querySelector('.footer__chi-siamo-close');

chiSiamoToggle.addEventListener('click', () => {
  chiSiamoBody.hidden = false;
  chiSiamoToggle.hidden = true;
});

chiSiamoClose.addEventListener('click', () => {
  chiSiamoBody.hidden = true;
  chiSiamoToggle.hidden = false;
});
