## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Arc<Mutex<T>> ile Paylaşımlı Değiştirilebilir Durum
#### ❓ Soru 1021: Paylaşımlı değiştirilebilir durum için Arc<Mutex<T>>

Aşağıdakileri yapan bir Rust programı yazın:

- Birden fazla görevin (task) aynı veriye erişebilmesi için `Arc<Mutex<T>>` kullanın.
- Görevler, paylaşılan bir sayacı artırsın.
- Sonuçta sayaç değerini ekrana yazdırın.

🔧 **Görev:** Tokio ile birden fazla görevin güvenli şekilde aynı veriyi değiştirmesini sağlayan bir örnek oluşturun.
