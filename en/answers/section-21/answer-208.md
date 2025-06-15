## 📘 Section: Traits I  
### 🔹 Category: Where Clauses in Trait Bounds  
#### ✅ Answer 208: Using `where` clauses

The `where` clause in Rust allows you to specify complex trait bounds for generic parameters in a clear and readable way. Here, `show_and_serialize` requires its parameter to implement both `Displayable` and `Serializable` using a `where` clause.

```rust
trait Displayable {
    fn display(&self);
}

trait Serializable {
    fn serialize(&self) -> String;
}

struct User {
    name: String,
}

impl Displayable for User {
    fn display(&self) {
        println!("User: {}", self.name);
    }
}

impl Serializable for User {
    fn serialize(&self) -> String {
        format!("{{\"name\":\"{}\"}}", self.name)
    }
}

fn show_and_serialize<T>(item: T) -> String
where
    T: Displayable + Serializable,
{
    item.display();
    item.serialize()
}

fn main() {
    let user = User { name: String::from("Alice") };
    let serialized = show_and_serialize(user);
    println!("Serialized: {}", serialized);
}
```
