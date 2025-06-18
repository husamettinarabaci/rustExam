## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Eşzamanlı okuma için tokio::sync::RwLock kullanımı  
#### ❓ Soru 555: Eşzamanlı okuma için `tokio::sync::RwLock` kullanımı

Aşağıdakileri yapan bir Rust programı yazın:

- Paylaşılan bir veriyi korumak için `tokio::sync::RwLock` kullanın.
- Birden fazla async görev aynı anda veriyi okuyabilsin.
- Bir async görev veriyi değiştirdiğinde diğer okuma işlemlerini bekletsin.
- Okuma ve yazma işlemlerinin sırasını terminale yazdırın.

🔧 **Görev:** `tokio::sync::RwLock` ile eşzamanlı okuma ve yazma işlemlerini yöneten bir örnek uygulayın.
