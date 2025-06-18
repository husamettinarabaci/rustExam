## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: RwLock ile Okuma ve Yazma
#### ✅ Cevap 1022: RwLock ile eşzamanlı okuma ve yazma

`RwLock`, birden fazla iş parçacığının aynı anda veriyi okumasına izin verirken, yalnızca bir iş parçacığının yazmasına olanak tanır. Bu, okuma ağırlıklı senaryolarda performansı artırır. Aşağıdaki örnekte, birden fazla iş parçacığı veriyi okurken, bazıları da veriyi günceller.

```rust
use std::sync::{Arc, RwLock};
use std::thread;

fn main() {
    let data = Arc::new(RwLock::new(0));
    let mut handles = vec![];

    // Okuyucular
    for _ in 0..5 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let val = data.read().unwrap();
            println!("Okunan değer: {}", *val);
        }));
    }

    // Yazarlar
    for _ in 0..2 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut val = data.write().unwrap();
            *val += 1;
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Son değer: {}", *data.read().unwrap());
}
```
