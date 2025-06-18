## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Thread-safe önbellek stratejileri  
#### ✅ Cevap 1195: Thread-safe önbellek stratejileri

Thread-safe önbellekler, birden fazla iş parçacığının aynı anda güvenli şekilde veri okuyup yazabilmesini sağlar. Rust'ta bu genellikle `Mutex`, `RwLock` veya atomik tiplerle sağlanır.

**Basit thread-safe önbellek örneği:**
```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let cache = Arc::new(Mutex::new(HashMap::new()));
    let mut handles = vec![];
    for i in 0..4 {
        let cache = Arc::clone(&cache);
        handles.push(thread::spawn(move || {
            let mut map = cache.lock().unwrap();
            map.insert(i, i * 10);
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Cache: {:?}", cache.lock().unwrap());
}
```

Thread-safe önbellekler, çok iş parçacıklı web sunucuları, paralel veri işleme ve paylaşımlı kaynaklarda gereklidir.
