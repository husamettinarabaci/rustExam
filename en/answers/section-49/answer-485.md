## 📘 Section: Web Development with Axum  
### 🔹 Category: Sending JSON Responses  
#### ✅ Answer 485: Sending JSON responses

This solution demonstrates how to create a GET endpoint in Axum that returns a Rust struct as a JSON response. The response includes a username and age.

```rust
use axum::{extract::Json, routing::get, Router};
use serde::Serialize;
use std::net::SocketAddr;

#[derive(Serialize)]
struct User {
    username: String,
    age: u8,
}

async fn get_user() -> Json<User> {
    let user = User {
        username: "alice".to_string(),
        age: 30,
    };
    Json(user)
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/user", get(get_user));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
