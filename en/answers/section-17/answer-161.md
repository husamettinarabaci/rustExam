## 📘 Section: Advanced Patterns  
### 🔹 Category: Destructuring  
#### ✅ Answer 161: Destructuring nested structs and enums

To destructure nested structs and enums in Rust, use pattern matching to access inner fields and values. Here is an example:

```rust
enum Status {
    Active,
    Inactive,
}

struct User {
    name: String,
    status: Status,
}

fn main() {
    let user = User {
        name: String::from("Alice"),
        status: Status::Active,
    };

    match user {
        User { name, status: Status::Active } => {
            println!("{} is active", name);
        }
        User { name, status: Status::Inactive } => {
            println!("{} is inactive", name);
        }
    }
}
```
