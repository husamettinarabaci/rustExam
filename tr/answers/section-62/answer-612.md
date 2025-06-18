## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: syn ve quote ile DSL sözdizimi ayrıştırma  
#### ✅ Cevap 612: syn ve quote ile DSL sözdizimi ayrıştırma

Bu soruda, `syn` ile DSL ifadesini ayrıştırıp, `quote` ile Rust kodu üretiyoruz. `syn::parse_str` ile DSL ifadesini parse ediyoruz, ardından `quote!` ile kod üretiyoruz. Gerçek bir DSL için daha gelişmiş bir parser gerekir, ancak bu örnek temel mantığı gösterir.

```rust
use syn::{parse_str, Expr};
use quote::quote;

fn main() {
    let dsl = "add(1, mul(2, 3))";
    let expr: Expr = parse_str(dsl).unwrap();
    let generated = quote! { #expr };
    println!("{}", generated);
}
```
