## 📘 Section: Advanced Macro Design  
### 🔹 Category: Writing procedural macros with complex parsing  
#### ✅ Answer 811: Writing procedural macros with complex parsing

Below is an example of a procedural macro that parses multiple fields and generates getter functions for a struct. The macro uses the `syn` and `quote` crates for parsing and code generation.

```rust
// In Cargo.toml:
// syn = "2"
// quote = "1"
// proc-macro2 = "1"
// [lib]
// proc-macro = true

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(Getters)]
pub fn derive_getters(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    let fields = if let syn::Data::Struct(syn::DataStruct { fields: syn::Fields::Named(ref fields), .. }) = input.data {
        &fields.named
    } else {
        panic!("Only named fields supported");
    };
    let getters = fields.iter().map(|f| {
        let fname = &f.ident;
        let fty = &f.ty;
        quote! {
            pub fn #fname(&self) -> &#fty { &self.#fname }
        }
    });
    let expanded = quote! {
        impl #name {
            #(#getters)*
        }
    };
    TokenStream::from(expanded)
}
```

Usage:
```rust
#[derive(Getters)]
struct Person { name: String, age: u32 }
// Now person.name() and person.age() methods are auto-generated.
```
