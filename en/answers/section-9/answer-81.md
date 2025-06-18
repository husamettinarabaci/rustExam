## 📘 Section: Structs I  
### 🔹 Category: Struct Definition and Instantiation  
#### ✅ Answer 81: Defining a struct and creating an instance

A struct in Rust is a custom data type that lets you group related values. Here, we define a `Person` struct and create an instance with specific values.

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
    println!("Name: {}, Age: {}", person.name, person.age);
}
```
