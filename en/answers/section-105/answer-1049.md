## 📘 Section: Futures and Async Primitives
### 🔹 Category: Efficient polling of async tasks
#### ✅ Answer 1049: Efficient polling of async tasks

To efficiently poll multiple async futures, you can use `futures::future::join_all`. This function waits for all futures to complete and returns their results together.

```rust
use futures::future::join_all;
use tokio::time::{sleep, Duration};

async fn work(n: u64) -> u64 {
    sleep(Duration::from_millis(n * 100)).await;
    n * n
}

#[tokio::main]
async fn main() {
    let futures = (1..=5).map(work);
    let results = join_all(futures).await;
    println!("Results: {:?}", results); // [1, 4, 9, 16, 25]
}
```
