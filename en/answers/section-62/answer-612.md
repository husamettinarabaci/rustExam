## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Parsing DSL syntax using syn and quote  
#### ✅ Answer 612: Parsing DSL syntax using syn and quote

In this solution, we use `syn` to parse the DSL expression and `quote` to generate Rust code. We use `syn::parse_str` to parse the input, and `quote!` to generate code. For a real DSL, a custom parser would be needed, but this demonstrates the basic idea.

```rust
use syn::{parse_str, Expr};
use quote::quote;

fn main() {
    let dsl = "add(1, mul(2, 3))";
    let expr: Expr = parse_str(dsl).unwrap();
    let generated = quote! { #expr };
    println!("{}", generated);
}
```
