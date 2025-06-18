## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Async Stream Implementation  
#### ✅ Answer 1008: Implementing async streams

This example uses `tokio_stream` to create an async stream and consume its values asynchronously.

```rust
use tokio_stream::{self as stream, StreamExt};

#[tokio::main]
async fn main() {
    let s = stream::iter(vec![1, 2, 3]);
    s.for_each(|v| async move {
        println!("Value: {}", v);
    }).await;
}
```
