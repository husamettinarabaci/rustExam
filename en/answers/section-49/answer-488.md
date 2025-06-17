## 📘 Section: Web Development with Axum  
### 🔹 Category: Handling Errors and Creating Custom Responses  
#### ✅ Answer 488: Handling errors and creating custom responses

This solution demonstrates how to return either an error or a success response in Axum based on an incoming parameter. On error, a custom message and HTTP status code are returned.

```rust
use axum::{extract::Path, http::StatusCode, response::IntoResponse, routing::get, Router};
use std::net::SocketAddr;

async fn check_number(Path(num): Path<i32>) -> impl IntoResponse {
    if num < 0 {
        (StatusCode::BAD_REQUEST, "Number must be non-negative")
    } else {
        (StatusCode::OK, format!("Number: {}", num))
    }
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/check/:num", get(check_number));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
