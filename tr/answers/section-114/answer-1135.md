## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Okuyucu-yazıcı kilitleri ve performans
#### ✅ Cevap 1135: Okuyucu-yazıcı kilitleri ve performans

RwLock, birden fazla okuyucuya veya tek bir yazıcıya izin verir. Okuma işlemleri paralel, yazma işlemi ise tektir.

```rust
use std::sync::{Arc, RwLock};
use std::thread;

let data = Arc::new(RwLock::new(0));
let readers: Vec<_> = (0..5).map(|_| {
    let data = Arc::clone(&data);
    thread::spawn(move || {
        let val = data.read().unwrap();
        println!("Okunan: {}", *val);
    })
}).collect();
for r in readers { r.join().unwrap(); }
```
Bu yapı, okuma işlemlerinde yüksek performans sağlar.
