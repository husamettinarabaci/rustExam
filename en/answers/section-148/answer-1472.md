## 📘 Section: Compile-Time Reflection and Introspection
### 🔹 Category: Compile-Time Reflection
#### ✅ Answer 1472: Implementing custom derive macros for introspection

Custom derive macros in Rust can be used to collect compile-time information about struct fields. A procedural macro can extract field names and types and generate additional code.

```rust
// In a procedural macro crate
#[proc_macro_derive(FieldNames)]
pub fn field_names_derive(input: TokenStream) -> TokenStream {
    // Use syn and quote to extract field names and generate code
    // ...
}

// Usage:
#[derive(FieldNames)]
struct User { id: u32, name: String }

// The macro generates a function like User::field_names().
```
