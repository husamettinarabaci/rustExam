## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Atomik Tipler ile Sayaç
#### ✅ Cevap 1023: AtomicUsize ile iş parçacığı güvenli sayaç

`AtomicUsize`, birden fazla iş parçacığının aynı anda güvenli şekilde bir sayacı artırmasına olanak tanır. Bu, kilit kullanmadan atomik işlemlerle sayaç güncellemeyi sağlar.

```rust
use std::sync::Arc;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::thread;

fn main() {
    let counter = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            counter.fetch_add(1, Ordering::SeqCst);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Sonuç: {}", counter.load(Ordering::SeqCst));
}
```
