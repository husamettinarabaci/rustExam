## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Paralel algoritmalarda veri yarışlarını önleme  
#### ✅ Cevap 1088: Paralel algoritmalarda veri yarışlarını önleme

Veri yarışını önlemek için Mutex gibi senkronizasyon araçları kullanılır. Bu örnekte, paralel çalışan iş parçacıkları aynı veriye güvenli şekilde erişir.

```rust
use rayon::prelude::*;
use std::sync::{Arc, Mutex};

fn main() {
    let data = Arc::new(Mutex::new(vec![]));
    (0..10).into_par_iter().for_each(|i| {
        let mut v = data.lock().unwrap();
        v.push(i);
    });
    println!("Veri: {:?}", *data.lock().unwrap());
}
```
