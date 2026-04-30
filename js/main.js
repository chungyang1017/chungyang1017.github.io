// ─────────────────────────────────────────────
//  PHOTOGRAPHY DATA
//  把要顯示的照片加進這個陣列即可（順序就是顯示順序）
//  欄位說明：
//    src       照片路徑（相對於 index.html）
//    title     標題（中或英，可省略）
//    location  拍攝地點（可省略）
//    year      拍攝年份（可省略）
//    shape     'portrait' | 'landscape' | 'square'（影響網格比例，可省略）
//    span      設為 2 時這張會跨兩欄（可省略）
// ─────────────────────────────────────────────
const photoData = [
  { src: 'images/photography/dscf4473_xd2s_9.jpg', year: '2026', shape: 'landscape' },
  { src: 'images/photography/dscf8423_1.jpg',     year: '2026', shape: 'landscape' },
  { src: 'images/photography/dscf9795_xd3.jpg',   year: '2026', shape: 'square' },
  { src: 'images/photography/dsc_1606.jpg',        year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf1023_11.jpg',     year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf1466_3.jpg',      year: '2025', shape: 'square' },
  { src: 'images/photography/dscf2136_2.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf3424_1.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf4933_6.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf4989_xd3_1.jpg',  year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf5542_2.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf5975_1.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf6254_10.jpg',     year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf6254_15.jpg',     year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf6846_1.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf7306_xd2s.jpg',   year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf7430_1.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf7650_3.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf7974.jpg',        year: '2025', shape: 'portrait' },
  { src: 'images/photography/dscf8240_xd2s.jpg',   year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf8356_3.jpg',      year: '2025', shape: 'square' },
  { src: 'images/photography/dscf8410_xd3.jpg',    year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf8513_2.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf8885_1.jpg',      year: '2025', shape: 'landscape' },
  { src: 'images/photography/dscf9370_xd2s_3.jpg', year: '2025', shape: 'landscape' },
  { src: 'images/photography/img_9437.jpg',        year: '2025', shape: 'square' },
  { src: 'images/photography/img_9439.jpg',        year: '2025', shape: 'landscape' },
  { src: 'images/photography/img_9609.jpg',        year: '2025', shape: 'landscape' },
  { src: 'images/photography/img_2893.jpg',        year: '2024', shape: 'portrait' },
  { src: 'images/photography/img_3503_2.jpg',      year: '2024', shape: 'square' },
  { src: 'images/photography/img_3506.jpg',        year: '2024', shape: 'square' },
  { src: 'images/photography/img_3507.jpg',        year: '2024', shape: 'landscape' },
  { src: 'images/photography/dscf9336.jpg',        year: '2023', shape: 'landscape' },
  { src: 'images/photography/img_5427.jpg',        year: '2023', shape: 'square' },
  { src: 'images/photography/dscf9616_3.jpg',      year: '2022', shape: 'landscape' },
  { src: 'images/photography/2019-12-22_09-24-27.jpg', year: '2019', shape: 'landscape' },
  { src: 'images/photography/1575909151701_original.jpg', year: '2017', shape: 'landscape' },
  { src: 'images/photography/51897012615_d1c1380f41_o.jpg', year: '2017', shape: 'landscape' },
  { src: 'images/photography/1559799148756.jpg',   year: '2016', shape: 'landscape' },
  { src: 'images/photography/dscf5216.jpg',        year: '2016', shape: 'landscape' },
  { src: 'images/photography/img_8239.jpg',                      shape: 'landscape' },
  { src: 'images/photography/img_9798.jpg',                      shape: 'landscape' },
  { src: 'images/photography/img_9805.jpg',                      shape: 'landscape' },
];

// ─────────────────────────────────────────────
//  Navigation (mobile)
// ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─────────────────────────────────────────────
//  Publication tabs
// ─────────────────────────────────────────────
document.querySelectorAll('.pub-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pub-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pub-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target)?.classList.add('active');
  });
});

// ─────────────────────────────────────────────
//  Fade in on scroll
// ─────────────────────────────────────────────
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─────────────────────────────────────────────
//  Photography gallery
// ─────────────────────────────────────────────
const galleryEl = document.getElementById('photo-gallery');
const emptyEl = document.getElementById('photo-empty');

if (galleryEl && emptyEl) {
  if (photoData.length === 0) {
    galleryEl.style.display = 'none';
    emptyEl.style.display = 'block';
  } else {
    emptyEl.style.display = 'none';
    galleryEl.innerHTML = photoData.map((p, i) => {
      const shape = p.shape ? `is-${p.shape}` : '';
      const span = p.span === 2 ? 'span-2' : '';
      const title = p.title ? `<span class="photo-meta-title">${p.title}</span>` : '';
      const year = p.year ? `<span class="photo-meta-year">${p.year}</span>` : '';
      const meta = (title || year) ? `<div class="photo-meta">${title}${year}</div>` : '';
      return `
        <figure class="photo-card ${shape} ${span}" data-index="${i}" tabindex="0" aria-label="${p.title || 'Photograph'}">
          <img src="${p.src}" alt="${p.title || ''}" loading="lazy" />
          ${meta}
        </figure>
      `;
    }).join('');
  }
}

// ─────────────────────────────────────────────
//  Lightbox
// ─────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCaption = document.getElementById('lightbox-caption');
const lbCounter = document.getElementById('lightbox-counter');
const lbClose = document.getElementById('lightbox-close');
const lbPrev = document.getElementById('lightbox-prev');
const lbNext = document.getElementById('lightbox-next');

let currentIndex = 0;

function buildCaption(p) {
  const parts = [];
  if (p.title) parts.push(`<span class="title">${p.title}</span>`);
  if (p.location) parts.push(`<span class="loc">${p.location}</span>`);
  const main = parts.join(`<span class="sep">·</span>`);
  const year = p.year ? `<span class="year">${p.year}</span>` : '';
  return main + (main && year ? `<span class="sep">·</span>` : '') + year;
}

function openLightbox(idx) {
  if (!lightbox || !photoData[idx]) return;
  currentIndex = idx;
  const p = photoData[idx];
  lbImg.src = p.src;
  lbImg.alt = p.title || '';
  lbCaption.innerHTML = buildCaption(p);
  lbCaption.style.display = (p.title || p.location || p.year) ? 'block' : 'none';
  lbCounter.textContent = `${idx + 1} / ${photoData.length}`;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
}

function closeLightbox() {
  lightbox?.classList.remove('is-open');
  lightbox?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
}

function navigate(dir) {
  if (!photoData.length) return;
  currentIndex = (currentIndex + dir + photoData.length) % photoData.length;
  openLightbox(currentIndex);
}

galleryEl?.addEventListener('click', e => {
  const card = e.target.closest('.photo-card');
  if (!card) return;
  openLightbox(Number(card.dataset.index));
});

galleryEl?.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.photo-card');
  if (!card) return;
  e.preventDefault();
  openLightbox(Number(card.dataset.index));
});

lbClose?.addEventListener('click', closeLightbox);
lbPrev?.addEventListener('click', e => { e.stopPropagation(); navigate(-1); });
lbNext?.addEventListener('click', e => { e.stopPropagation(); navigate(1); });

lightbox?.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox?.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') navigate(-1);
  else if (e.key === 'ArrowRight') navigate(1);
});
