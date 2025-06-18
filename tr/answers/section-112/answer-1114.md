## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Bağlantı havuzlarını asenkron yönetme  
#### ✅ Cevap 1114: Bağlantı havuzlarını asenkron yönetme

Çözümde, birden fazla async görev bir bağlantı havuzundan bağlantı alıp kullandıktan sonra geri bırakır. `tokio::sync::Semaphore` ile havuz yönetimi sağlanır.

```rust
use tokio::sync::Semaphore;
use std::sync::Arc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let pool = Arc::new(Semaphore::new(2));
    let mut handles = vec![];
    for i in 0..4 {
        let pool = pool.clone();
        handles.push(tokio::spawn(async move {
            let permit = pool.acquire().await.unwrap();
            println!("Görev {i} bağlantı aldı");
            sleep(Duration::from_millis(100)).await;
            drop(permit);
            println!("Görev {i} bağlantıyı bıraktı");
        }));
    }
    for h in handles { h.await.unwrap(); }
}
```
