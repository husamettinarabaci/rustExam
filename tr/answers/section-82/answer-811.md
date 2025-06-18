## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Karmaşık ayrıştırmalı prosedürel makrolar yazma  
#### ✅ Cevap 811: Karmaşık ayrıştırmalı prosedürel makrolar yazma

Aşağıda, birden fazla alanı ayrıştıran ve bir struct için getter fonksiyonları üreten basit bir prosedürel makro örneği verilmiştir. Makro, `syn` ve `quote` crate'leri ile alanları ayrıştırır ve kod üretir.

```rust
// Cargo.toml'da dependencies:
// syn = "2"
// quote = "1"
// proc-macro2 = "1"
// [lib]
// proc-macro = true

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput};

#[proc_macro_derive(Getters)]
pub fn derive_getters(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let name = &input.ident;
    let fields = if let syn::Data::Struct(syn::DataStruct { fields: syn::Fields::Named(ref fields), .. }) = input.data {
        &fields.named
    } else {
        panic!("Only named fields supported");
    };
    let getters = fields.iter().map(|f| {
        let fname = &f.ident;
        let fty = &f.ty;
        quote! {
            pub fn #fname(&self) -> &#fty { &self.#fname }
        }
    });
    let expanded = quote! {
        impl #name {
            #(#getters)*
        }
    };
    TokenStream::from(expanded)
}
```

Kullanım:
```rust
#[derive(Getters)]
struct Person { name: String, age: u32 }
// Artık person.name() ve person.age() fonksiyonları otomatik gelir.
```
