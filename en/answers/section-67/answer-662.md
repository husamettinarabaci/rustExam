## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Using Traits to Define Domain Behaviors
#### ✅ Answer 662: Using traits to define domain behaviors

Traits in Rust allow you to define shared behaviors for domain entities. By implementing traits, you can specify what actions or operations are possible for your types.

```rust
trait Greet {
    fn greet(&self) -> String;
}

struct User {
    name: String,
}

impl Greet for User {
    fn greet(&self) -> String {
        format!("Hello, {}!", self.name)
    }
}

fn main() {
    let user = User { name: "Bob".to_string() };
    println!("{}", user.greet());
}
```
