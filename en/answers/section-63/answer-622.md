## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Default Method Implementations
#### ✅ Answer 622: Using default method implementations effectively

Rust traits can provide default method implementations, allowing types to use the default or override it with their own. This reduces code duplication and enables flexible APIs. Default methods are defined directly in the trait body.

```rust
trait Greet {
    fn greet(&self) {
        println!("Hello!");
    }
}

struct Person;

impl Greet for Person {}

fn main() {
    let p = Person;
    p.greet(); // Uses the default implementation
}
```
