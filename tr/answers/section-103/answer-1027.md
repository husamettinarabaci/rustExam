## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Arc ve RwLock ile Paylaşımlı HashMap
#### ✅ Cevap 1027: Arc<RwLock<HashMap<K, V>>> ile paylaşımlı HashMap

`Arc<RwLock<HashMap<K, V>>>`, birden fazla iş parçacığının aynı HashMap üzerinde güvenli şekilde okuma ve yazma işlemleri yapmasını sağlar. Okuyucular aynı anda erişebilirken, yazıcılar tek başına erişir.

```rust
use std::collections::HashMap;
use std::sync::{Arc, RwLock};
use std::thread;

fn main() {
    let map = Arc::new(RwLock::new(HashMap::new()));
    let mut handles = vec![];

    // Yazarlar
    for i in 0..3 {
        let map = Arc::clone(&map);
        handles.push(thread::spawn(move || {
            let mut m = map.write().unwrap();
            m.insert(format!("key{}", i), i);
        }));
    }

    // Okuyucular
    for _ in 0..2 {
        let map = Arc::clone(&map);
        handles.push(thread::spawn(move || {
            let m = map.read().unwrap();
            println!("Okunan: {:?}", *m);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Son HashMap: {:?}", *map.read().unwrap());
}
```
