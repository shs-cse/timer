self.addEventListener('install', function(event) {
    var CACHE_NAME = 'timer-cache-v1';
    var urlsToCache = [
        './',
        './example.png',
        './favicon.ico',
        './index.html',
        './assets/site.webmanifest',
        './assets/fonts/fira-code-v10-latin-regular.eot',
        './assets/fonts/fira-code-v10-latin-regular.svg',
        './assets/fonts/fira-code-v10-latin-regular.ttf',
        './assets/fonts/fira-code-v10-latin-regular.woff',
        './assets/fonts/fira-code-v10-latin-regular.woff2',
        './assets/images/alarm.png',
        './assets/images/android-chrome-192x192.png',
        './assets/images/android-chrome-512x512.png',
        './assets/images/apple-touch-icon.png',
        './assets/images/favicon-16x16.png',
        './assets/images/favicon-32x32.png',
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

self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    const title = 'Push Codelab';
    const options = {
        body: 'Yay it works.',
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };

    //event.waitUntil(self.registration.showNotification(title, options));
});