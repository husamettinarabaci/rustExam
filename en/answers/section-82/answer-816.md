## 📘 Section: Advanced Macro Design  
### 🔹 Category: Combining procedural and declarative macros effectively  
#### ✅ Answer 816: Combining procedural and declarative macros effectively

Below is an example using both procedural and declarative macros. The declarative macro generates code, and the procedural macro adds extra functionality.

```rust
// lib.rs
#[macro_export]
macro_rules! make_struct {
    ($name:ident) => {
        #[derive(Debug, Hello)]
        pub struct $name;
    };
}

// Procedural macro crate:
// syn = "2", quote = "1", proc-macro2 = "1"
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(Hello)]
pub fn hello_derive(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    let expanded = quote! {
        impl #name {
            pub fn hello() {
                println!("Hello from {}!", stringify!(#name));
            }
        }
    };
    TokenStream::from(expanded)
}

// main.rs
make_struct!(MyType);
fn main() {
    MyType::hello();
}
```

Here, `make_struct!` generates the struct, and the `Hello` procedural macro adds a method.
