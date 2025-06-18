## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Building REST APIs with Axum or Actix-Web  
#### ✅ Answer 693: Building REST APIs with Axum or Actix-Web

To build a REST API in Rust, you can use frameworks like Axum or Actix-Web. These frameworks provide routing, request handling, and response utilities.

Example with Axum:
```rust
use axum::{routing::get, Router};

async fn hello() -> &'static str {
    "Hello, world!"
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/hello", get(hello));
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
This creates a simple REST endpoint at `/hello`.
