self.addEventListener("install", function(event) {
  console.log('WORKER: install event in progress.');
  event.waitUntil(
    /* The caches built-in is a promise-based API that helps you cache responses,
       as well as finding and deleting them.
    */
    caches
      /* You can open a cache by name, and this method returns a promise. We use
         a versioned cache name here so that we can remove old cache entries in
         one fell swoop later, when phasing out an older service worker.
      */
      .open('v5::fundamentals')
      .then(function(cache) {
        /* After the cache is opened, we can fill it with the offline fundamentals.
           The method below will add all resources we've indicated to the cache,
           after making HTTP requests for each of them.
        */
        return cache.addAll([
          'https://pedrofurtado.github.io/quebra-cabeca/puzzleimg.css',
          'https://pedrofurtado.github.io/quebra-cabeca/puzzleimg.js',
          'https://pedrofurtado.github.io/quebra-cabeca/manifest.json',
          'https://pedrofurtado.github.io/quebra-cabeca/index.html',
          'https://pedrofurtado.github.io/quebra-cabeca/sw.js',
          'https://pedrofurtado.github.io/favicon.ico',
          'https://pedrofurtado.github.io/jogo-da-memoria/safari-pinned-tab.svg',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/57x57px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/72x72px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/76x76px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/96x96px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/114x114px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/120x120px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/128x128px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/144x144px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/152x152px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/167x167px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/180x180px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/192x192px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/384x384px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon/512x512px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/57x57px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/72x72px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/76x76px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/96x96px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/114x114px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/120x120px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/128x128px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/144x144px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/152x152px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/167x167px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/180x180px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/192x192px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/384x384px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/apple-touch-icon-yellow/512x512px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/1242x2688px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/828x1792px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/1125x2436px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/1242x2208px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/750x1334px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/2048x2732px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/1668x2388px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/1668x2224px.png',
          'https://pedrofurtado.github.io/jogo-da-memoria/splash-screen/1536x2048px.png',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/1.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/2.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/3.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/4.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/5.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/6.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/7.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/8.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/9.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/10.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/11.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/12.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/13.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/14.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/15.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/16.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/17.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/18.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/19.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/20.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/21.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/22.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/23.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/24.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/25.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/26.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/27.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/28.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/29.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/30.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/31.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/32.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/33.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/34.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/35.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/36.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/37.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/38.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/39.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/40.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/41.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/42.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/43.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/44.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/45.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/46.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/47.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/48.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/49.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/50.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/51.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/52.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/53.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/54.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/55.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/56.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/57.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/58.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/59.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/60.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/61.jpg',
          'https://pedrofurtado.github.io/quebra-cabeca/imgs/62.jpg'
        ]);
      })
      .then(function() {
        console.log('WORKER: install completed');
      })
  );
});

self.addEventListener("fetch", function(event) {
  console.log('WORKER: fetch event in progress.');

  /* We should only cache GET requests, and deal with the rest of method in the
     client-side, by handling failed POST,PUT,PATCH,etc. requests.
  */
  if (event.request.method !== 'GET') {
    /* If we don't block the event as shown below, then the request will go to
       the network as usual.
    */
    console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
    return;
  }
  /* Similar to event.waitUntil in that it blocks the fetch event on a promise.
     Fulfillment result will be used as the response, and rejection will end in a
     HTTP response indicating failure.
  */
  event.respondWith(
    caches
      /* This method returns a promise that resolves to a cache entry matching
         the request. Once the promise is settled, we can then provide a response
         to the fetch request.
      */
      .match(event.request)
      .then(function(cached) {
        /* Even if the response is in our cache, we go to the network as well.
           This pattern is known for producing "eventually fresh" responses,
           where we return cached responses immediately, and meanwhile pull
           a network response and store that in the cache.
           Read more:
           https://ponyfoo.com/articles/progressive-networking-serviceworker
        */
        var networked = fetch(event.request)
          // We handle the network request with success and failure scenarios.
          .then(fetchedFromNetwork, unableToResolve)
          // We should catch errors on the fetchedFromNetwork handler as well.
          .catch(unableToResolve);

        /* We return the cached response immediately if there is one, and fall
           back to waiting on the network as usual.
        */
        console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
        return cached || networked;

        function fetchedFromNetwork(response) {
          /* We copy the response before replying to the network request.
             This is the response that will be stored on the ServiceWorker cache.
          */
          var cacheCopy = response.clone();

          console.log('WORKER: fetch response from network.', event.request.url);

          caches
            // We open a cache to store the response for this request.
            .open('v5::pages')
            .then(function add(cache) {
              /* We store the response for this request. It'll later become
                 available to caches.match(event.request) calls, when looking
                 for cached responses.
              */
              cache.put(event.request, cacheCopy);
            })
            .then(function() {
              console.log('WORKER: fetch response stored in cache.', event.request.url);
            });

          // Return the response so that the promise is settled in fulfillment.
          return response;
        }

        /* When this method is called, it means we were unable to produce a response
           from either the cache or the network. This is our opportunity to produce
           a meaningful response even when all else fails. It's the last chance, so
           you probably want to display a "Service Unavailable" view or a generic
           error response.
        */
        function unableToResolve () {
          /* There's a couple of things we can do here.
             - Test the Accept header and then return one of the `offlineFundamentals`
               e.g: `return caches.match('/some/cached/image.png')`
             - You should also consider the origin. It's easier to decide what
               "unavailable" means for requests against your origins than for requests
               against a third party, such as an ad provider
             - Generate a Response programmaticaly, as shown below, and return that
          */

          console.log('WORKER: fetch request failed in both cache and network.');

          /* Here we're creating a response programmatically. The first parameter is the
             response body, and the second one defines the options for the response.
          */
          return new Response('<h1>Service Unavailable</h1>', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/html'
            })
          });
        }
      })
  );
});

self.addEventListener("activate", function(event) {
  /* Just like with the install event, event.waitUntil blocks activate on a promise.
     Activation will fail unless the promise is fulfilled.
  */
  console.log('WORKER: activate event in progress.');

  event.waitUntil(
    caches
      /* This method returns a promise which will resolve to an array of available
         cache keys.
      */
      .keys()
      .then(function (keys) {
        // We return a promise that settles when all outdated caches are deleted.
        return Promise.all(
          keys
            .filter(function (key) {
              // Filter by keys that don't start with the latest version prefix.
              return !key.startsWith('v5::');
            })
            .map(function (key) {
              /* Return a promise that's fulfilled
                 when each outdated cache is deleted.
              */
              return caches.delete(key);
            })
        );
      })
      .then(function() {
        console.log('WORKER: activate completed.');
      })
  );
});
