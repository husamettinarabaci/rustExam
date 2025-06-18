## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Prosedürel ve deklaratif makroları etkin birleştirme  
#### ✅ Cevap 816: Prosedürel ve deklaratif makroları etkin birleştirme

Aşağıda, hem prosedürel hem de deklaratif makro kullanan bir örnek verilmiştir. Deklaratif makro ile kod üretilir, prosedürel makro ile ek işlevsellik eklenir.

```rust
// lib.rs
d#[macro_export]
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

Burada, `make_struct!` makrosu struct üretir, `Hello` prosedürel makrosu ise ek metot ekler.
