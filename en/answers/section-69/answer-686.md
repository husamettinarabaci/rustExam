## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: Combining declarative and procedural macros  
#### ✅ Answer 686: Combining declarative and procedural macros

This problem shows how declarative (`macro_rules!`) and procedural macros can be used together in Rust. A declarative macro operates on a struct derived with a procedural macro.

```rust
// Procedural macro crate (my_derive)
// #[derive(MyTrait)] procedural macro would be defined here

// Main crate
derive(MyTrait)]
struct Data;

macro_rules! print_type {
    ($t:ty) => {
        println!("Type: {}", stringify!($t));
    };
}

fn main() {
    print_type!(Data);
}
```
Here, the `Data` struct is derived with a procedural macro, and `print_type!` is a declarative macro that prints the type. A real procedural macro requires a separate crate.
