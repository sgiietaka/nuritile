// ぬりタイル：ネットなしでも動かすための仕組み
// アプリを更新したときは、下の VERSION の数字を1つ上げてください。
const VERSION = "v1";
const CACHE = "nuritile-" + VERSION;
const FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./fonts/BIZUDPGothic-Regular.woff2",
  "./fonts/BIZUDPGothic-Bold.woff2",
  "./fonts/DelaGothicOne-Regular.woff2",
  "./lib/three.min.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png"
];

// 初回：アプリに必要なファイルをすべて端末に保存
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

// 更新時：古い保存分を削除
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("nuritile-") && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// 表示：まず端末の保存分を使い（ネットなしでも開ける）、つながっていれば裏で最新に入れ替える
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const key = req.mode === "navigate" ? "./index.html" : req;
      const cached = await cache.match(key, { ignoreSearch: true });
      const fresh = fetch(req).then(res => {
        if (res && res.ok) cache.put(key, res.clone());
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
