## 📘 Section: Plugin Architectures  
### 🔹 Category: Dynamic Loading and Plugin Systems  
#### ✅ Answer 1259: Writing plugins with procedural macros

In Rust, procedural macro plugins are written as separate crates. They can be used by the main app or other crates. The advantage is code generation at compile time and reduced boilerplate, but no runtime dynamism.

Example procedural macro:
```rust
// plugin-macro/src/lib.rs
use proc_macro::TokenStream;

#[proc_macro_derive(MyTrait)]
pub fn my_trait_derive(_item: TokenStream) -> TokenStream {
    // Code generation here
    TokenStream::new()
}
```

The main app uses the macro with `derive(MyTrait)`. Procedural macro plugins are integrated as compile-time dependencies.
