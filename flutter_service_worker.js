'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "157b8b12c906397057903d2596ae6738",
".git/config": "e5674453a2e6c570f70273123bd23e97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a1aac739f1edaf8e9c8ad962f5058be8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9b1458621a4dcfa902820210e5766d55",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b99c54b443a5a60494a635cbfaf7e87d",
".git/logs/refs/heads/main": "b99c54b443a5a60494a635cbfaf7e87d",
".git/logs/refs/remotes/origin/HEAD": "95a07b0ccba79ba986efa318cb7b0e03",
".git/logs/refs/remotes/origin/main": "8aaba7c54402947b13160ad0bde01678",
".git/objects/04/62494d8218e60bdda4ebe59d5335002c5c8ad3": "1ae6fc3ada5e09eb484a2a0f250ccf46",
".git/objects/16/addd00a654c96cac0f33a54ab0469fa88a4622": "edc10204a89e60163282a853a5c52e15",
".git/objects/32/6b1ba6722fab7d36c96c926b2ddf3d8454bf6b": "611bf125e1f2ff0d5ecdeae5e8889826",
".git/objects/38/18c61e9500d2ad3de2f4cc2c1fd728fcdadeb5": "62ac84db4a88332228035b10e615e828",
".git/objects/3d/3248491587bd081d289faedc97ed764189eaa5": "338c795ea7adbab33e1b7b1acb462d1f",
".git/objects/3d/bc19bfbadaf51a349d6d0fac5248da5e6d6ee3": "4e30c0bf656c4b2d37d4a2b17e8ee763",
".git/objects/41/5722508b6a8a5aa0fc0ec01a36c79fd0ca8f75": "71f93ff2316e9cf6692ae06efb1ae483",
".git/objects/43/eef074db2c42c671e086fb8f7e5ed99cb7ab01": "8adaa23f0dd2c4af8c82759597c5d03e",
".git/objects/44/efb3faaf13a1770ba83e1fe3ca10ebb6c917ea": "cf0143afd745093a0ad2cdfe8aabc87a",
".git/objects/4d/b1be42c74265da2500f7a679ad512d4ba10a66": "cb1273f413e1d9f205b4b25b254ce522",
".git/objects/51/125d402a5fed3b8c7e6979a8fd715a7c4363e2": "f940c4555b33a3b9120271c07fe2612c",
".git/objects/52/f8b659bef373eef27e979d4bdcc06f8742c2a9": "c260b6af78b28092a913bd12444bd589",
".git/objects/63/953a9a72b58db3d38f7b2aa14087b8064cf400": "c4b556d97e8fe35e6a23040c269542d8",
".git/objects/6e/0b5a9626e34240ac7cea7a2fd437d93ce8301a": "2992a32b0e019c5335a98d4a8228d037",
".git/objects/78/a80757edf0b5edd7567ab20ccdc9f60efd52a1": "423ec2769c534eb049c51e9efe8b02e4",
".git/objects/86/8cee034c9bebc88d261e241624951de018a357": "28fce8f49915d9814c8ce9cab8b05403",
".git/objects/8b/c8c44d20372c2f756432536fabc6bfee7c9b95": "802a8d8046e9ffc20cebeaefd7a06731",
".git/objects/8d/319d2be24d42c3297d7a4a41b1007245298d0a": "e49f0881278924ee2b9ae92d0448d6e9",
".git/objects/8d/6881db17aa0fe10655507b5a913008b170b6c7": "69f6e165c39b4b158daff42b203a0c92",
".git/objects/ac/7e8665e339fc030029296b83336c2cc7870db3": "e28f0b5bc183c1571a6563be59410d29",
".git/objects/b3/c74ac6b5d3ba89ab10756ba3199f7135204e70": "4507f3aab08f6c82997d9591cf299c52",
".git/objects/ba/44c5703a4583c6d8558bc35196cfd0a2e69f70": "ece40dd3a0647aae83fb7db36e1dc482",
".git/objects/bf/ce0530f1da18d24b80e5c5832290a2fa1c6341": "f41a0d08d72a5576ff4846289cd1b3f0",
".git/objects/ca/4a927c3358d294e8001f8cc26ec72123c49417": "f0ba4ee4a91b47bf5878491c76398371",
".git/objects/d0/78b4e57bbcb37a792ac5d6dd456ff331f8d3f8": "916b1dcfe97d4a6118b76c38abb4f16d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/fb/a25ef70a1a520fb664eb8f74dc4896de6003c4": "ec419437c31fdf0f3da7e88b4f5e89a6",
".git/objects/fc/fdf5e681033c7be4826e6dd484d9655730365f": "af0ae43d42c1484cb61279b10f5e817c",
".git/objects/pack/pack-08c5202ca27615e7f6688b10eb0985c4e9fcf7cc.idx": "f235ec024ba45bbb1d48c107c57eb8ff",
".git/objects/pack/pack-08c5202ca27615e7f6688b10eb0985c4e9fcf7cc.pack": "f5ee742ffcc327982a34b7a42d13fcaa",
".git/packed-refs": "ac789a2cc37c9a4530c2dc55f0113aad",
".git/refs/heads/main": "3eb223fd9f216f487b2f47c4b17814b5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3eb223fd9f216f487b2f47c4b17814b5",
"assets/AssetManifest.json": "92d1bad29cfe266bca202784c596a2f7",
"assets/assets/icons/flutter.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/images/androidBackground.jpg": "84d55ee3313fd34ad9b9824cbe186c29",
"assets/assets/images/avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/ipadBackground1.jpg": "f1a261c97133f8a99ba7d32ed9e8a909",
"assets/avatar.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "95afe9646c0c92bc5b8ec3e9ac0c4b7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"google0ca38fa7bb7cf3f4.html": "a0697eb76b055979e7195583f8e94369",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3cb6d88a18837d19490c33f926d9d9fa",
"/": "3cb6d88a18837d19490c33f926d9d9fa",
"main.dart.js": "81244043e21d11ca21f21115ad56621c",
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
