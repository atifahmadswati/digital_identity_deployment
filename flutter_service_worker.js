'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "14e84f324e33f0be66d596a986ca8127",
"assets/assets/fonts/Hellix-Bold.ttf": "d681b20cf7c3b48f18605cf8d6c2d488",
"assets/assets/fonts/Hellix-Light.ttf": "41583ef5a451eb732de09c5ffdcb32de",
"assets/assets/fonts/Hellix-Medium.ttf": "28cbb504b6722b8a6daa9dce3f47f38f",
"assets/assets/fonts/Hellix-Regular.ttf": "d85cb389bedbb5932823b49ef3bc5978",
"assets/assets/icons/agreement_icon.png": "424d5108884bb362c31650268093ac09",
"assets/assets/icons/blockchain.png": "96b82d29437256252c59a8f1ef5ca670",
"assets/assets/icons/data-security.png": "c4987c8b797865ec0737d31517d41b09",
"assets/assets/icons/department.png": "bdb2746e39b26d8107b4a63eff6f0a40",
"assets/assets/icons/documents.png": "f51acde38b8fef6002d2fb5b2b232eab",
"assets/assets/icons/face_icon.png": "9c5c396378dde3e23f4935c777230b9e",
"assets/assets/icons/fb_icon.png": "18cd09bbbb375f3ba3aa7c805b4da4de",
"assets/assets/icons/file.png": "9bf0438a7372fb3041b7ae819b9f96ec",
"assets/assets/icons/file_icon.png": "d28c6a2a601681dc286be06f3ee5ae71",
"assets/assets/icons/fullscreen_icon.png": "7162d8dc141522c3b8237251212f288f",
"assets/assets/icons/home_icon.png": "1981a2f3443d2029cdf1d7e390bac3d5",
"assets/assets/icons/instagram_icon.png": "4c58079b3898b31b158e429a5ece216d",
"assets/assets/icons/logout_icon.png": "5fd56e35822c16c917ca338cb0f850f3",
"assets/assets/icons/mic_icon.png": "2619760415f695c73912f956ceb3380b",
"assets/assets/icons/moon_icon.png": "590969e6ff4657c99d23fc10cca5496e",
"assets/assets/icons/passport_icon.png": "c2ce1a4ac6288c0682bf41e318da2b2b",
"assets/assets/icons/secret_icon.png": "d873bb0fbe148045b0b5adf3cac236ca",
"assets/assets/icons/settings_icon.png": "fb80920b29bcbbd0909f28ca8d9799b4",
"assets/assets/icons/share_icon.png": "a934b76577f65e162287d4e5813185cc",
"assets/assets/icons/telegram_icon.png": "367e6627695ae681f201a797b6ddc2bc",
"assets/assets/icons/thumb_icon.png": "fdeb174cac967bd7ae12dbdb8e1208c0",
"assets/assets/icons/twitter_icon.png": "a893be049a3226c821e1ceaff5ea8d8b",
"assets/assets/icons/upload_icon.png": "a0d6e20f99bcd3904658b280680ec759",
"assets/assets/icons/users-avatar.png": "795c99889eba6045a13d895e8ffdb6e6",
"assets/assets/icons/whatsapp_icon.png": "6b3fcb1dd498f7f44b339d67f09bad47",
"assets/assets/images/AppLogo.png": "744ca357b92038a410c3fd1894cab764",
"assets/assets/images/birth_certificate.png": "c73b0cd835fb817d73a10cc920f32a58",
"assets/assets/images/camera.png": "c709e18d3433c8be2676fcf2c297c37f",
"assets/assets/images/cnic_order.png": "c591457768d28250b879c6e0161cc273",
"assets/assets/images/congratulation_image.png": "31b5ae2ea21090e2dc3b7de9bad71c84",
"assets/assets/images/cross.png": "9e7c6017836f14b6f32b0012d541fe5c",
"assets/assets/images/email_logo.png": "cdb8d15a7308e227261fae993856e98f",
"assets/assets/images/flutter_icon.png": "37f0799c2748f351d4414f524c2c3825",
"assets/assets/images/Graph.png": "a34bdea702a7978ee46b1a291c2977ea",
"assets/assets/images/mnemonics.png": "b9d6e2fed26546bfb316a1f2862c5521",
"assets/assets/images/organization_info_card.png": "23d83b8de6a7b4c513a014d55301d5dd",
"assets/assets/images/qr.png": "769d5e71c5bee8e3989a1b1bb01f3206",
"assets/assets/images/scan_face_icon.png": "14c1b9eb4ce8358944d259348c587018",
"assets/assets/images/secureByVoiceIcon.png": "27e942135b93fe895ce36559c6fe7ddc",
"assets/assets/images/uploadidCard.png": "786e4539767b9b2c959518b182460402",
"assets/assets/images/yourinfo_adultview.png": "72fa5af969f52edb53fcce5ff21dd121",
"assets/FontManifest.json": "36e42e3bbfc63cad40aaea088e1625f6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6b4269c43edd6ec234f0c07fb0dca439",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f31f62e0abe99a6195e4f249f80497da",
"/": "f31f62e0abe99a6195e4f249f80497da",
"main.dart.js": "b4aa32ea208f27801fab389ad5319c25",
"manifest.json": "d6fbd28f530d7849f7fc8cccc5757dee",
"version.json": "a29ca4d919d8d38aea2a285ad0078760"
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
