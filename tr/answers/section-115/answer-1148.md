## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Eşzamanlı İş Yüklerini Benchmark Etme  
#### ✅ Cevap 1148: Eşzamanlı iş yüklerini benchmark etme

Eşzamanlı bir işlemin benchmark'ı için `std::time::Instant` ile süre ölçülür. Sonuçlar, işlemin performansını değerlendirmek için kullanılır.

```rust
use std::thread;
use std::sync::{Arc, Mutex};
use std::time::Instant;

let counter = Arc::new(Mutex::new(0));
let now = Instant::now();
let mut handles = vec![];
for _ in 0..10 {
    let counter = Arc::clone(&counter);
    handles.push(thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    }));
}
for h in handles { h.join().unwrap(); }
println!("Elapsed: {:?}", now.elapsed());
```
