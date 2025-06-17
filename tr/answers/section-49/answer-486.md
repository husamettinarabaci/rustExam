## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: Ara Katman (Middleware) Kullanımı  
#### ✅ Cevap 486: Kayıt ve CORS için ara katman ekleme

Bu soruda, Axum uygulamasına logging ve CORS middleware'leri eklenir. `tower_http` crate'i ile kolayca logging ve CORS desteği sağlanır.

```rust
use axum::{routing::get, Router};
use std::net::SocketAddr;
use tower_http::{cors::CorsLayer, trace::TraceLayer};

async fn hello() -> &'static str {
    "Hello, Axum!"
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(hello))
        .layer(TraceLayer::new())
        .layer(CorsLayer::permissive());
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
