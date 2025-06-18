## 📘 Section: Futures and Async Primitives
### 🔹 Category: Debugging async primitives
#### ✅ Answer 1050: Debugging async primitives

You can analyze the internal state of an async future or stream using `dbg!` or `println!` for debugging. In the example below, you can see the steps of an async future and the values produced by a stream at each step.

```rust
use tokio::time::{sleep, Duration};
use futures::stream::{self, StreamExt};

#[tokio::main]
async fn main() {
    let fut = async {
        println!("Future starting");
        sleep(Duration::from_millis(100)).await;
        println!("Future finished");
        42
    };
    let result = fut.await;
    dbg!(result);

    let s = stream::iter(vec![10, 20, 30]);
    s.for_each(|x| async move {
        dbg!(x);
    }).await;
}
```
