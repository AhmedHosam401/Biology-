/* عامل خدمة بسيط: بيخلي المنصة قابلة للتثبيت كتطبيق وبيعرض الإشعارات، ومش بيخزّن أي ملفات (فالتحديثات بتوصل فورًا). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const h = (e.notification.data && e.notification.data.hash) || '';
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of all) { try { await c.focus(); if (h) c.postMessage({ goto: h }); return; } catch (er) {} }
    const base = self.registration.scope; if (self.clients.openWindow) await self.clients.openWindow(base + (h || ''));
  })());
});
