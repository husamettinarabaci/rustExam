## 📘 Bölüm: Kilitsiz Veri Yapıları
### 🔹 Kategori: Atomik sayaç ve bayrak implementasyonu
#### ✅ Cevap 1172: Atomik sayaç ve bayrak implementasyonu

Rust'ta atomik sayaç ve bayraklar, çoklu iş parçacığında güvenli şekilde kullanılabilir.

Örnek:
```rust
use std::sync::atomic::{AtomicUsize, AtomicBool, Ordering};

let counter = AtomicUsize::new(0);
counter.fetch_add(1, Ordering::SeqCst);

let flag = AtomicBool::new(false);
flag.store(true, Ordering::SeqCst);
```
Burada `counter` atomik olarak artırılır, `flag` ise atomik olarak güncellenir.
