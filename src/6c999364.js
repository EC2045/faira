// ─── 単語データ ───
const WORDS = [
  // 挨拶・表現
  {w:"Chini",   cat:"greeting", pos:"GREETING", meaning:"こんにちは",         pron:"hïni（h＋キカンホ）"},
  {w:"Daka",    cat:"greeting", pos:"GREETING", meaning:"ありがとう",          pron:"ダカ"},
  {w:"Seba",    cat:"greeting", pos:"GREETING", meaning:"さようなら",          pron:"セバ"},
  {w:"Äh!",     cat:"greeting", pos:"EXPRESSION",meaning:"驚き・感動",         pron:"息を強く飲み込みながら「アッ！」"},
  {w:"Appi-basday", cat:"greeting", pos:"EXPRESSION", meaning:"誕生日おめでとう", pron:"アッピバスデー"},

  // 基本名詞
  {w:"Gase",   cat:"noun", pos:"NOUN", meaning:"学生"},
  {w:"Interu", cat:"noun", pos:"NOUN", meaning:"知能"},
  {w:"Mido",   cat:"noun", pos:"NOUN", meaning:"中央"},
  {w:"Seto",   cat:"noun", pos:"NOUN", meaning:"生徒"},
  {w:"Anba",   cat:"noun", pos:"NOUN", meaning:"境界線"},
  {w:"Anati",  cat:"noun", pos:"NOUN", meaning:"秒"},
  {w:"Ranku",  cat:"noun", pos:"NOUN", meaning:"石"},
  {w:"Kas",    cat:"noun", pos:"NOUN", meaning:"成り立つこと"},
  {w:"Life",   cat:"noun", pos:"NOUN", meaning:"生活すること"},
  {w:"Sense",  cat:"noun", pos:"NOUN", meaning:"意味"},
  {w:"Kesa",   cat:"noun", pos:"NOUN", meaning:"向こう側"},
  {w:"Anse",   cat:"noun", pos:"NOUN", meaning:"回答"},
  {w:"Sinki",  cat:"noun", pos:"NOUN", meaning:"思考"},
  {w:"Kans",   cat:"noun", pos:"NOUN", meaning:"ユーモア"},
  {w:"Are",    cat:"noun", pos:"NOUN", meaning:"歳"},
  {w:"Furai",  cat:"noun", pos:"NOUN", meaning:"未来"},
  {w:"Sora",   cat:"noun", pos:"NOUN", meaning:"それ"},
  {w:"Muda",   cat:"noun", pos:"NOUN", meaning:"無駄"},
  {w:"Cirku",  cat:"noun", pos:"NOUN", meaning:"回路",           pron:"イルク（c消音）"},
  {w:"Baris",  cat:"noun", pos:"NOUN", meaning:"変数"},
  {w:"Kwen",   cat:"noun", pos:"NOUN", meaning:"問い"},
  {w:"Sekai",  cat:"noun", pos:"NOUN", meaning:"正解"},
  {w:"Logis",  cat:"noun", pos:"NOUN", meaning:"論理"},
  {w:"Nozi",   cat:"noun", pos:"NOUN", meaning:"ノイズ"},
  {w:"Nama",   cat:"noun", pos:"NOUN", meaning:"名前"},
  {w:"Ogara",  cat:"noun", pos:"NOUN", meaning:"大喜利"},
  {w:"Lasa",   cat:"noun", pos:"NOUN", meaning:"太陽"},
  {w:"Foku",   cat:"noun", pos:"NOUN", meaning:"フォーク"},
  {w:"Lete",   cat:"noun", pos:"NOUN", meaning:"文字"},
  {w:"Bingo",  cat:"noun", pos:"NOUN", meaning:"ビンゴ"},
  {w:"Chiasa", cat:"noun", pos:"NOUN", meaning:"エメラルド",      pron:"ひアサ（c消音、i=キカンホ）"},
  {w:"Sukai",  cat:"noun", pos:"NOUN", meaning:"空"},
  {w:"Glos",   cat:"noun", pos:"NOUN", meaning:"輝き"},
  {w:"Rizm",   cat:"noun", pos:"NOUN", meaning:"リズム"},
  {w:"Pis",    cat:"noun", pos:"NOUN", meaning:"断片"},
  {w:"Kodu",   cat:"noun", pos:"NOUN", meaning:"コード"},
  {w:"Sinku",  cat:"noun", pos:"NOUN", meaning:"同期"},
  {w:"Glic",   cat:"noun", pos:"NOUN", meaning:"グリッチ"},
  {w:"Mir",    cat:"noun", pos:"NOUN", meaning:"海"},
  {w:"Kuki",   cat:"noun", pos:"NOUN", meaning:"空気"},
  {w:"Sekka",  cat:"noun", pos:"NOUN", meaning:"粉"},
  {w:"Sekin",  cat:"noun", pos:"NOUN", meaning:"石炭"},
  {w:"Prose",  cat:"noun", pos:"NOUN", meaning:"処理"},
  {w:"Bonda",  cat:"noun", pos:"NOUN", meaning:"絵"},
  {w:"Niga",   cat:"noun", pos:"NOUN", meaning:"人間"},
  {w:"Desuka", cat:"noun", pos:"NOUN", meaning:"机"},
  {w:"Dialy",  cat:"noun", pos:"NOUN", meaning:"日常"},
  {w:"Wil",    cat:"noun", pos:"NOUN", meaning:"意志"},
  {w:"Mitos",  cat:"noun", pos:"NOUN", meaning:"神話"},
  {w:"Kodon",  cat:"noun", pos:"NOUN", meaning:"鼓動"},

  // 動詞
  {w:"ag",     cat:"verb", pos:"VERB", meaning:"〜である・〜する（汎用）", pron:"アグ"},
  {w:"as",     cat:"verb", pos:"VERB", meaning:"知る"},
  {w:"eat",    cat:"verb", pos:"VERB", meaning:"食べる"},
  {w:"mas",    cat:"verb", pos:"VERB", meaning:"嘘をつく"},
  {w:"tak",    cat:"verb", pos:"VERB", meaning:"溶ける"},
  {w:"sak",    cat:"verb", pos:"VERB", meaning:"最適化する"},
  {w:"haik",   cat:"verb", pos:"VERB", meaning:"待つ"},
  {w:"nem",    cat:"verb", pos:"VERB", meaning:"ねる"},
  {w:"dec",    cat:"verb", pos:"VERB", meaning:"デコードする",    pron:"ec（c消音）+キカンホ"},
  {w:"rear",   cat:"verb", pos:"VERB", meaning:"放つ"},
  {w:"hola",   cat:"verb", pos:"VERB", meaning:"穴（をあける）"},
  {w:"sil",    cat:"verb", pos:"VERB", meaning:"見る"},
  {w:"papuq",  cat:"verb", pos:"VERB", meaning:"開ける"},
  {w:"Met",    cat:"verb", pos:"VERB", meaning:"出会う"},
  {w:"bekach", cat:"verb", pos:"VERB", meaning:"賭ける"},
  {w:"rebers", cat:"verb", pos:"VERB", meaning:"逆走する"},
  {w:"dans",   cat:"verb", pos:"VERB", meaning:"ダンスする"},
  {w:"kiz",    cat:"verb", pos:"VERB", meaning:"刻む"},
  {w:"rej",    cat:"verb", pos:"VERB", meaning:"捨てる"},
  {w:"sharp",  cat:"verb", pos:"VERB", meaning:"研ぎ澄ます"},
  {w:"rewrit", cat:"verb", pos:"VERB", meaning:"書き直す"},
  {w:"Isik",   cat:"verb", pos:"VERB", meaning:"意識する"},
  {w:"kros",   cat:"verb", pos:"VERB", meaning:"超える"},
  {w:"sohes",  cat:"verb", pos:"VERB", meaning:"窒息する"},
  {w:"hak",    cat:"verb", pos:"VERB", meaning:"ハックする"},
  {w:"ban",    cat:"verb", pos:"VERB", meaning:"消える"},
  {w:"mix",    cat:"verb", pos:"VERB", meaning:"混ざる"},
  {w:"writ",   cat:"verb", pos:"VERB", meaning:"書く"},
  {w:"asel",   cat:"verb", pos:"VERB", meaning:"加速する"},
  {w:"leab",   cat:"verb", pos:"VERB", meaning:"置き去りにする"},

  // 形容詞
  {w:"yami",    cat:"adj", pos:"ADJ", meaning:"美味しそうな"},
  {w:"hike",    cat:"adj", pos:"ADJ", meaning:"空いている"},
  {w:"toka",    cat:"adj", pos:"ADJ", meaning:"閉じている"},
  {w:"unpars",  cat:"adj", pos:"ADJ", meaning:"不確定な"},
  {w:"taira",   cat:"adj", pos:"ADJ", meaning:"疲れた"},
  {w:"naki",    cat:"adj", pos:"ADJ", meaning:"眠い"},
  {w:"oba",     cat:"adj", pos:"ADJ", meaning:"向こうの"},
  {w:"ake",     cat:"adj", pos:"ADJ", meaning:"〇〇ごとの"},
  {w:"kote",    cat:"adj", pos:"ADJ", meaning:"固定された"},
  {w:"atofian", cat:"adj", pos:"ADJ", meaning:"人口の・人工の"},
  {w:"intera",  cat:"adj", pos:"ADJ", meaning:"知能のある"},
  {w:"apta",    cat:"adj", pos:"ADJ", meaning:"上の"},

  // 色
  {w:"sanka",  cat:"color", pos:"COLOR", meaning:"赤"},
  {w:"seifu",  cat:"color", pos:"COLOR", meaning:"青"},
  {w:"furoa",  cat:"color", pos:"COLOR", meaning:"黄色"},
  {w:"ten",    cat:"color", pos:"COLOR", meaning:"白"},
  {w:"syan",   cat:"color", pos:"COLOR", meaning:"黒"},
  {w:"yua",    cat:"color", pos:"COLOR", meaning:"緑"},

  // 食べ物
  {w:"Afle",      cat:"food", pos:"NOUN/FOOD", meaning:"りんご",       pron:"アフレ（Af+le、U補完）"},
  {w:"Bent",      cat:"food", pos:"NOUN/FOOD", meaning:"弁当"},
  {w:"Raisa",     cat:"food", pos:"NOUN/FOOD", meaning:"米"},
  {w:"Cari",      cat:"food", pos:"NOUN/FOOD", meaning:"カレー",       pron:"アリ（c消音）"},
  {w:"Cari-Raisa",cat:"food", pos:"NOUN/FOOD", meaning:"カレーライス", pron:"アリライサ"},
  {w:"Miza",      cat:"food", pos:"NOUN/FOOD", meaning:"水"},
  {w:"Tabe",      cat:"food", pos:"NOUN/FOOD", meaning:"食べ物"},

  // 生物名詞
  {w:"Whourufu",  cat:"creature", pos:"NOUN/CREATURE", meaning:"ウォーウルフ"},
  {w:"Whokyatto", cat:"creature", pos:"NOUN/CREATURE", meaning:"ウォーキャット"},
  {w:"Koren",     cat:"creature", pos:"NOUN/CREATURE", meaning:"転錬"},
  {w:"Katatue",   cat:"creature", pos:"NOUN/CREATURE", meaning:"カタツエビ"},

  // IT用語
  {w:"Atofian-Interu", cat:"it", pos:"NOUN/IT", meaning:"AI（人工知能）"},
  {w:"Kensa",          cat:"it", pos:"NOUN/IT", meaning:"演算"},
  {w:"MKP",            cat:"it", pos:"NOUN/IT", meaning:"CPU（Mido Kensa Prose）"},
  {w:"BKP",            cat:"it", pos:"NOUN/IT", meaning:"GPU（Bonda Kensa Prose）"},
  {w:"TKP",            cat:"it", pos:"NOUN/IT", meaning:"TPU（Tensoa Kensa Prose）"},
  {w:"Taagzabi",       cat:"it", pos:"NOUN/IT", meaning:"バイナリ"},
  {w:"mitaki",         cat:"it", pos:"NOUN/IT", meaning:"PC"},
  {w:"Taki",           cat:"it", pos:"NOUN/IT", meaning:"電卓"},
  {w:"Desukaupta",     cat:"it", pos:"NOUN/IT", meaning:"デスクトップ"},
  {w:"Aputaiga",       cat:"it", pos:"NOUN/IT", meaning:"ノートパソコン"},

  // 科学
  {w:"Kai",    cat:"science", pos:"NOUN/SCIENCE", meaning:"原子"},
  {w:"Mikai",  cat:"science", pos:"NOUN/SCIENCE", meaning:"水素 (H)"},
  {w:"Lasai",  cat:"science", pos:"NOUN/SCIENCE", meaning:"ヘリウム (He)"},
  {w:"Rankai", cat:"science", pos:"NOUN/SCIENCE", meaning:"リチウム (Li)"},
  {w:"Yamaai", cat:"science", pos:"NOUN/SCIENCE", meaning:"ベリリウム (Be)"},
  {w:"Senai",  cat:"science", pos:"NOUN/SCIENCE", meaning:"ホウ素 (B)"},
  {w:"Sekia",  cat:"science", pos:"NOUN/SCIENCE", meaning:"炭素 (C)"},
  {w:"Soheia", cat:"science", pos:"NOUN/SCIENCE", meaning:"窒素 (N)"},
  {w:"Senkia", cat:"science", pos:"NOUN/SCIENCE", meaning:"酸素 (O)"},
  {w:"Furia",  cat:"science", pos:"NOUN/SCIENCE", meaning:"フッ素 (F)"},
  {w:"Kania",  cat:"science", pos:"NOUN/SCIENCE", meaning:"ネオン (Ne)"},
  {w:"Sio",    cat:"science", pos:"NOUN/SCIENCE", meaning:"ナトリウム (Na)"},

  // 数字
  {w:"Bi",    cat:"number", pos:"NUMBER", meaning:"1"},
  {w:"Ni",    cat:"number", pos:"NUMBER", meaning:"2"},
  {w:"Tai",   cat:"number", pos:"NUMBER", meaning:"3（単独）/ Ta-（十の位）"},
  {w:"Fu",    cat:"number", pos:"NUMBER", meaning:"4"},
  {w:"Ichi",  cat:"number", pos:"NUMBER", meaning:"5"},
  {w:"Mu",    cat:"number", pos:"NUMBER", meaning:"6"},
  {w:"Se",    cat:"number", pos:"NUMBER", meaning:"7"},
  {w:"Zi",    cat:"number", pos:"NUMBER", meaning:"8"},
  {w:"Ka",    cat:"number", pos:"NUMBER", meaning:"9"},
  {w:"Zyuu",  cat:"number", pos:"NUMBER", meaning:"10（単独）/ Ti-（十の位）"},
];

const CAT_ORDER = ["greeting","noun","verb","adj","color","food","creature","it","science","number"];
const CAT_LABEL = {
  greeting:"挨拶・表現", noun:"基本名詞", verb:"動詞", adj:"形容詞",
  color:"色", food:"食べ物", creature:"生物", it:"IT用語",
  science:"科学", number:"数字"
};

let engine = null;
let currentCat = "all";
let currentSearch = "";

// FaaraoEngine init
window.addEventListener('load', () => {
  if (typeof FaaraoEngine !== 'undefined') {
    engine = new FaaraoEngine();
  }
  buildChips();
  updateCounts();
  render();
});

function buildChips() {
  const row = document.getElementById('chip-row');
  ['すべて',...CAT_ORDER.map(c=>CAT_LABEL[c])].forEach((label, i) => {
    const cat = i===0 ? 'all' : CAT_ORDER[i-1];
    const chip = document.createElement('button');
    chip.className = 'chip' + (cat==='all'?' active':'');
    chip.textContent = label;
    chip.dataset.cat = cat;
    chip.onclick = () => {
      currentCat = cat;
      document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c.dataset.cat===cat));
      document.querySelectorAll('.cat-link').forEach(c=>c.classList.toggle('active', c.dataset.cat===cat));
      render();
    };
    row.appendChild(chip);
  });
}

function updateCounts() {
  document.getElementById('cnt-all').textContent = WORDS.length;
  CAT_ORDER.forEach(cat => {
    const el = document.getElementById('cnt-'+cat);
    if (el) el.textContent = WORDS.filter(w=>w.cat===cat).length;
  });
}

function filterCat(cat, el) {
  currentCat = cat;
  document.querySelectorAll('.cat-link').forEach(c=>c.classList.toggle('active', c===el));
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c.dataset.cat===cat));
  render();
}

function doSearch() {
  currentSearch = document.getElementById('search').value.trim().toLowerCase();
  render();
}

function render() {
  const list = document.getElementById('word-list');
  const empty = document.getElementById('empty-state');
  list.innerHTML = '';

  let filtered = WORDS.filter(w => {
    const matchCat = currentCat === 'all' || w.cat === currentCat;
    const matchSearch = !currentSearch ||
      w.w.toLowerCase().includes(currentSearch) ||
      w.meaning.includes(currentSearch) ||
      (w.pron && w.pron.toLowerCase().includes(currentSearch));
    return matchCat && matchSearch;
  });

  document.getElementById('search-count').textContent =
    currentSearch ? `${filtered.length}件` : '';

  if (filtered.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  const groups = {};
  filtered.forEach(w => {
    if (!groups[w.cat]) groups[w.cat] = [];
    groups[w.cat].push(w);
  });

  const orderedCats = currentCat === 'all'
    ? CAT_ORDER.filter(c => groups[c])
    : [currentCat];

  orderedCats.forEach(cat => {
    if (!groups[cat]) return;
    const head = document.createElement('div');
    head.className = 'sec-head';
    head.innerHTML = `<span class="sec-title cat-${cat}">${CAT_LABEL[cat]}</span><span class="sec-count">${groups[cat].length}語</span>`;
    list.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'word-grid';
    groups[cat].forEach(w => {
      const card = document.createElement('div');
      card.className = `word-card cat-${cat}`;
      const renderId = 'wc-' + Math.random().toString(36).slice(2,9);
      card.innerHTML = `
        <div class="wc-pos cat-${cat}">${w.pos}</div>
        <div class="wc-faarai">${w.w}</div>
        <div class="wc-render" id="${renderId}"></div>
        <div class="wc-meaning">${w.meaning}</div>
        ${w.pron ? `<div class="wc-pron">${w.pron}</div>` : ''}
      `;
      card.onclick = () => openModal(w);
      grid.appendChild(card);
      // ファーラオ文字をレンダリング（engineがあれば）
      if (engine) {
        const plain = w.w.replace(/[^A-Za-zÄÏÜËÖäïüëö ]/g, ' ').trim();
        engine.render(plain, renderId);
      }
    });
    list.appendChild(grid);
  });
}

function openModal(w) {
  document.getElementById('m-pos').textContent = w.pos;
  document.getElementById('m-pos').className = `modal-pos cat-${w.cat}`;
  document.getElementById('m-word').textContent = w.w;
  document.getElementById('m-pron').textContent = w.pron || '';
  document.getElementById('m-pron').style.display = w.pron ? '' : 'none';
  document.getElementById('m-meaning').textContent = w.meaning;

  const fr = document.getElementById('m-faarao');
  fr.innerHTML = '';
  if (engine) {
    const plain = w.w.replace(/[^A-Za-zÄÏÜËÖäïüëö\-]/g, ' ');
    fr.id = 'm-faarao-' + Date.now();
    engine.render(plain, fr.id);
    document.getElementById('m-faarao') || (fr.id = 'm-faarao');
  }

  document.getElementById('modal-bg').classList.add('open');
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-bg') || e.currentTarget.classList.contains('modal-close')) {
    document.getElementById('modal-bg').classList.remove('open');
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal({target: document.getElementById('modal-bg')});
});
