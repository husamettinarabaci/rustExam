## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Thread-safe önbellekler oluşturma  
#### ✅ Cevap 1065: Thread-safe önbellekler oluşturma

Thread-safe bir önbellek, birden fazla iş parçacığının aynı anda güvenli şekilde veri ekleyip okuyabildiği bir yapıdır. Rust'ta bu amaçla genellikle `Arc<Mutex<HashMap<...>>>` gibi yapılar kullanılır.

```rust
use std::collections::HashMap;
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let cache = Arc::new(Mutex::new(HashMap::new()));
    let mut handles = vec![];
    for i in 0..5 {
        let cache = Arc::clone(&cache);
        handles.push(thread::spawn(move || {
            let mut map = cache.lock().unwrap();
            map.insert(i, i * 10);
        }));
    }
    for h in handles { h.join().unwrap(); }
    let map = cache.lock().unwrap();
    println!("Cache: {:?}", *map);
}
```
Bu örnekte, her iş parçacığı önbelleğe veri ekler ve sonuçta tüm veriler güvenli şekilde saklanır.
