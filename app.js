/* ============================================================================
   EGOWAM website — content config + interactive components.

   >>> TO FILL IN MEDIA: edit ONLY the CONFIG object below. <<<
   Leave a string empty ('') to show a labelled placeholder box instead of a
   video. Put your files under a videos/ folder (any names you like).
   ============================================================================ */

const CONFIG = {
  // ---- 1. Hero teaser + 3. Explanation video --------------------------------
  teaserVideo:      '',   // e.g. 'videos/teaser.mp4'
  explanationVideo: 'videos/explanation.mp4',

  // ---- Tasks (shared by Data Gallery + Robot Demos) -------------------------
  tasks: [
    { id: 'cup',  label: 'Cup on Saucer' },
    { id: 'fold', label: 'Fold Clothes'  },
    { id: 'bag',  label: 'Bag Grocery'   },
  ],

  // ---- 4. Data Gallery ------------------------------------------------------
  // Per task: three sources, each a list of clips shown in a left/right carousel.
  dataGallery: {
    cup: {
      robot:    ['videos/data/cup_robot_0.mp4', 'videos/data/cup_robot_1.mp4', 'videos/data/cup_robot_2.mp4', 'videos/data/cup_robot_3.mp4', 'videos/data/cup_robot_4.mp4', 'videos/data/cup_robot_5.mp4', 'videos/data/cup_robot_6.mp4', 'videos/data/cup_robot_7.mp4', 'videos/data/cup_robot_8.mp4', 'videos/data/cup_robot_9.mp4'],
      indomain: ['videos/data/cup_indomain_0.mp4', 'videos/data/cup_indomain_1.mp4', 'videos/data/cup_indomain_2.mp4', 'videos/data/cup_indomain_3.mp4', 'videos/data/cup_indomain_4.mp4', 'videos/data/cup_indomain_5.mp4', 'videos/data/cup_indomain_6.mp4', 'videos/data/cup_indomain_7.mp4', 'videos/data/cup_indomain_8.mp4', 'videos/data/cup_indomain_9.mp4'],
      inwild:   ['videos/data/cup_inwild_0.mp4', 'videos/data/cup_inwild_1.mp4', 'videos/data/cup_inwild_2.mp4', 'videos/data/cup_inwild_3.mp4', 'videos/data/cup_inwild_4.mp4', 'videos/data/cup_inwild_5.mp4', 'videos/data/cup_inwild_6.mp4', 'videos/data/cup_inwild_7.mp4', 'videos/data/cup_inwild_8.mp4', 'videos/data/cup_inwild_9.mp4'],
    },
    fold: {
      robot:    ['videos/data/fold_robot_0.mp4', 'videos/data/fold_robot_1.mp4', 'videos/data/fold_robot_2.mp4', 'videos/data/fold_robot_3.mp4', 'videos/data/fold_robot_4.mp4', 'videos/data/fold_robot_5.mp4', 'videos/data/fold_robot_6.mp4', 'videos/data/fold_robot_7.mp4', 'videos/data/fold_robot_8.mp4', 'videos/data/fold_robot_9.mp4'],
      indomain: ['videos/data/fold_indomain_0.mp4', 'videos/data/fold_indomain_1.mp4', 'videos/data/fold_indomain_2.mp4', 'videos/data/fold_indomain_3.mp4', 'videos/data/fold_indomain_4.mp4', 'videos/data/fold_indomain_5.mp4', 'videos/data/fold_indomain_6.mp4', 'videos/data/fold_indomain_7.mp4', 'videos/data/fold_indomain_8.mp4', 'videos/data/fold_indomain_9.mp4'],
      inwild:   ['videos/data/fold_inwild_0.mp4', 'videos/data/fold_inwild_1.mp4', 'videos/data/fold_inwild_2.mp4', 'videos/data/fold_inwild_3.mp4', 'videos/data/fold_inwild_4.mp4', 'videos/data/fold_inwild_5.mp4', 'videos/data/fold_inwild_6.mp4', 'videos/data/fold_inwild_7.mp4', 'videos/data/fold_inwild_8.mp4', 'videos/data/fold_inwild_9.mp4'],
    },
    bag: {
      robot:    ['videos/data/bag_robot_0.mp4', 'videos/data/bag_robot_1.mp4', 'videos/data/bag_robot_2.mp4', 'videos/data/bag_robot_3.mp4', 'videos/data/bag_robot_4.mp4', 'videos/data/bag_robot_5.mp4', 'videos/data/bag_robot_6.mp4', 'videos/data/bag_robot_7.mp4', 'videos/data/bag_robot_8.mp4', 'videos/data/bag_robot_9.mp4'],
      indomain: ['videos/data/bag_indomain_0.mp4', 'videos/data/bag_indomain_1.mp4', 'videos/data/bag_indomain_2.mp4', 'videos/data/bag_indomain_3.mp4', 'videos/data/bag_indomain_4.mp4', 'videos/data/bag_indomain_5.mp4', 'videos/data/bag_indomain_6.mp4', 'videos/data/bag_indomain_7.mp4', 'videos/data/bag_indomain_8.mp4', 'videos/data/bag_indomain_9.mp4'],
      inwild:   ['videos/data/bag_inwild_0.mp4', 'videos/data/bag_inwild_1.mp4', 'videos/data/bag_inwild_2.mp4', 'videos/data/bag_inwild_3.mp4', 'videos/data/bag_inwild_4.mp4', 'videos/data/bag_inwild_5.mp4', 'videos/data/bag_inwild_6.mp4', 'videos/data/bag_inwild_7.mp4', 'videos/data/bag_inwild_8.mp4', 'videos/data/bag_inwild_9.mp4'],
    },
  },

  // ---- 5. Robot Demos -------------------------------------------------------
  // Methods compared side by side. Delete one entry for a 2-way comparison.
  demoMethods: [
    { id: 'bc',   label: 'BC Co-train'        },
    { id: 'vae',  label: 'VAE Co-train'       },
    { id: 'flow', label: 'RAE / Flow Co-train' },
  ],
  // Per task, per split (id / ood), one clip per method.
  robotDemo: {
    cup: {
      id:  { bc: 'videos/demo/cup_bc_id.mp4',  vae: 'videos/demo/cup_vae_id.mp4', flow: 'videos/demo/cup_flow_id.mp4' },
      ood: { bc: 'videos/demo/cup_bc_ood.mp4', vae: '',                           flow: 'videos/demo/cup_flow_ood.mp4' },
    },
    fold: {
      id:  { bc: '', vae: '', flow: '' },
      ood: { bc: 'videos/demo/fold_bc_ood.mp4', vae: 'videos/demo/fold_vae_ood.mp4', flow: 'videos/demo/fold_flow_ood.mp4' },
    },
    bag: {
      id:  { bc: '', vae: '', flow: '' },
      ood: { bc: 'videos/demo/bag_bc_ood.mp4', vae: 'videos/demo/bag_vae_ood.mp4', flow: 'videos/demo/bag_flow_ood.mp4' },
    },
  },

  // ---- 6. Performance bar charts -------------------------------------------
  // Real numbers from the paper (generate_metrics_csv.py). OOD = mean(ood_object,
  // ood_scene). Values are fractions 0..1. Edit PERF_DATA (bottom of file) to update.
  performance: {
    tasks: [
      { id: 'cup', label: 'Cup on Saucer' },
      { id: 'bag', label: 'Bag Grocery'   },
      { id: 'fold', label: 'Fold Clothes' },
    ],
    methods: [
      { id: 'bc',      label: 'BC'       },
      { id: 'pixel',   label: 'Pixel'    },
      { id: 'pixelpt', label: 'Pixel-PT' },
      { id: 'dino',    label: 'DINO'     },
      { id: 'flow',    label: '3D Flow'  },
    ],
    regimes: [
      { id: 'base',     label: 'Robot Only',        color: '#CFC8B4' },
      { id: 'cotrain',  label: '+ In-Domain Human', color: '#FBE0A0' },
      { id: 'flagship', label: '+ EgoVerse',        color: '#F2B431' },
    ],
    splits:  [{ id: 'in_domain', label: 'In-Domain' }, { id: 'ood', label: 'OOD' }],
    metrics: [{ id: 'ns', label: 'Normalized Score' }, { id: 'sr', label: 'Success Rate' }],
  },

  // ---- 6b. Ablation: aligned vs. unaligned human co-training ----------------
  // Two slope plots (as in the paper figures): success rate (%) across co-train
  // conditions, one line per method, with each method's robot-only success as a
  // baseline. Left: BC collapses under unaligned data while 3D Flow holds.
  // Right: with aligned co-training every world target improves; 3D Flow is
  // highest and saturates.
  ablation: {
    plots: [
      {
        title: 'Robustness to unaligned human data',
        yLabel: 'Success Rate (%)',
        yMax: 100,
        xCats: [
          { id: 'indomain',  label: 'In-Domain Co-train' },
          { id: 'unaligned', label: 'Unaligned Co-train' },
        ],
        series: [
          { id: 'bc',   label: 'BC',      color: '#4A7BA6', marker: 'circle',
            baseline: 40, baselineLabel: 'BC Robot Only 40%',
            points: { indomain: 45, unaligned: 20 } },
          { id: 'flow', label: '3D Flow', color: '#F2B431', marker: 'square',
            baseline: 60, baselineLabel: '3D Flow Robot Only 60%',
            points: { indomain: 80, unaligned: 75 } },
        ],
      },
      {
        title: 'World targets under aligned co-training',
        yLabel: 'In-Domain Success Rate (%)',
        yMax: 100,
        xCats: [
          { id: 'indomain', label: 'In-Domain Co-train' },
          { id: 'aligned',  label: 'Aligned Co-train' },
        ],
        series: [
          { id: 'bc',    label: 'BC',      color: '#4A7BA6', marker: 'circle',
            baseline: 25, baselineLabel: 'BC Robot Only 25%',
            points: { indomain: 15, aligned: 35 } },
          { id: 'pixel', label: 'Pixel',   color: '#9C5C93', marker: 'diamond',
            points: { indomain: 35, aligned: 63 }, labelBelow: ['aligned'] },
          { id: 'dino',  label: 'DINO',    color: '#5E9A6B', marker: 'triangle',
            points: { indomain: 50, aligned: 70 } },
          { id: 'flow',  label: '3D Flow', color: '#F2B431', marker: 'square',
            points: { indomain: 85, aligned: 85 } },
        ],
      },
    ],
  },

  // ---- 3. Method diagram images (leave '' for a labelled placeholder) -------
  method: {
    stems:    { ego: 'figs/stem_ego.png', proprio: 'figs/stem_proprio.png', wrist: 'figs/stem_wrist.png' },
    decoders: { vae: 'figs/dec_vae.png', rae: 'figs/dec_rae.png', flow: 'figs/dec_flow.png' },
  },

  // ---- 8. World prediction visualization -----------------------------------
  // Method switcher; each compares a robot-only model vs the co-trained model.
  worldPred: {
    methods: [
      { id: 'vae',  label: 'Pixel (VAE)',
        eva:     'videos/world_pred/VAE_eva__future.mp4',
        cotrain: 'videos/world_pred/VAE_cotrain__future.mp4' },
      { id: 'rae',  label: 'DINO (RAE)',
        eva:     'videos/world_pred/RAE_eva__future.mp4',
        cotrain: 'videos/world_pred/RAE_cotrain__future.mp4' },
      { id: 'flow', label: '3D Flow',
        eva:     'videos/world_pred/3DF_eva__point_flow.mp4',
        cotrain: 'videos/world_pred/3DF_cotrain__point_flow.mp4' },
    ],
    // Quantitative future-prediction error (MSE, lower is better). VAE/RAE are
    // pixel-space MSE; flow is 3D point-flow MSE. Shown as a per-target 2-bar
    // chart (Robot Only vs + Human) beside the two video panels.
    conditions: [
      { id: 'eva',     label: 'Robot Only', color: '#CFC8B4' },
      { id: 'cotrain', label: '+ Human',    color: '#FBE0A0' },
    ],
    metrics: [
      { id: 'vae',  label: 'Pixel (VAE)', metric: 'Pixel MSE', eva: 0.00252, cotrain: 0.00250 },
      { id: 'rae',  label: 'DINO (RAE)',  metric: 'Pixel MSE', eva: 0.00300, cotrain: 0.00289 },
      { id: 'flow', label: '3D Flow',     metric: 'Flow MSE',  eva: 0.85579, cotrain: 0.47261 },
    ],
  },
};

/* ========================================================================== */
/*  Components — no need to edit below this line to add media.                 */
/* ========================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

function makeVideo(path, opts = {}) {
  const { muted = true, loop = true, autoplay = true } = opts;
  const v = el('video');
  v.src = path;
  v.muted = muted; v.loop = loop; v.autoplay = autoplay;
  v.preload = 'metadata';
  v.setAttribute('playsinline', '');
  if (muted) v.setAttribute('muted', '');
  return v;
}

// Returns a <video> if a path is given, otherwise a labelled placeholder box.
function makeMedia(path, placeholderLabel, opts) {
  return path ? makeVideo(path, opts) : el('div', 'video-placeholder', placeholderLabel);
}

function setPlaying(node, on) {
  if (node && node.tagName === 'VIDEO') {
    if (on) node.play().catch(() => {}); else node.pause();
  }
}

// Carousel of clips with left/right arrows. paths: array of strings.
function makeCarousel(paths, label) {
  const clips = (paths && paths.length) ? paths : [''];
  const wrap = el('div', 'carousel');
  const stage = el('div', 'carousel-stage');
  const items = clips.map((p, i) => {
    const m = makeMedia(p, `${label}<br><small>clip ${i + 1}</small>`);
    m.classList.add('carousel-item');
    if (i > 0) { m.classList.add('hidden'); setPlaying(m, false); }
    stage.append(m);
    return m;
  });

  let idx = 0;
  const counter = el('span', 'carousel-counter', `1 / ${items.length}`);
  const prev = el('button', 'carousel-arrow', '&#8249;');
  const next = el('button', 'carousel-arrow', '&#8250;');
  function show(i) {
    items[idx].classList.add('hidden'); setPlaying(items[idx], false);
    idx = (i + items.length) % items.length;
    items[idx].classList.remove('hidden'); setPlaying(items[idx], true);
    counter.textContent = `${idx + 1} / ${items.length}`;
  }
  prev.addEventListener('click', () => show(idx - 1));
  next.addEventListener('click', () => show(idx + 1));
  if (items.length <= 1) { prev.disabled = true; next.disabled = true; }

  const controls = el('div', 'carousel-controls');
  controls.append(prev, counter, next);
  wrap.append(stage, controls);
  return wrap;
}

// Generic pill tab bar. options: [{id,label}]. Calls onChange(id) on click.
function makeTabs(options, onChange, initial) {
  const bar = el('div', 'tab-bar');
  let active = initial != null ? initial : options[0].id;
  const btns = options.map((o) => {
    const b = el('button', 'tab-btn', o.label);
    b.dataset.id = o.id;
    b.addEventListener('click', () => { setActive(o.id); onChange(o.id); });
    bar.append(b);
    return b;
  });
  function setActive(id) {
    active = id;
    btns.forEach((b) => b.classList.toggle('active', b.dataset.id === id));
  }
  setActive(active);
  return { bar, get active() { return active; }, setActive };
}

// ---- Section renderers ------------------------------------------------------

function mountSingleVideo(sel, path, label, withControls, opts) {
  const mount = $(sel);
  if (!mount) return;
  const m = makeMedia(path, label, opts);
  m.classList.add('hero-video');
  if (path && withControls) m.controls = true;
  mount.append(m);
}

function renderDataGallery() {
  const mount = $('#data-gallery');
  if (!mount) return;
  const sources = [
    { key: 'robot',    title: 'Robot Data'         },
    { key: 'indomain', title: 'In-Domain Human'    },
    { key: 'inwild',   title: 'In-the-Wild Human'  },
  ];
  const panels = {};
  CONFIG.tasks.forEach((t) => {
    const grid = el('div', 'panel-grid');
    sources.forEach((s) => {
      const col = el('div', 'panel-col');
      col.append(el('div', 'panel-title', s.title));
      const paths = (CONFIG.dataGallery[t.id] || {})[s.key] || ['', '', ''];
      col.append(makeCarousel(paths, `${t.label}<br>${s.title}`));
      grid.append(col);
    });
    panels[t.id] = grid;
  });
  const tabs = makeTabs(CONFIG.tasks, (id) => {
    CONFIG.tasks.forEach((t) => panels[t.id].classList.toggle('hidden', t.id !== id));
  });
  mount.append(tabs.bar);
  CONFIG.tasks.forEach((t, i) => {
    panels[t.id].classList.toggle('hidden', i !== 0);
    mount.append(panels[t.id]);
  });
}

function renderRobotDemo() {
  const mount = $('#robot-demo');
  if (!mount) return;
  const splitLabels = { id: 'In-Domain', ood: 'OOD' };

  // Which methods actually have a clip for a given task/split.
  const methodsFor = (taskId, splitId) => {
    const d = ((CONFIG.robotDemo[taskId] || {})[splitId]) || {};
    return CONFIG.demoMethods.filter((m) => d[m.id]);
  };
  // Which splits have any clips for a given task.
  const splitsFor = (taskId) => ['id', 'ood'].filter((s) => methodsFor(taskId, s).length);

  // Only offer tasks that have at least one clip somewhere.
  const tasks = CONFIG.tasks.filter((t) => splitsFor(t.id).length);
  let curTask = tasks[0].id;
  let curSplit = splitsFor(curTask)[0];

  const taskTabs = makeTabs(tasks, (id) => {
    curTask = id;
    if (!splitsFor(curTask).includes(curSplit)) curSplit = splitsFor(curTask)[0];
    rebuildSplits();
    draw();
  });
  const splitBar = el('div', 'tab-bar');
  const stage = el('div', 'robot-demo-stage');
  mount.append(taskTabs.bar, splitBar, stage);

  // Rebuild the split tab bar for the current task. When only one split exists
  // (e.g. Fold/Bag are OOD-only) show it as a static label so the regime is clear.
  function rebuildSplits() {
    splitBar.innerHTML = '';
    const avail = splitsFor(curTask);
    if (avail.length > 1) {
      avail.forEach((s) => {
        const b = el('button', 'tab-btn' + (s === curSplit ? ' active' : ''), splitLabels[s]);
        b.addEventListener('click', () => { curSplit = s; rebuildSplits(); draw(); });
        splitBar.append(b);
      });
    } else {
      splitBar.append(el('span', 'split-badge', splitLabels[avail[0]]));
    }
  }

  function draw() {
    stage.innerHTML = '';
    const row = el('div', 'method-grid');
    methodsFor(curTask, curSplit).forEach((m) => {
      const col = el('div', 'method-col');
      col.append(el('div', 'panel-title', m.label));
      col.append(makeMedia(CONFIG.robotDemo[curTask][curSplit][m.id], ''));
      row.append(col);
    });
    stage.append(row);
  }

  rebuildSplits();
  draw();
}

function renderPerformance() {
  const mount = $('#perf');
  if (!mount) return;
  const P = CONFIG.performance;

  let curTask = P.tasks[0].id;
  let curSplit = 'in_domain';
  let curMetric = 'ns';
  let revealed = false;

  // --- switchers ---
  const taskTabs   = makeTabs(P.tasks,   (id) => { curTask = id; draw(); });
  const splitTabs  = makeTabs(P.splits,  (id) => { curSplit = id; draw(); }, 'in_domain');
  const metricTabs = makeTabs(P.metrics, (id) => { curMetric = id; draw(); }, 'ns');
  mount.append(taskTabs.bar, splitTabs.bar, metricTabs.bar);

  // --- legend (regimes) ---
  const legend = el('div', 'perf-legend');
  P.regimes.forEach((r) => {
    const item = el('span', 'perf-legend-item');
    const sw = el('span', 'perf-swatch'); sw.style.background = r.color;
    item.append(sw, document.createTextNode(r.label));
    legend.append(item);
  });
  mount.append(legend);

  // --- plot scaffold (built once, re-filled on switch) ---
  const yLabel = el('div', 'vchart-ylabel');
  const plot = el('div', 'vchart-plot');
  const wrap = el('div', 'vchart');
  wrap.append(yLabel, plot);
  mount.append(wrap);

  function valueOf(method, regime) {
    const m = (PERF_DATA[curTask] || {})[method] || {};
    const r = m[regime];
    if (!r) return null;
    return r[curSplit][curMetric];
  }

  function draw() {
    const pct = curMetric === 'sr';
    yLabel.textContent = P.metrics.find((m) => m.id === curMetric).label + (pct ? ' (%)' : '');
    plot.innerHTML = '';
    P.methods.forEach((method) => {
      const group = el('div', 'vgroup');
      const bars = el('div', 'vgroup-bars');
      const base = valueOf(method.id, 'base');
      P.regimes.forEach((regime) => {
        const v = valueOf(method.id, regime.id);
        if (v == null) return; // e.g. fold-clothes has no co-train
        const bar = el('div', 'vbar');
        bar.style.background = regime.color;
        bar.style.height = '0%';
        bar.dataset.target = (v * 100).toFixed(0);
        // delta vs Robot Only (percentage points), like the paper
        if (regime.id !== 'base' && base != null) {
          const d = Math.round((v - base) * 100);
          const tag = el('div', 'vbar-delta ' + (d >= 0 ? 'pos' : 'neg'),
            (d >= 0 ? '+' : '−') + Math.abs(d) + '%');
          bar.append(tag);
        }
        bar.append(el('div', 'vbar-val', Math.round(v * 100) + ''));
        bars.append(bar);
      });
      group.append(bars, el('div', 'vgroup-label', method.label));
      plot.append(group);
    });
    // animate to target heights
    requestAnimationFrame(() => {
      plot.querySelectorAll('.vbar').forEach((b) => {
        b.style.height = (revealed ? b.dataset.target : 0) + '%';
      });
    });
  }

  draw();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        revealed = true;
        plot.querySelectorAll('.vbar').forEach((b) => { b.style.height = b.dataset.target + '%'; });
        io.disconnect();
      }
    });
  }, { threshold: 0.2 });
  io.observe(wrap);
}

// Ablation: aligned vs. unaligned human co-training. Slope plot matching the
// paper figure — one line per method across two co-train conditions, plus each
// method's robot-only success as a baseline line. Lines draw in on scroll.
function renderAblation() {
  const mount = $('#ablation-chart');
  if (!mount) return;
  const cfg = CONFIG.ablation || {};
  const plots = cfg.plots || (cfg.series ? [cfg] : []);
  if (!plots.length) return;
  const grid = el('div', 'abl-plots');
  plots.forEach((pc) => { const c = buildAblationPlot(pc); if (c) grid.append(c); });
  mount.append(grid);
}

// One ablation slope plot: success rate across two co-train conditions, one
// line per method, with optional robot-only baselines. Returns a container
// (title + legend + SVG); the lines draw in on scroll.
function buildAblationPlot(cfg) {
  const cats = cfg.xCats || [];
  const series = cfg.series || [];
  if (!cats.length || !series.length) return null;

  const container = el('div', 'abl-plot');
  if (cfg.title) container.append(el('div', 'abl-title', cfg.title));

  // Legend.
  const legend = el('div', 'perf-legend');
  series.forEach((s) => {
    const shape = s.marker === 'circle' ? ' swatch-circle' : s.marker === 'diamond' ? ' swatch-diamond' : '';
    const item = el('span', 'perf-legend-item');
    const sw = el('span', 'perf-swatch' + shape);
    sw.style.background = s.color;
    item.append(sw, document.createTextNode(s.label));
    legend.append(item);
  });
  container.append(legend);

  // SVG scaffold.
  const NS = 'http://www.w3.org/2000/svg';
  const W = 720, H = 430, L = 100, R = 650, T = 40, Bt = 355;
  const yMax = cfg.yMax || 100;
  const y = (v) => T + (1 - v / yMax) * (Bt - T);
  const xOf = {};
  cats.forEach((c, i) => { xOf[c.id] = L + (R - L) * (i + 1) / (cats.length + 1); });
  const s2 = (tag, attrs, text) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (text != null) e.textContent = text;
    return e;
  };
  const marker = (mk, x, yv, color) => {
    if (mk === 'square')   { const z = 13; return s2('rect', { x: x - z / 2, y: yv - z / 2, width: z, height: z, fill: color, class: 'abl-marker' }); }
    if (mk === 'triangle') return s2('polygon', { points: `${x},${yv - 8} ${x - 8},${yv + 6} ${x + 8},${yv + 6}`, fill: color, class: 'abl-marker' });
    if (mk === 'diamond')  return s2('polygon', { points: `${x},${yv - 9} ${x + 9},${yv} ${x},${yv + 9} ${x - 9},${yv}`, fill: color, class: 'abl-marker' });
    return s2('circle', { cx: x, cy: yv, r: 7, fill: color, class: 'abl-marker' });
  };

  const svg = s2('svg', { viewBox: `0 0 ${W} ${H}`, class: 'ablation-svg' });

  [20, 40, 60, 80].forEach((t) => {
    svg.append(s2('line', { x1: L, y1: y(t), x2: R, y2: y(t), class: 'abl-grid' }));
    svg.append(s2('text', { x: L - 10, y: y(t) + 4, class: 'abl-tick', 'text-anchor': 'end' }, t));
  });
  svg.append(s2('line', { x1: L, y1: T, x2: L, y2: Bt, class: 'abl-axis' }));
  svg.append(s2('line', { x1: L, y1: Bt, x2: R, y2: Bt, class: 'abl-axis' }));
  const ymid = (T + Bt) / 2;
  svg.append(s2('text', { x: 30, y: ymid, class: 'abl-ylabel', 'text-anchor': 'middle',
    transform: `rotate(-90 30 ${ymid})` }, cfg.yLabel || ''));

  // Robot-only baselines (under the series lines).
  series.forEach((s) => {
    if (s.baseline == null) return;
    svg.append(s2('line', { x1: L, y1: y(s.baseline), x2: R, y2: y(s.baseline), stroke: s.color, class: 'abl-baseline' }));
    svg.append(s2('text', { x: (L + R) / 2, y: y(s.baseline) - 8, fill: s.color, class: 'abl-baseline-label',
      'text-anchor': 'middle' }, s.baselineLabel || (s.label + ' Robot Only ' + s.baseline + '%')));
  });

  // Series lines + markers + value labels.
  const lines = [];
  series.forEach((s) => {
    const pts = cats.map((c) => ({ x: xOf[c.id], v: s.points[c.id] })).filter((p) => p.v != null);
    const d = pts.map((p, i) => (i ? 'L' : 'M') + p.x + ' ' + y(p.v)).join(' ');
    const path = s2('path', { d, class: 'abl-line', stroke: s.color });
    svg.append(path); lines.push(path);
    pts.forEach((p, i) => {
      svg.append(marker(s.marker, p.x, y(p.v), s.color));
      const below = s.labelBelow && s.labelBelow.indexOf(cats[i].id) !== -1;
      svg.append(s2('text', { x: p.x, y: y(p.v) + (below ? 22 : -14), class: 'abl-val', 'text-anchor': 'middle' }, Math.round(p.v) + '%'));
    });
  });

  cats.forEach((c) => svg.append(s2('text', { x: xOf[c.id], y: Bt + 28, class: 'abl-xlabel', 'text-anchor': 'middle' }, c.label)));

  container.append(svg);

  // Draw-in on scroll: lines draw, then markers/values fade in.
  lines.forEach((p) => {
    const len = p.getTotalLength ? p.getTotalLength() : 0;
    if (len) { p.style.strokeDasharray = len; p.style.strokeDashoffset = len; }
  });
  const reveal = () => {
    lines.forEach((p) => { p.style.strokeDashoffset = '0'; });
    svg.classList.add('abl-revealed');
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(svg);
  } else { reveal(); }

  return container;
}

function renderWorldPred() {
  const mount = $('#wp-mount');
  if (!mount) return;
  const cfg = (CONFIG.worldPred) || {};
  const methods = cfg.methods || [];
  if (!methods.length) return;

  // Three panels in a row: the two comparison videos plus a per-target MSE
  // chart. The tab bar (Pixel / DINO / 3D Flow) switches all three at once.
  const grid = el('div', 'wp-grid wp-compare');
  const conds = cfg.conditions || [];
  const condOf = (id, fb) => conds.find((c) => c.id === id) || fb;
  const evaCond = condOf('eva', { id: 'eva', label: 'Robot Only', color: '#CFC8B4' });
  const cotrainCond = condOf('cotrain', { id: 'cotrain', label: '+ Human', color: '#FBE0A0' });

  // A video panel: coloured title + swatch, clip framed in the same colour so
  // it stays tied to its bar in the chart panel.
  function videoPanel(cond) {
    const p = el('div', 'wp-panel');
    p.style.setProperty('--wp-accent', cond.color);
    const title = el('div', 'panel-title');
    const sw = el('span', 'perf-swatch'); sw.style.background = cond.color;
    title.append(sw, document.createTextNode(cond.label));
    p.append(title);
    const slot = el('div', 'wp-slot');
    p.append(slot);
    return slot;
  }
  const evaSlot = videoPanel(evaCond);
  const cotrainSlot = videoPanel(cotrainCond);

  // Chart panel (third column): holds one hidden chart per target.
  const chartPanel = el('div', 'wp-panel wp-chart-panel');
  chartPanel.append(el('div', 'panel-title', 'Prediction MSE'));
  const chartSlot = el('div', 'wp-slot wp-chart-slot');
  chartPanel.append(chartSlot);
  grid.append(evaSlot.parentNode, cotrainSlot.parentNode, chartPanel);

  // MSE numbers live in a separate `metrics` array (methods hold video paths).
  const metricsById = {};
  (cfg.metrics || []).forEach((r) => { metricsById[r.id] = r; });

  // Build each target's video pair + chart once, keep them mounted, and just
  // toggle visibility on switch (no re-download, no rebuild).
  const pairs = {};
  const charts = {};
  methods.forEach((m) => {
    const ev = makeMedia(m.eva, evaCond.label + '<br><small>video</small>', { autoplay: false });
    const co = makeMedia(m.cotrain, cotrainCond.label + '<br><small>video</small>', { autoplay: false });
    [ev, co].forEach((v) => { v.classList.add('hidden'); if (v.tagName === 'VIDEO') v.preload = 'none'; });
    evaSlot.append(ev); cotrainSlot.append(co);
    pairs[m.id] = [ev, co];

    const row = metricsById[m.id];
    const chart = row ? buildTargetChart(row, [evaCond, cotrainCond])
                      : { el: el('div', 'wp-chart'), bars: [] };
    chart.el.classList.add('hidden');
    chartSlot.append(chart.el);
    charts[m.id] = chart;
  });

  let revealed = false;
  function show(id) {
    methods.forEach((m) => {
      const on = m.id === id;
      pairs[m.id].forEach((v) => {
        v.classList.toggle('hidden', !on);
        if (v.tagName === 'VIDEO') { if (on) v.play().catch(() => {}); else v.pause(); }
      });
      const c = charts[m.id];
      c.el.classList.toggle('hidden', !on);
      // Grow the visible chart's bars from 0; reset hidden ones so switching
      // back re-animates. (Horizontal bars: animate width.)
      c.bars.forEach((b) => { b.style.width = (on && revealed ? b.dataset.target : 0) + '%'; });
    });
  }

  const tabs = makeTabs(methods.map((m) => ({ id: m.id, label: m.label })),
                        show, methods[0].id);
  mount.append(tabs.bar, grid);
  mount.append(el('p', 'figure-caption wp-metrics-note',
    'Future-prediction error for the selected target (lower is better). The two bars share that target&rsquo;s scale &mdash; the longer bar is the larger error &mdash; with absolute MSE labelled and the change vs&nbsp;Robot&nbsp;Only marked on the + Human bar.'));

  // Defer clip downloads until the section scrolls in, then prefetch all so
  // later tab switches are instant; reveal + animate the first chart.
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      Object.values(pairs).flat().forEach((v) => {
        if (v.tagName === 'VIDEO') { v.preload = 'auto'; v.load(); }
      });
      revealed = true;
      show(methods[0].id);
      io.disconnect();
    });
  }, { threshold: 0.15 });
  io.observe(grid);
}

// One target's prediction error as two vertical bars (Robot Only vs
// + Human), scaled to the larger value so the taller bar reads as
// the bigger error. Returns { el, bars } so the caller can toggle + animate it.
function buildTargetChart(row, conds) {
  const chart = el('div', 'wp-chart wp-hchart');
  const base = row.eva;                                // robot-only baseline
  const denom = Math.max(row.eva, row.cotrain) || 1;   // longest bar fills the track
  const bars = [];
  conds.forEach((c) => {
    const v = row[c.id];
    if (v == null) return;
    const rowEl = el('div', 'wp-hbar-row');
    const head = el('div', 'wp-hbar-head');
    head.append(el('span', 'wp-hbar-label', c.label));
    if (c.id !== 'eva' && base != null) {
      const d = Math.round(((v - base) / base) * 100);  // lower MSE = gain (green)
      head.append(el('span', 'wp-hbar-delta ' + (d <= 0 ? 'pos' : 'neg'),
        (d <= 0 ? '↓' : '↑') + Math.abs(d) + '%'));
    }
    const track = el('div', 'wp-hbar-track');
    const fill = el('div', 'wp-hbar-fill');
    fill.style.background = c.color;
    fill.style.width = '0%';
    fill.dataset.target = ((v / denom) * 100).toFixed(1);
    fill.append(el('span', 'wp-hbar-val', v.toFixed(5)));
    track.append(fill);
    rowEl.append(head, track);
    chart.append(rowEl);
    bars.push(fill);
  });

  if (row.metric) chart.append(el('div', 'wp-chart-metric', row.metric + ' · lower is better'));
  return { el: chart, bars };
}

// ---- Interactive morphing UMAP (BC <-> WAM) --------------------------------

const UMAP_CLASSES = [
  { key: 'robot',    label: 'Robot',           color: '#1f77b4' },
  { key: 'indomain', label: 'In-Domain Human', color: '#ff7f0e' },
  { key: 'flagship', label: 'EgoVerse',        color: '#2ca02c' },
];

function umapBuildPoints(taskData) {
  // Pair BC point i with WAM point i within each class (truncate to min count).
  const pts = [];
  UMAP_CLASSES.forEach((cls) => {
    const bc = (taskData.bc || {})[cls.key] || [];
    const wam = (taskData.wam || {})[cls.key] || [];
    const n = Math.min(bc.length, wam.length);
    for (let i = 0; i < n; i++) {
      pts.push({ bx: bc[i][0], by: bc[i][1], ux: wam[i][0], uy: wam[i][1],
                 color: cls.color, label: cls.label });
    }
  });
  // shuffle so no class is drawn entirely on top (deterministic-ish)
  for (let i = pts.length - 1; i > 0; i--) {
    const j = (i * 1103515245 + 12345) % (i + 1);
    [pts[i], pts[j]] = [pts[j], pts[i]];
  }
  return pts;
}

function umapScaling(pts, W, H) {
  const padL = 16, padR = 16, padT = 16, padB = 16;
  // Loop (not Math.min(...xs)) — the spread overflows the stack on dense clouds (~12k pts).
  let xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity;
  for (const p of pts) {
    if (p.bx < xMin) xMin = p.bx; if (p.ux < xMin) xMin = p.ux;
    if (p.bx > xMax) xMax = p.bx; if (p.ux > xMax) xMax = p.ux;
    if (p.by < yMin) yMin = p.by; if (p.uy < yMin) yMin = p.uy;
    if (p.by > yMax) yMax = p.by; if (p.uy > yMax) yMax = p.uy;
  }
  const range = Math.max(xMax - xMin, yMax - yMin) * 1.1 || 1;
  const xMid = (xMin + xMax) / 2, yMid = (yMin + yMax) / 2;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const s = Math.min(plotW, plotH) / range;
  const cx = padL + plotW / 2, cy = padT + plotH / 2;
  return {
    sx: (v) => cx + (v - xMid) * s,
    sy: (v) => cy - (v - yMid) * s,
  };
}

function umapDraw(canvas, pts, t, scale) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const W = rect.width, H = rect.height;
  if (W < 10 || H < 10) return;
  canvas.width = W * dpr; canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  const sc = scale.cur || (scale.cur = umapScaling(pts, W, H));
  // Dense point cloud (~12k pts/state): small radius scales down as the cloud grows.
  const r = pts.length > 6000 ? 1.6 : pts.length > 2000 ? 2.4 : 4.5;
  ctx.globalAlpha = 0.7;
  for (const p of pts) {
    const x = p.bx + (p.ux - p.bx) * t;
    const y = p.by + (p.uy - p.by) * t;
    ctx.beginPath();
    ctx.arc(sc.sx(x), sc.sy(y), r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function umapAnimate(canvas, pts, scale, fromT, toT, dur) {
  const start = performance.now();
  if (canvas._raf) cancelAnimationFrame(canvas._raf);
  function tick(now) {
    let p = Math.min((now - start) / dur, 1);
    p = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; // easeInOutCubic
    const t = fromT + (toT - fromT) * p;
    umapDraw(canvas, pts, t, scale);
    canvas._t = t;
    if (p < 1) canvas._raf = requestAnimationFrame(tick);
  }
  canvas._raf = requestAnimationFrame(tick);
}

function renderUmap() {
  const mount = $('#umap-viz');
  if (!mount) return;
  fetch('data/umap_coords.json')
    .then((r) => { if (!r.ok) throw new Error('no umap data'); return r.json(); })
    .then((DATA) => {
      const TASK = 'cup'; // fixed to cup-on-saucer (no task switching)
      if (!DATA[TASK]) throw new Error('empty umap data');

      // legend
      const legend = el('div', 'perf-legend');
      UMAP_CLASSES.forEach((c) => {
        const item = el('span', 'perf-legend-item');
        const sw = el('span', 'perf-swatch'); sw.style.background = c.color;
        item.append(sw, document.createTextNode(c.label));
        legend.append(item);
      });

      // canvas + state morph bar
      const canvas = el('canvas', 'umap-canvas');
      const wrap = el('div', 'umap-canvas-wrap'); wrap.append(canvas);
      const stateBar = el('div', 'morph-bar');
      const bcBtn = el('button', 'morph-btn active', 'BC');
      const wamBtn = el('button', 'morph-btn', 'WAM');
      const slider = el('div', 'morph-slider');
      stateBar.append(bcBtn, wamBtn, slider);
      const caption = el('div', 'umap-state-label', 'BC — robot and human embeddings stay separated');

      const pts = umapBuildPoints(DATA[TASK]);
      const scale = {};
      canvas._t = 0;

      function positionSlider() {
        const active = stateBar.querySelector('.morph-btn.active');
        slider.style.left = active.offsetLeft + 'px';
        slider.style.width = active.offsetWidth + 'px';
      }
      function setState(toT, label) {
        umapAnimate(canvas, pts, scale, canvas._t || 0, toT, 700);
        caption.textContent = label;
      }
      bcBtn.addEventListener('click', () => {
        wamBtn.classList.remove('active'); bcBtn.classList.add('active');
        positionSlider(); setState(0, 'BC — robot and human embeddings stay separated');
      });
      wamBtn.addEventListener('click', () => {
        bcBtn.classList.remove('active'); wamBtn.classList.add('active');
        positionSlider(); setState(1, 'WAM — embeddings align into a shared space');
      });

      mount.append(stateBar, caption, legend, wrap);

      // hover tooltip
      const tip = el('div', 'umap-tip');
      document.body.append(tip);
      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        const sc = scale.cur; if (!sc) return;
        const t = canvas._t || 0;
        let found = null;
        for (const p of pts) {
          const x = sc.sx(p.bx + (p.ux - p.bx) * t), y = sc.sy(p.by + (p.uy - p.by) * t);
          if (Math.hypot(x - mx, y - my) < 8) { found = p; break; }
        }
        if (found) {
          tip.style.display = 'block';
          tip.style.left = (e.clientX + 12) + 'px';
          tip.style.top = (e.clientY - 10) + 'px';
          tip.innerHTML = `<span style="color:${found.color}">●</span> ${found.label}`;
        } else { tip.style.display = 'none'; }
      });
      canvas.addEventListener('mouseleave', () => { tip.style.display = 'none'; });

      // initial draw + animate in when scrolled into view
      umapDraw(canvas, pts, 0, scale);
      requestAnimationFrame(positionSlider);
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { umapDraw(canvas, pts, 0, scale); io.disconnect(); }
        });
      }, { threshold: 0.2 });
      io.observe(wrap);
      window.addEventListener('resize', () => { scale.cur = null; umapDraw(canvas, pts, canvas._t || 0, scale); });
    })
    .catch(() => {
      // fallback: static figure
      mount.innerHTML = '<a href="figs/umap.png" target="_blank"><img src="figs/umap.png" alt="UMAP of learned representations" style="width:100%;height:auto;"></a>';
    });
}

// ---- Method: native HTML architecture diagram -----------------------------

const SQ_COLORS = { purple: '#9489c4', salmon: '#cfb3ab', green: '#9fb599' };

// The future ego RGB frame: input to the VAE & DINO encoders, and the VAE's
// own reconstruction target (pixel head autoencodes it).
const RGB_ROBOT = 'figs/dec_vae_robot.jpg';
const RGB_HUMAN = 'figs/dec_vae_human.jpg';

// decStep: index of the denoiser/decoder step the trunk tokens (z) condition.
// inFlows: the top box is a pipeline input that feeds the encoder (VAE/DINO);
//   false => it is a side condition (flow's point grid q), shown but not encoded.
// condQ: the decoder is additionally conditioned on q (the point grid).
const WM_HEADS = [
  { id: 'vae',  tab: 'VAE',     headName: 'VAE (Pixel)',
    target: 'Future ego frame in a pretrained video-VAE latent',
    steps: ['VAE Encoder', 'Diffusion Transformer', 'VAE Decoder'], decStep: 1,
    inRobot: RGB_ROBOT, inHuman: RGB_HUMAN, inTitle: 'Input &mdash; future ego frame', inFlows: true,
    imgRobot: 'figs/dec_vae_robot.jpg', imgHuman: 'figs/dec_vae_human.jpg' },
  { id: 'rae',  tab: 'DINO',    headName: 'RAE (DINO)',
    target: 'DINO patch features of the future frame',
    steps: ['DINO Encoder', 'Wide Diffusion Transformer', 'DDT Head'], decStep: 1,
    inRobot: RGB_ROBOT, inHuman: RGB_HUMAN, inTitle: 'Input &mdash; future ego frame', inFlows: true,
    imgRobot: 'figs/dec_rae_robot.png', imgHuman: 'figs/dec_rae_human.png' },
  { id: 'flow', tab: '3D Flow', headName: '3D Flow',
    target: 'Camera-stabilized dense 3D motion field',
    steps: ['Noised 3D Flow Vector', 'Flow Matching Decoder'], decStep: 1,
    inRobot: 'figs/grid_robot.png', inHuman: 'figs/grid_human.png',
    inTitle: '<span class="cond-q">q</span> &mdash; point grid on current frame', inFlows: false, condQ: true,
    imgRobot: 'figs/dec_flow_robot.jpg', imgHuman: 'figs/dec_flow_human.jpg' },
];

function initArch() {
  const arch = $('#arch-diagram');
  if (!arch) return;

  // fill token squares
  arch.querySelectorAll('.sq-row').forEach((row) => {
    const c = SQ_COLORS[row.dataset.color] || '#999';
    for (let i = 0; i < 4; i++) {
      const sq = el('span', 'sq');
      sq.style.background = c;
      row.append(sq);
    }
  });

  // staggered build animation (inputs first -> heads last), on scroll-in
  const anims = Array.from(arch.querySelectorAll('.anim'));
  anims.forEach((n, i) => { n.style.transitionDelay = ((anims.length - 1 - i) * 55) + 'ms'; });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { arch.classList.add('in'); io.disconnect(); } });
  }, { threshold: 0.15 });
  io.observe(arch);
  // safety fallback: always reveal even if the observer never fires
  setTimeout(() => arch.classList.add('in'), 1800);

  // image below each vision-stem label (matches original: label pill on top, image under it)
  const stemImgs = (CONFIG.method && CONFIG.method.stems) || {};
  arch.querySelectorAll('[data-stem]').forEach((box) => {
    const robot = box.classList.contains('robot');
    box.parentElement.append(
      imgSlot(stemImgs[box.dataset.stem], box.dataset.stem + ' view', 'stem-img' + (robot ? ' robot' : '')));
  });

  // swappable world-model head switcher (tabs live at the head; card shows detail)
  const tabsMount = $('#wm-tabs-mount');
  const mount = $('#wm-switcher');
  if (!mount || !tabsMount) return;
  const decImgs = (CONFIG.method && CONFIG.method.decoders) || {};
  const headName = $('#wm-head-name');
  const wmHeadBox = arch.querySelector('.wm-head');

  const card = el('div', 'wm-card');
  const header = el('div', 'wm-card-header', '&#8646; Swappable World-Model Head');
  const body = el('div', 'wm-card-body');
  const inputBox = el('div', 'wm-input-box');
  const inputTitle = el('div', 'wm-input-title', 'Input &mdash; future ego frame');
  const inputWrap = el('div', 'wm-img');
  const encArrow = el('div', 'wm-pred-arrow', '&#8595;');
  inputBox.append(inputTitle, inputWrap);
  const pipe = el('div', 'wm-pipeline');
  const predArrow = el('div', 'wm-pred-arrow', '&#8595;&nbsp;reconstructs');
  const targetBox = el('div', 'wm-target-box');
  const targetTitle = el('div', 'wm-target-title',
    'Reconstruction Target <span class="wm-target-loss">&#8466;<sub>world</sub></span>');
  const imgWrap = el('div', 'wm-img');
  const note = el('div', 'wm-target');
  targetBox.append(targetTitle, imgWrap, note);
  body.append(inputBox, encArrow, pipe, predArrow, targetBox);
  card.append(header, body);
  mount.append(card);

  // script-z token bundle (matches the z on the trunk's token box)
  const condZ = () => el('span', 'cond-z', 'z');

  // robot OR human image pair, laid out horizontally
  function fillPair(wrap, robot, human) {
    wrap.innerHTML = '';
    const pair = el('div', 'wm-pair');
    [['Robot', robot], ['Human', human]].forEach(([lab, src], i) => {
      if (i > 0) pair.append(el('span', 'wm-or', 'OR'));
      const item = el('div', 'wm-pair-item');
      item.append(imgSlot(src, lab, 'pair-img'));
      item.append(el('span', 'wm-pair-label', lab));
      pair.append(item);
    });
    wrap.append(pair);
  }

  function show(h) {
    if (headName) headName.textContent = h.headName;
    if (wmHeadBox) { wmHeadBox.classList.add('pulse'); setTimeout(() => wmHeadBox.classList.remove('pulse'), 500); }
    const hasInput = !!h.inRobot;
    inputBox.style.display = hasInput ? '' : 'none';
    encArrow.style.display = (hasInput && h.inFlows) ? '' : 'none';
    if (hasInput) {
      inputTitle.innerHTML = h.inTitle || 'Input';
      fillPair(inputWrap, h.inRobot, h.inHuman);
    }
    fillPair(imgWrap, h.imgRobot, h.imgHuman);
    pipe.innerHTML = '';
    h.steps.forEach((s, i) => {
      if (i > 0) pipe.append(el('span', 'wm-arrow', '&#8595;'));
      const step = el('div', 'wm-step', s);
      if (i === h.decStep) {
        // the trunk tokens (z) — and the point grid (q) for flow — condition this decoder
        const inlet = el('div', 'wm-cond-inlet');
        inlet.append(condZ());
        if (h.condQ) {
          inlet.append(el('span', 'cond-plus', '+'));
          inlet.append(el('span', 'cond-q', 'q'));
        }
        const row = el('div', 'wm-dec-row');
        step.classList.add('wm-dec-step');
        row.append(inlet, el('span', 'wm-cond-arrow', '&#8594;'), step);
        pipe.append(row);
      } else {
        pipe.append(step);
      }
    });
    note.innerHTML = h.target;
  }
  const tabs = makeTabs(WM_HEADS.map((h) => ({ id: h.id, label: h.tab })),
    (id) => show(WM_HEADS.find((h) => h.id === id)));
  tabsMount.append(tabs.bar);
  show(WM_HEADS[2]); // default to 3D Flow (headline)
  tabs.setActive('flow');
}

// Training / Inference mode toggle: Inference drops the World-Model Head.
function initArchMode() {
  const bar = $('#arch-mode-bar');
  const layout = $('#arch-layout');
  const hint = $('#arch-mode-hint');
  if (!bar || !layout) return;
  const slider = bar.querySelector('.morph-slider');
  const btns = Array.from(bar.querySelectorAll('.morph-btn'));
  function positionSlider() {
    const active = bar.querySelector('.morph-btn.active');
    if (active && slider) { slider.style.left = active.offsetLeft + 'px'; slider.style.width = active.offsetWidth + 'px'; }
  }
  btns.forEach((b) => b.addEventListener('click', () => {
    btns.forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    positionSlider();
    const infer = b.dataset.mode === 'infer';
    layout.classList.toggle('inference', infer);
    if (hint) hint.textContent = infer ? 'World-Model Head dropped — action-only, forward pass only'
                                       : 'both heads & backprop active';
  }));
  requestAnimationFrame(positionSlider);
  window.addEventListener('resize', positionSlider);
}

// image slot: <img> if a path is given, else a labelled dashed placeholder.
function imgSlot(path, label, cls) {
  if (path) {
    const im = el('img', 'img-fill ' + (cls || ''));
    im.src = path; im.alt = label || '';
    return im;
  }
  return el('div', 'img-slot ' + (cls || ''), '<span>' + (label || 'image') + '</span>');
}

document.addEventListener('DOMContentLoaded', () => {
  mountSingleVideo('#explanation-video-mount', CONFIG.explanationVideo,
    'Insert explanation video<br><small>videos/explanation.mp4</small>', true,
    { muted: false, loop: false, autoplay: false }); // narrated: play on demand w/ sound
  initArch();
  initArchMode();
  renderDataGallery();
  renderRobotDemo();
  renderPerformance();
  renderAblation();
  renderUmap();
  renderWorldPred();
});

/* ----- Performance data (from paper; OOD = mean of ood_object & ood_scene) ----- */
const PERF_DATA = {"cup":{"bc":{"base":{"in_domain":{"ns":0.35,"sr":0.25},"ood":{"ns":0.1481,"sr":0.0556}},"cotrain":{"in_domain":{"ns":0.2167,"sr":0.15},"ood":{"ns":0.0926,"sr":0.0556}},"flagship":{"in_domain":{"ns":0.3,"sr":0.15},"ood":{"ns":0.1296,"sr":0.0556}}},"pixel":{"base":{"in_domain":{"ns":0.3667,"sr":0.25},"ood":{"ns":0.1481,"sr":0.1111}},"cotrain":{"in_domain":{"ns":0.45,"sr":0.35},"ood":{"ns":0.1296,"sr":0.0556}},"flagship":{"in_domain":{"ns":0.7167,"sr":0.5},"ood":{"ns":0.2315,"sr":0.0556}}},"pixelpt":{"base":{"in_domain":{"ns":0.5,"sr":0.4},"ood":{"ns":0.1852,"sr":0.1111}},"cotrain":{"in_domain":{"ns":0.6,"sr":0.45},"ood":{"ns":0.1852,"sr":0.1111}},"flagship":{"in_domain":{"ns":0.6333,"sr":0.5},"ood":{"ns":0.2407,"sr":0.1111}}},"dino":{"base":{"in_domain":{"ns":0.4167,"sr":0.25},"ood":{"ns":0.1852,"sr":0.1111}},"cotrain":{"in_domain":{"ns":0.65,"sr":0.5},"ood":{"ns":0.3611,"sr":0.2167}},"flagship":{"in_domain":{"ns":0.8333,"sr":0.7},"ood":{"ns":0.6241,"sr":0.5389}}},"flow":{"base":{"in_domain":{"ns":0.8,"sr":0.7},"ood":{"ns":0.2222,"sr":0.2222}},"cotrain":{"in_domain":{"ns":0.9,"sr":0.85},"ood":{"ns":0.3704,"sr":0.2222}},"flagship":{"in_domain":{"ns":0.9333,"sr":0.9},"ood":{"ns":0.6611,"sr":0.5389}}}},"bag":{"bc":{"base":{"in_domain":{"ns":0.7375,"sr":0.4},"ood":{"ns":0.325,"sr":0.05}},"cotrain":{"in_domain":{"ns":0.7125,"sr":0.45},"ood":{"ns":0.3375,"sr":0.1}},"flagship":{"in_domain":{"ns":0.8125,"sr":0.5},"ood":{"ns":0.3625,"sr":0.1}}},"pixel":{"base":{"in_domain":{"ns":0.85,"sr":0.45},"ood":{"ns":0.325,"sr":0.1}},"cotrain":{"in_domain":{"ns":0.8125,"sr":0.4},"ood":{"ns":0.325,"sr":0.1}},"flagship":{"in_domain":{"ns":0.9125,"sr":0.65},"ood":{"ns":0.375,"sr":0.15}}},"pixelpt":{"base":{"in_domain":{"ns":0.575,"sr":0.3},"ood":{"ns":0.2125,"sr":0.05}},"cotrain":{"in_domain":{"ns":0.7875,"sr":0.35},"ood":{"ns":0.3125,"sr":0.05}},"flagship":{"in_domain":{"ns":0.8,"sr":0.35},"ood":{"ns":0.7875,"sr":0.35}}},"dino":{"base":{"in_domain":{"ns":0.825,"sr":0.4},"ood":{"ns":0.3125,"sr":0.1}},"cotrain":{"in_domain":{"ns":0.925,"sr":0.8},"ood":{"ns":0.5,"sr":0.15}},"flagship":{"in_domain":{"ns":0.9625,"sr":0.85},"ood":{"ns":0.8375,"sr":0.5}}},"flow":{"base":{"in_domain":{"ns":0.875,"sr":0.6},"ood":{"ns":0.4375,"sr":0.1}},"cotrain":{"in_domain":{"ns":0.95,"sr":0.8},"ood":{"ns":0.575,"sr":0.3}},"flagship":{"in_domain":{"ns":0.9625,"sr":0.9},"ood":{"ns":0.7375,"sr":0.55}}}},"fold":{"bc":{"base":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.2583,"sr":0.05}},"flagship":{"in_domain":{"ns":0.9167,"sr":0.85},"ood":{"ns":0.2417,"sr":0.0}}},"pixel":{"base":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.2833,"sr":0.2}},"flagship":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.575,"sr":0.1}}},"pixelpt":{"base":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.3,"sr":0.25}},"flagship":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.3583,"sr":0.25}}},"dino":{"base":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.2417,"sr":0.15}},"flagship":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.9167,"sr":0.85}}},"flow":{"base":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.3667,"sr":0.25}},"flagship":{"in_domain":{"ns":1.0,"sr":1.0},"ood":{"ns":0.7583,"sr":0.4}}}}};
