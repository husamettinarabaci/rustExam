## 📘 Bölüm: Sistem Programlama Ustalığı  
### 🔹 Kategori: Thread-Safe Önbellekler  
#### ✅ Cevap 593: Thread-safe önbellekler implementasyonu

Thread-safe önbellekler için Rust'ta genellikle Mutex veya RwLock kullanılır. Aşağıda Mutex ile basit bir önbellek örneği verilmiştir:

```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let cache = Arc::new(Mutex::new(HashMap::new()));
    let mut handles = vec![];
    for i in 0..10 {
        let cache = Arc::clone(&cache);
        handles.push(thread::spawn(move || {
            let mut map = cache.lock().unwrap();
            map.insert(i, i * 10);
        }));
    }
    for h in handles {
        h.join().unwrap();
    }
    let map = cache.lock().unwrap();
    println!("Cache: {:?}", *map);
}
```
