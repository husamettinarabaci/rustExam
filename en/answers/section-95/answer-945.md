## 📘 Section: Metaprogramming and Reflection
### 🔹 Category: Attribute Macros for Domain-Specific Use Cases
#### ✅ Answer 945: Creating domain-specific attribute macros

Attribute macros are procedural macros that annotate items (functions, structs, etc.) and can transform or generate code. They differ from derive macros (which only work on structs/enums) and function-like macros (which look like function calls).

Example: A custom attribute macro for logging function entry:

```rust
// In a procedural macro crate
#[proc_macro_attribute]
pub fn log_entry(_attr: TokenStream, item: TokenStream) -> TokenStream {
    // Parse the function, inject logging at entry
    // ...
    item
}
```

Usage:
```rust
#[log_entry]
fn my_function() {
    // ...
}
```

Best practices: keep macros simple, document clearly, and handle errors gracefully. Limitations: debugging can be hard, and misuse may lead to confusing errors.
