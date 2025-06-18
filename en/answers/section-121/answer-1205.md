## 📘 Section: Advanced Async I/O and Networking  
### 🔹 Category: High-Performance HTTP Servers  
#### ✅ Answer 1205: Writing high-throughput HTTP servers

High-performance HTTP servers must handle concurrent connections, use async I/O, and provide low latency with high throughput. In Rust, you can easily build such servers using `hyper` or `axum`.

```rust
use axum::{Router, routing::get};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(|| async { "Hello, world!" }));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Server started at {}", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
```

This example starts a high-performance async HTTP server using `axum`.
