## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Eşzamanlı okuma için tokio::sync::RwLock kullanımı  
#### ✅ Cevap 555: Eşzamanlı okuma için `tokio::sync::RwLock` kullanımı

Bu soruda, `tokio::sync::RwLock` ile birden fazla async görevin aynı anda okuma yapabildiği, ancak yazma sırasında okuma işlemlerinin bekletildiği bir senaryo öğrendiniz.

```rust
use tokio::sync::RwLock;
use std::sync::Arc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let data = Arc::new(RwLock::new(0));
    let d1 = data.clone();
    let d2 = data.clone();
    let d3 = data.clone();

    let reader1 = tokio::spawn(async move {
        let r = d1.read().await;
        println!("Reader 1: value = {}", *r);
        sleep(Duration::from_millis(200)).await;
    });
    let reader2 = tokio::spawn(async move {
        let r = d2.read().await;
        println!("Reader 2: value = {}", *r);
        sleep(Duration::from_millis(200)).await;
    });
    let writer = tokio::spawn(async move {
        sleep(Duration::from_millis(100)).await;
        let mut w = d3.write().await;
        *w += 1;
        println!("Writer: value updated to {}", *w);
    });
    let _ = tokio::join!(reader1, reader2, writer);
}
```
