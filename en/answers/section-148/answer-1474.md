## 📘 Section: Compile-Time Reflection and Introspection
### 🔹 Category: Compile-Time Reflection
#### ✅ Answer 1474: Using `syn` and `quote` for AST manipulation

In procedural macro crates, `syn` is used to parse Rust code into an AST, and `quote` is used to generate new code. This allows manipulation of struct fields and code generation at compile time.

```rust
// Example procedural macro
#[proc_macro_derive(PrintFields)]
fn print_fields(input: TokenStream) -> TokenStream {
    // Use syn to parse input, quote to generate code
    // ...
}
```
