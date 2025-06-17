## 📘 Section: Web Development with Axum  
### 🔹 Category: Defining Routes with Handlers and Parameters  
#### ✅ Answer 482: Defining routes with handlers and parameters

This solution shows how to define parameterized routes and handler functions in Axum. The `/hello/:name` route returns a personalized greeting, and `/sum/:a/:b` adds two numbers from the URL and returns the sum.

```rust
use axum::{extract::Path, routing::get, Router};
use std::net::SocketAddr;

async fn hello(Path(name): Path<String>) -> String {
    format!("Hello, {}!", name)
}

async fn sum(Path((a, b)): Path<(i32, i32)>) -> String {
    format!("Sum: {}", a + b)
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/hello/:name", get(hello))
        .route("/sum/:a/:b", get(sum));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
