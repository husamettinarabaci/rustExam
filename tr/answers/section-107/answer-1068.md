## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Karmaşık eşzamanlılıkta deadlock önleme  
#### ✅ Cevap 1068: Karmaşık eşzamanlılıkta deadlock önleme

Deadlock (kilitlenme), iki veya daha fazla iş parçacığının birbirini beklemesiyle oluşan ve ilerlemenin durduğu bir durumdur. Rust'ta deadlock'ı önlemek için kilit alma sırasını sabit tutmak, zaman aşımı kullanmak veya mümkünse lock-free yapılar tercih etmek gerekir.

Deadlock örneği:
```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let a = Arc::new(Mutex::new(0));
    let b = Arc::new(Mutex::new(0));
    let a1 = Arc::clone(&a);
    let b1 = Arc::clone(&b);
    let h1 = thread::spawn(move || {
        let _lock_a = a1.lock().unwrap();
        let _lock_b = b1.lock().unwrap();
    });
    let a2 = Arc::clone(&a);
    let b2 = Arc::clone(&b);
    let h2 = thread::spawn(move || {
        let _lock_b = b2.lock().unwrap();
        let _lock_a = a2.lock().unwrap();
    });
    h1.join().unwrap();
    h2.join().unwrap();
}
```
Çözüm: Her iki thread de kilitleri aynı sırayla almalı veya lock'lar birleştirilmeli.

```rust
// Her iki thread de önce 'a', sonra 'b' kilidini alırsa deadlock oluşmaz.
```
Ayrıca, `try_lock` veya zaman aşımı ile de deadlock riski azaltılabilir.
