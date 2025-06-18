## 📘 Section: Async Patterns in Practice
### 🔹 Category: Using `async-trait` for ergonomic async traits
#### ✅ Answer 1157: Using `async-trait` for ergonomic async traits

This answer shows how to define and use an async trait method with the `async-trait` crate, which allows async methods in traits.

```rust
use async_trait::async_trait;

#[async_trait]
trait Greet {
    async fn greet(&self) -> String;
}

struct Person(String);

#[async_trait]
impl Greet for Person {
    async fn greet(&self) -> String {
        format!("Hello, {}!", self.0)
    }
}

#[tokio::main]
async fn main() {
    let p = Person("Rustacean".into());
    println!("{}", p.greet().await);
}
```
