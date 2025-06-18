## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Veri Yarışlarını Önleme
#### ✅ Cevap 857: Rust'ın eşzamanlılık modeliyle veri yarışlarını önleme

Rust'ın sahiplik ve tip sistemi, aynı anda birden fazla thread'in aynı veriye erişmesini engeller. `Mutex`, `Arc` gibi tipler ile güvenli paylaşım sağlanır.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut num = data.lock().unwrap();
            *num += 1;
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Sonuç: {}", *data.lock().unwrap());
}
```

Derleyici, veri yarışlarını tip sistemiyle engeller.
