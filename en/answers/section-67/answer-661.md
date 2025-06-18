## 📘 Section: Domain-Driven Design in Rust
### 🔹 Category: Modeling Domain Entities
#### ✅ Answer 661: Modeling domain entities with structs and enums

In Rust, domain entities are typically modeled using structs and enums to represent the core concepts and their possible states. Structs are used for entities with data fields, while enums are ideal for representing variants or states.

```rust
// Example: Modeling a User entity and a Status enum
#[derive(Debug)]
struct User {
    id: u32,
    name: String,
    status: Status,
}

#[derive(Debug)]
enum Status {
    Active,
    Inactive,
    Banned,
}

fn main() {
    let user = User {
        id: 1,
        name: "Alice".to_string(),
        status: Status::Active,
    };
    println!("{:?}", user);
}
```
