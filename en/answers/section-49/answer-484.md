## 📘 Section: Web Development with Axum  
### 🔹 Category: Parsing JSON in Request Bodies  
#### ✅ Answer 484: Parsing JSON in request bodies

This solution shows how to parse a JSON request body into a Rust struct using Axum and echo it back as the response. The `serde` crate is used for serialization.

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
