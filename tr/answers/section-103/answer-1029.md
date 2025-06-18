## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Barrier ile İş Parçacığı Koordinasyonu
#### ✅ Cevap 1029: Barrier ile iş parçacığı koordinasyonu

`Barrier`, birden fazla iş parçacığının belirli bir noktada buluşup birlikte devam etmesini sağlar. Aşağıda, 5 iş parçacığı bariyere ulaşana kadar bekler ve sonra birlikte devam eder.

```rust
use std::sync::{Arc, Barrier};
use std::thread;

fn main() {
    let barrier = Arc::new(Barrier::new(5));
    let mut handles = vec![];

    for i in 0..5 {
        let barrier = Arc::clone(&barrier);
        handles.push(thread::spawn(move || {
            println!("İş parçacığı {} bariyere ulaştı", i);
            barrier.wait();
            println!("İş parçacığı {} devam ediyor", i);
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }
}
```
