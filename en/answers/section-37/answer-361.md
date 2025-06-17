## 📘 Section: Modules and Visibility  
### 🔹 Category: Creating a module with `mod`  
#### ✅ Answer 361: Creating a module with `mod` and defining contents

In this example, a module is declared in the same file and a function is defined inside it. The function is called from `main` to demonstrate basic module usage in Rust.

```rust
mod greet {
    pub fn print() {
        println!("Hello, module!");
    }
}

fn main() {
    greet::print();
}
```
