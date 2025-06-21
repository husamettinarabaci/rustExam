## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Attribute Macros  
#### ✅ Answer 614: Attribute macros for custom annotations

Attribute macros allow you to add custom behavior to functions, structs, or modules. Here is an example of an attribute macro that prints a message before a function runs:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemFn};

#[proc_macro_attribute]
pub fn log_start(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = parse_macro_input!(item as ItemFn);
    let name = &input.sig.ident;
    let block = &input.block;
    let vis = &input.vis;
    let sig = &input.sig;
    let gen = quote! {
        #vis #sig {
            println!("Function {} is starting...", stringify!(#name));
            #block
        }
    };
    gen.into()
}
```

This macro can be used as `#[log_start]` above a function to print a message when the function is called.
