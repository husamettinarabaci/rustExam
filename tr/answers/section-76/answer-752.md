## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon  
### 🔹 Kategori: Kilitsiz Veri Yapıları ve Atomikler  
#### ✅ Cevap 752: `std::sync::atomic` ile atomik tipler kullanımı

Bu soruda, `std::sync::atomic` modülündeki farklı atomik tipler (`AtomicBool`, `AtomicIsize`, `AtomicUsize`) ile temel işlemler gösterilir. Atomik değişkenler, çoklu iş parçacığında veri yarışını önler ve thread-safe çalışır.

```rust
use std::sync::atomic::{AtomicBool, AtomicIsize, AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;

fn main() {
    let flag = Arc::new(AtomicBool::new(false));
    let num = Arc::new(AtomicIsize::new(0));
    let count = Arc::new(AtomicUsize::new(0));

    // AtomicBool örneği
    let f = Arc::clone(&flag);
    let t1 = thread::spawn(move || {
        f.store(true, Ordering::SeqCst);
    });
    t1.join().unwrap();
    println!("Flag: {}", flag.load(Ordering::SeqCst));

    // AtomicIsize örneği
    let n = Arc::clone(&num);
    let t2 = thread::spawn(move || {
        n.fetch_add(5, Ordering::SeqCst);
    });
    t2.join().unwrap();
    println!("Num: {}", num.load(Ordering::SeqCst));

    // AtomicUsize ile çoklu thread
    let mut handles = vec![];
    for _ in 0..4 {
        let c = Arc::clone(&count);
        handles.push(thread::spawn(move || {
            for _ in 0..1000 {
                c.fetch_add(1, Ordering::SeqCst);
            }
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Count: {}", count.load(Ordering::SeqCst)); // 4000
}
```
