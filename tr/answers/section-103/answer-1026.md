## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Arc ve Mutex ile Paylaşımlı Vektör
#### ✅ Cevap 1026: Arc<Mutex<Vec<T>>> ile paylaşımlı vektör

`Arc<Mutex<Vec<T>>>`, birden fazla iş parçacığının aynı vektöre güvenli şekilde erişmesini ve eleman eklemesini sağlar. Her iş parçacığı vektörü kilitler, eleman ekler ve kilidi bırakır.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let vec = Arc::new(Mutex::new(Vec::new()));
    let mut handles = vec![];

    for i in 0..5 {
        let vec = Arc::clone(&vec);
        handles.push(thread::spawn(move || {
            let mut v = vec.lock().unwrap();
            v.push(i);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Vektör: {:?}", *vec.lock().unwrap());
}
```
