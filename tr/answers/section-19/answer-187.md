## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Atomik Tipler  
#### ✅ Cevap 187: Kilitsiz eşzamanlılık için atomik tipler kullanımı

Bu örnek, `AtomicUsize` ile kilitsiz eşzamanlılık sağlar.

```rust
use std::sync::Arc;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::thread;

fn main() {
    let counter = Arc::new(AtomicUsize::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            counter.fetch_add(1, Ordering::SeqCst);
        });
        handles.push(handle);
    }
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Sonuç: {}", counter.load(Ordering::SeqCst));
}
```
