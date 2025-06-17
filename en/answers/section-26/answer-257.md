## 📘 Section: Ownership in Complex Structures  
### 🔹 Category: Ownership and Pattern Matching  
#### ✅ Answer 257: Using pattern matching to destructure and move out fields

This example demonstrates how to use pattern matching to destructure a struct and move out ownership of its fields in Rust. When you move out a field, the original struct can no longer be used. In the example below, the `name` field is moved, and only `age` remains usable.

```rust
struct Person {
    name: String,
    age: u32,
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 30,
    };

    // Destructure and move out the name field
    let Person { name, age } = person;
    println!("Name: {}", name);
    println!("Age: {}", age);
    // person can no longer be used because ownership was moved
}
```
