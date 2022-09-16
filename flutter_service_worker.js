'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5ff2a7a4c2e322fc5dd3d7ada8466f65",
"assets/assets/icons/app-store-192x192-2365235.png": "2cf11618c964b62d3a82a13ab643938f",
"assets/assets/icons/apple-music-192x192-2365226.png": "2fde912e57d2960439861a69b3f3ac9d",
"assets/assets/icons/apple-store-192x192-1575941.png": "f22797fa04ad0770731c652c5a5e4ea2",
"assets/assets/icons/apple-tv-192x192-1575940.png": "c5829161a47ae012eefe3b4672338fe0",
"assets/assets/icons/books-192x192-2365234.png": "096cbda01144b0bd2288ff4342a5b0c5",
"assets/assets/icons/calculator-192x192-1575939.png": "6b48f6d632a01f23b44c6c05d6afadc0",
"assets/assets/icons/calendar-192x192-2365233.png": "6f787afe7d05c5ecfa158421b2c23112",
"assets/assets/icons/camera-192x192-2365232.png": "28360f9bdeb3e0c893738c385aca1ef1",
"assets/assets/icons/clips-192x192-1575951.png": "2341c1bc0edb55e9ff3e5a47b05399ca",
"assets/assets/icons/clock-192x192-2365231.png": "0eaa33e3fa603f242a3043a4accb29cd",
"assets/assets/icons/contacts-192x192-2365230.png": "62bb7e6ba150984221c530ab2970356c",
"assets/assets/icons/facetime-192x192-1575950.png": "363ef7405ef976af521fb26761c76f5f",
"assets/assets/icons/files-192x192-2365229.png": "9c7e6ec63bd22419f59c8a55a1384bbf",
"assets/assets/icons/find-my-192x192-1575949.png": "a55dbdbe3690b16213f6ec61c0e25773",
"assets/assets/icons/flutter.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/icons/health-192x192-2365228.png": "61d30f0e1c7a5dd7688d8285aaef8b43",
"assets/assets/icons/home-192x192-2365227.png": "0e44ab93d8a23bd378397638d6486c22",
"assets/assets/icons/ios-message-192x192-1575946.png": "13b1fe7f2bbab2e7611c291468af393e",
"assets/assets/icons/mail-192x192-2365225.png": "e1b14d48f17a6ae7cf75c30d348d40f7",
"assets/assets/icons/measure-192x192-1575947.png": "c0f7f71545e37e65b5560a7c6df2dfb4",
"assets/assets/icons/my-shortcuts-192x192-1575945.png": "2bc56f828796718cb77e62ad1ab98e06",
"assets/assets/icons/news-192x192-2365224.png": "ede7d4af0e46e0cc5636671a028283d3",
"assets/assets/icons/notes-192x192-2365245.png": "1a9acd9896cb77cb3aa6c31d234346dd",
"assets/assets/icons/photos-192x192-2365244.png": "4411f028bc807d7bfe915e94671871fd",
"assets/assets/icons/podcasts-192x192-2365243.png": "9340ef297a0e647af302af75ed6e988f",
"assets/assets/icons/reminders-192x192-2365242.png": "8751d5f9f974d82d7d8b3903cf7247f4",
"assets/assets/icons/safari-192x192-2365241.png": "a336bbeb67f044fca4c127f13ec7f500",
"assets/assets/icons/settings-192x192-2365240.png": "d072dd2f32ed0cac379fced84981eeaa",
"assets/assets/icons/stocks-192x192-2365239.png": "1353499a90ab26a29777b1ad59833b02",
"assets/assets/icons/translate-192x192-2365238.png": "b6386a6d4e13bb31cb09c1f766de160f",
"assets/assets/icons/voice-memos-192x192-1575942.png": "4cf411aa3072a0a3e525cd43961daefb",
"assets/assets/icons/wallet-192x192-2365237.png": "9e0304db7bd7392a7266f81b0c21499e",
"assets/assets/icons/weather-192x192-2365236.png": "a020a7c3e470ff2ddd3fd7c2093cbaca",
"assets/assets/images/ipadbackground.jpg": "a08a99d0fc964f8751a0307641747b2d",
"assets/assets/images/Rectangle%25208.png": "a9a846fc4e85c2aacdb832ff75299912",
"assets/assets/images/Rectangle7.png": "61b021ac1e0e3d40e3096e8716226ce8",
"assets/assets/images/screenph14.png": "744d7a26f9321c4de4990d9954268c08",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f9df297831cbcf1558247812e2cac07f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "3657c44c77e3a6aae02f6e56d97c3855",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5eb8006d1b6c998dc579dc1f1cf95abb",
"/": "5eb8006d1b6c998dc579dc1f1cf95abb",
"main.dart.js": "9973d5e6c755c7e92fa5d817475f1479",
"manifest.json": "18d8476a7b41c8371904d623ad658600",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
