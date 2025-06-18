## 📘 Section: Advanced Macro Design  
### 🔹 Category: Creating attribute macros for domain-specific use cases  
#### ✅ Answer 812: Creating attribute macros for domain-specific use cases

Below is an example of a domain-specific attribute macro that wraps a function with a timer. This macro measures and prints the function's execution time.

```rust
// In Cargo.toml:
// syn = "2"
// quote = "1"
// proc-macro2 = "1"
// [lib]
// proc-macro = true

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemFn};

#[proc_macro_attribute]
pub fn timed(_attr: TokenStream, item: TokenStream) -> TokenStream {
    let input = parse_macro_input!(item as ItemFn);
    let name = &input.sig.ident;
    let block = &input.block;
    let vis = &input.vis;
    let sig = &input.sig;
    let gen = quote! {
        #vis #sig {
            let start = std::time::Instant::now();
            let result = (|| #block )();
            println!("Function {} took: {:?}", stringify!(#name), start.elapsed());
            result
        }
    };
    gen.into()
}
```

Usage:
```rust
#[timed]
fn my_func() {
    // ...
}
// When my_func() is called, its execution time is printed.
```
