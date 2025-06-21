## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: quote ile Kod Üretimi  
#### ✅ Cevap 613: `quote` crate ile kod üretimi

`quote` crate, prosedürel makrolarda Rust kodunu token stream olarak üretmek için kullanılır. Aşağıda bir struct için trait implementasyonu üreten bir örnek verilmiştir:

```rust
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(HelloWorld)]
pub fn hello_world_derive(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    let expanded = quote! {
        impl #name {
            pub fn hello() {
                println!("Merhaba, dünya! Benim adım {}!", stringify!(#name));
            }
        }
    };
    expanded.into()
}
```

Bu makro, struct için bir hello fonksiyonu üreten bir implementasyon oluşturur. `quote!` makrosu kod üretimini kolay ve okunabilir hale getirir.
