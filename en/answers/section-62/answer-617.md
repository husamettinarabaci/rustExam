## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Debugging Macros  
#### ✅ Answer 617: Debugging procedural macros with expanded output

To debug procedural macros, you can print the generated code to the console or use tools like `cargo expand` to inspect macro expansion. Here is an example macro that prints the generated code:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(DebugExpand)]
pub fn debug_expand(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    let expanded = quote! {
        impl #name {
            pub fn debug_macro() {
                println!("Debug macro for {}", stringify!(#name));
            }
        }
    };
    eprintln!("Generated code: {}", expanded);
    expanded.into()
}
```

You can also use `cargo expand` to see the expanded code for any macro in your project.
