## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: DSL Syntax Parsing
#### ✅ Answer 1262: Parsing DSL syntax using `syn` and `quote`

Procedural macros can parse custom DSL syntax using the `syn` crate and generate code with `quote`. Here is a minimal example for arithmetic expressions:

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

Usage in main crate:
```rust
dsl!(1 + 2 * 3)
```

This macro parses the input and expands it as a Rust expression.
