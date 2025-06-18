## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Future ve promise desenleri  
#### ✅ Cevap 1193: Future ve promise desenleri

Future ve promise desenleri, eşzamanlı işlemlerin sonucunu gelecekte almak için kullanılır. Rust'ta `Future` trait'i ile asenkron işlemler tanımlanır. Promise kavramı ise Rust'ta genellikle bir kanalla (ör. `oneshot`) bir değerin gelecekte sağlanması şeklinde karşılanır.

**Future örneği (async/await):**
```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let result = async_task().await;
    println!("Sonuç: {}", result);
}

async fn async_task() -> u32 {
    sleep(Duration::from_millis(100)).await;
    42
}
```

**Promise karşılığı:**
```rust
use tokio::sync::oneshot;
use tokio::spawn;

#[tokio::main]
async fn main() {
    let (tx, rx) = oneshot::channel();
    spawn(async move {
        tx.send(99).unwrap();
    });
    let value = rx.await.unwrap();
    println!("Promise sonucu: {}", value);
}
```

Future, işlemin sonucunu bekler; promise ise sonucu sağlayan bir "söz"dür. Rust'ta promise genellikle `oneshot` kanalı ile sağlanır.
