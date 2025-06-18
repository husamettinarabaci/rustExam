## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Deadlock önleme stratejileri  
#### ✅ Cevap 1199: Deadlock önleme stratejileri

Deadlock (kilitlenme), iki veya daha fazla iş parçacığının birbirini beklemesiyle oluşan bir durumdur. Rust'ta genellikle iki kilidin ters sırayla alınmasıyla ortaya çıkar.

**Deadlock örneği:**
```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(0));
    let b = Arc::new(Mutex::new(0));
    let a1 = Arc::clone(&a);
    let b1 = Arc::clone(&b);
    let t1 = thread::spawn(move || {
        let _lock_a = a1.lock().unwrap();
        let _lock_b = b1.lock().unwrap();
    });
    let a2 = Arc::clone(&a);
    let b2 = Arc::clone(&b);
    let t2 = thread::spawn(move || {
        let _lock_b = b2.lock().unwrap();
        let _lock_a = a2.lock().unwrap();
    });
    t1.join().unwrap();
    t2.join().unwrap();
}
```

**Önleme stratejileri:**
- Kilitleri her zaman aynı sırayla almak
- Zaman aşımı kullanmak
- Kilit sayısını azaltmak

Aynı sırayla kilit almak deadlock'u önlemenin en yaygın yoludur.
