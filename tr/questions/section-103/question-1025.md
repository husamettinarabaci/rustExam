## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Mutex ile Deadlock Önleme
#### ❓ Soru 1025: Mutex ile deadlock nasıl önlenir?

Birden fazla iş parçacığının birden fazla kaynağa eriştiği bir senaryoda, deadlock oluşumunu önlemek için doğru kilit alma sırasını gösteren bir Rust programı yazın.

- İki farklı `Arc<Mutex<T>>` kaynağı oluşturun.
- İki iş parçacığı başlatın, her biri iki kaynağa da erişmeye çalışsın.
- Deadlock oluşmaması için kilitlerin her zaman aynı sırayla alındığını gösterin.

🔧 **Görev:** Deadlock önlemek için kilit alma sırasını yönetin.
