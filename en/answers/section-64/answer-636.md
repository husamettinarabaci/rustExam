## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Using `futures` crate combinators extensively
#### ✅ Answer 636: Using `futures` crate combinators extensively

The `futures` crate provides combinators like `map`, `then`, and `and_then` to compose async computations. These allow you to chain and transform futures without writing manual polling code.

Example:

```rust
use futures::future::{ready, FutureExt};

#[tokio::main]
async fn main() {
    let fut = ready(5)
        .map(|x| x + 1)
        .map(|x| x * 2);
    let result = fut.await;
    println!("{}", result); // 12
}
```

Combinators make async code more readable and composable.
