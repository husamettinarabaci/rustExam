## 📘 Section: Web Development with Axum  
### 🔹 Category: Minimal Axum Server  
#### ✅ Answer 481: Setting up a minimal Axum server

This solution demonstrates how to set up the simplest HTTP server using Axum. The server responds with "Hello, Axum!" at the root (`/`) route and listens on port 3000. The `axum` and `tokio` crates are required.

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
