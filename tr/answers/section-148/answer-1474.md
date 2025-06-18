## 📘 Bölüm: Derleme Zamanı Yansıma ve İçgörü
### 🔹 Kategori: Derleme Zamanı Yansıma
#### ✅ Cevap 1474: AST manipülasyonu için `syn` ve `quote` kullanımı

Rust'ta procedural macro crate'lerinde `syn` ile kodun AST'si ayrıştırılır, `quote` ile yeni kod üretilir. Bu sayede örneğin bir struct'ın alanları üzerinde işlem yapılabilir.

```rust
// Procedural macro örneği
#[proc_macro_derive(PrintFields)]
fn print_fields(input: TokenStream) -> TokenStream {
    // syn ile input ayrıştırılır, quote ile kod üretilir
    // ...
}
```
