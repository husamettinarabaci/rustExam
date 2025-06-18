## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Arc ve Mutex ile Sayaç Artırma
#### ✅ Cevap 1030: Arc<Mutex<T>> ile iş parçacığı güvenli sayaç artırma

`Arc<Mutex<T>>`, birden fazla iş parçacığının aynı sayacı güvenli şekilde artırmasını sağlar. Her iş parçacığı sayacı kilitler, artırır ve kilidi bırakır.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Sonuç: {}", *counter.lock().unwrap());
}
```
