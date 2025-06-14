## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Thread Güvenliği  
#### ✅ Cevap 188: Özel tiplerde thread güvenliği sağlama

Özel bir struct'ı thread güvenli yapmak için `Arc<Mutex<T>>` ile thread'ler arasında güvenli paylaşım ve değişiklik sağlanabilir.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

struct Veri {
    deger: i32,
}

fn main() {
    let veri = Arc::new(Mutex::new(Veri { deger: 0 }));
    let mut handles = vec![];
    for _ in 0..5 {
        let veri = Arc::clone(&veri);
        let handle = thread::spawn(move || {
            let mut v = veri.lock().unwrap();
            v.deger += 1;
        });
        handles.push(handle);
    }
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Son değer: {}", veri.lock().unwrap().deger);
}
```
