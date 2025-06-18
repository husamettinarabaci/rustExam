## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Async mutex ve kilitleri etkin kullanma
#### ✅ Cevap 1155: Async hız sınırlama teknikleri

Bu soruda, birden fazla async işlemin aynı anda çalışmasını sınırlamak için hız sınırlama (rate limiting) uygulanır. Rust'ta `tokio::sync::Semaphore` veya `tokio::time::Interval` gibi yapılar kullanılabilir.

```rust
use tokio::sync::Semaphore;
use std::sync::Arc;
use tokio::time::{sleep, Duration};

async fn do_work(id: usize) {
    println!("Task {} started", id);
    sleep(Duration::from_secs(1)).await;
    println!("Task {} finished", id);
}

#[tokio::main]
async fn main() {
    let semaphore = Arc::new(Semaphore::new(2)); // En fazla 2 eşzamanlı işlem
    let mut handles = vec![];
    for i in 0..5 {
        let permit = semaphore.clone().acquire_owned().await.unwrap();
        handles.push(tokio::spawn(async move {
            do_work(i).await;
            drop(permit);
        }));
    }
    for h in handles { h.await.unwrap(); }
}
```
