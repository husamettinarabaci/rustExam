## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Threadler Arası İletişim  
#### ✅ Cevap 182: Threadler arası veri iletimi için channel kullanımı

Bu örnek, threadler arası veri iletimi için channel kullanımını gösterir.

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    thread::spawn(move || {
        tx.send(42).unwrap();
    });
    let value = rx.recv().unwrap();
    println!("Alındı: {}", value);
}
```
