## 📘 Bölüm: Kilitsiz Veri Yapıları
### 🔹 Kategori: Bellek sıralama garantileri
#### ✅ Cevap 1175: Bellek sıralama garantileri

Rust'ta atomik işlemler için farklı bellek sıralama türleri vardır:
- `Relaxed`: Sadece atomiklik sağlar, sıralama garantisi yoktur.
- `Acquire`/`Release`: Okuma/yazma sıralamasını kontrol eder.
- `SeqCst`: En güçlü, tüm işlemler için global sıralama sağlar.

Örnek:
```rust
use std::sync::atomic::{AtomicUsize, Ordering};
let a = AtomicUsize::new(0);
a.store(1, Ordering::Release);
let v = a.load(Ordering::Acquire);
```
Burada, `Release` ve `Acquire` ile sıralama kontrol edilir.
