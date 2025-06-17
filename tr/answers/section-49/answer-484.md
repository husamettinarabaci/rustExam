## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: JSON İstek Gövdeleri  
#### ✅ Cevap 484: İstek gövdelerinde JSON ayrıştırma

Bu soruda, Axum ile bir POST isteğinin JSON gövdesi bir Rust yapısına ayrıştırılır ve aynen yanıt olarak döndürülür. `serde` crate'i ile veri serileştirilir.

```rust
use axum::{extract::Json, routing::post, Router};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;

#[derive(Deserialize, Serialize)]
struct Payload {
    message: String,
}

async fn echo(Json(payload): Json<Payload>) -> Json<Payload> {
    Json(payload)
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/echo", post(echo));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
