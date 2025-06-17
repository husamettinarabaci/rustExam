## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Ownership and Borrowing in Nested Types  
#### ✅ Answer 251: Building nested structs with owned and borrowed fields

This example demonstrates how to define nested structs in Rust where some fields are owned and others are borrowed (references). Lifetime annotations are required for borrowed fields to ensure references remain valid. Rust's ownership and lifetime system guarantees that borrowed data does not outlive its owner, preventing dangling references.

```rust
struct Owner {
    name: String,
    age: u32,
}

struct Pet<'a> {
    name: String,
    owner: &'a Owner, // borrowed field with lifetime
}

fn main() {
    let owner = Owner {
        name: String::from("Alice"),
        age: 30,
    };
    let pet = Pet {
        name: String::from("Fluffy"),
        owner: &owner,
    };
    println!("Pet: {} (Owner: {} - Age: {})", pet.name, pet.owner.name, pet.owner.age);
}
```
