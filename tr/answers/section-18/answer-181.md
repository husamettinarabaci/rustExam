## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Thread Oluşturma  
#### ✅ Cevap 181: Rust'ta thread oluşturma ve join etme

Bu örnek, bir thread başlatıp `join` ile bitmesini beklemeyi gösterir.

```rust
use std::thread;

fn main() {
    let handle = thread::spawn(|| {
        println!("Oluşturulan thread'den merhaba!");
    });
    handle.join().unwrap();
}
```
