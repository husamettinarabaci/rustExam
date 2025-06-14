## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Paylaşılan Durum  
#### ✅ Cevap 183: Paylaşılan durum için Mutex kullanımı

Bu örnek, birden fazla thread'in `Mutex` ve `Arc` ile paylaşılan bir değeri güvenli şekilde değiştirmesini gösterir.

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
