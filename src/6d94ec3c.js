let engine;

// FaaraoEngineが読み込まれたら全箇所をレンダリング
window.addEventListener('load', () => {
  if (typeof FaaraoEngine === 'undefined') return;
  engine = new FaaraoEngine();

  // ─── ヒーロー ───
  engine.render('Faarai', 'hero-faarao-render');

  // ─── 音韻例文 ───
  engine.render('Ritsuto aga', 'ex-phon-1');
  engine.render('Chini', 'ex-phon-2');

  // ─── 文法例文 ───
  engine.render('mi name Ritsuto agitto', 'ex-gram-1');
  engine.render('Ritsuto aga', 'ex-gram-2');
  engine.render('Ta Ritsuto aga', 'ex-gram-3');
  engine.render('‽Syunyu agi?', 'ex-gram-4');
  engine.render('taira aga nazi, naki aga', 'ex-gram-5');
  engine.render('Ken nola aga', 'ex-gram-6');

  // ─── 語彙サンプル ───
  const viMap = {
    'vi-Chini': 'Chini', 'vi-Daka': 'Daka', 'vi-Seba': 'Seba',
    'vi-Ah': 'Ah', 'vi-Appibasday': 'Appibasday',
    'vi-ag': 'ag', 'vi-as': 'as', 'vi-eat': 'eat', 'vi-nem': 'nem',
    'vi-sil': 'sil', 'vi-kros': 'kros',
    'vi-Sekai': 'Sekai', 'vi-Furai': 'Furai', 'vi-Niga': 'Niga',
    'vi-Ogara': 'Ogara', 'vi-Sinki': 'Sinki', 'vi-Logis': 'Logis',
    'vi-AtofianInteru': 'Atofian Interu', 'vi-Taagzabi': 'Taagzabi',
    'vi-Kodu': 'Kodu', 'vi-Varis': 'Varis', 'vi-Glic': 'Glic',
    'vi-Prose': 'Prose', 'vi-MKP': 'MKP', 'vi-BKP': 'BKP', 'vi-mitaki': 'mitaki',
    'vi-Kai': 'Kai', 'vi-Mikai': 'Mikai', 'vi-Lasai': 'Lasai',
    'vi-Sekia': 'Sekia', 'vi-Soheia': 'Soheia', 'vi-Senkia': 'Senkia',
  };
  for (const [id, text] of Object.entries(viMap)) {
    if (document.getElementById(id)) engine.render(text, id);
  }

  // ─── デモエリア初期表示 ───
  renderFaarao('Faarai');
});

function renderFaarao(text) {
  const el = document.getElementById('faarao-output');
  if (!el || !engine) return;
  el.innerHTML = '';
  document.getElementById('faarao-text-input').value = text;
  engine.render(text, 'faarao-output');
}

function renderFaaraoFromInput() {
  const val = document.getElementById('faarao-text-input').value.trim();
  if (val) renderFaarao(val);
}

document.getElementById('faarao-text-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') renderFaaraoFromInput();
});

// スクロールリビール
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
