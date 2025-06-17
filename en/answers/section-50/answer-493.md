## 📘 Section: Project Design and Refactoring  
### 🔹 Category: Avoiding Duplication  
#### ✅ Answer 493: Avoiding duplication with helper functions and traits

To avoid code duplication:

- Write helper functions for common operations.
- Define traits for shared behaviors across types.
- Use trait implementations to increase code reusability.

```rust
// Example helper function
fn print_json<T: serde::Serialize>(value: &T) {
    println!("{}", serde_json::to_string(value).unwrap());
}

// Shared behavior with a trait
trait Printable {
    fn print(&self);
}

impl Printable for User {
    fn print(&self) {
        println!("User: {}", self.name);
    }
}
```
