## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Thread Havuzları  
#### ✅ Cevap 185: Thread havuzu ile eşzamanlı görev yürütme

Thread havuzu, sabit sayıda thread'i tekrar tekrar kullanarak çok sayıda görevi çalıştırmanızı sağlar. `threadpool` crate'i bunun için basit bir API sunar.

```rust
use threadpool::ThreadPool;
use std::sync::mpsc::channel;

fn main() {
    let pool = ThreadPool::new(4);
    let (tx, rx) = channel();
    for i in 0..8 {
        let tx = tx.clone();
        pool.execute(move || {
            tx.send(i * i).unwrap();
        });
    }
    for _ in 0..8 {
        println!("Sonuç: {}", rx.recv().unwrap());
    }
}
```
