## 📘 Section: Modules II  
### 🔹 Category: Importing macros  
#### ✅ Answer 140: Importing macros

When a macro is defined with `#[macro_export]` in another module, it is exported to the crate root and can be called directly. Importing it again with `use crate::macro_name;` will cause a compile error. The correct usage is:

```rust
mod macros {
    #[macro_export]
    macro_rules! say_hello {
        () => {
            println!("Hello from macro!");
        };
    }
}

fn main() {
    say_hello!();
}
```

- The macro is defined in the `macros` module with `#[macro_export]` and is available at the crate root.
- Adding `use crate::say_hello;` will result in a "the name `say_hello` is defined multiple times" error.
- The correct usage is to call the macro directly: `say_hello!();`.
- Macros exported with `#[macro_export]` are automatically accessible from the crate root, unlike functions.
