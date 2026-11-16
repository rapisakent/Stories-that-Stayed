/* ==========================================================
   Stories That Stayed: behavior
   Reflections below are the author's own words, lightly tidied.
   ========================================================== */
(function () {
  'use strict';

  /* ---------- content ---------- */
  var PATHS = [
    {
      id: 'beginning', num: '01', name: 'The Beginning',
      desc: 'Stories about discovering yourself',
      film: 'The Secret Life of Walter Mitty',
      why: "It isn't just about adventure. It's about stepping outside your comfort zone, taking risks, and realizing that life is bigger than the routine we create for ourselves.",
      moment: 'To see the world, things dangerous to come to, to see behind walls…',
      mwhy: "This idea stays with me because I don't want to spend my entire life just imagining what I could become. I want to actually experience things, take chances, explore, and create memories.",
      take: 'Sometimes we need to stop overthinking and actually experience life.',
      cap: 'Sunrise over the ridge'
    },
    {
      id: 'connection', num: '02', name: 'The Connection',
      desc: 'Stories about love, memory, and the people who stay',
      film: 'Your Name',
      why: 'What makes it special to me is its storytelling about connection, timing, memories, and people who somehow leave a mark on our lives. It shows how meaningful certain connections can be, even when circumstances separate people.',
      moment: "Searching for someone, even when you can't remember their name.",
      mwhy: 'It represents how some connections leave a lasting impact on us. Even when things change, certain memories and experiences become part of who we are.',
      take: "Some people leave a mark that time can't erase.",
      cap: 'Two points, one thread'
    },
    {
      id: 'turning', num: '03', name: 'The Turning Point',
      desc: 'Stories about mistakes, loss, and change',
      film: 'A Silent Voice',
      why: "It explores regret, forgiveness, personal struggles, and learning to accept yourself. It reminds me that everyone is fighting battles we don't always see, and that personal growth starts with acknowledging our mistakes.",
      moment: 'Shoya learning to face people again.',
      mwhy: "Sometimes we lose people, make mistakes, experience unexpected changes, and question ourselves. But those experiences don't mean our story is over. Facing it is where everything starts to change.",
      take: 'Growth begins when I stop hiding from my mistakes.',
      cap: 'Rain, and a lone figure'
    },
    {
      id: 'becoming', num: '04', name: 'The Becoming',
      desc: 'Stories about healing, growth, and starting again',
      film: 'A Silent Voice, continued',
      why: 'This is the other half of the same story: after the regret comes the long, quiet work of learning to live with yourself.',
      moment: 'Shoya forgiving himself.',
      mwhy: 'This matters to me because sometimes we become our own worst critics. We carry regrets and blame ourselves for things that happened in the past. But I believe everyone deserves the opportunity to grow, forgive themselves, and start again.',
      take: 'Not everything needs a perfect ending to have meaning.',
      cap: 'The first green after'
    }
  ];

  /* ---------- original SVG illustrations ---------- */
  var rainLines = '';
  for (var i = 0; i < 30; i++) {
    var x = i * 14 + (i % 3) * 4, y = (i * 37) % 220 - 60;
    rainLines += '<line x1="' + x + '" y1="' + y + '" x2="' + (x - 6) + '" y2="' + (y + 30) +
      '" style="animation-delay:-' + (i * 0.17).toFixed(2) + 's;animation-duration:' + (0.8 + (i % 4) * 0.18).toFixed(2) + 's"/>';
  }
  var windows = '';
  [[40,452],[62,448],[90,455],[120,446],[150,452],[250,450],[280,454],[310,447],[340,453],[366,449]].forEach(function (w) {
    windows += '<rect x="' + w[0] + '" y="' + w[1] + '" width="5" height="6" fill="#ffd88a"/>';
  });

  var SCENES = {
    beginning:
      '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: a small figure on a mountain ridge at sunrise">' +
      '<defs><linearGradient id="s1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2a55"/><stop offset=".45" stop-color="#8a4f6b"/><stop offset=".72" stop-color="#e0905a"/><stop offset="1" stop-color="#f8d79e"/></linearGradient></defs>' +
      '<rect width="400" height="500" fill="url(#s1)"/>' +
      '<g fill="#fff" opacity=".7"><circle class="twinkle" cx="60" cy="50" r="1.3"/><circle class="twinkle" cx="320" cy="70" r="1.1"/><circle class="twinkle" cx="170" cy="30" r="1"/><circle class="twinkle" cx="250" cy="110" r="1"/></g>' +
      '<circle class="glow" cx="270" cy="300" r="50" fill="#fff1c9" opacity=".9"/>' +
      '<g class="drift" fill="#fff" opacity=".35"><ellipse cx="90" cy="190" rx="60" ry="9"/><ellipse cx="130" cy="203" rx="46" ry="7"/><ellipse cx="300" cy="150" rx="50" ry="8"/></g>' +
      '<g stroke="#2b2236" stroke-width="1.6" fill="none" opacity=".7"><path d="M120 120q8-9 16 0q8-9 16 0"/><path d="M170 150q6-7 12 0q6-7 12 0"/></g>' +
      '<path d="M0 400 L90 280 L160 370 L240 240 L330 380 L400 310 V500 H0Z" fill="#3a3560" opacity=".85"/>' +
      '<path d="M0 455 L110 350 L190 430 L280 330 L400 440 V500 H0Z" fill="#14172b"/>' +
      '<g fill="#0d0f1f"><circle cx="279" cy="312" r="5"/><path d="M274 317h10l2 18h-14z"/><path d="M272 318l-4 14" stroke="#0d0f1f" stroke-width="3"/></g></svg>',

    connection:
      '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: a comet over a small town, with a red thread joining two points">' +
      '<defs><linearGradient id="s2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#120f33"/><stop offset=".6" stop-color="#5e3585"/><stop offset=".85" stop-color="#d4557a"/><stop offset="1" stop-color="#ffab85"/></linearGradient>' +
      '<linearGradient id="tail" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#ffd9b0"/></linearGradient></defs>' +
      '<rect width="400" height="500" fill="url(#s2)"/>' +
      '<g fill="#fff" opacity=".85"><circle class="twinkle" cx="50" cy="60" r="1.5"/><circle class="twinkle" cx="150" cy="30" r="1"/><circle class="twinkle" cx="330" cy="80" r="1.6"/><circle class="twinkle" cx="260" cy="40" r="1"/><circle class="twinkle" cx="90" cy="130" r="1.2"/><circle class="twinkle" cx="360" cy="150" r="1"/><circle class="twinkle" cx="210" cy="95" r="1"/></g>' +
      '<g class="comet"><path d="M60 130 L200 160 L60 140Z" fill="url(#tail)"/><circle cx="200" cy="160" r="6" fill="#fff"/></g>' +
      '<path d="M70 380 C140 290 260 450 330 340" stroke="#ff4d5e" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="70" cy="380" r="6" fill="#ffd9b0"/><circle cx="330" cy="340" r="6" fill="#ffd9b0"/>' +
      '<path d="M0 470 L0 440 L30 440 L30 425 L70 425 L70 445 L110 445 L110 430 L150 430 L150 448 L200 448 L200 435 L250 435 L250 445 L290 445 L290 428 L330 428 L330 446 L370 446 L370 436 L400 436 V500 H0Z" fill="#150f2b"/>' +
      windows + '</svg>',

    turning:
      '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: a lone figure with an umbrella standing in the rain beside a street lamp">' +
      '<defs><linearGradient id="s3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1422"/><stop offset="1" stop-color="#5d7a9c"/></linearGradient>' +
      '<radialGradient id="lamp"><stop offset="0" stop-color="#ffe9b0" stop-opacity=".85"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="400" height="500" fill="url(#s3)"/>' +
      '<circle class="glow" cx="300" cy="300" r="90" fill="url(#lamp)"/>' +
      '<g class="rain">' + rainLines + '</g>' +
      '<rect y="430" width="400" height="70" fill="#0b101c"/><rect y="432" width="400" height="3" fill="#8fb3d9" opacity=".25"/>' +
      '<g fill="#0b101c"><rect x="298" y="296" width="4" height="136"/><rect x="288" y="288" width="24" height="9" rx="3"/>' +
      '<circle cx="190" cy="388" r="9"/><path d="M180 398h20l4 34h-28z"/><path d="M158 372a32 22 0 0 1 64 0z"/><rect x="189" y="372" width="2" height="18"/></g></svg>',

    becoming:
      '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: a green sprout growing in warm morning light">' +
      '<defs><linearGradient id="s4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c4a3e"/><stop offset=".55" stop-color="#9fb87a"/><stop offset=".8" stop-color="#f0cf7a"/><stop offset="1" stop-color="#fbe8b5"/></linearGradient></defs>' +
      '<rect width="400" height="500" fill="url(#s4)"/>' +
      '<g class="rays" opacity=".28" fill="#fff6d6"><path d="M200 390 L120 -100 L170 -100Z"/><path d="M200 390 L260 -100 L310 -100Z"/><path d="M200 390 L-100 150 L-100 200Z"/><path d="M200 390 L500 150 L500 200Z"/></g>' +
      '<circle class="glow" cx="200" cy="390" r="62" fill="#fff6d6" opacity=".85"/>' +
      '<path d="M0 360 Q80 320 160 350 T320 340 T400 350 V500 H0Z" fill="#6f9363" opacity=".7"/>' +
      '<path d="M0 400 Q100 380 200 400 T400 395 V500 H0Z" fill="#3a5a3a"/>' +
      '<path d="M0 445 Q120 420 220 445 T400 437 V500 H0Z" fill="#1e3a2e"/>' +
      '<g fill="#f6efe2" opacity=".8"><circle class="twinkle" cx="120" cy="300" r="2"/><circle class="twinkle" cx="290" cy="270" r="2"/><circle class="twinkle" cx="330" cy="330" r="1.6"/><circle class="twinkle" cx="80" cy="360" r="1.6"/></g>' +
      '<path d="M200 437 C200 405 198 390 200 370" stroke="#b7d99a" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<path d="M200 383 C175 383 168 361 180 355 C190 355 198 368 200 383Z" fill="#b7d99a"/>' +
      '<path d="M200 373 C225 373 232 351 220 345 C210 345 202 358 200 373Z" fill="#cfe9b1"/></svg>'
  };

  /* give each copy of an SVG its own gradient ids so duplicates never collide */
  function sceneFor(id, sfx) {
    return SCENES[id]
      .replace(/id="(s\d|tail|lamp)"/g, 'id="$1' + sfx + '"')
      .replace(/url\(#(s\d|tail|lamp)\)/g, 'url(#$1' + sfx + ')');
  }

  /* ---------- build the page ---------- */
  var frames = document.getElementById('frames');
  var indexEl = document.getElementById('index');
  var panel = document.getElementById('panel');
  var prog = document.getElementById('prog');
  var read = {};

  PATHS.forEach(function (p, i) {
    /* hero frame */
    var f = document.createElement('a');
    f.className = 'frame';
    f.href = '#paths';
    f.setAttribute('aria-label', 'Open ' + p.name);
    f.innerHTML = '<div class="img">' + sceneFor(p.id, 'h') + '</div><div class="cap mono">' + p.num + ' ' + p.name + '</div>';
    f.addEventListener('click', function (e) { e.preventDefault(); openPath(p.id, true); });
    frames.appendChild(f);

    /* contents row */
    var li = document.createElement('li');
    var r = document.createElement('button');
    r.type = 'button';
    r.className = 'row';
    r.setAttribute('aria-expanded', 'false');
    r.setAttribute('aria-controls', 'piece-' + p.id);
    r.innerHTML = '<span class="n">' + p.num + '</span><span class="t">' + p.name + '</span><span class="d">' + p.desc + '</span><span class="ar" aria-hidden="true">&rarr;</span>';
    r.addEventListener('click', function () { openPath(p.id, true); });
    li.appendChild(r);
    indexEl.appendChild(li);

    /* feature article */
    var nxt = PATHS[i + 1];
    var a = document.createElement('article');
    a.className = 'piece';
    a.id = 'piece-' + p.id;
    a.innerHTML =
      '<figure class="fig"><div class="img">' + sceneFor(p.id, 'a') + '</div>' +
      '<figcaption class="mono"><span>Fig. ' + p.num + '</span><span>' + p.cap + '</span></figcaption></figure>' +
      '<div>' +
        '<span class="kicker mono">' + p.name + ' &middot; Feature ' + p.num + '</span>' +
        '<h3>' + p.film + '</h3>' +
        '<p class="stand">' + p.why + '</p>' +
        '<div class="lab mono">The moment that stays</div>' +
        '<p class="pull">' + p.moment + '</p>' +
        '<div class="lab mono">Why it matters to me</div>' +
        '<p class="body-p">' + p.mwhy + '</p>' +
        '<div class="takeaway"><span class="mono">What I carry</span><p>' + p.take + '</p></div>' +
        '<div class="actions">' +
          (nxt
            ? '<button type="button" class="btn" data-go="' + nxt.id + '">Next: ' + nxt.name + ' &rarr;</button>'
            : '<a class="btn" href="#credits">Read the credits</a>') +
          '<button type="button" class="btn o" data-go="top">Back to contents</button>' +
        '</div>' +
      '</div>';
    panel.appendChild(a);
  });

  panel.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]');
    if (!g) return;
    if (g.dataset.go === 'top') {
      document.getElementById('paths').scrollIntoView({ behavior: 'smooth' });
    } else {
      openPath(g.dataset.go, true);
    }
  });

  function openPath(id, scroll) {
    read[id] = true;
    document.body.setAttribute('data-path', id);

    var pieces = panel.querySelectorAll('.piece');
    for (var i = 0; i < pieces.length; i++) {
      pieces[i].classList.toggle('on', pieces[i].id === 'piece-' + id);
    }
    var rows = indexEl.querySelectorAll('.row');
    for (var j = 0; j < rows.length; j++) {
      rows[j].setAttribute('aria-expanded', PATHS[j].id === id ? 'true' : 'false');
    }
    prog.textContent = Object.keys(read).length + ' of 4 read';

    var h = document.querySelector('#piece-' + id + ' h3');
    if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    if (scroll) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------- scroll progress bar ---------- */
  var bar = document.getElementById('bar');
  var ticking = false;
  function updateBar() {
    var d = document.documentElement;
    var max = d.scrollHeight - d.clientHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? d.scrollTop / max : 0) + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateBar); }
  }, { passive: true });
  updateBar();

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- generated ambient soundtrack (Web Audio API, no audio files) ---------- */
  var btn = document.getElementById('music');
  var label = btn.querySelector('.tx');
  var ctx, master, timer, on = false, step = 0;
  var chords = [
    [220, 261.63, 329.63, 392],
    [174.61, 220, 261.63, 329.63],
    [196, 246.94, 293.66, 392],
    [164.81, 207.65, 246.94, 329.63]
  ];

  function pad(freq, when, dur) {
    var o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter();
    o.type = 'sine'; o.frequency.value = freq;
    lp.type = 'lowpass'; lp.frequency.value = 900;
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(0.09, when + 2.5);
    g.gain.linearRampToValueAtTime(0, when + dur);
    o.connect(lp); lp.connect(g); g.connect(master);
    o.start(when); o.stop(when + dur + 0.1);
  }
  function bell(freq, when) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o.frequency.value = freq;
    g.gain.setValueAtTime(0, when);
    g.gain.linearRampToValueAtTime(0.05, when + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0005, when + 4);
    o.connect(g); g.connect(master);
    o.start(when); o.stop(when + 4.2);
  }
  function playChord() {
    var t = ctx.currentTime + 0.05;
    var c = chords[step % chords.length];
    c.forEach(function (f) { pad(f, t, 9); pad(f / 2, t, 9); });
    var pent = [c[3] * 2, c[2] * 2, c[1] * 2, c[3] * 2];
    [1.5, 3.5, 5.5].forEach(function (d, k) {
      if (Math.random() > 0.25) bell(pent[(k + step) % 4], t + d);
    });
    step++;
  }

  btn.addEventListener('click', function () {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { label.textContent = 'No audio'; return; }
    if (!on) {
      ctx = ctx || new AC();
      ctx.resume();
      if (!master) { master = ctx.createGain(); master.connect(ctx.destination); }
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.7, ctx.currentTime + 2);
      playChord();
      timer = setInterval(playChord, 8000);
      on = true;
    } else {
      clearInterval(timer);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
      on = false;
    }
    btn.setAttribute('aria-pressed', String(on));
    label.textContent = on ? 'Sound on' : 'Sound off';
  });
})();
