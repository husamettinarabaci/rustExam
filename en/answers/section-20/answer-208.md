## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Attribute Macros  
#### ✅ Answer 208: Writing an attribute macro

Attribute macros modify the behavior of items like functions. They are defined using `proc_macro_attribute` in a procedural macro crate.

```rust
// In your procedural macro crate:
use proc_macro::TokenStream;

#[proc_macro_attribute]
pub fn print_before(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let result = format!(
        "fn wrapped() {{ println!(\"Before!\"); {} }}",
        item
    );
    result.parse().unwrap()
}
```
