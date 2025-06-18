## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: Code Generation
#### ✅ Answer 1266: Generating Rust code from DSL constructs

A procedural macro can parse a DSL and generate Rust code. Example:

```rust
// In your proc-macro crate:
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, Expr};

#[proc_macro]
pub fn dsl(input: TokenStream) -> TokenStream {
    let expr = parse_macro_input!(input as Expr);
    let expanded = quote! { #expr };
    TokenStream::from(expanded)
}
```

Usage:
```rust
let result = dsl!(1 + 2 * 3);
```

This macro generates Rust code for the DSL expression at compile time.
