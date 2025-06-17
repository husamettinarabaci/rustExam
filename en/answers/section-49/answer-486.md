## 📘 Section: Web Development with Axum  
### 🔹 Category: Adding Middleware for Logging and CORS  
#### ✅ Answer 486: Adding middleware for logging and CORS

This solution shows how to add logging and CORS middleware to an Axum application. The `tower_http` crate provides easy logging and CORS support.

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
