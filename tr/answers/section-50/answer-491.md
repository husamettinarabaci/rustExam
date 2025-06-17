## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Modüler Proje Tasarımı  
#### ✅ Cevap 491: Modüler yapıda küçük bir proje tasarlama

Küçük bir Rust projesi için modüler yapı önerisi:

- `main.rs`: Uygulamanın giriş noktası.
- `lib.rs`: Ortak işlevler ve veri tipleri.
- `config.rs`: Yapılandırma işlemleri.
- `handlers/`: HTTP veya komut işleyicileri için klasör.
- `models/`: Veri modelleri için klasör.
- `utils/`: Yardımcı fonksiyonlar için klasör.

Her modülün sorumluluğu net olmalı, dosya ve modül isimleri kısa ve açıklayıcı seçilmelidir.

```rust
// Örnek dosya yapısı
src/
  main.rs
  lib.rs
  config.rs
  handlers/
    user.rs
    product.rs
  models/
    user.rs
    product.rs
  utils/
    logger.rs
```
