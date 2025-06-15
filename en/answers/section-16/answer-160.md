## 📘 Section: Collections: Vectors  
### 🔹 Category: Vectors of Structs  
#### ✅ Answer 160: Vector of structs

To use a vector of structs in Rust, define a struct and create a vector containing instances of that struct. You can then iterate over the vector and access each struct's fields. Here is an example:

```rust
struct Person {
    name: String,
    age: u8,
}

fn main() {
    let people = vec![
        Person { name: String::from("Alice"), age: 30 },
        Person { name: String::from("Bob"), age: 25 },
        Person { name: String::from("Charlie"), age: 40 },
    ];

    for person in &people {
        println!("Name: {}, Age: {}", person.name, person.age);
    }
}
```
