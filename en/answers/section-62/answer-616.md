## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Generating AST structures with procedural macros  
#### ✅ Answer 616: Generating AST structures with procedural macros

This solution shows how to write a procedural macro crate that parses a DSL expression and generates an enum-based AST. In real use, the procedural macro would be in a separate crate.

```rust
// procedural_macro_crate/src/lib.rs
use proc_macro::TokenStream;

#[proc_macro]
pub fn dsl_ast(input: TokenStream) -> TokenStream {
    // Here, parsing and AST generation would occur (for example, returning a fixed AST)
    let expanded = quote::quote! {
        Expr::Add(Box::new(Expr::Number(1)), Box::new(Expr::Number(2)))
    };
    expanded.into()
}

// main.rs
enum Expr {
    Number(i32),
    Add(Box<Expr>, Box<Expr>),
}

fn main() {
    let ast = dsl_ast!(add(1, 2));
    // ast: Expr::Add(Box::new(Expr::Number(1)), Box::new(Expr::Number(2)))
}
```
