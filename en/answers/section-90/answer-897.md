## 📘 Section: Domain-Specific Languages (DSLs) in Rust
### 🔹 Category: Generating AST structures with procedural macros
#### ✅ Answer 897: Generating AST structures with procedural macros

This solution demonstrates how to use a procedural macro in Rust to generate an AST node. Procedural macros allow code transformation at compile time.

```rust
// dsl_macros/src/lib.rs
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, LitInt};

#[proc_macro]
pub fn num(input: TokenStream) -> TokenStream {
    let lit = parse_macro_input!(input as LitInt);
    let n = lit.base10_parse::<i32>().unwrap();
    TokenStream::from(quote! { AST::Num(#n) })
}
```

Usage:
```rust
// main.rs
use dsl_macros::num;

#[derive(Debug)]
enum AST {
    Num(i32),
}

fn main() {
    let ast = num!(42);
    println!("{:?}", ast); // Output: Num(42)
}
```
