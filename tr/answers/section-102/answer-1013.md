## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Senkron ve Asenkron Kanallar
#### ✅ Cevap 1013: Senkron ve asenkron kanallar

Senkron kanallar, gönderici ve alıcı arasında doğrudan senkronizasyon gerektirir; gönderici, alıcı mesajı alana kadar bekler. Asenkron kanallar ise mesajları bir kuyrukta tutar ve gönderici hemen devam edebilir.

Senkron kanallar kısa ömürlü, hızlı eşzamanlılık gerektiren durumlarda; asenkron kanallar ise görevler arasında veri akışının tamponlanması gerektiğinde tercih edilir.

Örnekler:
- `std::sync::mpsc::sync_channel` (senkron)
- `tokio::sync::mpsc::channel` (asenkron)
