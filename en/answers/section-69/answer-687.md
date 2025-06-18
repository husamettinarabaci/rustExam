## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: Debugging macro expansions  
#### ✅ Answer 687: Debugging macro expansions

This problem shows how to view macro expansion in Rust using tools like `cargo expand`. This tool displays how the macro is expanded by the compiler.

```rust
macro_rules! hello {
    () => {
        println!("Hello, macro!");
    };
}

fn main() {
    hello!();
}
```
Expanded form with `cargo expand`:
```rust
fn main() {
    {
        println!("Hello, macro!");
    }
}
```
This makes it easy to inspect and debug macro expansions.
