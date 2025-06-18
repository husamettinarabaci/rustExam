## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Atomiklerle paylaşımlı durum yönetimi  
#### ✅ Cevap 1066: Atomiklerle paylaşımlı durum yönetimi

Atomik tipler, birden fazla iş parçacığının aynı anda veri üzerinde yarışmadan güvenli şekilde işlem yapmasını sağlar. Rust'ta `AtomicUsize` gibi tipler ile sayaçlar thread-safe yönetilebilir.

```rust
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;

fn main() {
    let counter = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            for _ in 0..1000 {
                counter.fetch_add(1, Ordering::SeqCst);
            }
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Sayaç: {}", counter.load(Ordering::SeqCst));
}
```
Bu örnekte, 10 iş parçacığı toplamda 10.000 kez sayacı güvenli şekilde artırır.
