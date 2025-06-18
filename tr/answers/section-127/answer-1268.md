## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: DSL için Prosedürel Makrolar
#### ✅ Cevap 1268: DSL uygulaması için prosedürel makrolar kullanma

Prosedürel makrolar, girişi ayrıştırıp kod üreterek DSL uygulamak için kullanılabilir. Örnek:

```rust
// Proc-macro crate'inde:
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, Expr};

#[proc_macro]
pub fn dsl(input: TokenStream) -> TokenStream {
    let expr = parse_macro_input!(input as Expr);
    let expanded = quote! { #expr };
    TokenStream::from(expanded)
}
```

Kullanım:
```rust
let sonuc = dsl!(1 + 2 * 3);
```

Bu makro, DSL'yi derleme zamanında ayrıştırıp genişletir.
