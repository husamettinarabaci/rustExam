## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: Extractor Kullanımı  
#### ✅ Cevap 483: Sorgu ve yol parametreleri için extractor kullanımı

Bu soruda, Axum'da extractor'lar ile yol ve sorgu parametreleri kullanılır. `/greet/:name` yolunda isim parametresi, `/calc` yolunda ise sorgu parametreleri (`a` ve `b`) alınır ve işlenir.

```rust
use axum::{extract::{Path, Query}, routing::get, Router};
use std::collections::HashMap;
use std::net::SocketAddr;

async fn greet(Path(name): Path<String>) -> String {
    format!("Hello, {}!", name)
}

async fn calc(Query(params): Query<HashMap<String, String>>) -> String {
    let a = params.get("a").and_then(|v| v.parse::<i32>().ok()).unwrap_or(0);
    let b = params.get("b").and_then(|v| v.parse::<i32>().ok()).unwrap_or(0);
    format!("Sum: {}", a + b)
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/greet/:name", get(greet))
        .route("/calc", get(calc));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
