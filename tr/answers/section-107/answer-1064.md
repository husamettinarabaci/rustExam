## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Bariyerlerle eşzamanlı görev koordinasyonu  
#### ✅ Cevap 1064: Bariyerlerle eşzamanlı görev koordinasyonu

Bariyer (barrier), birden fazla iş parçacığının belirli bir noktada buluşup birlikte devam etmesini sağlayan bir senkronizasyon aracıdır. Rust'ta `std::sync::Barrier` ile kullanılır.

```rust
use std::sync::{Arc, Barrier};
use std::thread;

fn main() {
    let barrier = Arc::new(Barrier::new(3));
    let mut handles = vec![];
    for i in 0..3 {
        let c = Arc::clone(&barrier);
        handles.push(thread::spawn(move || {
            println!("Thread {} bariyere ulaştı", i);
            c.wait();
            println!("Thread {} devam ediyor", i);
        }));
    }
    for h in handles {
        h.join().unwrap();
    }
}
```
Bu örnekte, üç iş parçacığı bariyere ulaştığında hepsi birlikte devam eder.
