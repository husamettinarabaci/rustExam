## 📘 Section: Enums and Data Modeling  
### 🔹 Category: Modeling recursive data with `Box<Enum>`  
#### ✅ Answer 427: Modeling recursive data with `Box<Enum>`

To create recursive data structures in Rust, use `Box` inside an enum. This allows the enum to contain its own type as a field.

```rust
enum List {
    Cons(i32, Box<List>),
    Nil,
}

fn main() {
    let list = List::Cons(1, Box::new(List::Cons(2, Box::new(List::Nil))));
}
```
