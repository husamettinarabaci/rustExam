## 📘 Section: Modules II  
### 🔹 Category: Importing macros  
#### ✅ Answer 140: Importing macros

To use a macro from another module, you must define it with `#[macro_export]` and import it. Example:

```rust
mod macros {
    #[macro_export]
    macro_rules! say_hello {
        () => {
            println!("Hello from macro!");
        };
    }
}

use crate::say_hello;

fn main() {
    say_hello!();
}
```

- The macro is defined in the `macros` module with `#[macro_export]`.
- `#[macro_export]` makes the macro available at the crate root.
- Macros are imported differently than functions; you use `use crate::macro_name;`.
- You can then use the macro in `main`.
