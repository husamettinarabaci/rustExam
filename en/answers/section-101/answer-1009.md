## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Composing Async Tasks with `futures::join!`  
#### ✅ Answer 1009: Composing async tasks with `futures::join!`

This example defines two async functions and runs them concurrently using `futures::join!`.

```rust
use futures::join;
use tokio;

async fn first() {
    println!("First async function");
}

async fn second() {
    println!("Second async function");
}

#[tokio::main]
async fn main() {
    join!(first(), second());
}
```
