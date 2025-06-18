## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon
### 🔹 Kategori: Kilitsiz Veri Yapıları
#### ✅ Cevap 759: Thread sinyali için koşul değişkenleri kullanımı

Koşul değişkeni (`Condvar`), bir thread'in belirli bir koşul gerçekleşene kadar beklemesini ve başka bir thread'in bu koşulu sinyal ile bildirmesini sağlar.

```rust
use std::sync::{Arc, Mutex, Condvar};
use std::thread;

fn main() {
    let pair = Arc::new((Mutex::new(false), Condvar::new()));
    let pair2 = Arc::clone(&pair);
    thread::spawn(move || {
        let (lock, cvar) = &*pair2;
        let mut started = lock.lock().unwrap();
        *started = true;
        cvar.notify_one();
    });
    let (lock, cvar) = &*pair;
    let mut started = lock.lock().unwrap();
    while !*started {
        started = cvar.wait(started).unwrap();
    }
    println!("Thread sinyali alındı!");
}
```

`Condvar`, thread'ler arası koordinasyon ve bekleme/sinyal mekanizması sağlar. Bu, kaynak bekleyen thread'lerin verimli şekilde uyandırılmasını mümkün kılar.
