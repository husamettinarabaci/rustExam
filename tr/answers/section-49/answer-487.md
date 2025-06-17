## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: Paylaşılan Durum Yönetimi  
#### ✅ Cevap 487: `Arc` ve paylaşılan veri ile durum yönetimi

Bu soruda, Axum'da `Arc` ve uygun bir senkronizasyon tipi (ör. `Mutex`) ile paylaşılan bir sayaç yönetilir. Handler fonksiyonu, bu durumu okuyup günceller.

```rust
use axum::{extract::State, routing::get, Router};
use std::{net::SocketAddr, sync::{Arc, Mutex}};

async fn get_count(State(count): State<Arc<Mutex<u32>>>) -> String {
    let mut count = count.lock().unwrap();
    *count += 1;
    format!("Count: {}", *count)
}

#[tokio::main]
async fn main() {
    let count = Arc::new(Mutex::new(0));
    let app = Router::new()
        .route("/count", get(get_count))
        .with_state(count);
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
