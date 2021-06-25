self.addEventListener('install', function(event) {
    var CACHE_NAME = 'timer-cache-v1';
    var urlsToCache = [
        './',
        './favicon.ico',
        './index.html',
        './assets/site.webmanifest',
        './assets/fonts/fira-code-v10-latin-regular.eot',
        './assets/fonts/fira-code-v10-latin-regular.svg',
        './assets/fonts/fira-code-v10-latin-regular.ttf',
        './assets/fonts/fira-code-v10-latin-regular.woff',
        './assets/fonts/fira-code-v10-latin-regular.woff2',
        './assets/images/asserts/images/apple-touch-icon-114x114.png',
        './assets/images/asserts/images/apple-touch-icon-120x120.png',
        './assets/images/asserts/images/apple-touch-icon-144x144.png',
        './assets/images/asserts/images/apple-touch-icon-152x152.png',
        './assets/images/asserts/images/apple-touch-icon-57x57.png',
        './assets/images/asserts/images/apple-touch-icon-60x60.png',
        './assets/images/asserts/images/apple-touch-icon-72x72.png',
        './assets/images/asserts/images/apple-touch-icon-76x76.png',
        './assets/images/asserts/images/favicon-128.png',
        './assets/images/asserts/images/favicon-16x16.png',
        './assets/images/asserts/images/favicon-196x196.png',
        './assets/images/asserts/images/favicon-32x32.png',
        './assets/images/asserts/images/favicon-96x96.png',
        './assets/images/asserts/images/favicon.ico',
        './assets/images/asserts/images/logo-192x192.png',
        './assets/images/asserts/images/logo-512x512.png',
        './assets/images/asserts/images/maskable.png',
        './assets/images/asserts/images/mstile-144x144.png',
        './assets/images/asserts/images/mstile-150x150.png',
        './assets/images/asserts/images/mstile-310x150.png',
        './assets/images/asserts/images/mstile-310x310.png',
        './assets/images/asserts/images/mstile-70x70.png',
        './assets/scripts/timer.js',
        './assets/scripts/timer.min.js',
        './assets/scripts/timer.min.js.map',
        './assets/sounds/bicycle-horn-1.wav',
        './assets/styles/timer.css',
        './assets/styles/timer.min.css',
        './assets/styles/timer.min.css.map',
    ];


    // Perform install steps
    event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(urlsToCache);
    }));
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request));
});
