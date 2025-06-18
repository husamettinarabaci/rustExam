## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Unsafe kod ile eşzamanlılığı güvenli yönetme  
#### ✅ Cevap 810: Unsafe kod ile eşzamanlılığı güvenli yönetme

Aşağıda, `UnsafeCell` ve `std::sync::Mutex` ile unsafe kod kullanarak eşzamanlılığı güvenli yöneten bir sayaç örneği verilmiştir.

```rust
use std::cell::UnsafeCell;
use std::sync::{Mutex, Arc};
use std::thread;

pub struct ThreadSafeCounter {
    value: UnsafeCell<i32>,
    lock: Mutex<()>,
}

unsafe impl Send for ThreadSafeCounter {}
unsafe impl Sync for ThreadSafeCounter {}

impl ThreadSafeCounter {
    pub fn new(val: i32) -> Self {
        Self { value: UnsafeCell::new(val), lock: Mutex::new(()) }
    }
    pub fn increment(&self) {
        let _guard = self.lock.lock().unwrap();
        unsafe { *self.value.get() += 1; }
    }
    pub fn get(&self) -> i32 {
        let _guard = self.lock.lock().unwrap();
        unsafe { *self.value.get() }
    }
}

fn main() {
    let counter = Arc::new(ThreadSafeCounter::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let c = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            c.increment();
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("{}", counter.get());
}
```

Burada, Mutex ile erişim korunur ve unsafe ile içsel değiştirilebilirlik sağlanır.
