## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Deadlock'lar  
#### ✅ Cevap 184: Deadlock nedir ve nasıl önlenir?

Deadlock, iki veya daha fazla thread'in birbirinden kaynak beklemesi nedeniyle sonsuza kadar beklemesi durumudur. Rust'ta bu, birden fazla mutex ile yaşanabilir.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(1));
    let b = Arc::new(Mutex::new(2));
    let a1 = Arc::clone(&a);
    let b1 = Arc::clone(&b);
    let handle = thread::spawn(move || {
        let _lock_a = a1.lock().unwrap();
        let _lock_b = b1.lock().unwrap();
    });
    let _lock_b = b.lock().unwrap();
    let _lock_a = a.lock().unwrap();
    handle.join().unwrap();
}
```
Deadlock'tan kaçınmak için tüm thread'lerde kilitleri aynı sırayla almaya özen gösterin.
