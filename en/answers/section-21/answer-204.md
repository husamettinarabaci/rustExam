## 📘 Section: Traits I  
### 🔹 Category: Trait Methods and Usage  
#### ✅ Answer 204: Calling trait methods

To call trait methods, simply use the method syntax on any type that implements the trait. Here, both `Book` and `Car` implement the `Describable` trait, and their `describe()` methods are called in `main`.

```rust
trait Describable {
    fn describe(&self) -> String;
}

struct Book {
    title: String,
}

struct Car {
    model: String,
}

impl Describable for Book {
    fn describe(&self) -> String {
        format!("Book: {}", self.title)
    }
}

impl Describable for Car {
    fn describe(&self) -> String {
        format!("Car: {}", self.model)
    }
}

fn main() {
    let b = Book { title: String::from("Rust Programming") };
    let c = Car { model: String::from("Tesla Model S") };
    println!("{}", b.describe());
    println!("{}", c.describe());
}
```
