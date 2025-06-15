## 📘 Section: Structs II  
### 🔹 Category: Associated functions (constructors)  
#### ✅ Answer 92: Associated functions (constructors)

Associated functions in Rust are defined in an `impl` block and are often used as constructors. Here, we define a `Person` struct and implement a `new` associated function to create instances.

```rust
struct Person {
    name: String,
    age: u8,
}

impl Person {
    fn new(name: &str, age: u8) -> Self {
        Self {
            name: name.to_string(),
            age,
        }
    }
}

fn main() {
    let p = Person::new("Alice", 30);
    println!("Name: {}, Age: {}", p.name, p.age);
}
```
