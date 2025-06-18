## 📘 Section: Async Patterns in Practice
### 🔹 Category: Composing complex async workflows
#### ✅ Answer 1153: Composing complex async workflows

You can compose complex async workflows by combining multiple async functions using `.await`, `join!`, or combinators. This allows you to run tasks sequentially or concurrently.

```rust
use tokio::join;

async fn task1() -> u32 { 1 }
async fn task2() -> u32 { 2 }

#[tokio::main]
async fn main() {
    let (a, b) = join!(task1(), task2());
    println!("Results: {}, {}", a, b);
}
```
