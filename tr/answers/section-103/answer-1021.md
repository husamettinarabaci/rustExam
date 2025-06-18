## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: RwLock ile Okuma ve Yazma
#### ✅ Cevap 1021: Paylaşımlı değiştirilebilir durum için Arc<Mutex<T>>

`Arc<Mutex<T>>`, birden fazla iş parçacığının aynı veriye güvenli şekilde erişmesini sağlar. `Arc` (Atomic Reference Counted), verinin birden fazla iş parçacığı arasında paylaşılmasına izin verirken, `Mutex` ise aynı anda yalnızca bir iş parçacığının verilere erişmesini garanti eder. Bu kombinasyon, paylaşımlı ve değiştirilebilir durumlar için yaygın bir çözümdür.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Sonuç: {}", *counter.lock().unwrap());
}
```
