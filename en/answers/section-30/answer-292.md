## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Splitting Code Across Multiple Files and Folders  
#### ✅ Answer 292: Splitting code across multiple files and folders

This example demonstrates how to split Rust code into multiple files using modules. The main file (`main.rs`) declares the module, and the module code is placed in a separate file. The function is imported and called from `main`.

`main.rs`:
```rust
mod module;
use module::greet;

fn main() {
    greet();
}
```

`module.rs`:
```rust
pub fn greet() {
    println!("Hello from a module in another file!");
}
```
