'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4183fd9b01a5b50ece47b9b7eb9deca7",
".git/config": "e4437e36d80bd08a45d5ff20d9475cbe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3f0d270b0f4442c5eebabb8503e722f5",
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
".git/index": "0150d12fdcc0cf302004a1dc09bff999",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "655c97216341f7af10443eba65e9b0e0",
".git/logs/refs/heads/main": "655c97216341f7af10443eba65e9b0e0",
".git/logs/refs/remotes/origin/HEAD": "f5c283e1608cc897527e1c3f113e4aa1",
".git/logs/refs/remotes/origin/main": "e547a0d7588d40f669de615a2b606302",
".git/objects/0c/379a903285babc5405f14c369821201ea6660b": "77dfc4afff135c3bcbc4727aa314f2af",
".git/objects/10/0720b9d9061103bdfe417b6dc16270d8a78001": "00c6a1da4edc0e6054fdb54cf2cde5f5",
".git/objects/1f/981236c3d1d9c324d30a641813047df4aca0bf": "1b9e5f14286f691711751ea344764af5",
".git/objects/2d/9ff7e9c7361c226977f79b32ccdea5f4176097": "d0544146bc40b90d13991d78e0022fbb",
".git/objects/4d/a0c2545a341060fac71226d8ca9893d283d8fc": "f63aa9f02b4747a8f13535d335823e8e",
".git/objects/61/1ec7ecb124da81fc964beb168605d52540e43b": "737447e7358ad732652fb4d12b20211b",
".git/objects/67/ab1d9a05687dc576ad62e4db11d50b92e2b16d": "e72933a5a4f7f9b69e2431b315a2780b",
".git/objects/74/02c668f6feeb5430cc7dc429ad1a333af37dfb": "bce10e574d31eee6d5e7f40bc94d42dc",
".git/objects/a7/eac73a3cc6e7425c9f6a133ed30f822d8435e7": "97ae122175682cbfed1527af8f5e0d7d",
".git/objects/bf/72296a73492205536bf4720ccb933672070b2e": "95dca570cc8ef6b0dd1c0de6d9491590",
".git/objects/c1/026c704f634d71278c6f4965da9bd5e1fe02c9": "1c567a678fc9754e89f2b7b6d4a28798",
".git/objects/db/f64197a59273ee7515614829f7140eca1c20ef": "45560cc83259756f3ff14235313fa23d",
".git/objects/df/1acb21e76014472b35364c4cf777c83f705eaf": "81548f3563b961a7f9ff1e7b0814002e",
".git/objects/pack/pack-fefbc76f7bcba9912c50745c4986f6baf738ff9d.idx": "699967061ca569c62a20d8ea7af0314f",
".git/objects/pack/pack-fefbc76f7bcba9912c50745c4986f6baf738ff9d.pack": "b17a16a7f3fefba473341c4ec3d66691",
".git/packed-refs": "a7b91488f5f639b33e51236603120400",
".git/refs/heads/main": "f2a78fa38e945cad3fb0ad283af12a57",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f2a78fa38e945cad3fb0ad283af12a57",
"assets/AssetManifest.1f3e1350.json": "1f3e13502af03a5dad986772fec4d72f",
"assets/AssetManifest.455298de.json": "455298de5f62087c4d30217f22801faa",
"assets/AssetManifest.json": "92d1bad29cfe266bca202784c596a2f7",
"assets/assets/icons/flutter.66a8f8c0.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/icons/flutter.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/images/androidBackground.84d55ee3.jpg": "84d55ee3313fd34ad9b9824cbe186c29",
"assets/assets/images/androidBackground.jpg": "84d55ee3313fd34ad9b9824cbe186c29",
"assets/assets/images/avatar.c7b5f6a0.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/ipadBackground1.f1a261c9.jpg": "f1a261c97133f8a99ba7d32ed9e8a909",
"assets/assets/images/ipadBackground1.jpg": "f1a261c97133f8a99ba7d32ed9e8a909",
"assets/avatar.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/FontManifest.376eb9de.json": "376eb9de369caccaee851c40985ff0d1",
"assets/FontManifest.5d90e442.json": "5d90e4425d99648f79d216ba5f7c2c1a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.95db9098.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular.e7069dfd.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "95afe9646c0c92bc5b8ec3e9ac0c4b7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.6d342eb6.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.4e20cb87.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.99f29024.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.1f7cb220.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.48ce1bb8.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.26f5af2d.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.d8e9b620.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.5dcef449.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.10920ce5.js": "10920ce58d4b4c042fd0a4549e78e58c",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"google0ca38fa7bb7cf3f4.html": "a0697eb76b055979e7195583f8e94369",
"icons/Icon-192.ac9a721a.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.96e75261.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.c457ef57.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.301a7604.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "de8f750a51d5474b8f9f9dd7127b2df4",
"/": "de8f750a51d5474b8f9f9dd7127b2df4",
"main.dart.js": "81244043e21d11ca21f21115ad56621c",
"main.dart_0.js": "f7501728c3e46b5bf78f60e31a9ea29d",
"main.dart_1.js": "b99e4256352986ddb70b9650071d2f0a",
"main.dart_2.js": "7ce47f16933310f0c76399f4bab392f2",
"main.dart_3.js": "7ce88b8e46c01a3a5fc6c22ab6e7d39f",
"main.dart_4.js": "67ddb299aa1fcfe5129c2d77ac238bb5",
"main.dart_5.js": "6f4d6f46c358eecea3cc5f6ce5d1b010",
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
