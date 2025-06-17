## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Katmanlı Mimari  
#### ✅ Cevap 492: Kodu katmanlara ayırma (alan, servis, altyapı)

Rust projesinde katmanlı mimari örneği:

- **Alan (domain):** Temel iş kuralları, veri modelleri ve traitler burada tanımlanır.
- **Servis (service):** İş mantığı, domain ile altyapı arasındaki köprü.
- **Altyapı (infrastructure):** Veritabanı, dosya sistemi, dış servisler gibi dış kaynaklarla iletişim.

Katmanlar arası bağımlılık, trait ve interface kullanımı ile gevşek tutulur.

```rust
src/
  domain/
    user.rs
    order.rs
  service/
    user_service.rs
  infrastructure/
    db.rs
    file_storage.rs
```
