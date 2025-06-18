## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread Performansını Ölçme  
#### ✅ Cevap 1168: Thread performansını ölçme

Bu örnekte, her thread'in çalışma süresi ve toplam süre ölçülür. Her thread başında ve sonunda zaman damgası alınır, süreler hesaplanır ve ekrana yazdırılır.

```rust
use std::thread;
use std::time::{Duration, Instant};

fn main() {
    let start = Instant::now();
    let mut handles = vec![];
    for i in 0..4 {
        handles.push(thread::spawn(move || {
            let t_start = Instant::now();
            thread::sleep(Duration::from_millis(100 * (i + 1)));
            let t_elapsed = t_start.elapsed();
            println!("Thread {} çalışma süresi: {:?}", i, t_elapsed);
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Toplam geçen süre: {:?}", start.elapsed());
}
```
