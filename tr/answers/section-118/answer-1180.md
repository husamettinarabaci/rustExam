## 📘 Bölüm: Kilitsiz Veri Yapıları
### 🔹 Kategori: Kilitsiz programlama ilkeleri
#### ✅ Cevap 1180: Kilitsiz algoritmaların performans testi

Bu örnekte, atomik bir sayaç üzerinde farklı thread sayılarıyla artış işlemi yapılır ve süre ölçülür. Sonuçlar, kilitsiz algoritmanın ölçeklenebilirliğini gösterir.

```rust
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;
use std::thread;
use std::time::Instant;

fn main() {
    let thread_counts = [1, 2, 4, 8];
    let increments = 1_000_000;
    for &threads in &thread_counts {
        let counter = Arc::new(AtomicUsize::new(0));
        let start = Instant::now();
        let mut handles = vec![];
        for _ in 0..threads {
            let counter = Arc::clone(&counter);
            handles.push(thread::spawn(move || {
                for _ in 0..(increments / threads) {
                    counter.fetch_add(1, Ordering::Relaxed);
                }
            }));
        }
        for h in handles { h.join().unwrap(); }
        let duration = start.elapsed();
        println!("Threads: {}, Time: {:?}, Final: {}", threads, duration, counter.load(Ordering::Relaxed));
    }
}
```
