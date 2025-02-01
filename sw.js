importScripts('/my-pwa/workbox-sw.js'); // Workboxが生成したサービスワーカーをインポート

self.addEventListener("push", function (event) {
    if (event.data) {
      const data = event.data.json();
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon || "/file.svg",
        badge: data.badge || "/file.svg",
        data: data.url || "/",
      });
    }
  });
  
  self.addEventListener("notificationclick", function (event) {
    event.notification.close();
    event.waitUntil(
      clients
        .matchAll({ type: "window", includeUncontrolled: true })
        .then((clientList) => {
          for (const client of clientList) {
            if (client.url === event.notification.data && "focus" in client) {
              return client.focus();
            }
          }
          return clients.openWindow(event.notification.data);
        })
    );
  });