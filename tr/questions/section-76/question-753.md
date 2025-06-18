## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon  
### 🔹 Kategori: Eşzamanlı Kuyruk ve Yığınlar  
#### ❓ Soru 753: Eşzamanlı kuyruk ve yığın tasarımı

Aşağıdakileri yapan bir Rust programı yazın:

- Çoklu iş parçacığı tarafından güvenli şekilde kullanılabilen bir kuyruk (queue) veya yığın (stack) veri yapısı oluşturun.
- Standart kütüphanedeki uygun eşzamanlı koleksiyonları (`std::sync::mpsc`, `std::sync::Arc<Mutex<_>>` gibi) kullanın.
- Kuyruğa/yığına birden fazla iş parçacığından veri ekleyin ve çıkarın.
- Sonuçların doğru ve veri yarışından uzak olduğunu gösteren bir örnek ekleyin.

🔧 **Görev:** Eşzamanlı kuyruk veya yığın implementasyonu ve çoklu iş parçacığında güvenli çalıştığını gösteren bir örnek yazın.
