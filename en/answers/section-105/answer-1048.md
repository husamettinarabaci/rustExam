## 📘 Section: Futures and Async Primitives
### 🔹 Category: Implementing async stream combinators
#### ✅ Answer 1048: Implementing async stream combinators

To combine multiple async streams, you can use `futures::stream::select` or `tokio_stream::StreamExt`. In the example below, two streams are combined and processed in order.

```rust
use futures::stream::{self, StreamExt, SelectAll};

#[tokio::main]
async fn main() {
    let s1 = stream::iter(vec![1, 3, 5]);
    let s2 = stream::iter(vec![2, 4, 6]);
    let mut combined = SelectAll::new();
    combined.push(Box::pin(s1));
    combined.push(Box::pin(s2));

    let mut results = vec![];
    while let Some(item) = combined.next().await {
        results.push(item);
    }
    results.sort();
    println!("Combined results: {:?}", results); // [1, 2, 3, 4, 5, 6]
}
```
