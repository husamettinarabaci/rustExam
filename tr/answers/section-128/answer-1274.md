## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Kod Üretimi için Prosedürel Makrolar
#### ✅ Cevap 1274: Kod üretimi için prosedürel makrolar

Prosedürel makrolar girdiden kod üretebilir. Örnek:

```rust
// Proc-macro crate'inde:
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemStruct};

#[proc_macro]
pub fn struct_olustur(input: TokenStream) -> TokenStream {
    let s = parse_macro_input!(input as ItemStruct);
    let expanded = quote! { #s };
    TokenStream::from(expanded)
}
```

Kullanım:
```rust
struct_olustur!(struct Kisi { ad: String, yas: u32 });
```

Bu makro, struct'ı derleme zamanında üretir.
