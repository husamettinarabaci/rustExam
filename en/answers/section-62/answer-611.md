## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Derive Macros  
#### ✅ Answer 611: Writing a basic derive macro

This example shows how to create a `Hello` trait and a derive macro that automatically implements it for a struct. The macro is written using the `syn` and `quote` crates.

```rust
// hello_derive/src/lib.rs
use proc_macro::TokenStream;
use quote::quote;
use syn;

#[proc_macro_derive(Hello)]
pub fn hello_derive(input: TokenStream) -> TokenStream {
    let ast = syn::parse(input).unwrap();
    impl_hello(&ast)
}

fn impl_hello(ast: &syn::DeriveInput) -> TokenStream {
    let name = &ast.ident;
    let gen = quote! {
        impl Hello for #name {
            fn hello(&self) {
                println!("Hello, I am a {}!", stringify!(#name));
            }
        }
    };
    gen.into()
}
```

Usage:

```rust
// main.rs
use hello_derive::Hello;

trait Hello {
    fn hello(&self);
}

#[derive(Hello)]
struct MyStruct;

fn main() {
    MyStruct.hello();
}
```
The macro automatically implements the `Hello` trait for the struct and adds the `hello` method.
