## 📘 Section: Async Rust in Depth  
### 🔹 Category: Await and Suspension Points  
#### ✅ Answer 505: Understanding `.await` as syntax sugar and suspension points

`.await` is used to wait for a future to complete and is compiled into suspension points by the compiler. A suspension point is where an async function can pause and later resume.

```rust
use tokio::time::{sleep, Duration};

async fn example() {
    println!("Before");
    sleep(Duration::from_secs(1)).await; // suspension point
    println!("After");
}

#[tokio::main]
async fn main() {
    example().await;
}
```
