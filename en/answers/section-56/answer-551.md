## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Implementing async streams with `futures::stream`  
#### ✅ Answer 551: Implementing async streams with `futures::stream`

This solution demonstrates how to use the `futures::stream` crate to create and consume an async stream. The `Stream` trait allows you to yield values asynchronously, and you can use `.next().await` to retrieve each item in an async context.

```rust
use futures::stream::{self, StreamExt};
use tokio;

#[tokio::main]
async fn main() {
    let mut s = stream::iter(vec![1, 2, 3]);
    while let Some(val) = s.next().await {
        println!("Got: {}", val);
    }
}
```
