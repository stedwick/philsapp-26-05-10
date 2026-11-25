const TAU = Math.PI * 2;
const r1 = (v) => Math.round(v * 10) / 10;

// Guilloche line work (the fine security-printing patterns on banknotes),
// drawn as SVG paths sized to each paper object.
function closedPath(points) {
  return `M${points.map(([x, y]) => `${r1(x)} ${r1(y)}`).join(' ')}Z`;
}

function rose(cx, cy, r0, amp, lobes, count, { b = 0, m = 0 } = {}) {
  const samples = Math.max(200, Math.round(lobes * 20));
  let d = '';
  for (let k = 0; k < count; k++) {
    const phase = (k / count) * (TAU / lobes) * 2;
    const rk = r0 + (k / (count - 1 || 1) - 0.5) * amp * 2.6;
    const ak = amp * (0.6 + 0.4 * Math.cos((k / count) * TAU));
    const points = [];
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * TAU;
      const r = rk + ak * Math.sin(lobes * t + phase) + b * Math.sin(m * t - phase * 1.7);
      points.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
    }
    d += closedPath(points);
  }
  return d;
}

function perimeterPoint(s, x0, y0, x1, y1) {
  const w = x1 - x0;
  const h = y1 - y0;
  if (s < w) return [x0 + s, y0, 0, 1];
  if (s < w + h) return [x1, y0 + s - w, -1, 0];
  if (s < 2 * w + h) return [x1 - (s - w - h), y1, 0, -1];
  return [x0, y1 - (s - 2 * w - h), 1, 0];
}

function border(w, h, { inset = 10, band = 12, strands = 5, lambda = 22, twoFamilies = true } = {}) {
  const x0 = inset;
  const y0 = inset;
  const x1 = w - inset;
  const y1 = h - inset;
  const perimeter = 2 * (x1 - x0) + 2 * (y1 - y0);
  const waves = Math.max(8, Math.round(perimeter / lambda));
  const steps = Math.round(perimeter / 2);
  let d = '';
  for (let k = 0; k < strands; k++) {
    for (const family of twoFamilies ? [0, 1] : [0]) {
      const points = [];
      for (let i = 0; i <= steps; i++) {
        const s = (i / steps) * perimeter;
        const [x, y, nx, ny] = perimeterPoint(s % perimeter, x0, y0, x1, y1);
        const u = (waves * TAU * s) / perimeter;
        const o = family === 0
          ? band / 2 + (band / 2) * Math.sin(u + (k * TAU) / strands)
          : band / 2 + (band / 2) * Math.sin(u * 0.5 - (k * TAU) / strands) * Math.cos(u * 0.5);
        points.push([x + nx * o, y + ny * o]);
      }
      d += closedPath(points);
    }
  }
  return d;
}

function field(w, h, { spacing = 7, amp = 5, lambda = 110 } = {}) {
  let d = '';
  for (let y = -amp; y < h + amp; y += spacing) {
    d += `M0 ${r1(y)}`;
    for (let x = 6; x <= w + 6; x += 6) {
      d += ` ${x} ${r1(y + amp * Math.sin((TAU * x) / lambda + y * 0.045) + amp * 0.5 * Math.sin((TAU * x) / (lambda * 2.7) - y * 0.02))}`;
    }
  }
  return d;
}

const line = (d, ink, width, opacity) => `<path d="${d}" style="stroke:${ink}" stroke-width="${width}" opacity="${opacity}"/>`;
const PATTERNS = {
  card: (w, h, ink) => line(border(w, h, { inset: 8, band: 9, strands: 4, lambda: 20 }), ink, 0.5, 0.65),
  pp: (w, h, ink) => line(field(w, h, { spacing: 6, amp: 5, lambda: 120 }), ink, 0.4, 0.18)
    + line(rose(w * 0.5, h * 0.55, Math.min(w, h) * 0.34, Math.min(w, h) * 0.04, 28, 30, { b: Math.min(w, h) * 0.02, m: 6 }), ink, 0.35, 0.16)
    + line(border(w, h, { inset: 9, band: 9, strands: 4, lambda: 18 }), ink, 0.45, 0.55),
  dipl: (w, h, ink) => line(field(w, h, { spacing: 6, amp: 5, lambda: 150 }), ink, 0.4, 0.1)
    + line(border(w, h, { inset: 10, band: Math.max(12, Math.min(w, h) * 0.05), strands: 6, lambda: 26 }), ink, 0.45, 0.7)
    + line(rose(w * 0.5, h * 0.55, Math.min(w, h) * 0.34, Math.min(w, h) * 0.04, 30, 36, { b: Math.min(w, h) * 0.02, m: 7 }), ink, 0.35, 0.14),
  ticket: (w, h, ink) => line(field(w, h, { spacing: 5.5, amp: 6, lambda: 140 }), ink, 0.4, 0.2)
    + line(border(w, h, { inset: 6, band: 8, strands: 4, lambda: 18, twoFamilies: false }), ink, 0.45, 0.75)
    + line(rose(w - 44, h * 0.5, Math.min(h * 0.34, 34), h * 0.04, 14, 22, { b: h * 0.02, m: 5 }), ink, 0.35, 0.28),
  sheet: (w, h, ink) => line(border(w, h, { inset: 6, band: 8, strands: 3, lambda: 20, twoFamilies: false }), ink, 0.4, 0.6),
};

function drawPatterns(root) {
  for (const el of root.querySelectorAll('[data-g]')) {
    const pattern = PATTERNS[el.dataset.g];
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    if (!pattern || !w || !h) continue;
    const size = `${w}x${h}`;
    if (el.dataset.gSize === size) continue;
    el.dataset.gSize = size;
    let svg = el.querySelector(':scope > svg.g');
    if (!svg) {
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'g');
      svg.setAttribute('aria-hidden', 'true');
      el.prepend(svg);
    }
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.innerHTML = pattern(w, h, el.dataset.ink || 'var(--t-green)');
  }
}

function drawRosettes(root) {
  for (const path of root.querySelectorAll('path[data-rose]')) {
    const [r0, amp, lobes, count] = path.dataset.rose.split(',').map(Number);
    path.setAttribute('d', rose(0, 0, r0, amp, lobes, count));
  }
}

function clamp(value) {
  return Math.max(0, Math.min(1, value));
}

function backpackPose(documentTop, height, packHeight) {
  const position = documentTop / height;
  const arrival = clamp((1.03 - position) / .18);
  const flap = clamp((.95 - position) / .19);
  const clearance = clamp((position - .56) / .14);

  return {
    fold: 1 - flap * .62,
    lift: -packHeight * .22 * flap,
    insertRise: -packHeight * .46 * flap,
    drop: (1 - arrival * clearance) * packHeight,
    opacity: arrival * clearance,
  };
}

// The pill's sun rises and sets over the page: 7 AM at the top, 11 PM at the footer.
function sunPosition(progress) {
  const angle = Math.PI * (1 - progress);
  return { x: 22 + 19 * Math.cos(angle), y: 24 - 19 * Math.sin(angle) };
}

function clockLabel(progress) {
  const minutes = Math.round((420 + progress * 960) / 15) * 15;
  const hour = Math.floor(minutes / 60) % 24;
  const minute = String(minutes % 60).padStart(2, '0');
  return `${hour % 12 || 12}:${minute} ${hour < 12 ? 'AM' : 'PM'}`;
}

export function initPortfolio() {
  const page = document.querySelector('.pnw');
  const hero = document.querySelector('.c-island');
  const heroSection = hero?.querySelector('.c-island-hero');
  const reveal = page?.querySelector('[data-pnw-reveal]');
  const welcome = page?.querySelector('#about');
  const passport = page?.querySelector('#about-skills');
  const pack = reveal?.querySelector('.pnw-reveal__pack');
  const insert = pack?.querySelector('[data-pnw-insert]');
  const sun = page?.querySelector('[data-pnw-sun]');
  const clock = page?.querySelector('[data-pnw-clock]');
  const lamp = page?.querySelector('[data-pnw-uv]');
  const nav = page?.querySelector('.pnw-nav');
  const menu = page?.querySelector('.pnw-nav__menu');
  if (!page || !hero || !heroSection || !reveal || !welcome || !passport || !pack || !insert || !sun || !lamp || !nav || !menu) return;

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const packImages = [...pack.querySelectorAll('img')];
  let frame = 0;
  let packHeight = 0;
  let heroExited;

  function hidePack() {
    pack.style.setProperty('--pack-opacity', '0');
    pack.style.visibility = 'hidden';
  }

  function paint() {
    frame = 0;
    const height = window.innerHeight;
    const exited = heroSection.getBoundingClientRect().bottom <= height * .08;
    if (exited !== heroExited) {
      heroExited = exited;
      hero.toggleAttribute('data-portfolio-exited', exited);
      nav.toggleAttribute('data-before-handoff', !exited);
      hero.dispatchEvent(new Event('portfolio-visibility'));
    }

    const progress = clamp(
      (window.scrollY - heroSection.offsetHeight) /
      Math.max(1, document.documentElement.scrollHeight - height - heroSection.offsetHeight),
    );
    const shown = motion.matches ? Math.round(progress * 4) / 4 : progress;
    const sunPoint = sunPosition(shown);
    sun.setAttribute('cx', String(r1(sunPoint.x)));
    sun.setAttribute('cy', String(r1(sunPoint.y)));
    if (clock) clock.textContent = clockLabel(shown);

    if (motion.matches || !packHeight) {
      hidePack();
      return;
    }

    const welcomeRect = welcome.getBoundingClientRect();
    const passportTop = passport.getBoundingClientRect().top;
    // Scope the backpack strictly to #about and put it away well before #about-skills enters.
    if (passportTop <= height * .92 || welcomeRect.bottom <= height * .45 || welcomeRect.top <= height * .50) {
      hidePack();
      return;
    }

    const pose = backpackPose(welcomeRect.top, height, packHeight);
    if (pose.opacity <= .01) {
      hidePack();
      return;
    }

    pack.style.visibility = 'visible';
    pack.style.setProperty('--flap-scale', String(pose.fold));
    pack.style.setProperty('--flap-rise', `${pose.lift}px`);
    pack.style.setProperty('--insert-rise', `${pose.insertRise}px`);
    pack.style.setProperty('--pack-drop', `${pose.drop}px`);
    pack.style.setProperty('--pack-opacity', String(pose.opacity));
    insert.removeAttribute('data-passport');
  }

  function queuePaint() {
    if (!frame) frame = window.requestAnimationFrame(paint);
  }

  function measurePack() {
    if (!packImages.every((image) => image.complete && image.naturalWidth)) {
      paint();
      return;
    }
    packHeight = pack.offsetHeight;
    reveal.style.setProperty('--pnw-pack-height', `${packHeight}px`);
    reveal.setAttribute('data-pack-animated', '');
    paint();
  }

  function hideBrokenPack() {
    reveal.setAttribute('data-pack-missing', '');
    hidePack();
  }

  for (const image of packImages) {
    if (image.complete && !image.naturalWidth) hideBrokenPack();
    image.addEventListener('error', hideBrokenPack, { once: true });
    image.addEventListener('load', measurePack, { once: true });
  }
  window.addEventListener('scroll', queuePaint, { passive: true });
  window.addEventListener('resize', measurePack);
  window.addEventListener('pageshow', measurePack);
  motion.addEventListener('change', measurePack);

  page.setAttribute('data-portfolio-ready', '');
  lamp.hidden = false;
  const darkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  let uvManual = false;
  function setUv(isOn) {
    lamp.setAttribute('aria-pressed', String(isOn));
    page.dataset.uv = String(isOn);
  }
  setUv(darkScheme.matches);
  darkScheme.addEventListener('change', (event) => {
    if (!uvManual) setUv(event.matches);
  });
  lamp.addEventListener('click', () => {
    uvManual = true;
    setUv(lamp.getAttribute('aria-pressed') !== 'true');
  });
  menu.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) {
      menu.open = false;
    }
  });
  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
  measurePack();

  drawRosettes(page);
  drawPatterns(page);
  const resized = new ResizeObserver(() => drawPatterns(page));
  for (const el of page.querySelectorAll('[data-g]')) resized.observe(el);
  document.fonts?.ready.then(() => drawPatterns(page));

  // Paper objects settle onto the table as they scroll in.
  const objects = [...page.querySelectorAll('.pnw-obj')];
  if (!motion.matches && 'IntersectionObserver' in window) {
    const settle = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove('is-pre');
        settle.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -10% 0px' });
    for (const object of objects) {
      if (object.getBoundingClientRect().top > window.innerHeight) {
        object.classList.add('is-pre');
        settle.observe(object);
      }
    }
  }

  // Mark the section in view in the pill.
  const navLinks = [...nav.querySelectorAll('a[href^="#"]:not(.pnw-nav__dial)')];
  const targets = [...new Set(navLinks.map((link) => link.getAttribute('href')))]
    .map((href) => page.querySelector(href))
    .filter(Boolean);
  if ('IntersectionObserver' in window) {
    const current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const href = `#${entry.target.id}`;
        for (const link of navLinks) {
          if (link.getAttribute('href') === href) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        }
      }
    }, { rootMargin: '-45% 0px -50% 0px' });
    for (const target of targets) current.observe(target);
  }
}
