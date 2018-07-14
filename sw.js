const CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/main.js'
];


var installFunction = function(event) {
  // Perform install steps

	var dealWithCache = function(cache) {
		console.log('Opened cache');
		return cache.addAll(urlsToCache);
	}

	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(dealWithCache)
	);
}
self.addEventListener('install', installFunction);


var fetchFunction =function(event) {

	var someFunc = function(response) {
		// Cache hit - return response
		if (response) {
		  return response;
		}
		return fetch(event.request);
	}

  event.respondWith(
    caches.match(event.request)
      .then(someFunc)
  );
}
self.addEventListener('fetch', fetchFunction);