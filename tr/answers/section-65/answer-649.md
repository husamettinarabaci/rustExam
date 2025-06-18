## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 649: Çok iş parçacıklı kodda kilit rekabetini önleme

Kilit rekabeti, birden fazla iş parçacığının aynı anda aynı kilidi almak istemesiyle oluşur ve performansı düşürür. Bunu önlemek için: kilit kapsamını daraltmak, lock-free veri yapıları kullanmak veya iş parçacıklarını farklı veri parçalarına yönlendirmek gerekir.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(vec![0; 10]));
    let mut handles = vec![];
    for i in 0..10 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut v = data.lock().unwrap();
            v[i] = i;
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```

Kilit kapsamını daraltmak ve mümkünse veri paylaşımını azaltmak lock contention'ı önler.
