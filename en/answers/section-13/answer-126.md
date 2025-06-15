## 📘 Section: Modules I  
### 🔹 Category: Module Imports  
#### ✅ Answer 126: Module imports

You can import functions from a module using the `use` keyword. Here, the `hello` function from the `greetings` module is imported and called directly in `main`.

```rust
mod greetings {
    pub fn hello() {
        println!("Hello from the greetings module!");
    }
}

use greetings::hello;

fn main() {
    hello();
}
```
