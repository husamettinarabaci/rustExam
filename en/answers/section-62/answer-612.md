## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Parsing Rust Syntax  
#### ✅ Answer 612: Parsing Rust syntax with `syn` crate

The `syn` crate is commonly used in procedural macros to parse Rust code into a syntax tree. Here, we create a derive macro that parses a struct and prints its name and fields at compile time.

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(PrintStructInfo)]
pub fn print_struct_info(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    if let syn::Data::Struct(data_struct) = &input.data {
        for field in &data_struct.fields {
            if let Some(ident) = &field.ident {
                println!("Field: {}", ident);
            }
        }
    }
    let expanded = quote! {
        // ...
    };
    expanded.into()
}
```

This macro uses `syn` to parse the struct and prints field names. In real macros, use `compile_error!` or generated code instead of `println!` for user feedback.
