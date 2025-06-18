## 📘 Section: Metaprogramming and Reflection
### 🔹 Category: Procedural Macros and Code Introspection
#### ✅ Answer 942: Using procedural macros for code introspection

Procedural macros are Rust functions that operate on the abstract syntax tree (AST) of code at compile time. Unlike declarative macros (`macro_rules!`), they can analyze and transform code structures.

Example: A derive macro that prints struct field names at compile time (simplified):

```rust
// In a procedural macro crate
#[proc_macro_derive(PrintFields)]
pub fn print_fields(input: TokenStream) -> TokenStream {
    let ast = syn::parse(input).unwrap();
    // Inspect struct fields using syn
    // Generate code that prints field names
    // ...
    TokenStream::new()
}
```

Use cases: code generation, custom derives, validation. Limitations: only available at compile time, cannot access runtime values, and require a separate crate. They enable powerful metaprogramming but add complexity to the build process.
