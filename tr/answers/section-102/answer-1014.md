## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Backpressure ve Kapasite Sınırları
#### ✅ Cevap 1014: Backpressure ve kapasite sınırları yönetimi

Backpressure, alıcı yavaşladığında göndericinin de yavaşlamasını sağlayan bir akış kontrolüdür. Tokio mpsc kanallarında kapasite sınırı, kanal oluşturulurken belirlenir ve kuyruk dolduğunda gönderici bekler. Bu, sistemin aşırı yüklenmesini önler.

Örnek: Bir görev çok hızlı mesaj gönderirse ve alıcı yavaşsa, kanal dolduğunda gönderici `send().await` ile bekler, böylece backpressure uygulanır.
