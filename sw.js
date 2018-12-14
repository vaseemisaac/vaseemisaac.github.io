var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [];

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    urlsToCache.push(event.request.url);
});


self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});