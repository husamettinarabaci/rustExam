## 📘 Section: Procedural Macros and Code Generation
### 🔹 Category: Writing a basic derive macro
#### ✅ Answer 611: Writing a basic derive macro

A basic derive macro uses the `proc_macro` crate to generate code at compile time. Here, we define a `HelloMacro` trait and a custom derive macro that implements it for any struct.

```rust
// hello_macro_derive/src/lib.rs
use proc_macro::TokenStream;

#[proc_macro_derive(HelloMacro)]
pub fn hello_macro_derive(input: TokenStream) -> TokenStream {
    let name = syn::parse_macro_input!(input as syn::DeriveInput).ident;
    let expanded = quote::quote! {
        impl HelloMacro for #name {
            fn hello_macro() {
                println!("Hello, Macro!");
            }
        }
    };
    expanded.into()
}

// hello_macro/src/lib.rs
pub trait HelloMacro {
    fn hello_macro();
}

// main.rs
#[derive(HelloMacro)]
struct Pancakes;

fn main() {
    Pancakes::hello_macro();
}
```
