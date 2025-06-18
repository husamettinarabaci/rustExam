## 📘 Section: Async Patterns in Practice
### 🔹 Category: Combining sync and async code gracefully
#### ✅ Answer 1158: Combining sync and async code gracefully

This answer demonstrates how to call a synchronous function from an async function using `tokio::task::spawn_blocking` to safely run blocking code in an async context.

```rust
fn sync_sum(a: i32, b: i32) -> i32 {
    a + b
}

async fn async_sum(a: i32, b: i32) -> i32 {
    tokio::task::spawn_blocking(move || sync_sum(a, b)).await.unwrap()
}

#[tokio::main]
async fn main() {
    let result = async_sum(3, 4).await;
    println!("Result: {}", result);
}
```
