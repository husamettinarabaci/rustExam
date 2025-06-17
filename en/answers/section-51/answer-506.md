## 📘 Section: Async Rust in Depth  
### 🔹 Category: Tasks and join/select!  
#### ✅ Answer 506: Running tasks sequentially vs concurrently with `join!` and `select!`

With `tokio::join!`, you can start multiple async operations concurrently and wait for all to finish. With `tokio::select!`, you get the result of the first operation to complete.

```rust
use tokio::time::{sleep, Duration};

async fn task1() -> &'static str {
    sleep(Duration::from_secs(2)).await;
    "task1 done"
}

async fn task2() -> &'static str {
    sleep(Duration::from_secs(1)).await;
    "task2 done"
}

#[tokio::main]
async fn main() {
    let (r1, r2) = tokio::join!(task1(), task2());
    println!("join!: {} and {}", r1, r2);

    let winner = tokio::select! {
        v1 = task1() => v1,
        v2 = task2() => v2,
    };
    println!("select!: {}", winner);
}
```
