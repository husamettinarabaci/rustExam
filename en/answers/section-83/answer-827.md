## 📘 Section: Compiler Plugins and Custom Lints  
### 🔹 Category: Procedural Macros for Code Analysis  
#### ✅ Answer 827: Using procedural macros for code analysis

Procedural macros allow code to be analyzed at compile time. For example, a macro can check the number of parameters in a function:

```rust
use proc_macro::TokenStream;

#[proc_macro_attribute]
pub fn check_params(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = syn::parse_macro_input!(item as syn::ItemFn);
    if input.sig.inputs.len() > 3 {
        return syn::Error::new_spanned(
            input.sig,
            "Function has too many parameters!"
        ).to_compile_error().into();
    }
    item
}
```

Such macros can check parameter counts, naming conventions, documentation presence, and more.
