## 📘 Section: Traits I
### 🔹 Category: Declaring a trait and implementing it
#### ✅ Answer 201: Declaring a trait and implementing it

In Rust, a trait defines shared behavior that types can implement. Here is an example of declaring a trait and implementing it for a struct:

```rust
trait Describe {
    fn describe(&self) -> String;
}

struct Person {
    name: String,
}

impl Describe for Person {
    fn describe(&self) -> String {
        format!("Person: {}", self.name)
    }
}

fn main() {
    let p = Person { name: String::from("Alice") };
    println!("{}", p.describe());
}
```

This demonstrates how to declare a trait, implement it for a struct, and use the trait method.
