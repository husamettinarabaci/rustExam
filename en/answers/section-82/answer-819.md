## 📘 Section: Advanced Macro Design  
### 🔹 Category: Procedural Macros  
#### ✅ Answer 819: Compile-time validation with macro tests

This example shows how to use a procedural macro to enforce a property at compile time. Incorrect usage results in a compile error.

```rust
// my_macro crate
use proc_macro::TokenStream;

#[proc_macro_attribute]
pub fn must_be_hello(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = item.to_string();
    if !input.contains("hello") {
        return syn::Error::new_spanned(
            syn::parse_macro_input!(item as syn::ItemFn),
            "Function name must contain 'hello'!"
        ).to_compile_error().into();
    }
    item
}
```

Usage example:

```rust
#[must_be_hello]
fn hello_world() {}

// #[must_be_hello]
// fn world() {} // Compile-time error!
```
