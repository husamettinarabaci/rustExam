## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi
### 🔹 Kategori: Temel bir derive makrosu yazma
#### ✅ Cevap 611: Temel bir derive makrosu yazma

Temel bir derive makrosu, `proc_macro` crate ile derleme zamanında kod üretir. Burada, `HelloMacro` trait'i ve bunu struct'lar için uygulayan bir derive makrosu tanımlanır.

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
