## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon
### 🔹 Kategori: Kilitsiz Veri Yapıları
#### ✅ Cevap 755: Okuma için optimize edilmiş `RwLock` kullanımı

`RwLock`, birden fazla thread'in aynı anda veri okumasına izin verirken, yalnızca bir thread'in yazmasına izin verir. Okuma ağırlıklı iş yüklerinde, okuma işlemleri birbirini engellemez ve performans artar.

```rust
use std::sync::{Arc, RwLock};
use std::thread;

fn main() {
    let data = Arc::new(RwLock::new(0));
    let mut handles = vec![];
    // Okuyucu thread'ler
    for _ in 0..5 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let val = data.read().unwrap();
            println!("Read value: {}", *val);
        }));
    }
    // Yazıcı thread
    {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut val = data.write().unwrap();
            *val += 1;
            println!("Wrote value: {}", *val);
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```

`RwLock`, okuma işlemlerinin paralel yapılmasını sağlar. Sadece yazma sırasında tüm okuma ve diğer yazma işlemleri engellenir. Bu, okuma ağırlıklı uygulamalarda önemli bir avantajdır.
