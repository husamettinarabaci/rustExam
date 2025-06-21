## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Domain-Specific Language Macros  
#### ✅ Answer 615: Procedural macros for domain-specific languages

Procedural macros can be used to implement custom DSLs by parsing input tokens and generating Rust code. Here is a simple example of a macro that parses a mini-language for arithmetic expressions:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, LitInt, Token, parse::Parse, parse::ParseStream};

struct AddExpr {
    left: LitInt,
    _plus: Token![+],
    right: LitInt,
}

impl Parse for AddExpr {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        Ok(AddExpr {
            left: input.parse()?,
            _plus: input.parse()?,
            right: input.parse()?,
        })
    }
}

#[proc_macro]
pub fn add_expr(input: TokenStream) -> TokenStream {
    let AddExpr { left, right, .. } = parse_macro_input!(input as AddExpr);
    let expanded = quote! {
        #left + #right
    };
    expanded.into()
}
```

This macro allows you to write `add_expr!(2 + 3)` and have it expanded to `2 + 3` in Rust code.
