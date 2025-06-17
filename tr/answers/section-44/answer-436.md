## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: Mutex<T> ile özel erişim sağlama  
#### ✅ Cevap 436: Mutex<T> ile özel erişim sağlama

`Mutex<T>`, birden fazla thread'in aynı veriye güvenli şekilde erişmesini sağlar. Kilit mekanizması ile veri güncellenir.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..5 {
        let d = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut num = d.lock().unwrap();
            *num += 1;
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Sonuç: {}", *data.lock().unwrap());
}
```
