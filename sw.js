self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('chinh-site').then(cache => {
      return cache.addAll(['index.html']);
    })
  );
});
