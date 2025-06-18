## 📘 Section: Advanced Macro Design  
### 🔹 Category: Expanding macros into modular code  
#### ✅ Answer 813: Expanding macros into modular code

Below is an example of a simple `hello_macro!` macro that can be used in multiple modules. The macro is defined at the crate root and made available with `macro_export`.

```rust
// src/lib.rs
#[macro_export]
macro_rules! hello_macro {
    () => {
        println!("Hello from macro!");
    };
}

// src/module1.rs
pub fn call_macro() {
    crate::hello_macro!();
}

// src/module2.rs
pub fn call_macro() {
    crate::hello_macro!();
}
```

With `macro_export`, the macro is accessible crate-wide and can be called from any module.
