## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Async ortamlarda senkronizasyon
#### ✅ Cevap 1138: Async ortamlarda senkronizasyon

Async Rust ortamında, `tokio::sync::Mutex` gibi async primitifler kullanılır. Bunlar, asenkron görevler arasında veri yarışını önler.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d = data.clone();
    tokio::spawn(async move {
        let mut val = d.lock().await;
        *val += 1;
    }).await.unwrap();
    println!("Sonuç: {}", *data.lock().await);
}
```
Bu örnekte, async ortamda güvenli veri paylaşımı sağlanır.
