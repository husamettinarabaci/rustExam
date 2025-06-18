## 📘 Bölüm: Rust ile Mikroservis Mimarisi
### 🔹 Kategori: Dayanıklılık Desenleri
#### ✅ Cevap 1235: Dayanıklılık desenleri: tekrar deneme, circuit breaker

Dayanıklılık desenleri, mikroservislerin hatalarla zarifçe başa çıkmasını sağlar. Yaygın desenler arasında tekrar deneme, circuit breaker ve fallback bulunur.

Rust'ta:
- Orta katman tabanlı tekrar deneme ve circuit breaker için `tower` kullanılabilir.
- Asenkron işlemler için `futures-retry` ile tekrar deneme yapılabilir.

Örnek (futures-retry):
```rust
use futures_retry::{Retry, ErrorHandler, FutureFactory};

let retry_strategy = futures_retry::strategies::FixedInterval::from_millis(100);
let result = Retry::spawn(retry_strategy, || async { do_request().await }).await;
```
Bu yaklaşım, geçici hataları otomatik yöneterek güvenilirliği artırır.
