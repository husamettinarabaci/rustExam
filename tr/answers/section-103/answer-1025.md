## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Mutex ile Deadlock Önleme
#### ✅ Cevap 1025: Mutex ile deadlock nasıl önlenir?

Deadlock, birden fazla iş parçacığının birbirinden kaynak beklemesiyle oluşur. Bunu önlemek için tüm iş parçacıklarının kilitleri aynı sırayla alması gerekir. Aşağıdaki örnekte, iki kaynak her zaman aynı sırayla kilitlenir ve deadlock oluşmaz.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(0));
    let b = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..2 {
        let (a, b) = (Arc::clone(&a), Arc::clone(&b));
        handles.push(thread::spawn(move || {
            let _lock1 = a.lock().unwrap();
            let _lock2 = b.lock().unwrap();
            // Kaynaklara erişim
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }
}
```
