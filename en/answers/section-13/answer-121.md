## 📘 Section: Modules I  
### 🔹 Category: Module Declaration  
#### ✅ Answer 121: Declaring a module in the same file

In Rust, you can declare a module within the same file using the `mod` keyword. Functions inside the module can be accessed using the module path. Here, the `greetings` module contains a `hello` function, which is called from `main`.

```rust
mod greetings {
    pub fn hello() {
        println!("Hello from the module!");
    }
}

fn main() {
    greetings::hello();
}
```
