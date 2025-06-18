## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon  
### 🔹 Kategori: Kilitsiz Veri Yapıları ve Atomikler  
#### ✅ Cevap 751: Kilitsiz veri yapıları implementasyonu

Bu soruda, `std::sync::atomic::AtomicUsize` kullanılarak kilitsiz bir sayaç veri yapısı oluşturulur. Atomik tipler, çoklu iş parçacığında veri yarışını önler ve kilit kullanmadan güvenli artırım sağlar. Birden fazla iş parçacığı ile sayaç artırılır ve sonuç doğrulanır.

```rust
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;

struct LockFreeCounter {
    value: AtomicUsize,
}

impl LockFreeCounter {
    fn new() -> Self {
        Self { value: AtomicUsize::new(0) }
    }
    fn increment(&self) {
        self.value.fetch_add(1, Ordering::SeqCst);
    }
    fn get(&self) -> usize {
        self.value.load(Ordering::SeqCst)
    }
}

fn main() {
    let counter = Arc::new(LockFreeCounter::new());
    let mut handles = vec![];
    for _ in 0..10 {
        let c = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            for _ in 0..1000 {
                c.increment();
            }
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Final count: {}", counter.get()); // 10000
}
```
