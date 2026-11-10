// Service worker tối thiểu để trình duyệt cho phép cài app. Không lưu cache => sửa code là có hiệu lực ngay.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request).catch(() => new Response('Mất kết nối mạng. Vui lòng kiểm tra Wi-Fi/4G rồi mở lại.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } })));
});
