## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Özel Anotasyonlar için Attribute Makroları  
#### ✅ Cevap 614: Özel anotasyonlar için attribute makroları

Attribute makroları, fonksiyonlara, struct'lara veya modüllere özel davranışlar eklemenizi sağlar. Aşağıda, bir fonksiyon çalışmadan önce mesaj yazdıran bir attribute makro örneği verilmiştir:

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
            println!("Fonksiyon {} başlıyor...", stringify!(#name));
            #block
        }
    };
    gen.into()
}
```

Bu makro, bir fonksiyonun başında mesaj yazdırmak için `#[log_start]` olarak kullanılabilir.
