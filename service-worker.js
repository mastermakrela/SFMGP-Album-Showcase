!function(){"use strict";const t=1613744869918,e=[{pattern:/^\/$/},{pattern:/^\/firstAlbum\/?$/},{pattern:/^\/([^/]+?)\/?$/}],s=`cache${t}`,c=["/client/client.9e830122.js","/client/inject_styles.5607aec6.js","/client/index.6b41cecc.js","/client/index.cce381bb.js","/client/[slug].d951b9d7.js"].concat(["/service-worker-index.html","/.DS_Store","/firstAlbum/.DS_Store","/firstAlbum/covers/.DS_Store","/firstAlbum/covers/SFMGP1.png","/firstAlbum/covers/SFMGP10.png","/firstAlbum/covers/SFMGP2.png","/firstAlbum/covers/SFMGP3.png","/firstAlbum/covers/SFMGP4.png","/firstAlbum/covers/SFMGP5.png","/firstAlbum/covers/SFMGP6.png","/firstAlbum/covers/SFMGP7.png","/firstAlbum/covers/SFMGP8.png","/firstAlbum/covers/SFMGP9.png","/firstAlbum/music/SFMGP1.wav","/firstAlbum/music/SFMGP10.wav","/firstAlbum/music/SFMGP2.wav","/firstAlbum/music/SFMGP3.wav","/firstAlbum/music/SFMGP4.wav","/firstAlbum/music/SFMGP5.wav","/firstAlbum/music/SFMGP6.wav","/firstAlbum/music/SFMGP7.wav","/firstAlbum/music/SFMGP8.wav","/firstAlbum/music/SFMGP9.wav","/global.css","/logo-192.png","/logo-512.png","/manifest.json"]),i=new Set(c);self.addEventListener("install",(t=>{t.waitUntil(caches.open(s).then((t=>t.addAll(c))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const e of t)e!==s&&await caches.delete(e);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const c=new URL(s.request.url),n=c.protocol.startsWith("http"),r=c.hostname===self.location.hostname&&c.port!==self.location.port,a=c.host===self.location.host&&i.has(c.pathname),l="only-if-cached"===s.request.cache&&!a;!n||r||l||s.respondWith((async()=>{const i=a&&await caches.match(s.request);return!i&&c.origin===self.origin&&e.find((t=>t.pattern.test(c.pathname)))?caches.match("/service-worker-index.html"):i||async function(e){const s=await caches.open(`offline${t}`);try{const t=await fetch(e);return s.put(e,t.clone()),t}catch(t){const c=await s.match(e);if(c)return c;throw t}}(s.request)})())}))}();