/* عامل خدمة بسيط: بيخلي المنصة قابلة للتثبيت كتطبيق، ومش بيخزّن أي ملفات (فالتحديثات بتوصل فورًا). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
