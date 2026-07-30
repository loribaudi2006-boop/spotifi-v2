'use strict';

/* =========================================================
   ICONS — single source of truth. Every icon anywhere in the
   app is injected from here, so there is never a second copy
   of the same SVG living in a different template to drift
   out of sync.
   ========================================================= */
const ICONS = {
  home: (active) => active
    ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 2 10.8V21a1 1 0 0 0 1 1h6v-7h6v7h6a1 1 0 0 0 1-1V10.8z"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2.5 2 10.8V21a1 1 0 0 0 1 1h6v-7h6v7h6a1 1 0 0 0 1-1V10.8z"/></svg>`,
  search: (active) => active
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5" fill="currentColor" stroke="none"/><line x1="15.5" y1="15.5" x2="21" y2="21"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.5" y1="15.5" x2="21" y2="21"/></svg>`,
  library: (active) => active
    ? `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="10" y="4" width="4" height="16" rx="1"/><rect x="17" y="6" width="4" height="14" rx="1" transform="rotate(15 19 13)"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="10" y="4" width="4" height="16" rx="1"/><rect x="17" y="6" width="4" height="14" rx="1" transform="rotate(15 19 13)"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="17" x2="12" y2="22"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>`,
  retry: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 1 2.6 6.3"/><path d="M3 21v-5h5"/></svg>`,
  spinner: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="icon-spin"><path d="M12 3a9 9 0 1 1-6.36 2.64"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
  prev: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2v14H6z"/><path d="M20 5 8 12l12 7z"/></svg>`,
  next: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 5h2v14h-2z"/><path d="M4 5l12 7-12 7z"/></svg>`,
  shuffle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h4l10 12h6"/><path d="M2 18h4l3.5-4.2"/><path d="M14 6h6"/><path d="m17 3 3 3-3 3"/><path d="m17 15 3 3-3 3"/></svg>`,
  repeat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  heart: (filled) => filled
    ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.2C.5 8 2.3 4.5 5.8 4c2-.3 3.8.6 6.2 3 2.4-2.4 4.2-3.3 6.2-3 3.5.5 5.3 4 3.8 7.8C19.5 16.4 12 21 12 21z"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 21s-7.5-4.6-10-9.2C.5 8 2.3 4.5 5.8 4c2-.3 3.8.6 6.2 3 2.4-2.4 4.2-3.3 6.2-3 3.5.5 5.3 4 3.8 7.8C19.5 16.4 12 21 12 21z"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  queueList: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="14" y2="7"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="17" x2="10" y2="17"/><path d="M18 8v8l4-4z" fill="currentColor" stroke="none"/></svg>`,
  note: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 18V5l11-2v13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" fill="currentColor" stroke="none"/><circle cx="17" cy="16" r="3" fill="currentColor" stroke="none"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,
  account: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>`,
  lyrics: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="17" x2="12" y2="17"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><line x1="8.3" y1="10.8" x2="15.7" y2="6.2"/><line x1="8.3" y1="13.2" x2="15.7" y2="17.8"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7.1L12 17.8 5.8 21.3 7 14.2 2 9.3l7.1-.7z"/></svg>`,
  lightning: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>`,
  headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>`,
  broadcast: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><path d="M8.5 8.5a6 6 0 0 0 0 7"/><path d="M15.5 8.5a6 6 0 0 1 0 7"/><path d="M5.5 5.5a11 11 0 0 0 0 13"/><path d="M18.5 5.5a11 11 0 0 1 0 13"/></svg>`,
  vinyl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4h8v4a4 4 0 0 1-8 0z"/><path d="M8 5H5a3 3 0 0 0 3 5"/><path d="M16 5h3a3 3 0 0 1-3 5"/><line x1="12" y1="12" x2="12" y2="16"/><path d="M10 16h4l1 4H9z"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/></svg>`,
  playlistAdd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h11"/><path d="M3 10h8"/><path d="M3 15h5"/><circle cx="18" cy="16" r="4.5"/><line x1="18" y1="14.3" x2="18" y2="17.7"/><line x1="16.3" y1="16" x2="19.7" y2="16"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 9.5 18 20 6"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4.5 19h15"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  starOutline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7.1L12 17.8 5.8 21.3 7 14.2 2 9.3l7.1-.7z"/></svg>`,
};

/* =========================================================
   DB — localStorage-backed app state
   ========================================================= */
const DB_KEY = 'spotifi_db_v1';
function loadDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) return Object.assign(defaultDB(), JSON.parse(raw));
  } catch (e) { /* corrupted storage, fall back to defaults */ }
  return defaultDB();
}
function defaultDB() {
  return {
    apiKey: '',
    audioBitrate: '64',
    liked: [],
    recentTracks: [],
    playlists: [],
    offlineTracks: [],
    offlinePlaylists: [],
    savedArtists: [],
    libraryLayout: 'list',
    libraryFilter: 'all',
    profile: { name: '', photoDataUrl: null },
  };
}
let db = loadDB();
function saveDB() { localStorage.setItem(DB_KEY, JSON.stringify(db)); }

/* =========================================================
   Offline audio storage — actual audio bytes live in IndexedDB
   (localStorage's ~5-10MB quota would choke on more than a song or
   two), keyed by track id. Track metadata (title/artist/thumb) stays
   in the regular localStorage-backed db.offlineTracks, same as every
   other track list in the app — only the heavy binary payload gets
   the separate store.
   ========================================================= */
const OFFLINE_DB_NAME = 'spotifi_offline_v1';
const OFFLINE_STORE = 'audio';
let offlineDbPromise = null;
function openOfflineDb() {
  if (offlineDbPromise) return offlineDbPromise;
  offlineDbPromise = new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { reject(new Error('IndexedDB non supportato')); return; }
    const req = indexedDB.open(OFFLINE_DB_NAME, 1);
    req.onupgradeneeded = () => { req.result.createObjectStore(OFFLINE_STORE); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return offlineDbPromise;
}
function offlineBlobSet(id, blob) {
  return openOfflineDb().then((idb) => new Promise((resolve, reject) => {
    const tx = idb.transaction(OFFLINE_STORE, 'readwrite');
    tx.objectStore(OFFLINE_STORE).put(blob, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}
function offlineBlobGet(id) {
  return openOfflineDb().then((idb) => new Promise((resolve, reject) => {
    const tx = idb.transaction(OFFLINE_STORE, 'readonly');
    const req = tx.objectStore(OFFLINE_STORE).get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  }));
}
function offlineBlobDelete(id) {
  return openOfflineDb().then((idb) => new Promise((resolve, reject) => {
    const tx = idb.transaction(OFFLINE_STORE, 'readwrite');
    tx.objectStore(OFFLINE_STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  }));
}

function isOffline(id) { return db.offlineTracks.some((t) => t.id === id); }
const downloadingIds = new Set();
// Resolves to the locally-stored Blob for a downloaded track, or null if
// it isn't downloaded (or the read fails) — checked first, synchronously
// cheap via isOffline(), before ever touching IndexedDB.
async function getOfflineBlob(id) {
  if (!isOffline(id)) return null;
  try { return await offlineBlobGet(id); } catch (e) { return null; }
}
function refreshDownloadUI(id) {
  const downloading = downloadingIds.has(id);
  const downloaded = isOffline(id);
  $$(`[data-dl-id="${CSS.escape(id)}"]`).forEach((btn) => {
    setIcon(btn.querySelector('.ic') || btn, downloading ? ICONS.spinner : downloaded ? ICONS.check : ICONS.download);
    btn.classList.toggle('downloading', downloading);
    btn.classList.toggle('downloaded', downloaded);
    btn.style.color = downloaded ? 'var(--accent)' : '';
    btn.setAttribute('aria-label', downloaded ? 'Rimuovi download' : 'Scarica per l’ascolto offline');
  });
}
async function downloadTrackOffline(track) {
  if (downloadingIds.has(track.id)) return;
  if (isOffline(track.id)) { removeOfflineTrack(track.id); return; }
  downloadingIds.add(track.id);
  refreshDownloadUI(track.id);
  try {
    const url = (await takePrefetchedStreamUrl(track)) || (await resolveStreamUrl(track.id));
    if (!url) throw new Error('URL non risolto');
    const res = await fetch(url);
    if (!res.ok) throw new Error('fetch fallita');
    const blob = await res.blob();
    await offlineBlobSet(track.id, blob);
    db.offlineTracks = db.offlineTracks.filter((t) => t.id !== track.id);
    db.offlineTracks.unshift({ id: track.id, title: track.title, artist: track.artist, thumb: track.thumb, downloadedAt: Date.now() });
    saveDB();
    showToast('Brano salvato per l’ascolto offline');
    if (currentRoute === 'library') renderLibrary();
  } catch (e) {
    showToast('Impossibile scaricare il brano, riprova');
  } finally {
    downloadingIds.delete(track.id);
    refreshDownloadUI(track.id);
  }
}
async function removeOfflineTrack(id) {
  db.offlineTracks = db.offlineTracks.filter((t) => t.id !== id);
  saveDB();
  refreshDownloadUI(id);
  showToast('Rimosso dai brani offline');
  if (currentRoute === 'library') renderLibrary();
  try { await offlineBlobDelete(id); } catch (e) { /* not fatal — metadata already gone */ }
}

/* =========================================================
   Player state
   ========================================================= */
const player = {
  queue: [],
  currentIndex: -1,
  isPlaying: false,
  shuffle: false,
  repeatMode: 'off', // off | all | one
  shuffleHistory: [], // queue indices already surfaced in the current shuffle cycle — see getNextIndex
};

function currentTrack() {
  return player.currentIndex >= 0 ? player.queue[player.currentIndex] : null;
}

/* =========================================================
   Small DOM helpers
   ========================================================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
// Icon buttons wrap their glyph in a <span class="ic"> (or <span class="nav-icon">
// for the bottom nav) purely so CSS can size it independently of the button's
// own padding/hit-area. Writing the svg into the BUTTON itself instead of that
// inner span destroys the wrapper — the bare <svg> then has no sizing rule
// applied to it and renders at the browser's default intrinsic size, which
// looks fine by accident on some desktop engines but badly broken (oversized/
// clipped, effectively invisible) on real mobile browsers. Auto-target the
// inner span so passing either the button or the span itself is always safe.
function setIcon(el, svg) {
  if (!el) return;
  const target = (el.classList.contains('ic') || el.classList.contains('nav-icon'))
    ? el
    : (el.querySelector('.ic') || el.querySelector('.nav-icon') || el);
  target.innerHTML = svg;
}
function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

let toastTimer = null;
function showToast(msg, duration = 1500) {
  clearTimeout(toastTimer);
  const root = $('#toastRoot');
  root.innerHTML = `<div class="toast">${escapeHtml(msg)}</div>`;
  toastTimer = setTimeout(() => { root.innerHTML = ''; }, duration);
}

/* =========================================================
   Router
   ========================================================= */
let currentRoute = 'home';
function goTo(route) {
  currentRoute = route;
  // Switching tabs without resetting scroll leaves the page scrolled past
  // the new (often shorter) view's actual height — on iOS Safari that
  // overscrolled state can snap back and drag the fixed bottom-nav/mini-
  // player along with it, which is what made the nav appear to "jump" when
  // switching to a shorter view.
  window.scrollTo(0, 0);
  $('#homeHeader').classList.toggle('hidden', route !== 'home');
  $('#searchHeader').classList.toggle('hidden', route !== 'search');
  $('#libraryHeader').classList.toggle('hidden', route !== 'library');
  $('#view-home').classList.toggle('hidden', route !== 'home');
  $('#view-search').classList.toggle('hidden', route !== 'search');
  $('#view-library').classList.toggle('hidden', route !== 'library');
  $$('.nav-item').forEach((btn) => {
    const active = btn.dataset.route === route;
    btn.classList.toggle('active', active);
    setIcon(btn.querySelector('.nav-icon'), ICONS[btn.dataset.route](active));
  });
  if (route === 'home') renderHome();
  if (route === 'search') renderSearch();
  if (route === 'library') renderLibrary();
}

function setupNav() {
  $$('.nav-item').forEach((btn) => {
    btn.addEventListener('click', () => { goTo(btn.dataset.route); btn.blur(); });
  });
}

/* =========================================================
   Greeting
   ========================================================= */
function updateGreeting() {
  const h = new Date().getHours();
  const text = h < 6 ? 'Buonanotte' : h < 12 ? 'Buongiorno' : h < 18 ? 'Buon pomeriggio' : 'Buonasera';
  $('#greetingText').textContent = db.profile.name ? `${text}, ${db.profile.name}` : text;
}

/* =========================================================
   YouTube Data API search
   ========================================================= */
// Collapses different uploads of the SAME underlying song onto one key, by
// stripping the noise that otherwise makes them look like different tracks:
// anything in (parentheses)/[brackets] (official video / lyrics / remix /
// sped up / cover / live / anni vari...), "feat. …" credits, and stray
// punctuation/case differences. Two titles that reduce to the same key are
// treated as the same song for deduplication purposes.
function cleanTrackTitleForKey(raw) {
  return raw
    .toLowerCase()
    .replace(/\(.*?\)|\[.*?\]/g, ' ') // drop bracketed/parenthesized bits entirely
    .replace(/\b(feat|ft)\.?.*$/i, '')
    .replace(/\b(official\s*(video|audio|music\s*video|lyric\s*video)?|lyrics?|video\s*ufficiale|testo|hd|hq|4k|remaster(ed)?|mv)\b/gi, '')
    .replace(/[^\p{L}\p{N}-]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}
// YouTube titles show up in two common shapes — "Artist - Title" and plain
// "Title" (with the artist only living in channelTitle) — so a single
// cleaned string doesn't reliably line up between two uploads of the same
// song. Instead this returns every plausible "just the song part" reading:
// the whole cleaned title, and (if there's a dash) whatever's before and
// after it. If ANY of these match between two tracks, they're the same song.
function trackKeyCandidates(t) {
  const cleaned = cleanTrackTitleForKey(t.title);
  const candidates = new Set([cleaned]);
  const parts = cleaned.split(/\s+-\s+/).map((p) => p.trim()).filter(Boolean);
  if (parts.length > 1) parts.forEach((p) => candidates.add(p));
  return candidates;
}
// Keeps only the first occurrence of each underlying song and drops the
// rest. YouTube already returns results ranked by relevance, so "first" is
// also "most relevant" — without this, a search very often comes back as
// the same song 3-4 times over (official video, lyric video, remix, a
// cover...), which is exactly what made "the next ones" in a played queue
// so often just repeat the song you'd already heard.
function dedupeTracksBySong(list) {
  const seen = new Set();
  const out = [];
  for (const t of list) {
    const candidates = trackKeyCandidates(t);
    let isDup = false;
    for (const c of candidates) { if (c && seen.has(c)) { isDup = true; break; } }
    if (isDup) continue;
    candidates.forEach((c) => { if (c) seen.add(c); });
    out.push(t);
  }
  return out;
}
async function ytSearch(query, max = 15) {
  if (!db.apiKey) {
    showToast('Inserisci la tua chiave YouTube API nelle Impostazioni');
    openSettingsModal();
    return [];
  }
  // Request more than `max` raw results from YouTube — dedup below throws
  // out same-song re-uploads, so asking for exactly `max` would often leave
  // the user with a noticeably short list after the noise is removed.
  // YouTube's own cap is 50 per request.
  const requestCount = Math.min(max * 2, 50);
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=10&maxResults=${requestCount}&q=${encodeURIComponent(query)}&key=${db.apiKey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.error) {
      const reason = data.error.errors && data.error.errors[0] && data.error.errors[0].reason;
      if (reason === 'accessNotConfigured' || reason === 'forbidden' || data.error.code === 403) {
        showToast('Chiave API bloccata: abilita "YouTube Data API v3" nella Google Cloud Console', 3500);
      } else {
        showToast('Errore di ricerca: ' + (data.error.message || 'sconosciuto'));
      }
      return [];
    }
    const rawTracks = (data.items || []).map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      artist: item.snippet.channelTitle,
      thumb: item.snippet.thumbnails.high ? item.snippet.thumbnails.high.url : item.snippet.thumbnails.default.url,
    }));
    return dedupeTracksBySong(rawTracks).slice(0, max);
  } catch (e) {
    showToast('Impossibile contattare YouTube — controlla la connessione');
    return [];
  }
}

/* =========================================================
   Home view
   ========================================================= */
let suggestedAlbumsCache = null;
async function renderHome() {
  const el = $('#view-home');
  const hasLiked = db.liked.length > 0;
  const quickItems = [];
  if (hasLiked) quickItems.push({ type: 'liked' });
  db.playlists.slice(0, 3).forEach((p) => quickItems.push({ type: 'playlist', playlist: p }));
  db.recentTracks.slice(0, 5).forEach((t) => quickItems.push({ type: 'track', track: t }));

  el.innerHTML = `
    <div class="quick-grid" id="quickGrid"></div>
    <div class="section-title">Brani recenti</div>
    <div class="home-carousel" id="recentCarousel"></div>
    <div class="section-title">Album che potrebbero piacerti</div>
    <div class="home-carousel" id="suggestedCarousel"><div class="empty-state">Caricamento...</div></div>
    <div class="section-title">Artisti che ti possono piacere</div>
    <div class="home-carousel" id="artistCarousel"></div>
  `;

  const quickGrid = $('#quickGrid');
  if (quickItems.length === 0) {
    quickGrid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">Cerca un brano per iniziare ad ascoltare</div>`;
  } else {
    quickGrid.innerHTML = quickItems.slice(0, 8).map(quickTileHtml).join('');
  }
  wireQuickGrid(quickGrid);

  const recentCarousel = $('#recentCarousel');
  recentCarousel.innerHTML = db.recentTracks.length
    ? db.recentTracks.map((t, i) => trackCardHtml(t, i)).join('')
    : `<div class="empty-state">Nessun brano ascoltato di recente</div>`;
  wireCardCarousel(recentCarousel, db.recentTracks);

  const artistMap = new Map();
  db.recentTracks.concat(db.liked).forEach((t) => { if (!artistMap.has(t.artist)) artistMap.set(t.artist, t); });
  const artists = Array.from(artistMap.values()).slice(0, 10);
  const artistCarousel = $('#artistCarousel');
  artistCarousel.innerHTML = artists.length
    ? artists.map((t, i) => artistCardHtml(t, i)).join('')
    : `<div class="empty-state">Ascolta qualcosa per vedere gli artisti suggeriti</div>`;
  wireArtistCarousel(artistCarousel, artists);

  loadSuggestedAlbums();
  applyStagger(el);
  refreshNowPlayingHighlight();
}

async function loadSuggestedAlbums() {
  const carousel = $('#suggestedCarousel');
  if (!carousel) return;
  if (!db.apiKey) {
    carousel.innerHTML = `<div class="empty-state">Aggiungi una chiave YouTube API nelle Impostazioni per vedere consigli</div>`;
    return;
  }
  if (!suggestedAlbumsCache) {
    const seedArtist = db.recentTracks[0] ? db.recentTracks[0].artist : 'top hits 2026';
    suggestedAlbumsCache = await ytSearch(seedArtist, 10);
  }
  if (!$('#suggestedCarousel')) return; // user navigated away while awaiting
  carousel.innerHTML = suggestedAlbumsCache.length
    ? suggestedAlbumsCache.map((t, i) => trackCardHtml(t, i)).join('')
    : `<div class="empty-state">Nessun consiglio disponibile</div>`;
  wireCardCarousel(carousel, suggestedAlbumsCache);
  applyStagger(carousel);
  refreshNowPlayingHighlight();
}

function quickTileHtml(item, idx) {
  if (item.type === 'liked') {
    return `<button type="button" class="quick-tile" data-quick-idx="${idx}" data-quick-type="liked">
      <div class="liked-cover-tile" style="width:56px;height:56px;flex-shrink:0"><span class="ic">${ICONS.heart(true)}</span></div>
      <span class="quick-tile-title">Brani che ti piacciono</span>
    </button>`;
  }
  if (item.type === 'playlist') {
    return `<button type="button" class="quick-tile" data-quick-idx="${idx}" data-quick-type="playlist">
      <div class="quick-tile-img" style="display:flex;align-items:center;justify-content:center;background:var(--surface-1)"><span class="ic" style="width:24px;height:24px;color:var(--text-secondary)">${ICONS.library(false)}</span></div>
      <span class="quick-tile-title">${escapeHtml(item.playlist.name)}</span>
    </button>`;
  }
  return `<button type="button" class="quick-tile" data-quick-idx="${idx}" data-quick-type="track" data-track-id="${item.track.id}">
    <img class="quick-tile-img" src="${item.track.thumb}" alt="" />
    <span class="quick-tile-title">${escapeHtml(item.track.title)}</span>
  </button>`;
}

function wireQuickGrid(grid) {
  $$('.quick-tile', grid).forEach((btn) => {
    const type = btn.dataset.quickType;
    if (type === 'liked') { btn.addEventListener('click', () => playQueue(db.liked, 0)); }
    else if (type === 'playlist') { btn.addEventListener('click', () => goTo('library')); }
    else if (type === 'track') {
      btn.addEventListener('click', () => {
        const title = btn.querySelector('.quick-tile-title').textContent;
        const idx = db.recentTracks.findIndex((t) => t.title === title);
        if (idx >= 0) playQueue(db.recentTracks, idx);
      });
    }
  });
}

function trackCardHtml(t) {
  return `<button type="button" class="card" data-track-id="${t.id}">
    <div class="card-img-wrap"><img src="${t.thumb}" alt="" loading="lazy" /></div>
    <div class="card-body">
      <div class="card-title">${escapeHtml(t.title)}</div>
      <div class="card-sub">${escapeHtml(t.artist)}</div>
    </div>
  </button>`;
}
function artistCardHtml(t) {
  return `<button type="button" class="card artist-card" data-track-id="${t.id}">
    <div class="card-img-wrap"><img src="${t.thumb}" alt="" loading="lazy" /></div>
    <div class="card-body">
      <div class="card-title">${escapeHtml(t.artist)}</div>
      <div class="card-sub">Artista</div>
    </div>
  </button>`;
}
function wireCardCarousel(carousel, list) {
  $$('.card', carousel).forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.trackId;
      const idx = list.findIndex((t) => t.id === id);
      if (idx >= 0) playQueue(list, idx);
    });
  });
}
function wireArtistCarousel(carousel, list) {
  $$('.card', carousel).forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.dataset.trackId;
      const idx = list.findIndex((t) => t.id === id);
      if (idx >= 0) playQueue(list, idx);
    });
  });
}

// Only dynamically-loaded content (search results, recommendation carousels)
// gets a cascading reveal — the category grid is a static, always-identical
// list, so staggering it just makes the "Cerca" tab feel slow to render
// every single time you open it, with the last tiles waiting ~400ms+ to
// even start appearing.
function applyStagger(root) {
  $$('.card', root).forEach((el, i) => {
    el.style.animationDelay = Math.min(i * 30, 420) + 'ms';
  });
}

/* =========================================================
   Search view
   ========================================================= */
const CATEGORIES = [
  { name: 'Pop', color: '#8D67AB', icon: 'star' },
  { name: 'Rock', color: '#E8115B', icon: 'lightning' },
  { name: 'Rap', color: '#BC5900', icon: 'mic' },
  { name: 'Podcast', color: '#4D8B99', icon: 'headphones' },
  { name: 'Live', color: '#1E3264', icon: 'broadcast' },
  { name: 'Indie', color: '#608108', icon: 'vinyl' },
  { name: 'Top Italia', color: '#8C1932', icon: 'trophy' },
  { name: 'Nuove uscite', color: '#503750', icon: 'sparkle' },
];

function renderSearch() {
  const el = $('#view-search');
  el.innerHTML = `
    <div id="exploreSection">
      <div class="section-title" style="margin-top:4px">Esplora tutto</div>
      <div class="cat-grid" id="catGrid"></div>
    </div>
    <div id="searchResults"></div>
  `;
  $('#catGrid').innerHTML = CATEGORIES.map((c, i) => `
    <button type="button" class="cat-tile" style="background:${c.color}" data-cat="${escapeHtml(c.name)}">
      <span class="cat-tile-name">${escapeHtml(c.name)}</span>
      <span class="cat-tile-note ic" style="color:rgba(255,255,255,.55)">${ICONS[c.icon]}</span>
    </button>`).join('');
  $$('#catGrid .cat-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      $('#searchInput').value = tile.dataset.cat; // reflect the chosen category in the box
      runSearch(tile.dataset.cat);
    });
  });
  applyStagger(el);
}

let searchDebounce = null;
function setupSearchInput() {
  setIcon($('.search-ic'), ICONS.search(false));
  const input = $('#searchInput');
  input.addEventListener('input', () => {
    clearTimeout(searchDebounce);
    hideSearchHistoryDropdown();
    const q = input.value.trim();
    if (!q) { $('#searchResults').innerHTML = ''; $('#exploreSection').classList.remove('hidden'); return; }
    searchDebounce = setTimeout(() => runSearch(q), 400);
  });
}

async function runSearch(query) {
  // Deliberately does NOT write query back into #searchInput — it used to,
  // unconditionally, which was a real bug: the debounced call below passes
  // input.value.trim() straight from what the user is actively typing, and
  // writing that trimmed value back into the input a moment later would
  // silently delete a trailing space the user had already typed while
  // pausing before the next word, corrupting "hello world" into
  // "helloworld" as they kept going. Callers that genuinely need the box
  // to reflect a programmatically-chosen query (category tile, voice
  // search) set #searchInput.value themselves before calling this.
  $('#exploreSection').classList.add('hidden');
  const results = $('#searchResults');
  results.innerHTML = `<div class="empty-state">Ricerca in corso...</div>`;
  const tracks = await ytSearch(query, 20);
  if (!$('#searchResults')) return;
  if (!tracks.length) {
    results.innerHTML = `<div class="empty-state">Nessun risultato per "${escapeHtml(query)}"</div>`;
    return;
  }
  results.innerHTML = tracks.map((t) => trackRowHtml(t)).join('');
  wireTrackRows(results, tracks);
  refreshNowPlayingHighlight();
}

function trackRowHtml(t) {
  const liked = db.liked.some((x) => x.id === t.id);
  const downloaded = isOffline(t.id);
  const downloading = downloadingIds.has(t.id);
  return `<div class="track-row" data-track-id="${t.id}">
    <img class="track-row-img" src="${t.thumb}" alt="" loading="lazy" />
    <div class="track-row-meta">
      <div class="track-row-title">${escapeHtml(t.title)}</div>
      <div class="track-row-artist">${escapeHtml(t.artist)}</div>
    </div>
    <button type="button" class="icon-btn track-row-download ${downloaded ? 'downloaded' : ''} ${downloading ? 'downloading' : ''}" data-dl-id="${t.id}" aria-label="${downloaded ? 'Rimuovi download' : 'Scarica per l’ascolto offline'}" style="${downloaded ? 'color:var(--accent)' : ''}">
      <span class="ic">${downloading ? ICONS.spinner : downloaded ? ICONS.check : ICONS.download}</span>
    </button>
    <button type="button" class="icon-btn track-row-queue" data-queue-id="${t.id}" aria-label="Aggiungi alla coda">
      <span class="ic">${ICONS.plus}</span>
    </button>
    <button type="button" class="icon-btn track-row-addpl" data-addpl-id="${t.id}" aria-label="Aggiungi a playlist">
      <span class="ic">${ICONS.playlistAdd}</span>
    </button>
    <button type="button" class="icon-btn track-row-like ${liked ? 'liked' : ''}" data-like-id="${t.id}" aria-label="Mi piace" style="${liked ? 'color:var(--accent)' : ''}">
      <span class="ic">${ICONS.heart(liked)}</span>
    </button>
  </div>`;
}
function wireTrackRows(container, list, opts) {
  const addToPlaylistList = (opts && opts.offlinePlaylists) ? db.offlinePlaylists : null;
  $$('.track-row', container).forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.track-row-like') || e.target.closest('.track-row-queue') || e.target.closest('.track-row-addpl') || e.target.closest('.track-row-download')) return;
      const id = row.dataset.trackId;
      const idx = list.findIndex((t) => t.id === id);
      if (idx >= 0) playQueue(list, idx);
    });
  });
  $$('.track-row-like', container).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const t = list.find((x) => x.id === btn.dataset.likeId);
      if (t) toggleLike(t, btn);
    });
  });
  $$('.track-row-download', container).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const t = list.find((x) => x.id === btn.dataset.dlId);
      if (t) downloadTrackOffline(t);
    });
  });
  $$('.track-row-queue', container).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const t = list.find((x) => x.id === btn.dataset.queueId);
      if (t) addToQueue(t);
    });
  });
  $$('.track-row-addpl', container).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const t = list.find((x) => x.id === btn.dataset.addplId);
      if (!t) return;
      if (addToPlaylistList) openAddToPlaylistModal(t, addToPlaylistList, 'Aggiungi a playlist offline');
      else openAddToPlaylistModal(t);
    });
  });
}

// Appends a single track right after the one currently playing, without
// interrupting or replacing the rest of the queue — distinct from
// playQueue(), which starts a whole new queue from scratch.
function addToQueue(track) {
  if (!currentTrack()) { playQueue([track], 0); return; }
  player.queue.splice(player.currentIndex + 1, 0, track);
  showToast('Aggiunto alla coda');
}

/* =========================================================
   Voice search
   ========================================================= */
function setupVoiceSearch() {
  const btn = $('#voiceSearchBtn');
  setIcon(btn, ICONS.mic);
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    btn.addEventListener('click', () => showToast('Ricerca vocale non supportata su questo browser'));
    return;
  }
  const recognition = new SR();
  recognition.lang = 'it-IT';
  recognition.interimResults = false;
  let listening = false;
  btn.addEventListener('click', () => {
    if (listening) { recognition.stop(); return; }
    try { recognition.start(); } catch (e) { /* already running */ }
  });
  recognition.addEventListener('start', () => { listening = true; $('#voiceWave').classList.remove('hidden'); });
  recognition.addEventListener('end', () => { listening = false; $('#voiceWave').classList.add('hidden'); });
  recognition.addEventListener('result', (e) => {
    const text = e.results[0][0].transcript;
    $('#searchInput').value = text; // reflect the transcribed query in the box
    runSearch(text);
  });
  recognition.addEventListener('error', () => { showToast('Non ho capito, riprova'); });
}

/* =========================================================
   Library view
   ========================================================= */
function renderLibrary() {
  const el = $('#view-library');
  const filter = db.libraryFilter;
  const layout = db.libraryLayout;
  const rows = [];
  if (filter === 'all' || filter === 'playlists') {
    if (db.liked.length) rows.push({ type: 'liked' });
    db.playlists.forEach((p) => rows.push({ type: 'playlist', playlist: p }));
  }
  if (filter === 'all' || filter === 'offline') {
    rows.push({ type: 'offline' });
  }
  let artistRows = [];
  if (filter === 'all' || filter === 'artists') {
    artistRows = db.savedArtists.map((a) => ({ type: 'artist', artist: a }));
  }
  const all = rows.concat(artistRows);
  if (!all.length) {
    el.innerHTML = `<div class="empty-state"><div class="empty-state-title">La tua libreria è vuota</div>Cerca e ascolta brani per iniziare a salvarli qui.</div>`;
  } else if (layout === 'grid') {
    el.innerHTML = `<div class="lib-grid">${all.map((r) => libGridItemHtml(r)).join('')}</div>`;
  } else {
    el.innerHTML = `<div class="lib-list">${all.map((r) => libRowHtml(r)).join('')}</div>`;
  }
  wireLibraryItems(el, all);
  refreshNowPlayingHighlight();
}

function libRowHtml(r) {
  if (r.type === 'liked') {
    return `<button type="button" class="lib-row" data-lib-type="liked">
      <div class="lib-row-img liked-cover-tile"><span class="ic" style="width:22px;height:22px">${ICONS.heart(true)}</span></div>
      <div><div class="lib-row-title">Brani che ti piacciono</div><div class="lib-row-sub">${db.liked.length} brani</div></div>
    </button>`;
  }
  if (r.type === 'offline') {
    return `<button type="button" class="lib-row" data-lib-type="offline">
      <div class="lib-row-img offline-cover-tile"><span class="ic" style="width:20px;height:20px">${ICONS.download}</span></div>
      <div><div class="lib-row-title">Offline</div><div class="lib-row-sub">${db.offlineTracks.length} brani scaricati</div></div>
    </button>`;
  }
  if (r.type === 'playlist') {
    const cover = r.playlist.coverDataUrl
      ? `<img class="lib-row-img" src="${r.playlist.coverDataUrl}" alt="" />`
      : `<div class="lib-row-img" style="display:flex;align-items:center;justify-content:center;background:var(--surface-2)"><span class="ic" style="color:var(--text-secondary)">${ICONS.library(false)}</span></div>`;
    return `<button type="button" class="lib-row" data-lib-type="playlist" data-playlist-id="${r.playlist.id}">
      ${cover}
      <div><div class="lib-row-title">${escapeHtml(r.playlist.name)}</div><div class="lib-row-sub">Playlist · ${r.playlist.trackIds.length} brani</div></div>
    </button>`;
  }
  return `<button type="button" class="lib-row" data-lib-type="artist" data-artist-name="${escapeHtml(r.artist.name)}">
    <img class="lib-row-img" style="border-radius:50%" src="${r.artist.thumb}" alt="" />
    <div><div class="lib-row-title">${escapeHtml(r.artist.name)}</div><div class="lib-row-sub">Artista</div></div>
  </button>`;
}
function libGridItemHtml(r) {
  if (r.type === 'liked') {
    return `<button type="button" class="card" data-lib-type="liked" style="animation:none;opacity:1">
      <div class="card-img-wrap liked-cover-tile"><span class="ic" style="width:40%;height:40%">${ICONS.heart(true)}</span></div>
      <div class="card-body"><div class="card-title">Brani che ti piacciono</div><div class="card-sub">${db.liked.length} brani</div></div>
    </button>`;
  }
  if (r.type === 'offline') {
    return `<button type="button" class="card" data-lib-type="offline" style="animation:none;opacity:1">
      <div class="card-img-wrap offline-cover-tile"><span class="ic" style="width:36%;height:36%">${ICONS.download}</span></div>
      <div class="card-body"><div class="card-title">Offline</div><div class="card-sub">${db.offlineTracks.length} brani</div></div>
    </button>`;
  }
  if (r.type === 'playlist') {
    const cover = r.playlist.coverDataUrl
      ? `<img src="${r.playlist.coverDataUrl}" alt="" />`
      : `<span class="ic" style="color:var(--text-secondary)">${ICONS.library(false)}</span>`;
    return `<button type="button" class="card" data-lib-type="playlist" data-playlist-id="${r.playlist.id}" style="animation:none;opacity:1">
      <div class="card-img-wrap" style="display:flex;align-items:center;justify-content:center">${cover}</div>
      <div class="card-body"><div class="card-title">${escapeHtml(r.playlist.name)}</div><div class="card-sub">Playlist</div></div>
    </button>`;
  }
  return `<button type="button" class="card artist-card" data-lib-type="artist" data-artist-name="${escapeHtml(r.artist.name)}" style="animation:none;opacity:1">
    <div class="card-img-wrap"><img src="${r.artist.thumb}" alt="" /></div>
    <div class="card-body"><div class="card-title">${escapeHtml(r.artist.name)}</div><div class="card-sub">Artista</div></div>
  </button>`;
}
function wireLibraryItems(root, all) {
  $$('[data-lib-type="liked"]', root).forEach((el) => el.addEventListener('click', () => openPlaylistDetail('liked')));
  $$('[data-lib-type="offline"]', root).forEach((el) => el.addEventListener('click', () => openPlaylistDetail('offline')));
  $$('[data-lib-type="artist"]', root).forEach((el) => el.addEventListener('click', () => openArtistDetail(el.dataset.artistName)));
  $$('[data-lib-type="playlist"]', root).forEach((el) => el.addEventListener('click', () => openPlaylistDetail('playlist', el.dataset.playlistId)));
}
function findKnownTrack(id) {
  return db.liked.find((t) => t.id === id) || db.recentTracks.find((t) => t.id === id) || db.offlineTracks.find((t) => t.id === id) || null;
}

/* Generic swipe-down-to-dismiss for the shared .modal bottom-sheet
   component, bound to whichever modal is currently open — mirrors the full
   player's own pointer-based drag-to-dismiss (see setupFullPlayerDismiss)
   so every sheet in the app can be swiped away, not just the full player.
   Guards against starting a drag when the touch actually landed on a
   button inside the head (e.g. the close "X"): capturing the pointer on
   an ancestor while a descendant button is mid-tap can eat that button's
   click in some engines — the same class of bug fixed for the full
   player's own drag handle. */
function enableModalSwipeDismiss(closeFn) {
  const modal = $('.modal-overlay .modal');
  const handle = $('.modal-overlay .modal-head');
  if (!modal || !handle) return;
  let startY = 0, lastY = 0, lastT = 0, velocity = 0, dragging = false, pointerId = null;
  handle.style.touchAction = 'none';
  function onDown(e) {
    if (e.target.closest('button')) return;
    dragging = true; pointerId = e.pointerId;
    startY = lastY = e.clientY; lastT = performance.now(); velocity = 0;
    modal.style.transition = 'none';
    handle.setPointerCapture(e.pointerId);
  }
  function onMove(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    const dy = e.clientY - startY;
    if (dy > 0) modal.style.transform = `translateY(${dy}px)`;
    const now = performance.now();
    const dt = now - lastT || 16;
    velocity = (e.clientY - lastY) / dt;
    lastY = e.clientY; lastT = now;
  }
  function settle(shouldClose) {
    modal.style.transition = shouldClose
      ? 'transform 0.22s cubic-bezier(0.32, 0.72, 0, 1)'
      : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    if (shouldClose) {
      modal.style.transform = 'translateY(100%)';
      setTimeout(closeFn, 220);
    } else {
      modal.style.transform = '';
    }
  }
  function onUp() {
    if (!dragging) return;
    dragging = false;
    const dy = lastY - startY;
    settle(dy > 100 || (velocity > 0.5 && dy > 20));
  }
  function onCancel() { if (!dragging) return; dragging = false; settle(false); }
  handle.addEventListener('pointerdown', onDown);
  handle.addEventListener('pointermove', onMove);
  handle.addEventListener('pointerup', onUp);
  handle.addEventListener('pointercancel', onCancel);
  handle.addEventListener('lostpointercapture', onCancel);
}

/* =========================================================
   Playlist detail — view/select/play tracks in order or shuffled;
   user-created playlists (not Liked Songs) can be renamed and given a
   custom cover photo.
   ========================================================= */
function openPlaylistDetail(kind, playlistId) {
  const isLiked = kind === 'liked';
  const isOfflineKind = kind === 'offline';
  const isOfflinePlaylistKind = kind === 'offlinePlaylist';
  const isRealPlaylist = kind === 'playlist' || isOfflinePlaylistKind;
  const sourceList = isOfflinePlaylistKind ? db.offlinePlaylists : db.playlists;
  const pl = isRealPlaylist ? sourceList.find((p) => p.id === playlistId) : null;
  if (isRealPlaylist && !pl) return;
  const name = isOfflineKind ? 'Offline' : isLiked ? 'Brani che ti piacciono' : pl.name;
  const tracks = isOfflineKind ? db.offlineTracks : isLiked ? db.liked : pl.trackIds.map((id) => findKnownTrack(id)).filter(Boolean);
  const isEditable = isRealPlaylist; // rename/cover — not for Liked or the Offline root folder itself

  function coverHtml() {
    if (isOfflineKind) return `<div class="pl-detail-cover offline-cover-tile"><span class="ic" style="width:40%;height:40%">${ICONS.download}</span></div>`;
    if (isLiked) return `<div class="pl-detail-cover liked-cover-tile"><span class="ic" style="width:40%;height:40%">${ICONS.heart(true)}</span></div>`;
    if (pl.coverDataUrl) return `<div class="pl-detail-cover"><img src="${pl.coverDataUrl}" alt="" /></div>`;
    return `<div class="pl-detail-cover" style="display:flex;align-items:center;justify-content:center;background:var(--surface-2)"><span class="ic" style="color:var(--text-secondary)">${ICONS.library(false)}</span></div>`;
  }

  // The Offline root folder additionally surfaces its own, separate set of
  // playlists (built only from downloaded tracks) — kept out of the main
  // "Playlist" library list on purpose, since the request was specifically
  // for playlists scoped to this section rather than more general ones.
  function offlinePlaylistsSectionHtml() {
    if (!isOfflineKind) return '';
    const rows = db.offlinePlaylists.map((p) => `
      <button type="button" class="lib-row" data-offline-pl-id="${p.id}">
        ${p.coverDataUrl ? `<img class="lib-row-img" src="${p.coverDataUrl}" alt="" />` : `<div class="lib-row-img" style="display:flex;align-items:center;justify-content:center;background:var(--surface-2)"><span class="ic" style="color:var(--text-secondary)">${ICONS.library(false)}</span></div>`}
        <div><div class="lib-row-title">${escapeHtml(p.name)}</div><div class="lib-row-sub">${p.trackIds.length} brani</div></div>
      </button>`).join('');
    return `<div class="pl-detail-section-title">Le tue playlist offline</div>
      <div class="lib-list" id="offlinePlaylistsList" style="margin-bottom:14px">${rows}</div>
      <button type="button" class="pill-btn" id="offlineNewPlBtn" style="margin-bottom:16px"><span class="ic"></span><span>Crea playlist offline</span></button>`;
  }

  $('#modalRoot').innerHTML = `
    <div class="modal-overlay" id="plDetailOverlay">
      <div class="modal pl-detail-modal">
        <div class="modal-head">
          <span class="modal-title">${isOfflineKind ? 'Offline' : isLiked ? 'Playlist' : 'Modifica playlist'}</span>
          <div style="display:flex;align-items:center;gap:2px">
            ${isRealPlaylist ? `<button type="button" class="icon-btn" id="plDeleteBtn" aria-label="Elimina playlist"><span class="ic">${ICONS.trash}</span></button>` : ''}
            <button type="button" class="icon-btn" id="plDetailCloseBtn"><span class="ic">${ICONS.close}</span></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="pl-detail-hero">
            <div class="pl-detail-cover-wrap" id="plCoverWrap">${coverHtml()}</div>
            <div class="pl-detail-name" id="plDetailName" ${isEditable ? 'contenteditable="true"' : ''}>${escapeHtml(name)}</div>
            <div class="pl-detail-count">${tracks.length} brani</div>
            ${isEditable ? '<input type="file" accept="image/*" id="plCoverInput" class="hidden" />' : ''}
          </div>
          <div class="pl-detail-actions">
            <button type="button" class="modal-btn" id="plPlayBtn" style="width:auto;flex:1">Riproduci</button>
            <button type="button" class="pill-btn" id="plShuffleBtn"><span class="ic"></span><span>Casuale</span></button>
          </div>
          ${offlinePlaylistsSectionHtml()}
          <div id="plDetailBody">${tracks.length ? tracks.map((t) => trackRowHtml(t)).join('') : `<div class="empty-state">${isOfflineKind ? 'Nessun brano scaricato ancora — tocca l’icona di download su un brano per salvarlo qui.' : 'Nessun brano qui'}</div>`}</div>
        </div>
      </div>
    </div>`;
  setIcon($('#plDetailCloseBtn'), ICONS.close);
  setIcon($('#plShuffleBtn'), ICONS.shuffle);
  wireTrackRows($('#plDetailBody'), tracks, isOfflineKind ? { offlinePlaylists: true } : undefined);

  const close = () => { $('#modalRoot').innerHTML = ''; };
  $('#plDetailOverlay').addEventListener('click', (e) => { if (e.target.id === 'plDetailOverlay') close(); });
  $('#plDetailCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);
  refreshNowPlayingHighlight();

  if (isRealPlaylist) {
    $('#plDeleteBtn').addEventListener('click', () => {
      if (!confirm(`Eliminare la playlist "${pl.name}"? I brani non verranno rimossi dagli altri elenchi.`)) return;
      const idx = sourceList.findIndex((p) => p.id === pl.id);
      if (idx >= 0) sourceList.splice(idx, 1);
      saveDB();
      close();
      showToast('Playlist eliminata');
      if (currentRoute === 'library') renderLibrary();
      if (isOfflinePlaylistKind) openPlaylistDetail('offline'); // back to the offline folder, list refreshed
    });
  }

  if (isOfflineKind) {
    setIcon($('#offlineNewPlBtn'), ICONS.plus);
    $('#offlineNewPlBtn').addEventListener('click', () => {
      openCreatePlaylistModal(() => openPlaylistDetail('offline'), db.offlinePlaylists, 'Nuova playlist offline');
    });
    $$('[data-offline-pl-id]', $('#modalRoot')).forEach((row) => {
      row.addEventListener('click', () => openPlaylistDetail('offlinePlaylist', row.dataset.offlinePlId));
    });
  }

  // Deliberately does NOT close the sheet after starting playback (past
  // behavior did, which the user reported as jarring — they'd rather stay
  // in the playlist and see, in place, which track just started via the
  // now-playing highlight applied above/below, same as everywhere else in
  // the app) — dismissing is still always available via the X button, tap
  // outside, or the swipe-down gesture just wired in.
  $('#plPlayBtn').addEventListener('click', () => {
    if (!tracks.length) { showToast(isOfflineKind ? 'Nessun brano scaricato' : 'Playlist vuota'); return; }
    player.shuffle = false;
    playQueue(tracks, 0); // updatePlayerUI() (called from playIndex) refreshes the highlight
  });
  $('#plShuffleBtn').addEventListener('click', () => {
    if (!tracks.length) { showToast(isOfflineKind ? 'Nessun brano scaricato' : 'Playlist vuota'); return; }
    player.shuffle = true;
    $$('.fp-shuffle-btn, .np-shuffle-btn').forEach((btn) => btn.classList.add('active'));
    playQueue(tracks, Math.floor(Math.random() * tracks.length));
  });

  if (isEditable) {
    $('#plCoverWrap').addEventListener('click', () => $('#plCoverInput').click());
    $('#plCoverInput').addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        pl.coverDataUrl = await resizeImageFile(file, 300);
        saveDB();
        $('#plCoverWrap').innerHTML = coverHtml();
        if (currentRoute === 'library') renderLibrary();
      } catch (err) {
        showToast('Immagine non valida');
      }
    });
    const nameEl = $('#plDetailName');
    nameEl.addEventListener('blur', () => {
      const newName = nameEl.textContent.trim();
      if (newName && newName !== pl.name) {
        pl.name = newName;
        saveDB();
        if (currentRoute === 'library') renderLibrary();
      } else {
        nameEl.textContent = pl.name;
      }
    });
    nameEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); nameEl.blur(); }
    });
  }
}

function setupLibraryHeader() {
  $$('.chip', $('#libraryChips')).forEach((chip) => {
    chip.addEventListener('click', () => {
      $$('.chip', $('#libraryChips')).forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      db.libraryFilter = chip.dataset.filter;
      renderLibrary();
    });
  });
  const layoutBtn = $('#libraryLayoutBtn');
  const refreshLayoutIcon = () => setIcon(layoutBtn, db.libraryLayout === 'list' ? ICONS.grid : ICONS.list);
  refreshLayoutIcon();
  layoutBtn.addEventListener('click', () => {
    db.libraryLayout = db.libraryLayout === 'list' ? 'grid' : 'list';
    saveDB();
    refreshLayoutIcon();
    renderLibrary();
  });
  setIcon($('#libraryAddBtn'), ICONS.plus);
  $('#libraryAddBtn').addEventListener('click', () => openCreatePlaylistModal());
}

/* =========================================================
   Like / heart with particle burst
   ========================================================= */
const likeLockedIds = new Set();
function toggleLike(track, sourceBtn) {
  if (likeLockedIds.has(track.id)) return;
  likeLockedIds.add(track.id);
  setTimeout(() => likeLockedIds.delete(track.id), 200);
  const idx = db.liked.findIndex((t) => t.id === track.id);
  const wasLiked = idx >= 0;
  if (wasLiked) db.liked.splice(idx, 1); else db.liked.unshift(track);
  saveDB();
  showToast(wasLiked ? 'Rimosso dai preferiti' : 'Aggiunto ai preferiti');
  refreshTrackLikeUI(track.id);
  if (!wasLiked && sourceBtn) spawnHeartBurst(sourceBtn);
}
function isLiked(id) { return db.liked.some((t) => t.id === id); }
function refreshTrackLikeUI(id) {
  const liked = isLiked(id);
  $$(`[data-like-id="${CSS.escape(id)}"]`).forEach((btn) => {
    setIcon(btn.querySelector('.ic') || btn, ICONS.heart(liked));
    btn.classList.toggle('liked', liked);
    btn.style.color = liked ? 'var(--accent)' : '';
  });
  const t = currentTrack();
  if (t && t.id === id) {
    [$('#miniLikeBtn'), $('#fpLikeBtn')].forEach((btn) => {
      if (!btn) return;
      setIcon(btn, ICONS.heart(liked));
      btn.classList.toggle('liked', liked);
    });
  }
}

/* =========================================================
   Saved artists — the library's "Artisti" section only ever shows
   artists explicitly saved here, not every artist that happens to
   appear in recent/liked tracks (that used to make the list noisy and
   gave no way to curate it). Reachable by tapping the artist name in
   the full player.
   ========================================================= */
function isArtistSaved(name) { return db.savedArtists.some((a) => a.name === name); }
function toggleSaveArtist(name, thumb) {
  const idx = db.savedArtists.findIndex((a) => a.name === name);
  const wasSaved = idx >= 0;
  if (wasSaved) db.savedArtists.splice(idx, 1);
  else db.savedArtists.unshift({ name, thumb });
  saveDB();
  showToast(wasSaved ? 'Artista rimosso dai salvati' : 'Artista salvato');
  if (currentRoute === 'library') renderLibrary();
  return !wasSaved;
}
function openArtistDetail(name) {
  if (!name) return;
  const tracks = [];
  const seen = new Set();
  db.recentTracks.concat(db.liked, db.offlineTracks).forEach((t) => {
    if (t.artist === name && !seen.has(t.id)) { seen.add(t.id); tracks.push(t); }
  });
  const saved = db.savedArtists.find((a) => a.name === name);
  const thumb = (saved && saved.thumb) || (tracks[0] && tracks[0].thumb) || '';

  $('#modalRoot').innerHTML = `
    <div class="modal-overlay" id="artistDetailOverlay">
      <div class="modal pl-detail-modal">
        <div class="modal-head">
          <span class="modal-title">Artista</span>
          <div style="display:flex;align-items:center;gap:2px">
            <button type="button" class="icon-btn" id="artistSaveBtn" aria-label="Salva artista"><span class="ic"></span></button>
            <button type="button" class="icon-btn" id="artistDetailCloseBtn"><span class="ic">${ICONS.close}</span></button>
          </div>
        </div>
        <div class="modal-body">
          <div class="pl-detail-hero">
            <div class="pl-detail-cover-wrap" style="border-radius:50%;overflow:hidden">${thumb ? `<img src="${thumb}" alt="" style="width:100%;height:100%;object-fit:cover" />` : `<div class="pl-detail-cover" style="display:flex;align-items:center;justify-content:center;background:var(--surface-2)"><span class="ic" style="color:var(--text-secondary)">${ICONS.account}</span></div>`}</div>
            <div class="pl-detail-name">${escapeHtml(name)}</div>
            <div class="pl-detail-count">${tracks.length} brani</div>
          </div>
          <div class="pl-detail-actions">
            <button type="button" class="modal-btn" id="artistPlayBtn" style="width:auto;flex:1">Riproduci</button>
            <button type="button" class="pill-btn" id="artistShuffleBtn"><span class="ic"></span><span>Casuale</span></button>
          </div>
          <div id="artistDetailBody">${tracks.length ? tracks.map((t) => trackRowHtml(t)).join('') : '<div class="empty-state">Nessun brano conosciuto di questo artista — ascoltane qualcuno per vederlo qui.</div>'}</div>
        </div>
      </div>
    </div>`;
  const refreshSaveIcon = () => {
    const isSaved = isArtistSaved(name);
    setIcon($('#artistSaveBtn'), isSaved ? ICONS.star : ICONS.starOutline);
    $('#artistSaveBtn').style.color = isSaved ? 'var(--accent)' : '';
    $('#artistSaveBtn').setAttribute('aria-label', isSaved ? 'Rimuovi dai salvati' : 'Salva artista');
  };
  refreshSaveIcon();
  setIcon($('#artistDetailCloseBtn'), ICONS.close);
  setIcon($('#artistShuffleBtn'), ICONS.shuffle);
  wireTrackRows($('#artistDetailBody'), tracks);

  const close = () => { $('#modalRoot').innerHTML = ''; };
  $('#artistDetailOverlay').addEventListener('click', (e) => { if (e.target.id === 'artistDetailOverlay') close(); });
  $('#artistDetailCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);
  refreshNowPlayingHighlight();

  $('#artistSaveBtn').addEventListener('click', () => { toggleSaveArtist(name, thumb); refreshSaveIcon(); });
  $('#artistPlayBtn').addEventListener('click', () => {
    if (!tracks.length) { showToast('Nessun brano di questo artista'); return; }
    player.shuffle = false;
    playQueue(tracks, 0);
  });
  $('#artistShuffleBtn').addEventListener('click', () => {
    if (!tracks.length) { showToast('Nessun brano di questo artista'); return; }
    player.shuffle = true;
    $$('.fp-shuffle-btn, .np-shuffle-btn').forEach((btn) => btn.classList.add('active'));
    playQueue(tracks, Math.floor(Math.random() * tracks.length));
  });
}
function spawnHeartBurst(sourceEl) {
  const rect = sourceEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const root = document.body;
  for (let i = 0; i < 8; i++) {
    const angle = (Math.PI * 2 * i) / 8;
    const dist = 26 + Math.random() * 10;
    const span = document.createElement('span');
    span.className = 'heart-burst-particle';
    span.style.left = cx + 'px';
    span.style.top = cy + 'px';
    span.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    span.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    root.appendChild(span);
    setTimeout(() => span.remove(), 600);
  }
}

/* =========================================================
   Playlist creation
   ========================================================= */
// onCreated(playlist) lets a caller (e.g. the add-to-playlist modal) chain
// straight into "create a playlist, then add the pending track to it"
// without duplicating the create-playlist UI.
function openCreatePlaylistModal(onCreated, targetList, titleText) {
  const list = targetList || db.playlists;
  const root = $('#modalRoot');
  root.innerHTML = `
    <div class="modal-overlay" id="createPlModalOverlay">
      <div class="modal">
        <div class="modal-head"><span class="modal-title">${titleText || 'Nuova playlist'}</span>
          <button type="button" class="icon-btn" id="createPlCloseBtn"><span class="ic">${ICONS.close}</span></button>
        </div>
        <div class="modal-body">
          <input type="text" class="modal-field" id="newPlaylistName" placeholder="Nome della playlist" />
          <button type="button" class="modal-btn" id="createPlConfirmBtn">Crea</button>
        </div>
      </div>
    </div>`;
  setIcon($('#createPlCloseBtn'), ICONS.close);
  const close = () => { root.innerHTML = ''; };
  $('#createPlModalOverlay').addEventListener('click', (e) => { if (e.target.id === 'createPlModalOverlay') close(); });
  $('#createPlCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);
  $('#createPlConfirmBtn').addEventListener('click', () => {
    const name = $('#newPlaylistName').value.trim();
    if (!name) { showToast('Dai un nome alla playlist'); return; }
    const playlist = { id: 'pl_' + Date.now(), name, trackIds: [], coverDataUrl: null };
    list.push(playlist);
    saveDB();
    close();
    showToast('Playlist creata');
    if (currentRoute === 'library') renderLibrary();
    if (onCreated) onCreated(playlist);
  });
}

/* =========================================================
   Add-to-playlist — lets a track be added to (or removed from) any number
   of playlists at once, reachable from every track row (search/library/
   queue/playlist-detail) and from the full player for the current track.
   Previously there was no way to populate a playlist at all once created.
   ========================================================= */
function openAddToPlaylistModal(track, targetList, titleText) {
  if (!track) return;
  const list = targetList || db.playlists;
  const root = $('#modalRoot');
  function rowHtml(p) {
    const has = p.trackIds.includes(track.id);
    return `<button type="button" class="atp-row" data-pl-id="${p.id}">
      <div class="atp-row-check ${has ? 'checked' : ''}">${has ? `<span class="ic">${ICONS.check}</span>` : ''}</div>
      <span class="atp-row-name">${escapeHtml(p.name)}</span>
    </button>`;
  }
  root.innerHTML = `
    <div class="modal-overlay" id="atpOverlay">
      <div class="modal">
        <div class="modal-head"><span class="modal-title">${titleText || 'Aggiungi a playlist'}</span>
          <button type="button" class="icon-btn" id="atpCloseBtn"><span class="ic">${ICONS.close}</span></button>
        </div>
        <div class="modal-body">
          <button type="button" class="atp-row atp-new" id="atpNewBtn">
            <div class="atp-row-check atp-new-icon"><span class="ic">${ICONS.plus}</span></div>
            <span class="atp-row-name">Crea nuova playlist</span>
          </button>
          <div id="atpList">${list.length ? list.map(rowHtml).join('') : '<div class="empty-state">Nessuna playlist ancora</div>'}</div>
        </div>
      </div>
    </div>`;
  setIcon($('#atpCloseBtn'), ICONS.close);
  const close = () => { root.innerHTML = ''; };
  $('#atpOverlay').addEventListener('click', (e) => { if (e.target.id === 'atpOverlay') close(); });
  $('#atpCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);

  function wireRows() {
    $$('.atp-row[data-pl-id]', root).forEach((row) => {
      row.addEventListener('click', () => {
        const pl = list.find((p) => p.id === row.dataset.plId);
        if (!pl) return;
        const idx = pl.trackIds.indexOf(track.id);
        const nowHas = idx < 0;
        if (nowHas) pl.trackIds.push(track.id); else pl.trackIds.splice(idx, 1);
        saveDB();
        showToast(nowHas ? `Aggiunto a ${pl.name}` : `Rimosso da ${pl.name}`);
        const check = row.querySelector('.atp-row-check');
        check.classList.toggle('checked', nowHas);
        check.innerHTML = nowHas ? `<span class="ic">${ICONS.check}</span>` : '';
        if (currentRoute === 'library') renderLibrary();
      });
    });
  }
  wireRows();

  $('#atpNewBtn').addEventListener('click', () => {
    openCreatePlaylistModal((playlist) => {
      playlist.trackIds.push(track.id);
      saveDB();
      openAddToPlaylistModal(track, list, titleText);
    }, list, titleText === 'Aggiungi a playlist offline' ? 'Nuova playlist offline' : undefined);
  });
}

/* =========================================================
   Settings modal
   ========================================================= */
function openSettingsModal() {
  const root = $('#modalRoot');
  root.innerHTML = `
    <div class="modal-overlay" id="settingsModalOverlay">
      <div class="modal">
        <div class="modal-head"><span class="modal-title">Impostazioni</span>
          <button type="button" class="icon-btn" id="settingsCloseBtn"><span class="ic">${ICONS.close}</span></button>
        </div>
        <div class="modal-body">
          <div class="settings-section-title">Chiave YouTube API</div>
          <div class="modal-hint">
            Serve per cercare e riprodurre brani: senza una chiave, l'app non può interrogare YouTube. È gratuita (fino a circa 100 ricerche al giorno) e resta salvata solo su questo dispositivo.
            <ol class="modal-hint-steps">
              <li>Vai su <strong>console.cloud.google.com</strong> e crea un progetto (gratuito).</li>
              <li>In "API e servizi" → "Libreria", cerca e abilita <strong>"YouTube Data API v3"</strong>.</li>
              <li>In "Credenziali", crea una <strong>Chiave API</strong> e incollala qui sotto.</li>
            </ol>
          </div>
          <input type="text" class="modal-field" id="apiKeyInput" placeholder="Chiave YouTube API" value="${escapeHtml(db.apiKey)}" />
          <button type="button" class="modal-btn" id="saveApiKeyBtn">Salva</button>

          <div class="settings-section-title settings-section-title-spaced">Qualità audio</div>
          <div class="modal-hint">Scegli tra avvio più rapido o qualità migliore. Puoi cambiarla quando vuoi: il brano in riproduzione non si interrompe, il nuovo valore si applica dal prossimo avvio.</div>
          <div class="chip-row" id="qualityChips">
            <button type="button" class="chip${db.audioBitrate === '64' ? ' active' : ''}" data-bitrate="64">64 kbps · Veloce</button>
            <button type="button" class="chip${db.audioBitrate === '128' ? ' active' : ''}" data-bitrate="128">128 kbps · Qualità migliore</button>
          </div>
          <div class="modal-hint">
            <strong>64 kbps</strong>: il brano parte in circa 2-4 secondi, qualità adatta ad ascolto occasionale/di sottofondo (non hi-fi).<br/>
            <strong>128 kbps</strong>: qualità nettamente migliore, ma l'avvio richiede più tempo (circa 6-7 secondi) perché va scaricato più audio prima di poter partire.
          </div>
        </div>
      </div>
    </div>`;
  setIcon($('#settingsCloseBtn'), ICONS.close);
  const close = () => { root.innerHTML = ''; };
  $('#settingsModalOverlay').addEventListener('click', (e) => { if (e.target.id === 'settingsModalOverlay') close(); });
  $('#settingsCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);
  $('#saveApiKeyBtn').addEventListener('click', () => {
    db.apiKey = $('#apiKeyInput').value.trim();
    saveDB();
    close();
    showToast('Chiave API salvata');
  });
  $$('.chip', $('#qualityChips')).forEach((chip) => {
    chip.addEventListener('click', () => {
      $$('.chip', $('#qualityChips')).forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      db.audioBitrate = chip.dataset.bitrate;
      saveDB();
      showToast(`Qualità audio: ${chip.dataset.bitrate} kbps`);
    });
  });
}

/* =========================================================
   Notifications / History modals
   ========================================================= */
function openNotificationsModal() {
  $('#modalRoot').innerHTML = `
    <div class="modal-overlay" id="notifOverlay">
      <div class="modal">
        <div class="modal-head"><span class="modal-title">Notifiche</span>
          <button type="button" class="icon-btn" id="notifCloseBtn"><span class="ic">${ICONS.close}</span></button>
        </div>
        <div class="modal-body"><div class="empty-state">Nessuna notifica per ora</div></div>
      </div>
    </div>`;
  setIcon($('#notifCloseBtn'), ICONS.close);
  const close = () => { $('#modalRoot').innerHTML = ''; };
  $('#notifOverlay').addEventListener('click', (e) => { if (e.target.id === 'notifOverlay') close(); });
  $('#notifCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);
}
/* =========================================================
   Search history dropdown — shown on tapping the search bar, listing
   recently played tracks (the app's existing "cronologia" concept, just
   relocated here instead of a separate header icon/modal). Deletable per
   item or all at once; simply doesn't open at all if there's no history
   yet, leaving the category grid as the default "what to search" surface.
   ========================================================= */
function renderSearchHistoryDropdown() {
  const list = $('#shdList');
  list.innerHTML = db.recentTracks.map((t) => `
    <div class="shd-row" data-track-id="${t.id}">
      <img class="shd-row-img" src="${t.thumb}" alt="" loading="lazy" />
      <div class="shd-row-meta">
        <div class="shd-row-title">${escapeHtml(t.title)}</div>
        <div class="shd-row-artist">${escapeHtml(t.artist)}</div>
      </div>
      <button type="button" class="icon-btn shd-row-remove" data-remove-id="${t.id}" aria-label="Rimuovi"><span class="ic">${ICONS.close}</span></button>
    </div>`).join('');
  $$('.shd-row', list).forEach((row) => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.shd-row-remove')) return;
      const id = row.dataset.trackId;
      const t = db.recentTracks.find((x) => x.id === id);
      if (t) playQueue(db.recentTracks, db.recentTracks.indexOf(t));
      hideSearchHistoryDropdown();
    });
  });
  $$('.shd-row-remove', list).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      db.recentTracks = db.recentTracks.filter((t) => t.id !== btn.dataset.removeId);
      saveDB();
      if (db.recentTracks.length) renderSearchHistoryDropdown();
      else hideSearchHistoryDropdown();
    });
  });
}
function showSearchHistoryDropdown() {
  if (!db.recentTracks.length) return; // nothing to show — leave the explore section as-is
  renderSearchHistoryDropdown();
  $('#searchHistoryDropdown').classList.remove('hidden');
  // Hides the WHOLE explore section (title + grid) — a past version only
  // hid #catGrid itself, leaving the "Esplora tutto" heading floating
  // visible above/behind the dropdown overlay (real bug: the heading and
  // the dropdown's own "Cronologia" heading ended up visually overlapping).
  $('#exploreSection').classList.add('hidden');
}
function hideSearchHistoryDropdown() {
  $('#searchHistoryDropdown').classList.add('hidden');
  if (!$('#searchInput').value.trim()) $('#exploreSection').classList.remove('hidden');
}
function setupSearchHistoryDropdown() {
  $('#searchInput').addEventListener('focus', showSearchHistoryDropdown);
  $('#shdClearBtn').addEventListener('click', () => {
    db.recentTracks = [];
    saveDB();
    hideSearchHistoryDropdown();
  });
  document.addEventListener('click', (e) => {
    if (!$('#searchHistoryDropdown').classList.contains('hidden') && !e.target.closest('.search-header')) {
      hideSearchHistoryDropdown();
    }
  });
}

/* =========================================================
   Queue modal
   ========================================================= */
function openQueueModal() {
  const upcoming = player.queue.slice(player.currentIndex + 1);
  $('#modalRoot').innerHTML = `
    <div class="modal-overlay" id="queueOverlay">
      <div class="modal">
        <div class="modal-head"><span class="modal-title">Coda</span>
          <button type="button" class="icon-btn" id="queueCloseBtn"><span class="ic">${ICONS.close}</span></button>
        </div>
        <div class="modal-body" id="queueBody">${upcoming.length ? upcoming.map((t) => trackRowHtml(t)).join('') : '<div class="empty-state">Nessun brano in coda</div>'}</div>
      </div>
    </div>`;
  setIcon($('#queueCloseBtn'), ICONS.close);
  $$('.track-row', $('#queueBody')).forEach((row, i) => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.track-row-like')) return;
      playIndex(player.currentIndex + 1 + i);
      $('#modalRoot').innerHTML = '';
    });
  });
  $$('.track-row-like', $('#queueBody')).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const t = upcoming.find((x) => x.id === btn.dataset.likeId);
      if (t) toggleLike(t, btn);
    });
  });
  const close = () => { $('#modalRoot').innerHTML = ''; };
  $('#queueOverlay').addEventListener('click', (e) => { if (e.target.id === 'queueOverlay') close(); });
  $('#queueCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);
  refreshNowPlayingHighlight();
}

/* =========================================================
   Lyrics
   ========================================================= */
const lyricsCache = new Map();
function sanitizeLyricsQueryPart(s) {
  return s
    .replace(/feat\.?.*$/i, '')
    .replace(/official\s*(video|audio|music video|lyric video)?/gi, '')
    .replace(/\b(hd|hq|4k|lyrics?|video ufficiale|testo)\b/gi, '')
    .trim();
}
// YouTube video titles are very often formatted "Artist - Title" — prefer
// splitting on that over track.artist, since track.artist is the YouTube
// channelTitle (e.g. "TheWeekndVEVO"), rarely the clean artist name a
// lyrics API can match.
function parseArtistAndTitleForLyrics(track) {
  const cleaned = track.title.replace(/\(.*?\)|\[.*?\]/g, '').replace(/\s+/g, ' ').trim();
  const dashMatch = cleaned.match(/^(.+?)\s+[-–]\s+(.+)$/);
  if (dashMatch) {
    return { artist: sanitizeLyricsQueryPart(dashMatch[1]), title: sanitizeLyricsQueryPart(dashMatch[2]) };
  }
  return { artist: sanitizeLyricsQueryPart(track.artist.replace(/VEVO$/i, '')), title: sanitizeLyricsQueryPart(cleaned) };
}
async function fetchLyrics(track) {
  if (lyricsCache.has(track.id)) return lyricsCache.get(track.id);
  const { artist, title } = parseArtistAndTitleForLyrics(track);
  try {
    const res = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
    const data = await res.json();
    const text = data.lyrics ? data.lyrics.trim() : 'Testo non disponibile per questo brano.';
    lyricsCache.set(track.id, text);
    return text;
  } catch (e) {
    return 'Impossibile recuperare il testo in questo momento.';
  }
}

/* =========================================================
   Playback engine — real <audio> element fed by spotifi-stream-proxy
   (a small Cloudflare Worker resolving a YouTube video ID to a direct
   audio URL via cobalt, see C:\Users\user\Documents\spotifi-stream-proxy).
   A real top-level <audio> element (not a cross-origin YouTube iframe) is
   what makes background/lock-screen playback and MediaSession reliable —
   the whole class of postMessage-polling/state-inference bugs that
   dominated this project's history (stall detectors, mute/unmute autoplay
   workarounds, the lock-screen sawtooth) doesn't apply here: play/pause/
   ended/error are real, synchronous browser events.
   ========================================================= */
const STREAM_PROXY_BASE = 'https://spotifi-stream-proxy.loribaudi2006.workers.dev';
const audioEl = $('#audioEl');

// A hung request here used to mean the buffering spinner could spin
// forever with no way out. Combining AbortController (actually cancels the
// network request, freeing up the connection instead of leaving it running
// wastefully in the background) with Promise.race against a plain timer
// (guarantees THIS function returns on schedule even in environments where
// abort() doesn't fully/promptly cancel a stalled fetch) covers both
// failure modes. Set fairly tight (8s): cobalt's real extraction is
// normally a genuine "few seconds", and letting a stuck attempt run long
// only compounds — the audio-error auto-retry and the failure-cascade
// skip-to-next (see handlePlaybackFailure) can each trigger another full
// resolve, so a slow cap here multiplies across those, which is almost
// certainly what "sometimes minutes" was actually coming from.
const RESOLVE_TIMEOUT_MS = 8000;
function delay(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
async function resolveStreamUrl(videoId) {
  const bitrate = db.audioBitrate === '128' ? '128' : '64';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), RESOLVE_TIMEOUT_MS);
  try {
    const result = await Promise.race([
      fetch(`${STREAM_PROXY_BASE}/streams/${videoId}?bitrate=${bitrate}`, { signal: controller.signal }).then((res) => (res.ok ? res.json() : null)),
      delay(RESOLVE_TIMEOUT_MS).then(() => null),
    ]);
    return (result && result.url) || null;
  } catch (e) { return null; }
  finally { clearTimeout(timer); }
}

// Resolving a stream URL is the slow, third-party-dependent step (cobalt
// itself takes a few real seconds to extract from YouTube — not something
// this app can speed up). For the common case of letting the queue play
// through normally, that latency can be hidden entirely by resolving the
// NEXT track ahead of time while the current one is still playing, so by
// the time it's actually needed the answer is already sitting here.
let prefetch = null; // { trackId, url, resolvedAt } | { trackId, promise }
function schedulePrefetchNext() {
  if (player.repeatMode === 'one' || player.queue.length <= 1) return;
  const nextIdx = getNextIndex();
  if (nextIdx === null) return;
  const nextTrack = player.queue[nextIdx];
  if (prefetch && prefetch.trackId === nextTrack.id) return; // already have it / already fetching it
  if (getRecentBlob(nextTrack.id)) return; // already fully cached from an earlier play, nothing to do
  const entry = { trackId: nextTrack.id, promise: null, url: null, resolvedAt: 0 };
  entry.promise = resolveStreamUrl(nextTrack.id).then(async (url) => {
    if (prefetch !== entry) return; // superseded meanwhile — don't touch shared state or waste bandwidth
    entry.url = url; entry.resolvedAt = Date.now();
    if (!url) return;
    // Fully download the next track's audio now, while there's still time
    // before the current one ends, and cache it the same way an
    // already-played track gets cached (see recentBlobCache/cacheRecentBlob
    // below). Mobile browsers throttle a backgrounded/locked page's own
    // fetch calls hard — a resolve-or-download kicked off only at the exact
    // moment 'ended' fires can stall for a long time until the app is
    // reopened, even though nothing is actually broken. A blob already
    // sitting in the cache needs no network at all to start playing, so the
    // track-to-track transition keeps working while the phone is locked.
    try {
      const res = await fetch(url);
      if (res.ok) cacheRecentBlob(nextTrack.id, await res.blob());
    } catch (e) { /* fine — falls back to the resolved streaming URL instead */ }
  });
  prefetch = entry;
}
// Consumes the prefetched URL for `track` if it's there and still fresh —
// the resolved tunnel URL expires in well under two minutes, so anything
// older than this is treated as a miss rather than risking a dead link.
const PREFETCH_MAX_AGE_MS = 60000;
async function takePrefetchedStreamUrl(track) {
  if (!prefetch || prefetch.trackId !== track.id) return null;
  const entry = prefetch;
  prefetch = null;
  await entry.promise;
  if (!entry.url || Date.now() - entry.resolvedAt > PREFETCH_MAX_AGE_MS) return null;
  return entry.url;
}

// Bumped every time a new track is picked — lets an in-flight resolve/blob
// fetch for a PREVIOUS track detect it's been superseded and bail out
// instead of clobbering whatever's playing now.
let playbackToken = 0;
let currentBlobUrl = null;
function releaseCurrentBlobUrl() {
  if (currentBlobUrl) { URL.revokeObjectURL(currentBlobUrl); currentBlobUrl = null; }
}

// Short-lived in-memory cache of fully-downloaded audio blobs for tracks
// actually played this session (NOT proactively fetched — only ever
// populated as a side effect of real playback, so this never adds extra
// load on the shared resolve/cobalt service). Makes replaying something
// from the last few minutes (prev/repeat/tapping a recent track again)
// start instantly with zero network round-trip, on top of the existing
// next-in-queue prefetch and the new offline-download fast path below.
const recentBlobCache = new Map(); // id -> { blob, ts }
const RECENT_BLOB_CACHE_MAX = 6;
const RECENT_BLOB_MAX_AGE_MS = 5 * 60 * 1000;
function cacheRecentBlob(id, blob) {
  recentBlobCache.set(id, { blob, ts: Date.now() });
  if (recentBlobCache.size > RECENT_BLOB_CACHE_MAX) {
    let oldestId = null, oldestTs = Infinity;
    recentBlobCache.forEach((entry, key) => { if (entry.ts < oldestTs) { oldestTs = entry.ts; oldestId = key; } });
    if (oldestId) recentBlobCache.delete(oldestId);
  }
}
function getRecentBlob(id) {
  const entry = recentBlobCache.get(id);
  if (!entry) return null;
  if (Date.now() - entry.ts > RECENT_BLOB_MAX_AGE_MS) { recentBlobCache.delete(id); return null; }
  return entry.blob;
}

// audioEl.removeAttribute('src'); audioEl.load() (used to reset the element
// before loading a new track) can itself fire a spurious 'error' event on
// some browsers, since there's momentarily no supported source — must not
// be mistaken for a real playback failure.
let suppressNextAudioError = false;
// Caps the cobalt-resolve-tunnel-expired auto-retry (see the 'error'
// listener below) at one attempt, so a genuinely broken track can't loop.
let awaitingErrorRetry = false;

// Real failure mode found live (2026-07-25): the resolve step depends on a
// single shared third-party service — when IT is briefly unavailable (rate
// limited, momentarily down), EVERY track fails, not just one. The old
// skip-to-next-on-failure behavior (inherited from the YouTube-iframe era,
// where a failure genuinely meant "this one video is broken") turned that
// into a runaway cascade: each failed track immediately tried the next,
// which failed just as fast, blowing through the whole queue in seconds —
// and each of those skips was itself another request against the very
// rate limit causing the problem, actively delaying its own recovery.
// Capped here: after 2 failures in a row, stop and say so plainly instead
// of continuing to burn through the queue.
let consecutiveFailures = 0;
// True once the failure cap below has stopped playback — turns the
// play/pause button into an explicit "riprova" (retry) action instead of
// leaving the user with only a toast that's already gone by the time they
// notice something's wrong. Cleared the moment a fresh attempt starts (see
// startPlaybackFor) or real audio actually plays.
let playbackNeedsRetry = false;
function handlePlaybackFailure() {
  consecutiveFailures++;
  if (consecutiveFailures >= 2) {
    playbackNeedsRetry = true;
    showToast('Servizio non disponibile al momento — tocca play per riprovare');
    player.isPlaying = false;
    updatePlayerUI();
    return;
  }
  showToast('Brano non disponibile, passo al successivo');
  const next = getNextIndex();
  if (next !== null) playIndex(next);
  else { player.isPlaying = false; updatePlayerUI(); }
}

// Resolves a fresh stream URL (never reused — cobalt's tunnel URLs expire
// in well under two minutes, confirmed by testing) and starts streaming it
// immediately for instant playback. In parallel, downloads the same URL
// fully in the background and swaps to it once ready (see
// upgradeToSeekableBlob) — the tunnel doesn't support HTTP Range, so the
// browser can't seek an in-progress stream precisely, but a fully-
// downloaded blob is instantly and exactly seekable.
async function startPlaybackFor(track, isRetry) {
  const myToken = ++playbackToken;
  awaitingErrorRetry = isRetry === true;
  playbackNeedsRetry = false; // a fresh attempt is underway, whatever triggered it
  // NOT resetting consecutiveFailures here — this function is also called
  // by handlePlaybackFailure's own auto-skip-to-next path, and resetting it
  // on every call would mean the failure count could never reach the cap,
  // reopening the exact runaway-cascade bug this was built to prevent. It's
  // only ever reset by a genuine success ('play' event) or an explicit
  // manual retry (see togglePlayPause).
  releaseCurrentBlobUrl();
  suppressNextAudioError = true;
  audioEl.removeAttribute('src');
  audioEl.load();
  setBuffering(true);

  // Fast paths, both instant and both skip the network resolve entirely:
  // a track downloaded for offline listening plays straight from its local
  // copy, and one played in roughly the last few minutes plays from the
  // in-memory cache populated by upgradeToSeekableBlob below.
  const offlineBlob = await getOfflineBlob(track.id);
  if (myToken !== playbackToken) return; // a different track was picked meanwhile
  const fastBlob = offlineBlob || getRecentBlob(track.id);
  if (fastBlob) {
    suppressNextAudioError = false;
    const objUrl = URL.createObjectURL(fastBlob);
    currentBlobUrl = objUrl;
    audioEl.src = objUrl;
    try { await Promise.race([audioEl.play(), delay(10000)]); } catch (e) { /* 'pause'/'error' listeners reflect whatever actually happened */ }
    setBuffering(false);
    return;
  }

  // A prefetched URL (queued up while the previous track was playing, see
  // schedulePrefetchNext) skips the slow resolve step entirely — this is
  // what makes playing straight through a queue feel instant despite
  // cobalt's own extraction taking a few real seconds per track.
  const streamUrl = (await takePrefetchedStreamUrl(track)) || (await resolveStreamUrl(track.id));
  if (myToken !== playbackToken) return; // a different track was picked meanwhile
  if (!streamUrl) { setBuffering(false); handlePlaybackFailure(); return; }

  suppressNextAudioError = false;
  audioEl.src = streamUrl;
  try { await Promise.race([audioEl.play(), delay(10000)]); } catch (e) { /* 'pause'/'error' listeners reflect whatever actually happened */ }
  setBuffering(false);
  upgradeToSeekableBlob(streamUrl, myToken, track.id);
  // NOT scheduled here — see the 'timeupdate' listener in setupAudioEngine,
  // which fires this once the track is actually nearing its end instead.
}

async function upgradeToSeekableBlob(streamUrl, myToken, trackId) {
  let blob;
  try {
    const res = await fetch(streamUrl);
    if (!res.ok) return;
    blob = await res.blob();
  } catch (e) { return; } // fine to just stay on the streamed source
  if (myToken !== playbackToken) return; // superseded — discard, don't touch the element
  if (trackId) cacheRecentBlob(trackId, blob);

  const pos = audioEl.currentTime;
  const wasPlaying = !audioEl.paused;
  const objUrl = URL.createObjectURL(blob);
  releaseCurrentBlobUrl();
  currentBlobUrl = objUrl;
  suppressNextAudioError = true;
  audioEl.src = objUrl;
  audioEl.currentTime = pos;
  suppressNextAudioError = false;
  if (wasPlaying) { try { await audioEl.play(); } catch (e) { /* ignore */ } }
}

// Honest "still loading" feedback while resolveStreamUrl is in flight — the
// mini-player already appears instantly on tap (see playIndex), but with no
// visual difference between "loading" and "silently doing nothing" a
// multi-second resolve could easily read as broken rather than working.
let isBuffering = false;
function setBuffering(buffering) {
  isBuffering = buffering;
  $('#miniPlayer').classList.toggle('buffering', buffering);
  $('#fullPlayer').classList.toggle('buffering', buffering);
  updatePlayerUI();
}

function setupAudioEngine() {
  audioEl.addEventListener('play', () => {
    consecutiveFailures = 0; // real audio is flowing — the failure streak, if any, is over
    if (!player.isPlaying) { player.isPlaying = true; updatePlayerUI(); }
  });
  // Prefetching too early (e.g. right when the CURRENT track starts) was a
  // real, self-inflicted bug: the resolved tunnel URL is only valid ~90s,
  // so for any normal-length song the prefetch had always gone stale
  // (discarded by takePrefetchedStreamUrl's freshness check) long before
  // the next track actually needed it — meaning every track was silently
  // paying for a wasted extra resolve request AND still doing a full fresh
  // one when actually needed, roughly doubling real load on the shared
  // resolve service for no benefit. Triggering it once the track is
  // actually nearing its end keeps the prefetch's age at time-of-use well
  // under the tunnel's validity window, so it's usually still fresh AND
  // there's no wasted duplicate request.
  audioEl.addEventListener('timeupdate', () => {
    const d = audioEl.duration;
    if (isFinite(d) && d - audioEl.currentTime <= 45) schedulePrefetchNext();
  });
  audioEl.addEventListener('pause', () => {
    // Fires for every real pause: a user tap, a MediaSession pause, iOS
    // suspending background audio, AND the brief internal pause the
    // browser does when we swap audioEl.src (track change / blob upgrade)
    // — 'play' fires again immediately after in that last case, so a
    // momentary isPlaying flicker there is harmless.
    if (player.isPlaying) { player.isPlaying = false; updatePlayerUI(); }
  });
  audioEl.addEventListener('ended', onTrackEnded);
  audioEl.addEventListener('durationchange', () => setPositionState());
  audioEl.addEventListener('seeked', () => setPositionState());
  audioEl.addEventListener('error', () => {
    if (suppressNextAudioError) return;
    const t = currentTrack();
    if (!t) return;
    if (awaitingErrorRetry) { handlePlaybackFailure(); return; }
    // Most likely cause mid-stream: the resolved tunnel URL expired —
    // re-resolving is the correct fix, not a blind auto-retry of the same
    // dead URL.
    startPlaybackFor(t, true);
  });
}

// Mobile browsers (iOS Safari in particular, but Android too) throttle a
// backgrounded/locked page's own JS hard — timers and fetch calls can sit
// suspended rather than actually failing. That's what made playback look
// stuck until the app was reopened: the track-ended / resume-after-pause
// logic was mid-fetch (resolving a stream URL, or downloading one) and that
// fetch was simply frozen, not broken — bringing the page back to the
// foreground is what let it finish. The prefetched-blob cache above removes
// the network dependency for the common "track just ended" case entirely,
// but this is a safety net for whatever's left: the instant the app comes
// back to the foreground, check whether playback SHOULD be going but isn't,
// and resume immediately instead of waiting for the user to notice and tap
// play themselves.
function recoverPlaybackIfStuck() {
  const t = currentTrack();
  if (!t) return;
  if (playbackNeedsRetry) { startPlaybackFor(t); return; }
  if (player.isPlaying && audioEl.paused && !isBuffering) {
    audioEl.play().catch(() => startPlaybackFor(t, true));
  }
}
function setupBackgroundRecovery() {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') recoverPlaybackIfStuck();
  });
  // pageshow (fired on iOS Safari when a suspended/bfcached tab comes back,
  // which doesn't always also fire visibilitychange) covers the same case
  // via a second signal.
  window.addEventListener('pageshow', recoverPlaybackIfStuck);
}

function playQueue(list, startIndex) {
  if (!list || !list.length) return;
  player.queue = list.slice();
  player.shuffleHistory = []; // fresh queue — a new shuffle cycle starts from scratch
  playIndex(startIndex);
}
function playIndex(index) {
  if (index < 0 || index >= player.queue.length) return;
  player.currentIndex = index;
  const track = player.queue[index];
  if (player.shuffle && !player.shuffleHistory.includes(index)) player.shuffleHistory.push(index);
  addToRecent(track);
  player.isPlaying = true;
  updatePlayerUI();
  updateAmbientBg();
  updateMediaSession();
  // UI feedback (mini-player, elevation) always shown immediately,
  // regardless of how long the stream-proxy resolve takes.
  $('#miniPlayer').classList.remove('hidden');
  document.body.classList.add('has-now-playing'); // reserves modal bottom space — see .mini-player.elevated
  refreshMiniPlayerElevation(); // covers starting playback from a modal that was ALREADY open (no modalRoot mutation happens in that case)
  startPlaybackFor(track);
}

function addToRecent(track) {
  db.recentTracks = db.recentTracks.filter((t) => t.id !== track.id);
  db.recentTracks.unshift(track);
  db.recentTracks = db.recentTracks.slice(0, 20);
  saveDB();
}
function onTrackEnded() {
  if (player.repeatMode === 'one') { playIndex(player.currentIndex); return; }
  const next = getNextIndex();
  if (next === null) { player.isPlaying = false; updatePlayerUI(); return; }
  playIndex(next);
}
// Weighted, no-immediate-repeat shuffle: picks from whichever tracks
// haven't come up yet in this cycle (a real "shuffle bag", not plain
// random-with-replacement — the old version could replay the same song
// several times before others got a turn), and within that pool leans
// toward tracks by the same artist as what's currently playing. YouTube
// gives us no genre/style metadata to go on, so same-artist is the best
// available stand-in for "similar" — everything else in the pool still
// gets picked sometimes, just less often.
const SHUFFLE_SAME_ARTIST_WEIGHT = 3;
function pickWeightedShuffleIndex(candidates) {
  const current = currentTrack();
  const weights = candidates.map((i) => (current && player.queue[i].artist === current.artist) ? SHUFFLE_SAME_ARTIST_WEIGHT : 1);
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let k = 0; k < candidates.length; k++) {
    r -= weights[k];
    if (r <= 0) return candidates[k];
  }
  return candidates[candidates.length - 1];
}
function getNextIndex() {
  if (player.shuffle) {
    if (player.queue.length <= 1) return player.repeatMode === 'all' ? player.currentIndex : null;
    let candidates = player.queue
      .map((_, i) => i)
      .filter((i) => i !== player.currentIndex && !player.shuffleHistory.includes(i));
    if (!candidates.length) {
      // Everything else has already had a turn this cycle — reshuffle and
      // keep going (shuffle plays continuously, same as before this
      // no-repeat behavior existed), just still excluding the track
      // playing right now so it can't come up again back-to-back.
      player.shuffleHistory = [];
      candidates = player.queue.map((_, i) => i).filter((i) => i !== player.currentIndex);
    }
    return pickWeightedShuffleIndex(candidates);
  }
  if (player.currentIndex + 1 < player.queue.length) return player.currentIndex + 1;
  return player.repeatMode === 'all' ? 0 : null;
}
function getPrevIndex() {
  if (player.shuffle) return getNextIndex();
  if (player.currentIndex - 1 >= 0) return player.currentIndex - 1;
  return player.repeatMode === 'all' ? player.queue.length - 1 : null;
}

let playPauseLocked = false;
function togglePlayPause() {
  const t = currentTrack();
  if (!t) return;
  if (playbackNeedsRetry) { startPlaybackFor(t); return; } // the button IS the retry action in this state — see handlePlaybackFailure
  // Guards against rapid repeated taps (real device reports of the button
  // "getting stuck" after a couple of touches): audioEl.play()'s returned
  // promise doesn't settle synchronously, so two taps close together could
  // otherwise both act on a stale .paused reading and step on each other.
  // A short lock — well under human double-tap timing but imperceptible for
  // a deliberate second tap — makes exactly one tap produce exactly one
  // toggle.
  if (playPauseLocked) return;
  playPauseLocked = true;
  setTimeout(() => { playPauseLocked = false; }, 200);
  // No optimistic flip needed — audioEl's own 'play'/'pause' events (see
  // setupAudioEngine) are real, near-synchronous browser events, not an
  // async postMessage round-trip, so they're fast enough to drive the UI
  // directly without a separate reconciliation step.
  if (audioEl.paused) audioEl.play().catch(() => {}); else audioEl.pause();
}
function playNext() { const i = getNextIndex(); if (i !== null) playIndex(i); }
function playPrev() { const i = getPrevIndex(); if (i !== null) playIndex(i); }
function toggleShuffle() {
  player.shuffle = !player.shuffle;
  if (player.shuffle) player.shuffleHistory = player.currentIndex >= 0 ? [player.currentIndex] : [];
  $$('.fp-shuffle-btn, .np-shuffle-btn').forEach((btn) => btn.classList.toggle('active', player.shuffle));
  if (player.shuffle && navigator.vibrate) navigator.vibrate(15);
}
function cycleRepeat() {
  player.repeatMode = player.repeatMode === 'off' ? 'all' : player.repeatMode === 'all' ? 'one' : 'off';
  updateRepeatUI();
}
function updateRepeatUI() {
  const btn = $('#fpRepeatBtn');
  btn.classList.toggle('active', player.repeatMode !== 'off');
  btn.style.color = player.repeatMode !== 'off' ? 'var(--accent)' : '';
}

// Updates a cover <img> in place instead of always replacing it via
// innerHTML — updatePlayerUI runs on every single play/pause tap, not just
// track changes, and the cover never actually changes on a plain toggle, so
// recreating the DOM node each time was pure wasted layout/paint work.
function setCoverImg(container, url) {
  const existingImg = container.querySelector('img');
  if (existingImg) { if (existingImg.src !== url) existingImg.src = url; }
  else container.innerHTML = `<img src="${url}" alt="" />`;
}

function updatePlayerUI() {
  const t = currentTrack();
  if (!t) return;
  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = player.isPlaying ? 'playing' : 'paused';
  }
  // push an immediate, accurate position+rate on every real play/pause/
  // track-change transition, so the lock screen reflects reality right
  // away instead of waiting for the ticker's slow safety-net resync below
  setPositionState();
  const playIcon = isBuffering ? ICONS.spinner : playbackNeedsRetry ? ICONS.retry : (player.isPlaying ? ICONS.pause : ICONS.play);
  $('#miniTitle').textContent = t.title;
  $('#miniArtist').textContent = t.artist;
  setCoverImg($('#miniCover'), t.thumb);
  setIcon($('#miniLikeBtn'), ICONS.heart(isLiked(t.id)));
  setIcon($('#miniPlayBtn'), playIcon);
  $('#miniPlayBtn').setAttribute('aria-label', isBuffering ? 'Caricamento' : playbackNeedsRetry ? 'Riprova' : (player.isPlaying ? 'Pausa' : 'Play'));

  $('#fpTitle').textContent = t.title;
  $('#fpArtist').textContent = t.artist;
  setCoverImg($('#fpCover'), t.thumb);
  $('#fpBg').style.backgroundImage = `url(${t.thumb})`;
  setIcon($('#fpLikeBtn'), ICONS.heart(isLiked(t.id)));
  $('#fpLikeBtn').classList.toggle('liked', isLiked(t.id));
  const fpDownloadBtn = $('#fpDownloadBtn');
  if (fpDownloadBtn) { fpDownloadBtn.dataset.dlId = t.id; refreshDownloadUI(t.id); }
  setIcon($('#fpPlayBtn'), playIcon);
  $('#fpPlayBtn').setAttribute('aria-label', isBuffering ? 'Caricamento' : playbackNeedsRetry ? 'Riprova' : (player.isPlaying ? 'Pausa' : 'Play'));
  refreshNowPlayingHighlight();
}

// Marks whichever track-row/card/tile currently on screen matches the
// playing track, everywhere outside the full player (search results, home
// carousels, library, playlist detail, queue) — there was previously no
// way to tell which song was playing except by opening the full player.
// Re-run any time updatePlayerUI() runs (track change / play-pause) AND
// once right after any view/modal renders fresh track elements, since a
// re-render wipes the class off the old DOM nodes.
function refreshNowPlayingHighlight() {
  $$('.now-playing-highlight').forEach((el) => el.classList.remove('now-playing-highlight'));
  $$('.is-playing').forEach((el) => el.classList.remove('is-playing'));
  const t = currentTrack();
  if (!t) return;
  $$(`[data-track-id="${CSS.escape(t.id)}"]`).forEach((el) => {
    // artist rows/cards use a sample track's id only for its thumbnail —
    // they represent "browse this artist", not "this song", so they
    // shouldn't light up as if the artist tile itself were the playing item
    if (el.dataset.libType === 'artist' || el.classList.contains('artist-card')) return;
    el.classList.add('now-playing-highlight');
    const titleEl = el.querySelector('.track-row-title, .card-title, .quick-tile-title, .lib-row-title');
    if (titleEl) titleEl.classList.add('is-playing');
  });
}

// The bottom nav deliberately no longer tints with the cover art at all —
// explicit request: it should stay a single fixed color/height regardless
// of what's playing, never shifting per track. #bottomNavTint is left in
// the DOM/CSS but simply never activated.
function updateAmbientBg() {
  const t = currentTrack();
  const bg = $('#ambientBg');
  const topTint = $('#topBarTint');
  if (t) {
    bg.style.backgroundImage = `url(${t.thumb})`;
    topTint.style.backgroundImage = `url(${t.thumb})`;
  }
  bg.classList.toggle('playing', player.isPlaying);
  topTint.classList.toggle('playing', player.isPlaying);
}

/* =========================================================
   MediaSession — background playback + lock screen controls
   ========================================================= */
function updateMediaSession() {
  if (!('mediaSession' in navigator)) return;
  const t = currentTrack();
  if (!t) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: t.title, artist: t.artist, album: 'Spotifi',
    artwork: [{ src: t.thumb, sizes: '480x360', type: 'image/jpeg' }],
  });
  // explicit direction, never a blind toggle — a lock-screen "pause" tap
  // must always pause even if our internal isPlaying had drifted from
  // reality, otherwise it can appear to do nothing or do the opposite
  navigator.mediaSession.setActionHandler('play', () => togglePlayPause()); // routes through the retry check too, not just a raw resume
  navigator.mediaSession.setActionHandler('pause', () => audioEl.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => playPrev());
  navigator.mediaSession.setActionHandler('nexttrack', () => playNext());
  navigator.mediaSession.setActionHandler('stop', () => audioEl.pause());
  navigator.mediaSession.setActionHandler('seekto', (details) => {
    if (details.seekTime == null || !isFinite(audioEl.duration)) return;
    audioEl.currentTime = details.seekTime; // 'seeked' listener pushes the resulting position state
  });
}
function setPositionState(forcedPosition) {
  if (!('mediaSession' in navigator) || !currentTrack()) return;
  const duration = audioEl.duration;
  // Not known yet while still on the streamed (pre-blob-upgrade) source —
  // see upgradeToSeekableBlob; the OS just keeps showing "unknown length"
  // until this fires again once duration becomes available.
  if (!isFinite(duration) || duration <= 0) return;
  const position = forcedPosition != null ? forcedPosition : audioEl.currentTime;
  if (position > duration) return;
  try {
    // playbackRate must reflect real play/pause state, never a hardcoded 1
    // — the OS extrapolates the lock-screen scrubber forward at this rate
    // between calls.
    navigator.mediaSession.setPositionState({ duration, playbackRate: player.isPlaying ? 1 : 0, position });
  } catch (e) { /* transient invalid state, e.g. mid src-swap — next event will retry */ }
}

/* =========================================================
   Progress / seek bar (desktop-agnostic pointer events)
   ========================================================= */
function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
function setupSeekBar() {
  const track = $('#fpSeekTrack');
  const fill = $('#fpSeekFill');
  const handle = $('#fpSeekHandle');
  let dragging = false;
  let dragPointerId = null;
  let rectAtDragStart = null;

  function pctFromEvent(e) {
    const rect = rectAtDragStart || track.getBoundingClientRect();
    if (rect.width === 0) return 0;
    const pct = (e.clientX - rect.left) / rect.width;
    return Math.max(0, Math.min(1, pct));
  }
  function setFillPct(pct) {
    fill.style.width = (pct * 100) + '%';
    handle.style.left = (pct * 100) + '%';
  }

  track.addEventListener('pointerdown', (e) => {
    // Not seekable until the background blob-upgrade finishes (see
    // upgradeToSeekableBlob) — the streamed source has no known duration/
    // Range support, so a drag here couldn't land anywhere meaningful yet.
    if (!isFinite(audioEl.duration)) return;
    dragging = true;
    dragPointerId = e.pointerId;
    rectAtDragStart = track.getBoundingClientRect();
    track.setPointerCapture(e.pointerId);
    track.classList.add('seeking');
    setFillPct(pctFromEvent(e));
  });
  track.addEventListener('pointermove', (e) => {
    if (!dragging || e.pointerId !== dragPointerId) return;
    setFillPct(pctFromEvent(e));
  });
  function commitSeek(e) {
    if (!dragging || e.pointerId !== dragPointerId) return;
    dragging = false;
    track.classList.remove('seeking');
    if (isFinite(audioEl.duration)) {
      audioEl.currentTime = audioEl.duration * pctFromEvent(e); // 'seeked' listener pushes the resulting position state
    }
  }
  track.addEventListener('pointerup', commitSeek);
  track.addEventListener('pointercancel', () => { dragging = false; track.classList.remove('seeking'); });
  track.addEventListener('lostpointercapture', () => { dragging = false; track.classList.remove('seeking'); });

  // Driven by the audio element's own native 'timeupdate' event instead of
  // a manual setInterval poll — real, browser-paced progress ticks, not an
  // inferred/polled approximation, so there's no drift-vs-OS-interpolation
  // gap left to produce the old lock-screen sawtooth class of bug.
  audioEl.addEventListener('timeupdate', () => {
    if (dragging || !currentTrack()) return;
    const duration = audioEl.duration;
    const pos = audioEl.currentTime;
    $('#fpTimeCurrent').textContent = formatTime(pos);
    if (isFinite(duration) && duration > 0) {
      setFillPct(pos / duration);
      $('#fpTimeRemaining').textContent = '-' + formatTime(duration - pos);
      $('#miniProgressFill').style.width = (pos / duration * 100) + '%';
    } else {
      // Duration not known yet (still on the streamed pre-upgrade source) —
      // show elapsed time honestly rather than a misleading "0:00 left".
      $('#fpTimeRemaining').textContent = '--:--';
    }
  });
}

/* =========================================================
   Full player open/close + swipe-to-dismiss
   ========================================================= */
function openFullPlayer() {
  if (!currentTrack()) return;
  $('#fullPlayer').classList.remove('hidden');
  $('#fullPlayer').classList.remove('closing');
  $('#fpBg').classList.remove('visible');
  // fade the blurred backdrop in only once the (cheap, sharp-content-only)
  // slide-up has actually finished — see the .fp-bg CSS comment
  setTimeout(() => $('#fpBg').classList.add('visible'), 400);
  // real-device report: the deck/backdrop can paint as a flat black band
  // until the screen is tapped — see nudgeSafeAreaLayout()
  setTimeout(nudgeSafeAreaLayout, 420);
  refreshMiniPlayerElevation();
}
function closeFullPlayer() {
  const fp = $('#fullPlayer');
  fp.classList.add('closing');
  $('#fpBg').classList.remove('visible');
  setTimeout(() => {
    fp.classList.add('hidden');
    fp.classList.remove('closing');
    refreshMiniPlayerElevation();
  }, 250);
}

// Keeps the mini-player visible above a regular modal's dark scrim (see the
// .mini-player.elevated CSS comment) without ever letting it float above
// the full player itself, whose own bottom controls live in roughly the
// same screen region — reruns automatically whenever #modalRoot's content
// changes (every open*Modal()/close() just replaces its innerHTML) so no
// individual modal function needs to remember to call this.
function refreshMiniPlayerElevation() {
  const modalOpen = $('#modalRoot').children.length > 0;
  const fpOpen = !$('#fullPlayer').classList.contains('hidden');
  $('#miniPlayer').classList.toggle('elevated', modalOpen && !fpOpen);
}
function setupMiniPlayerElevationObserver() {
  new MutationObserver(refreshMiniPlayerElevation).observe($('#modalRoot'), { childList: true });
}
function setupFullPlayerDismiss() {
  const fp = $('#fullPlayer');
  let startY = 0, lastY = 0, lastT = 0, velocity = 0, dragging = false, pointerId = null, activeEl = null;

  function onDown(e) {
    // fpDragHandle also contains the close/queue-toggle buttons — starting
    // a drag (and capturing the pointer on the handle) when the tap
    // actually landed on one of them can eat that button's own click event
    // in some engines, which is a real, findable cause of "the button
    // sometimes just doesn't respond" reports.
    if (e.target.closest('button')) return;
    dragging = true; pointerId = e.pointerId; activeEl = e.currentTarget;
    startY = lastY = e.clientY; lastT = performance.now(); velocity = 0;
    fp.style.transition = 'none';
    activeEl.setPointerCapture(e.pointerId);
  }
  function onMove(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    const dy = e.clientY - startY;
    if (dy > 0) fp.style.transform = `translateY(${dy}px)`;
    const now = performance.now();
    const dt = now - lastT || 16;
    velocity = (e.clientY - lastY) / dt;
    lastY = e.clientY; lastT = now;
  }
  function settle(shouldClose) {
    if (shouldClose) {
      fp.style.transition = 'transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)';
      fp.style.transform = 'translateY(100%)';
      $('#fpBg').classList.remove('visible');
      setTimeout(() => {
        fp.classList.add('hidden');
        fp.style.transition = '';
        fp.style.transform = '';
        refreshMiniPlayerElevation();
      }, 250);
    } else {
      fp.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      fp.style.transform = '';
    }
  }
  function onUp(e) {
    if (!dragging || e.pointerId !== pointerId) return;
    dragging = false;
    const dy = lastY - startY;
    settle(dy > 100 || (velocity > 0.5 && dy > 20));
  }
  function onCancel() { if (!dragging) return; dragging = false; settle(false); }

  // bound to both the thin drag handle AND the (much larger, easier to
  // grab on a real touchscreen) cover art area — matches how most mobile
  // music apps let you swipe down from anywhere on the artwork, not just a
  // small handle strip.
  [$('#fpDragHandle'), $('#fpCoverWrap')].forEach((el) => {
    // Without this, a real touchscreen can hand the vertical drag to the
    // browser's own scroll/bounce gesture instead of our pointer events,
    // which is why swipe-to-dismiss stopped working after the CSS rewrite
    // dropped the touch-action:none this used to get from the stylesheet —
    // set directly here (matching enableModalSwipeDismiss's own approach)
    // so it no longer depends on style.css declaring it.
    el.style.touchAction = 'none';
    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onCancel);
    el.addEventListener('lostpointercapture', onCancel);
  });
}

/* =========================================================
   Lyrics panel
   ========================================================= */
function openLyricsPanel() {
  const t = currentTrack();
  if (!t) return;
  $('#fpLyricsPanel').classList.remove('hidden');
  $('#fpLyricsBody').textContent = 'Caricamento testo...';
  fetchLyrics(t).then((text) => { $('#fpLyricsBody').textContent = text; });
}
function closeLyricsPanel() { $('#fpLyricsPanel').classList.add('hidden'); }

/* =========================================================
   Wire up all static controls once on boot
   ========================================================= */
function setupPlayerControls() {
  $('#miniPlayer').addEventListener('click', (e) => {
    if (e.target.closest('#miniLikeBtn') || e.target.closest('#miniPlayBtn')) return;
    openFullPlayer();
  });
  $('#miniPlayBtn').addEventListener('click', (e) => { e.stopPropagation(); togglePlayPause(); });
  $('#miniLikeBtn').addEventListener('click', (e) => { e.stopPropagation(); const t = currentTrack(); if (t) toggleLike(t, $('#miniLikeBtn')); });

  $('#fpCloseBtn').addEventListener('click', closeFullPlayer);
  $('#fpPlayBtn').addEventListener('click', togglePlayPause);
  $('#fpPrevBtn').addEventListener('click', playPrev);
  $('#fpNextBtn').addEventListener('click', playNext);
  $('#fpShuffleBtn').addEventListener('click', toggleShuffle);
  $('#fpRepeatBtn').addEventListener('click', cycleRepeat);
  $('#fpLikeBtn').addEventListener('click', () => { const t = currentTrack(); if (t) toggleLike(t, $('#fpLikeBtn')); });
  $('#fpArtist').addEventListener('click', () => { const t = currentTrack(); if (t) openArtistDetail(t.artist); });
  $('#fpQueueBtn2').addEventListener('click', openQueueModal);
  $('#fpPlaylistBtn').addEventListener('click', () => { const t = currentTrack(); if (t) openAddToPlaylistModal(t); });
  $('#fpDownloadBtn').addEventListener('click', () => { const t = currentTrack(); if (t) downloadTrackOffline(t); });
  $('#fpLyricsBtn').addEventListener('click', openLyricsPanel);
  $('#fpLyricsCloseBtn').addEventListener('click', closeLyricsPanel);
  $('#fpShareBtn').addEventListener('click', () => {
    const t = currentTrack();
    if (!t) return;
    const url = `https://www.youtube.com/watch?v=${t.id}`;
    if (navigator.share) navigator.share({ title: t.title, text: t.artist, url }).catch(() => {});
    else { navigator.clipboard.writeText(url).then(() => showToast('Link copiato')); }
  });

  setIcon($('#fpCloseBtn'), ICONS.chevronDown);
  setIcon($('#fpShuffleBtn'), ICONS.shuffle);
  setIcon($('#fpPrevBtn'), ICONS.prev);
  setIcon($('#fpNextBtn'), ICONS.next);
  setIcon($('#fpRepeatBtn'), ICONS.repeat);
  setIcon($('#fpLyricsCloseBtn'), ICONS.close);
  setIcon($('#fpQueueBtn2'), ICONS.queueList);
  setIcon($('#fpPlaylistBtn'), ICONS.playlistAdd);
  setIcon($('#fpDownloadBtn'), ICONS.download);
  setIcon($('#fpLyricsBtn'), ICONS.lyrics);
  setIcon($('#fpShareBtn'), ICONS.share);

  setupFullPlayerDismiss();
  setupSeekBar();

  document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space') return;
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) return;
    if (!$('#modalRoot').children.length) { e.preventDefault(); togglePlayPause(); }
  });
}

/* =========================================================
   Header icon buttons
   ========================================================= */
function setupHeaderIcons() {
  setIcon($('#notifBtn'), ICONS.bell);
  setIcon($('#settingsBtn'), ICONS.gear);
  renderAccountButton();
  $('#notifBtn').addEventListener('click', openNotificationsModal);
  $('#settingsBtn').addEventListener('click', openSettingsModal);
  $('#accountBtn').addEventListener('click', openAccountModal);
  setIcon($('#voiceSearchBtn'), ICONS.mic);
}

function renderAccountButton() {
  const btn = $('#accountBtn');
  const ic = btn.querySelector('.ic');
  if (db.profile.photoDataUrl) {
    btn.style.backgroundImage = `url(${db.profile.photoDataUrl})`;
    ic.innerHTML = '';
  } else {
    btn.style.backgroundImage = 'none';
    setIcon(ic, ICONS.account);
  }
}

function resizeImageFile(file, maxSize) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = () => reject(new Error('invalid image'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('read failed'));
    reader.readAsDataURL(file);
  });
}

function openAccountModal() {
  $('#modalRoot').innerHTML = `
    <div class="modal-overlay" id="accountOverlay">
      <div class="modal">
        <div class="modal-head"><span class="modal-title">Il tuo profilo</span>
          <button type="button" class="icon-btn" id="accountCloseBtn"><span class="ic">${ICONS.close}</span></button>
        </div>
        <div class="modal-body">
          <div class="modal-hint">Nessun accesso Google o account online — il profilo resta salvato solo su questo dispositivo.</div>
          <div class="profile-preview" id="profilePreview"></div>
          <input type="text" class="modal-field" id="profileNameInput" placeholder="Il tuo nome" value="${escapeHtml(db.profile.name)}" maxlength="30" />
          <input type="file" accept="image/*" id="profilePhotoInput" class="hidden" />
          <button type="button" class="modal-btn" id="profilePhotoBtn" style="background:var(--surface-2);color:var(--text-primary);margin-bottom:10px">Carica una foto</button>
          ${db.profile.photoDataUrl ? '<button type="button" class="modal-btn" id="profilePhotoRemoveBtn" style="background:var(--surface-2);color:var(--text-primary);margin-bottom:10px">Rimuovi foto</button>' : ''}
          <button type="button" class="modal-btn" id="profileSaveBtn">Salva</button>
        </div>
      </div>
    </div>`;
  setIcon($('#accountCloseBtn'), ICONS.close);

  function refreshPreview() {
    const preview = $('#profilePreview');
    if (db.profile.photoDataUrl) {
      preview.innerHTML = `<img src="${db.profile.photoDataUrl}" alt="" />`;
    } else {
      preview.innerHTML = `<span class="ic" style="width:32px;height:32px">${ICONS.account}</span>`;
    }
  }
  refreshPreview();

  $('#profilePhotoBtn').addEventListener('click', () => $('#profilePhotoInput').click());
  $('#profilePhotoInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      db.profile.photoDataUrl = await resizeImageFile(file, 200);
      refreshPreview();
    } catch (err) {
      showToast('Immagine non valida');
    }
  });
  const removeBtn = $('#profilePhotoRemoveBtn');
  if (removeBtn) removeBtn.addEventListener('click', () => { db.profile.photoDataUrl = null; refreshPreview(); });

  const close = () => { $('#modalRoot').innerHTML = ''; };
  $('#accountOverlay').addEventListener('click', (e) => { if (e.target.id === 'accountOverlay') close(); });
  $('#accountCloseBtn').addEventListener('click', close);
  enableModalSwipeDismiss(close);
  $('#profileSaveBtn').addEventListener('click', () => {
    db.profile.name = $('#profileNameInput').value.trim();
    saveDB();
    renderAccountButton();
    updateGreeting();
    close();
    showToast('Profilo salvato');
  });
}

/* =========================================================
   Boot
   ========================================================= */
/* Some Android WebAPKs (site added to home screen) miscalculate the layout
   viewport in standalone display mode, shrinking/misplacing fixed-position
   UI (bottom nav, mini player) — forcing the viewport meta's content to the
   real window.innerWidth once standalone mode is detected corrects it. */
function fixStandaloneViewport() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if (!isStandalone) return;
  const meta = document.querySelector('meta[name="viewport"]');
  if (meta) meta.setAttribute('content', `width=${window.innerWidth}, initial-scale=1, viewport-fit=cover, user-scalable=no`);
}

/* Real-device report: the full player's bottom deck (and potentially the
   safe-area-based bottom nav/mini-player) can paint incorrectly on first
   load/open — fixable by simply tapping the screen. This matches a known
   iOS Safari class of bug where env(safe-area-inset-*) values and layers
   promoted via will-change aren't correctly (re)applied until the page has
   had a real layout/compositing pass forced on it, which a genuine user
   interaction happens to trigger. Toggling will-change off/on forces the
   browser to redo that pass for the given element — done automatically
   here (on boot and on full-player open) plus once on the user's very
   first real tap, so the fix lands on their first natural interaction
   instead of requiring a deliberate double-tap. */
function forceReflow(el) {
  if (!el) return;
  const prev = el.style.willChange;
  el.style.willChange = 'auto';
  void el.offsetHeight;
  el.style.willChange = prev || '';
}
function nudgeSafeAreaLayout() {
  forceReflow($('.full-player'));
  forceReflow($('.fp-deck'));
  forceReflow($('.bottom-nav'));
  forceReflow($('.mini-player'));
  window.dispatchEvent(new Event('resize'));
}

function boot() {
  fixStandaloneViewport();
  updateGreeting();
  setupNav();
  setupHeaderIcons();
  setupSearchInput();
  setupSearchHistoryDropdown();
  setupVoiceSearch();
  setupLibraryHeader();
  setupPlayerControls();
  setupAudioEngine();
  setupBackgroundRecovery();
  setupMiniPlayerElevationObserver();
  goTo('home');
  requestAnimationFrame(() => requestAnimationFrame(nudgeSafeAreaLayout));
  document.addEventListener('pointerdown', nudgeSafeAreaLayout, { once: true });

  // A newly-activated service worker (see sw.js's skipWaiting/clients.claim)
  // now auto-reloads the page instead of silently taking control in the
  // background — real users were force-closing/reinstalling the PWA after
  // an update and still seeing stale UI because nothing ever told the
  // already-open page a fresher version had taken over. registration.update()
  // is called explicitly on every launch AND whenever the app is
  // foregrounded (visibilitychange), since iOS Safari's own automatic SW
  // update-check timing is not reliably prompt for standalone/home-screen
  // PWAs — this makes the app actively ask, like a native app checking for
  // updates on open, rather than passively waiting for the OS to notice.
  if ('serviceWorker' in navigator) {
    let refreshedOnce = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshedOnce) return;
      refreshedOnce = true;
      window.location.reload();
    });
    navigator.serviceWorker.register('sw.js').then((reg) => {
      reg.update().catch(() => {});
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') reg.update().catch(() => {});
      });
    }).catch(() => {});
  }
}
document.addEventListener('DOMContentLoaded', boot);
window.addEventListener('resize', fixStandaloneViewport);
