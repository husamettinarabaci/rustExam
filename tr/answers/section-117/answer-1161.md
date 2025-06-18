## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread Havuzları ve Kontrolü  
#### ✅ Cevap 1161: Rust'ta thread havuzlarını kontrol etme

Bu örnekte, `threadpool` veya benzeri bir crate ile bir thread havuzu oluşturulur. Görevler havuza gönderilir ve tamamlanmaları beklenir. Thread havuzunun thread sayısı başta belirtilir.

```rust
use threadpool::ThreadPool;
use std::sync::mpsc::channel;
use std::thread;

fn main() {
    let pool = ThreadPool::new(4); // 4 threadli havuz
    let (tx, rx) = channel();
    for i in 0..8 {
        let tx = tx.clone();
        pool.execute(move || {
            println!("Görev {} çalışıyor", i);
            tx.send(i).unwrap();
        });
    }
    for _ in 0..8 {
        rx.recv().unwrap();
    }
    println!("Tüm görevler tamamlandı.");
}
```
