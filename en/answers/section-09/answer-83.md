## 📘 Section: Structs I  
### 🔹 Category: Struct Fields  
#### ✅ Answer 83: Struct with multiple field types

**Explanation:**
This example shows how to define a struct with fields of different types in Rust. The `Person` struct has a `String`, a `u8`, and a `bool` field. We create an instance and print each field.

```rust
struct Person {
    name: String,
    age: u8,
    is_student: bool,
}

fn main() {
    let person = Person {
        name: String::from("Alice"),
        age: 22,
        is_student: true,
    };
    println!("Name: {}", person.name);
    println!("Age: {}", person.age);
    println!("Is student: {}", person.is_student);
}
```
