## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Sinyal için `Condvar` kullanımı
#### ✅ Cevap 1134: Sinyal için `Condvar` kullanımı

`Condvar`, bir thread'in diğerini uyandırmasını sağlar. Bir koşul sağlandığında bekleyen thread'ler uyandırılır.

```rust
use std::sync::{Arc, Mutex, Condvar};
use std::thread;

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
println!("Thread uyandı!");
```
Bu örnekte, bir thread diğerini `Condvar` ile uyandırır.
