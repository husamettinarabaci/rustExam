## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: Kod Üretimi
#### ✅ Cevap 1266: DSL yapılarından Rust kodu üretme

Prosedürel makro ile DSL ayrıştırılıp Rust kodu üretilebilir. Örnek:

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

Bu makro, DSL ifadesi için derleme zamanında Rust kodu üretir.
