## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: Unsafe kodda veri yarışlarını önleme
#### ✅ Cevap 657: Unsafe kodda veri yarışlarını önleme

Veri yarışı, iki thread aynı belleğe eşzamanlı eriştiğinde ve en az biri yazma yaptığında, senkronizasyon yoksa oluşur. Unsafe kodda veri yarışı kolayca oluşabilir.

```rust
use std::thread;
use std::sync::Arc;

fn main() {
    let data = Arc::new(std::sync::Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..2 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut num = data.lock().unwrap();
            *num += 1;
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```

Unsafe kodda veri yarışını önlemek için daima senkronizasyon primitifleri kullanın.
