## 📘 Section: Async Rust in Depth  
### 🔹 Category: Async Functions and Await  
#### ✅ Answer 501: Creating an async function and awaiting a future

In Rust, `async` functions return a future and must be run inside an async runtime (e.g., tokio). You can use `await` to get the result of the future.

```rust
use tokio; // or async-std

async fn get_number() -> i32 {
    42
}

#[tokio::main]
async fn main() {
    let result = get_number().await;
    println!("Result: {}", result);
}
```
