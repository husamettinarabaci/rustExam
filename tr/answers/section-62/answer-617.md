## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Makro Hata Ayıklama  
#### ✅ Cevap 617: Genişletilmiş çıktıyla prosedürel makroları hata ayıklama

Prosedürel makroları hata ayıklamak için, üretilen kodu konsola yazdırabilir veya `cargo expand` gibi araçlarla makro genişlemesini inceleyebilirsiniz. Aşağıda, üretilen kodu yazdıran bir makro örneği verilmiştir:

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
                println!("Makro debug: {}", stringify!(#name));
            }
        }
    };
    eprintln!("Üretilen kod: {}", expanded);
    expanded.into()
}
```

Ayrıca, projenizdeki herhangi bir makro için genişletilmiş kodu görmek için `cargo expand` kullanabilirsiniz.
