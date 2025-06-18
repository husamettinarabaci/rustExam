## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Procedural Macros for Code Generation
#### ✅ Answer 1274: Procedural macros for code generation

Procedural macros can generate code from input. Example:

```rust
// In your proc-macro crate:
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemStruct};

#[proc_macro]
pub fn make_struct(input: TokenStream) -> TokenStream {
    let s = parse_macro_input!(input as ItemStruct);
    let expanded = quote! { #s };
    TokenStream::from(expanded)
}
```

Usage:
```rust
make_struct!(struct Person { name: String, age: u32 });
```

This macro generates the struct at compile time.
