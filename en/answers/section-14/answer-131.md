## 📘 Section: Modules and Packages  
### 🔹 Category: Module Basics  
#### ✅ Answer 131: What is a module in Rust?

**Explanation:**
A module is a way to organize code into namespaces. Modules are defined with the `mod` keyword.

```rust
mod my_module {
    pub fn hello() {
        println!("Hello from module!");
    }
}

fn main() {
    my_module::hello();
}
```
