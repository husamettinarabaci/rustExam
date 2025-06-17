## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: Yönlendirici Yapılandırma  
#### ✅ Cevap 489: `Router::nest` ile yönlendirici yapılandırma

Bu soruda, Axum'da `Router::nest` ile `/api` altında birden fazla endpoint barındıran alt yönlendirici oluşturulur ve ana yönlendiriciye eklenir.

```rust
use axum::{routing::get, Router};
use std::net::SocketAddr;

async fn hello() -> &'static str {
    "Hello from /api/hello"
}

async fn status() -> &'static str {
    "Status: OK"
}

#[tokio::main]
async fn main() {
    let api_router = Router::new()
        .route("/hello", get(hello))
        .route("/status", get(status));
    let app = Router::new().nest("/api", api_router);
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
