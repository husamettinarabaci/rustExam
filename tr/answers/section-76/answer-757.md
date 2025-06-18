## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon
### 🔹 Kategori: Kilitsiz Veri Yapıları
#### ✅ Cevap 757: Deadlock ve livelock yönetimi

Deadlock, iki veya daha fazla thread'in birbirini beklemesi sonucu programın ilerleyememesi durumudur. Livelock ise thread'lerin sürekli aktif olup ilerleyememesi durumudur.

Deadlock örneği:
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
        thread::sleep(std::time::Duration::from_millis(10));
        let _lock_b = b1.lock().unwrap();
    });
    let a2 = Arc::clone(&a);
    let b2 = Arc::clone(&b);
    let t2 = thread::spawn(move || {
        let _lock_b = b2.lock().unwrap();
        thread::sleep(std::time::Duration::from_millis(10));
        let _lock_a = a2.lock().unwrap();
    });
    t1.join().unwrap();
    t2.join().unwrap();
}
```

Deadlock ve livelock'u önlemek için:
- Kilit alma sırasını sabit tutmak
- Zaman aşımı ile kilit almak
- Daha küçük kilitli alanlar kullanmak
- Atomik işlemler ve lock-free yapılar tercih etmek

Bu teknikler, çok iş parçacıklı programlarda kilitlenme riskini azaltır.
