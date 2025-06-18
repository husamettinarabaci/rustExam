## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Defining fallible constructors and builders
#### ✅ Answer 679: Defining fallible constructors and builders

A fallible constructor returns a `Result` to indicate possible failure. Use error types to describe why construction failed.

```rust
#[derive(Debug)]
struct User {
    name: String,
}

#[derive(Debug)]
enum UserError {
    EmptyName,
}

impl User {
    fn new(name: &str) -> Result<Self, UserError> {
        if name.is_empty() {
            Err(UserError::EmptyName)
        } else {
            Ok(User { name: name.to_string() })
        }
    }
}

fn main() {
    match User::new("") {
        Ok(user) => println!("User: {:?}", user),
        Err(e) => println!("Error: {:?}", e),
    }
}
```
