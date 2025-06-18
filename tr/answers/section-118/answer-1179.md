## 📘 Bölüm: Kilitsiz Veri Yapıları
### 🔹 Kategori: Kilitsiz programlama ilkeleri
#### ✅ Cevap 1179: Kilitsiz kodu hata ayıklama

Bu örnekte, iki thread'in aynı değişkeni atomik olmayan şekilde güncellemesiyle yarış durumu oluşur. `println!` ile çıktılar gözlemlenebilir. Gerçek uygulamalarda atomik tipler ve senkronizasyon kullanılmalıdır.

```rust
use std::thread;
use std::sync::Arc;

fn main() {
    let data = Arc::new(std::cell::Cell::new(0));
    let mut handles = vec![];
    for _ in 0..2 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            for _ in 0..1000 {
                let val = data.get();
                data.set(val + 1);
            }
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Final value: {}", data.get()); // Genellikle 2000 olmaz!
}
```
