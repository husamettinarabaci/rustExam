## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Paralel hesaplamalarda senkronizasyon  
#### ✅ Cevap 1084: Paralel hesaplamalarda senkronizasyon

Paralel işlemlerde paylaşılan veriye erişim için senkronizasyon gerekir. Bu örnekte, bir sayaç `Mutex` ile korunur ve Rayon ile paralel olarak artırılır.

```rust
use rayon::prelude::*;
use std::sync::{Arc, Mutex};

fn main() {
    let counter = Arc::new(Mutex::new(0));
    (0..1000).into_par_iter().for_each(|_| {
        let mut num = counter.lock().unwrap();
        *num += 1;
    });
    println!("Sayaç: {}", *counter.lock().unwrap());
}
```
