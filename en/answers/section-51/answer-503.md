## 📘 Section: Async Rust in Depth  
### 🔹 Category: Async Trait Methods  
#### ✅ Answer 503: Writing async trait methods with the `async-trait` crate

In Rust, trait methods can't be async by default, but the `async-trait` crate enables this pattern.

```rust
use async_trait::async_trait;

#[async_trait]
trait MyTrait {
    async fn get_value(&self) -> i32;
}

struct MyStruct;

#[async_trait]
impl MyTrait for MyStruct {
    async fn get_value(&self) -> i32 {
        100
    }
}

#[tokio::main]
async fn main() {
    let s = MyStruct;
    let v = s.get_value().await;
    println!("Value: {}", v);
}
```
