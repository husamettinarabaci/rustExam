## 📘 Section: Modules II  
### 🔹 Category: Public Items  
#### ✅ Answer 131: Using `pub` for public items

The `pub` keyword in Rust makes items accessible from outside their module. You can use `pub` with functions, constants, structs, and more. Here is an example:

```rust
mod my_module {
    pub const VALUE: i32 = 10;
    pub fn greet() {
        println!("Hello from the module!");
    }
}

fn main() {
    println!("VALUE = {}", my_module::VALUE);
    my_module::greet();
}
```
