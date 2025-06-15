## 📘 Section: Modules II  
### 🔹 Category: Importing with `as`  
#### ✅ Answer 137: Importing with `as`

In Rust, the `as` keyword allows you to rename imports. This is useful for clarity or to avoid name conflicts. Here's an example:

```rust
mod greetings {
    pub fn hello() {
        println!("Hello from greetings::hello!");
    }
}

use greetings::hello as greet;

fn main() {
    greet(); // Calls the function using the new name
    // hello(); // Error: not found in this scope
}
```

- The function `hello` is imported as `greet`.
- You must use the new name (`greet`) in `main`.
- Trying to use the original name (`hello`) will result in a compile error because only the renamed import is in scope
