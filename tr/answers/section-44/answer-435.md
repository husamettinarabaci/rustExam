## 📘 Bölüm: Akıllı İşaretçiler ve Kaynak Yönetimi  
### 🔹 Kategori: İş parçacığı güvenli referans sayımı için Arc<T> kullanımı  
#### ✅ Cevap 435: İş parçacığı güvenli referans sayımı için Arc<T> kullanımı

`Arc<T>`, çoklu iş parçacığında veri paylaşımı için kullanılır. Thread-safe referans sayımı sağlar.

```rust
use std::sync::Arc;
use std::thread;

fn main() {
    let data = Arc::new(100);
    let mut handles = vec![];
    for _ in 0..3 {
        let d = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            println!("Veri: {}", d);
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```
