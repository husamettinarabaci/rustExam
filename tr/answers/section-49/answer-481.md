## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: Minimal Axum Sunucusu  
#### ✅ Cevap 481: Minimal bir Axum sunucusu kurma

Bu soruda, Axum ile en temel HTTP sunucusunu kuruyorsunuz. `axum` ve `tokio` bağımlılıkları ile başlatılan sunucu, kök (`/`) yoluna gelen isteklere "Hello, Axum!" yanıtı döner. Sunucu, 3000 portunda dinler.

```rust
use axum::{routing::get, Router};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(|| async { "Hello, Axum!" }));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Listening on {}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
