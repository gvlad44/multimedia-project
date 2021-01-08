self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("toUseCache").then((cache) => {
      return cache.addAll([
        "adopt_dog.html",
        "adopt_dog.css",
        "adopt_dog.js",
        "/site/resources/img/favicon.ico",
      ]);
    })
  );
});

self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((response) => {
      return response || fetch(evt.request);
    })
  );
});
