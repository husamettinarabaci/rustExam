## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Procedural Macros  
#### ✅ Answer 206: Creating a procedural macro

Procedural macros operate on Rust code as input and produce code as output. They are defined in a separate crate with `proc-macro = true` in `Cargo.toml`.

```rust
// In your procedural macro crate:
use proc_macro::TokenStream;

#[proc_macro]
pub fn my_macro(_item: TokenStream) -> TokenStream {
    "fn generated() { println!(\"Hello from macro!\"); }".parse().unwrap()
}
```
