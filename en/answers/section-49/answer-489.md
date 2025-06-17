## 📘 Section: Web Development with Axum  
### 🔹 Category: Structuring Routes with Router::nest  
#### ✅ Answer 489: Structuring routes with `Router::nest`

This solution demonstrates how to use Axum's `Router::nest` to create a nested router under `/api` with multiple endpoints, and add it to the main router.

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
