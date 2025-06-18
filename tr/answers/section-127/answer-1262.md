## 📘 Bölüm: Gömülü Alan-Özel Diller (DSL)
### 🔹 Kategori: DSL Sözdizimi Ayrıştırma
#### ✅ Cevap 1262: `syn` ve `quote` ile DSL sözdizimi ayrıştırma

Prosedürel makrolar, `syn` ile özel DSL sözdizimini ayrıştırıp `quote` ile kod üretebilir. Aşağıda aritmetik ifadeler için minimal bir örnek verilmiştir:

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

Ana crate'te kullanım:
```rust
dsl!(1 + 2 * 3)
```

Bu makro, girişi ayrıştırır ve bir Rust ifadesi olarak genişletir.
