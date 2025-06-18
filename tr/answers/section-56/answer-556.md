## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Rust'ta görev zamanlayıcı implementasyonu  
#### ✅ Cevap 556: Rust'ta görev zamanlayıcı implementasyonu

Bu soruda, birden fazla async görevi belirli aralıklarla çalıştıran basit bir zamanlayıcı (scheduler) uyguladınız. `tokio::time::interval` ile görevler periyodik olarak tetiklenebilir.

```rust
use tokio::time::{interval, Duration};

#[tokio::main]
async fn main() {
    let mut int1 = interval(Duration::from_millis(300));
    let mut int2 = interval(Duration::from_millis(500));

    let t1 = tokio::spawn(async move {
        for _ in 0..3 {
            int1.tick().await;
            println!("Task 1 running");
        }
    });
    let t2 = tokio::spawn(async move {
        for _ in 0..2 {
            int2.tick().await;
            println!("Task 2 running");
        }
    });
    let _ = tokio::join!(t1, t2);
}
```
