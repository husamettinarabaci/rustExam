## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Derive Macros  
#### ✅ Answer 207: Implementing a custom derive macro

Custom derive macros generate code for structs or enums. They are implemented using the `syn` and `quote` crates in a procedural macro crate.

```rust
// In your procedural macro crate:
use proc_macro::TokenStream;
use quote::quote;
use syn;

#[proc_macro_derive(MyTrait)]
pub fn my_trait_derive(input: TokenStream) -> TokenStream {
    let _ast = syn::parse(input).unwrap();
    let gen = quote! {
        fn my_trait_method() {
            println!("Derived method");
        }
    };
    gen.into()
}
```
