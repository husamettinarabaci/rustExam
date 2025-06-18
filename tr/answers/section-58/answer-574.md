## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: Çok İş Parçacıklı Render ve Güncellemeler
#### ✅ Cevap 574: Çok iş parçacıklı render ve güncellemeler

Çok iş parçacıklı render ve güncellemeler, oyun motorlarında performansı artırmak için kullanılır. Birden fazla thread ile iş yükü (ör. fizik, render, AI) paralel işlenir. Rust'ta `std::thread` ile temel bir paralel güncelleme örneği:

```rust
use std::thread;

let handles: Vec<_> = (0..4).map(|i| {
    thread::spawn(move || {
        // Her thread kendi işini yapar
        println!("Thread {} çalışıyor", i);
    })
}).collect();
for h in handles { h.join().unwrap(); }
```
