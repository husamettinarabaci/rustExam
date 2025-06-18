## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Mutex iç yapısını anlama
#### ✅ Cevap 1132: Mutex iç yapısını anlama

Mutex, bir kaynağa aynı anda sadece bir thread'in erişmesini sağlar. İçeride bir bayrak (flag) veya atomik değişken ile kilit tutulur. Thread kilidi aldığında diğerleri bekler.

```rust
use std::sync::{Mutex, Arc};
use std::thread;

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
```
Bu örnekte, Mutex veri yarışını önler ve güvenli erişim sağlar.
