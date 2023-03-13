'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/config": "e5674453a2e6c570f70273123bd23e97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b39e91278454de7fd6f3b42b30249ad3",
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
".git/index": "91f8030dfb39377f5f462d68ed046de9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23c1b078a948a69885ed790c5f9caf89",
".git/logs/refs/heads/main": "23c1b078a948a69885ed790c5f9caf89",
".git/logs/refs/remotes/origin/HEAD": "6af14d5ca4cba32a0e633823a92ef8b9",
".git/logs/refs/remotes/origin/main": "f8a77799fec907f3cba1c989b7a2582a",
".git/objects/00/28fd5cbd4b3902ed489d6bf07288afd1950ca0": "e74d1314e2bdc02dbb5a045bba4f0b5f",
".git/objects/01/b5460c39f29435a46e4348db19ceefb1c3043a": "0da7e93dfd3b9c6a60df95ef9f183108",
".git/objects/04/62494d8218e60bdda4ebe59d5335002c5c8ad3": "1ae6fc3ada5e09eb484a2a0f250ccf46",
".git/objects/14/ea84fb5d16c64d01398162f2fd1f33ef2e961f": "45008d0ebb54e1e7551cd67ac223bfd8",
".git/objects/16/addd00a654c96cac0f33a54ab0469fa88a4622": "edc10204a89e60163282a853a5c52e15",
".git/objects/20/07c50c00fc4e583bab2e2681076391ca890a01": "a438be9c8a89a6fb5f7d77f24d16f8b8",
".git/objects/2a/ad1ca7c854e80b13b034c34498b9afa4f17f42": "7ec728c1b5a76ca0ea7821558669b7a5",
".git/objects/2b/697fe1e594bd8d509fad73aab733a42751c493": "cbff9e155963263664c3a2c31cbe540e",
".git/objects/2f/5c627073804e7589ed8674deb1bdcc0b4a6d0a": "9bd12d39408c35c281844e275ddb8a55",
".git/objects/32/6b1ba6722fab7d36c96c926b2ddf3d8454bf6b": "611bf125e1f2ff0d5ecdeae5e8889826",
".git/objects/33/008a1a69687662854127b3408224295a03346f": "2a3c1d4257360f7d71489070e857ad89",
".git/objects/34/f40d2aaafef0f0c1cf654b1f3782f64d03073c": "dd7219f442fda3dc25529d49bed6da5f",
".git/objects/38/18c61e9500d2ad3de2f4cc2c1fd728fcdadeb5": "62ac84db4a88332228035b10e615e828",
".git/objects/3a/3a6552abccac2687a5cbd53b992dcbfa02cc03": "d71c0a3adf3e6697a41fd9960e45d5f9",
".git/objects/3d/3248491587bd081d289faedc97ed764189eaa5": "338c795ea7adbab33e1b7b1acb462d1f",
".git/objects/3d/bc19bfbadaf51a349d6d0fac5248da5e6d6ee3": "4e30c0bf656c4b2d37d4a2b17e8ee763",
".git/objects/40/dcec67db1f75ff67ec21dd9b803c751545beed": "e51a6dfe4bae167fc71290e8ff3900cf",
".git/objects/41/5722508b6a8a5aa0fc0ec01a36c79fd0ca8f75": "71f93ff2316e9cf6692ae06efb1ae483",
".git/objects/43/eef074db2c42c671e086fb8f7e5ed99cb7ab01": "8adaa23f0dd2c4af8c82759597c5d03e",
".git/objects/44/efb3faaf13a1770ba83e1fe3ca10ebb6c917ea": "cf0143afd745093a0ad2cdfe8aabc87a",
".git/objects/46/e93c802548059dbee8fcc155e24967cd10a544": "7308d001b83c395de598061cc52d59ec",
".git/objects/49/422ca450ac69c2f6a43ff52c47a52d6e4dab1f": "dc97ba7fcb6a5e6fb93e1ecbc7286f98",
".git/objects/4d/b1be42c74265da2500f7a679ad512d4ba10a66": "cb1273f413e1d9f205b4b25b254ce522",
".git/objects/51/125d402a5fed3b8c7e6979a8fd715a7c4363e2": "f940c4555b33a3b9120271c07fe2612c",
".git/objects/51/2af6908d902c6cda064bd895ecd6bdc4c246b2": "887628a713c8459f357f633dad21274d",
".git/objects/52/f8b659bef373eef27e979d4bdcc06f8742c2a9": "c260b6af78b28092a913bd12444bd589",
".git/objects/59/15cda4f11aaaec56f647c4725e197cc58d871e": "8af05a479a89c1052c7f803ffe8222ea",
".git/objects/5b/cb5fc7002e1218768d4e914dbc99693ab52eeb": "972f01120a81a1eba3166d8e582c9b0c",
".git/objects/61/2ca0a723fbdcd86471f5d802c73e6404b93629": "d4dc1f0a57053864fa48a4e416eff9ec",
".git/objects/63/953a9a72b58db3d38f7b2aa14087b8064cf400": "c4b556d97e8fe35e6a23040c269542d8",
".git/objects/6b/84482532f11de872d162164c9fe28694c69ad7": "30cf546d018c74ea662e8cd7e02e1cbc",
".git/objects/6e/0b5a9626e34240ac7cea7a2fd437d93ce8301a": "2992a32b0e019c5335a98d4a8228d037",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/78/a80757edf0b5edd7567ab20ccdc9f60efd52a1": "423ec2769c534eb049c51e9efe8b02e4",
".git/objects/7d/e93668b5e16ac1ee8a7234d1be5330c9b0a5be": "4ca56342955596890c7ac7714512700b",
".git/objects/82/8c70a2eca0bfc8f883d98e804a7d6b1a5e7c8f": "6678d3149bddf28bcb76ae9ee03726fc",
".git/objects/86/8cee034c9bebc88d261e241624951de018a357": "28fce8f49915d9814c8ce9cab8b05403",
".git/objects/8b/c8c44d20372c2f756432536fabc6bfee7c9b95": "802a8d8046e9ffc20cebeaefd7a06731",
".git/objects/8d/319d2be24d42c3297d7a4a41b1007245298d0a": "e49f0881278924ee2b9ae92d0448d6e9",
".git/objects/8d/6881db17aa0fe10655507b5a913008b170b6c7": "69f6e165c39b4b158daff42b203a0c92",
".git/objects/a7/2a61e6ff284bd58ff148ace72cf6543816128f": "a198e08992384131b7a2b18d7a2eb63c",
".git/objects/a7/b6db72e65ef60511efefc4d641ee19c260abfc": "1050c7ba6a16d275c23e7bfbd3100a50",
".git/objects/ac/7e8665e339fc030029296b83336c2cc7870db3": "e28f0b5bc183c1571a6563be59410d29",
".git/objects/b2/2bc18454a7740cfe3cc276535ffaeefa5e055d": "9fc0b136031ee465cc7a708199b3c547",
".git/objects/b3/c74ac6b5d3ba89ab10756ba3199f7135204e70": "4507f3aab08f6c82997d9591cf299c52",
".git/objects/b4/0fd2f05400ebd2238f16ab4374aadd338d551a": "983e01c1a0f662bb02917e93303b1d59",
".git/objects/ba/44c5703a4583c6d8558bc35196cfd0a2e69f70": "ece40dd3a0647aae83fb7db36e1dc482",
".git/objects/bc/2c8a07a6cb902e4565f4205bb71f1992217f21": "e7bee19337ffdc05789ea6f08a0648e7",
".git/objects/bf/ce0530f1da18d24b80e5c5832290a2fa1c6341": "f41a0d08d72a5576ff4846289cd1b3f0",
".git/objects/ca/4a927c3358d294e8001f8cc26ec72123c49417": "f0ba4ee4a91b47bf5878491c76398371",
".git/objects/d0/78b4e57bbcb37a792ac5d6dd456ff331f8d3f8": "916b1dcfe97d4a6118b76c38abb4f16d",
".git/objects/db/a596f66c6ae960b312ccbb22f5c091b6757fe0": "cc8c48d6eeaa2f2271539e94ff50c3ec",
".git/objects/e3/8d8967d93b33f9739d672fa6ec6ef1ea96d973": "8075c7c0b16d85fad0b9763f4f4310cd",
".git/objects/e5/80a36de483bddc89f50453090d8ea3f36ec5fc": "f35f9a08d16e3f8608f1702b773e66db",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/627dd1a413d151de2c371555052e13f19a2b85": "4613e4307b934229999a046da1c900b3",
".git/objects/e9/b174c977934884901eb800c943dfaf4f0184de": "70d98a157c5c5a14ea525035ca4e5aa8",
".git/objects/f1/a16349f06970da155e973100295da4b4e98db1": "e03bf0c56a7f22968df5e26ae25c6419",
".git/objects/fb/a25ef70a1a520fb664eb8f74dc4896de6003c4": "ec419437c31fdf0f3da7e88b4f5e89a6",
".git/objects/fc/fdf5e681033c7be4826e6dd484d9655730365f": "af0ae43d42c1484cb61279b10f5e817c",
".git/objects/pack/pack-08c5202ca27615e7f6688b10eb0985c4e9fcf7cc.idx": "f235ec024ba45bbb1d48c107c57eb8ff",
".git/objects/pack/pack-08c5202ca27615e7f6688b10eb0985c4e9fcf7cc.pack": "f5ee742ffcc327982a34b7a42d13fcaa",
".git/ORIG_HEAD": "d4850d92942b6912cc6a2ca65dea10fd",
".git/packed-refs": "ac789a2cc37c9a4530c2dc55f0113aad",
".git/refs/heads/main": "a01240acca94c72cb994eba60183d55a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a01240acca94c72cb994eba60183d55a",
"app-ads.txt": "6e81a9ecea6ce460ad32478dd9379ad3",
"assets/AssetManifest.json": "41e73af81e61a9c860de7ce6734a4264",
"assets/assets/icons/daky.png": "66cba7602b3250726607b4796d1c67de",
"assets/assets/icons/flutter.png": "66a8f8c0905dbeef982bb247789bc8dc",
"assets/assets/images/androidBackground.jpg": "84d55ee3313fd34ad9b9824cbe186c29",
"assets/assets/images/avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/assets/images/ipadBackground1.jpg": "f1a261c97133f8a99ba7d32ed9e8a909",
"assets/avatar.png": "c7b5f6a007a193933d22f1b03bf2b43e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a4d2ea979491ed08d8c6108c90439d54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"avatar.jpg": "c7b5f6a007a193933d22f1b03bf2b43e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"CNAME": "25e73daee0f23848fb82ae3d919e76e1",
"favicon.png": "bfb8f2d2482fd5174922a1a0def5b12f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"google0ca38fa7bb7cf3f4.html": "a0697eb76b055979e7195583f8e94369",
"icons/Icon-192.png": "ec5afbd1ad1082d11ff5df2dbf9a85c0",
"icons/Icon-512.png": "4c9938af0af14d57091d4dd142d00dd8",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70fd851ae2a2b50d769a8c59d60edf45",
"/": "70fd851ae2a2b50d769a8c59d60edf45",
"main.dart.js": "e8784950febf0b2c816d553c678069f3",
"manifest.json": "18d8476a7b41c8371904d623ad658600",
"version.json": "009c9e65172e010890f7f65fde438006",
"versionM.json": "73933e22883d617d2dcb9bca27fb402a"
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
