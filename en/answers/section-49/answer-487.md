## 📘 Section: Web Development with Axum  
### 🔹 Category: Managing State with Arc and Shared Data  
#### ✅ Answer 487: Managing state with `Arc` and shared data

This solution demonstrates how to manage shared, updatable state in Axum using `Arc` and a synchronization type (e.g., `Mutex`). The handler reads and updates the shared value.

```rust
use axum::{extract::State, routing::get, Router};
use std::{net::SocketAddr, sync::{Arc, Mutex}};

async fn get_count(State(count): State<Arc<Mutex<u32>>>) -> String {
    let mut count = count.lock().unwrap();
    *count += 1;
    format!("Count: {}", *count)
}

#[tokio::main]
async fn main() {
    let count = Arc::new(Mutex::new(0));
    let app = Router::new()
        .route("/count", get(get_count))
        .with_state(count);
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
